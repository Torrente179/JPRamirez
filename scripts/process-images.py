"""Build the Depth image set.

1. Hero cutout: Vision mask -> decontaminated edges (remove the light haze halo),
   1px erode + soft feather, baked fades on the frame-cut left edge and bottom,
   cropped to the subject, saved as WebP with alpha.
2. Ambient lights: tiny pre-blurred WebPs. The browser upscales them with
   bilinear filtering, which reads as a soft light without any CSS blur filter.
"""
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

src_dir = Path(sys.argv[1])      # scratch hero dir (source.jpg, mask.png)
site = Path(sys.argv[2])         # repo root
extra = Path(sys.argv[3])        # scratch assets dir (project screenshots)

out_hero = site / "public/images/hero"
out_amb = site / "public/images/ambient"
out_proj = site / "public/images/projects"
for d in (out_hero, out_amb, out_proj):
    d.mkdir(parents=True, exist_ok=True)

# ---------- 1. hero cutout ----------
src = Image.open(src_dir / "source.jpg").convert("RGB")
mask = Image.open(src_dir / "mask.png").convert("L").resize(src.size, Image.LANCZOS)

C = np.asarray(src).astype(np.float32) / 255.0
a = np.asarray(mask).astype(np.float32) / 255.0

# tighten: 1px erode then a light feather so the edge is soft, not hard-cut
m_img = Image.fromarray((a * 255).astype(np.uint8))
m_img = m_img.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.1))
a = np.asarray(m_img).astype(np.float32) / 255.0

# local background estimate from pixels outside the subject (normalised blur)
bgw = (a < 0.02).astype(np.float32)
def blur(arr, r):
    im = Image.fromarray(np.clip(arr * 255, 0, 255).astype(np.uint8))
    return np.asarray(im.filter(ImageFilter.GaussianBlur(r))).astype(np.float32) / 255.0
den = blur(bgw, 40)[..., None] + 1e-4
num = np.stack([blur(C[..., i] * bgw, 40) for i in range(3)], axis=-1)
B = num / den

# decontaminate: F = (C - (1-a)B) / a on the soft edge only
ae = np.clip(a, 0.0, 1.0)[..., None]
edge = (ae > 0.02) & (ae < 0.98)
F = np.where(edge, (C - (1 - ae) * B) / np.maximum(ae, 0.08), C)
F = np.clip(F, 0, 1)
# pull the last bit of haze out of the outermost edge
F = np.where(edge, F * (0.82 + 0.18 * ae), F)

h, w = a.shape
yy, xx = np.mgrid[0:h, 0:w].astype(np.float32)

def smooth(t):
    t = np.clip(t, 0, 1)
    return t * t * (3 - 2 * t)

# the photo frame cuts the left shoulder/arm: fade the left 9% of width
left = smooth(xx / (w * 0.09))
# fade the bottom 14% so the cutout melts into the page
bottom = smooth((h - 1 - yy) / (h * 0.14))
alpha = a * left * bottom

rgba = np.dstack([F, alpha[..., None]])
rgba = (np.clip(rgba, 0, 1) * 255).astype(np.uint8)
cut = Image.fromarray(rgba, "RGBA")

bbox = cut.getbbox()
pad = 24
x0, y0 = max(bbox[0] - pad, 0), max(bbox[1] - pad, 0)
x1, y1 = min(bbox[2] + pad, w), h
cut = cut.crop((x0, y0, x1, y1))
cut.save(out_hero / "jp-depth.webp", "WEBP", quality=84, method=6)
print("hero", cut.size, (out_hero / "jp-depth.webp").stat().st_size)

# small preview on dark for review
prev = Image.new("RGBA", cut.size, (5, 7, 12, 255))
prev.alpha_composite(cut)
prev.convert("RGB").resize((cut.width // 3, cut.height // 3)).save(src_dir / "final-preview.jpg", quality=85)

# portrait (with background) for Open Graph / Person schema
og = src.copy()
og.thumbnail((1200, 2400))
og.save(out_hero / "jp-depth-portrait.jpg", "JPEG", quality=84, optimize=True, progressive=True)

# ---------- 2. ambient lights ----------
about = site / "public/images/about"
ambient_sources = {
    "hero": src_dir / "source.jpg",
    "clouds": about / "clouds.jpg",
    "motorcycle": about / "motorcycle.jpg",
    "sunset": about / "sunset.jpg",
    "hilltop": about / "hilltop.jpg",
    "giseugc": extra / "giseugc-home.jpg",
    "jptracker": extra / "jptracker-screen-time-dark.jpg",
    "budget": extra / "budget-icon.png",
}
for name, path in ambient_sources.items():
    im = Image.open(path).convert("RGB")
    im.thumbnail((40, 40))
    im = im.filter(ImageFilter.GaussianBlur(2.2))
    # saturate a touch so the light reads as colour, not grey
    hsv = np.asarray(im.convert("HSV")).astype(np.float32)
    hsv[..., 1] = np.clip(hsv[..., 1] * 1.35, 0, 255)
    im = Image.fromarray(hsv.astype(np.uint8), "HSV").convert("RGB")
    im.save(out_amb / f"{name}.webp", "WEBP", quality=70)
    print("ambient", name, im.size, (out_amb / f"{name}.webp").stat().st_size)

# ---------- 3. project media ----------
for name in ["giseugc-home.jpg", "jptracker-screen-time-dark.jpg", "jptracker-screen-invoices.jpg", "jptracker-screen-reports.jpg"]:
    im = Image.open(extra / name).convert("RGB")
    im.save(out_proj / name, "JPEG", quality=86, optimize=True, progressive=True)
    print("project", name, im.size)
icon = Image.open(extra / "budget-icon.png").convert("RGBA")
icon.save(out_proj / "budget-expense-icon.png", optimize=True)
print("icon", icon.size)
