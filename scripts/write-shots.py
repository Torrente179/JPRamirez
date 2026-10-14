"""Write lib/data/qbank-shots.ts from the capture JSON files (member, then admin).

Usage: python3 -I scripts/write-shots.py <member-shots.json> [admin-shots.json]
The file is generated once per capture; edit the notes by hand afterwards.
The es strings start as copies of the English: translate them by hand.
"""
import json
import sys
from pathlib import Path

shots = []
for f in sys.argv[1:]:
    shots += json.loads(Path(f).read_text())

def q(s):
    return json.dumps(s, ensure_ascii=False)

def t(s):
    """both languages; the Spanish is a copy to translate"""
    return f"{{ en: {q(s)}, es: {q(s)} }}"

lines = [
    'import type { Text } from "@/lib/i18n";',
    'import type { GalleryShot } from "@/lib/data/projects";',
    "",
    "// Screens from the QBank plugin's browser fixture (member app, sample questions)",
    "// and the live admin with every student detail blurred into the image.",
    "// Note boxes are in percent of the image. Regenerate with scripts/write-shots.py,",
    "// then translate the es strings by hand.",
    "export const qbankShots: GalleryShot<Text>[] = [",
]
for s in shots:
    lines += [
        "  {",
        f"    src: {q(s['src'])},",
        f"    alt: {t(s['alt'])},",
        f"    caption: {t(s['caption'])},",
        f"    group: {t(s['group'])},",
        f"    width: {s['width']},",
        f"    height: {s['height']},",
        "    notes: [",
    ]
    for n in s["notes"]:
        lines.append(f"      {{ x: {n['x']}, y: {n['y']}, w: {n['w']}, h: {n['h']}, text: {t(n['text'])} }},")
    lines += ["    ],", "  },"]
lines += ["];", ""]
out = Path(__file__).resolve().parent.parent / "lib/data/qbank-shots.ts"
out.write_text("\n".join(lines))
print("wrote", out, len(shots), "shots")
