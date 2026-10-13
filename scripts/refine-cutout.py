"""Refine the hero cutout's edge, especially the hair.

Inputs (one folder): source.jpg (the photo), person.png (Vision person
segmentation, scripts/person-matte.swift), mask.png (Vision foreground mask,
scripts/hero-cutout.swift).

1. Base alpha: the person matte (soft, follows hair), with the foreground mask
   eroded inside it so the body stays solid.
2. Edge band (14px out, 42px in): alpha re-estimated per pixel from local
   foreground and background colours. The sky is a smooth haze and the hair is
   dark, so this recovers individual strands as partial transparency.
3. Colour decontamination: edge pixels are un-mixed from the haze, and the
   faintest strands take the local hair colour, so no light fringe remains.
4. Baked fades on the frame-cut left arm and the bottom; crop; WebP with alpha.

Usage: python3 -I scripts/refine-cutout.py <folder> <out.webp>
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from scipy import ndimage

src_dir = Path(sys.argv[1])
out_path = Path(sys.argv[2])

src = Image.open(src_dir / "source.jpg").convert("RGB")
W, H = src.size
C = np.asarray(src).astype(np.float32) / 255.0
person = np.asarray(Image.open(src_dir / "person.png").convert("L").resize((W, H), Image.LANCZOS)).astype(np.float32) / 255.0
fg = np.asarray(Image.open(src_dir / "mask.png").convert("L").resize((W, H), Image.LANCZOS)).astype(np.float32) / 255.0

# 1. base alpha
solid = ndimage.binary_erosion(fg > 0.5, iterations=10)
a0 = np.maximum(person, solid.astype(np.float32))

inside = a0 > 0.5
d_in = ndimage.distance_transform_edt(inside)      # distance to edge, inside
d_out = ndimage.distance_transform_edt(~inside)    # distance to edge, outside
# outward only a little; inward far enough to catch sky seen through the hair
band = (d_in < 42) & (d_out < 14)

# 2. local colour estimates
def norm_blur(weights, sigma):
    den = ndimage.gaussian_filter(weights, sigma) + 1e-5
    return np.stack([ndimage.gaussian_filter(C[..., i] * weights, sigma) / den for i in range(3)], -1)

bg_w = ((a0 < 0.03) & (d_out > 6)).astype(np.float32)
B = norm_blur(bg_w, 22)
# sample the foreground colour only from pixels that are clearly not sky,
# otherwise backlit tufts read as "grey hair" and keep the haze in them
skyish = np.sqrt(np.sum((C - B) ** 2, -1)) < 0.16
lum = C @ np.array([0.299, 0.587, 0.114], np.float32)
mx, mn = C.max(-1), C.min(-1)
sat = (mx - mn) / np.maximum(mx, 1e-4)
# backlit hair picks up the grey haze: light and unsaturated. Skin stays
# saturated, real hair stays dark, so both remain valid samples.
haze_lit = (lum > 0.3) & (sat < 0.28)
fg_w = ((a0 > 0.97) & (d_in > 4) & ~skyish & ~haze_lit).astype(np.float32)
F = norm_blur(fg_w, 14)

FB = F - B
den = np.sum(FB * FB, -1)
alpha_c = np.clip(np.sum((C - B) * FB, -1) / np.maximum(den, 1e-4), 0, 1)
# trust the colour estimate only where foreground and background really differ
trust = np.clip((np.sqrt(den) - 0.12) / 0.2, 0, 1)

a = a0.copy()
a[band] = (trust * alpha_c + (1 - trust) * a0)[band]
# nothing outside the band, solid inside it
a[(~band) & (~inside)] = 0.0
a[(~band) & inside] = 1.0
# keep strands from reaching too far into the sky
reach = np.clip(1 - (d_out - 6) / 8, 0, 1)
a = np.minimum(a, np.where(inside, 1.0, reach))
a = ndimage.gaussian_filter(a, 0.55)
a = np.clip(a, 0, 1)

# 3. decontaminate edge colours
ae = a[..., None]
Fc = np.clip((C - (1 - ae) * B) / np.maximum(ae, 0.15), 0, 1)
t = np.clip((ae - 0.15) / 0.45, 0, 1)
t = t * t * (3 - 2 * t)
F_out = np.where(ae < 0.999, t * Fc + (1 - t) * F, C)

# 4. fades, crop, save
yy, xx = np.mgrid[0:H, 0:W].astype(np.float32)
def smooth(v):
    v = np.clip(v, 0, 1)
    return v * v * (3 - 2 * v)
alpha = a * smooth(xx / (W * 0.09)) * smooth((H - 1 - yy) / (H * 0.14))

rgba = (np.clip(np.dstack([F_out, alpha[..., None]]), 0, 1) * 255).astype(np.uint8)
cut = Image.fromarray(rgba, "RGBA")
bbox = cut.getbbox()
pad = 24
box = (max(bbox[0] - pad, 0), max(bbox[1] - pad, 0), min(bbox[2] + pad, W), H)
cut = cut.crop(box)
cut.save(out_path, "WEBP", quality=86, method=6, exact=True)
print("cutout", cut.size, out_path.stat().st_size, "bytes")

# review composites: dark page, the hero's warm light, and the white name
for name, colour in {"dark": (5, 7, 12), "warm": (88, 62, 54), "white": (232, 236, 244)}.items():
    bg = Image.new("RGBA", cut.size, colour + (255,))
    bg.alpha_composite(cut)
    bg.convert("RGB").crop((200, 0, 1150, 650)).save(src_dir / f"refined-{name}.jpg", quality=90)
