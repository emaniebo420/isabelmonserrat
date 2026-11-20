#!/usr/bin/env python3
"""Builds public/images/wm/: watermarked copies of every artwork in public/images (full size, capped at 1400px).

The site lays these over the visible painting at opacity 0 (see components/WorkImg.js), so visitors never see the
watermark while browsing, but right-click / long-press / drag / save gets the watermarked file.
Same method and look as the Ron Marinas site. Re-run after adding or replacing a painting:

    pip install pillow
    python3 scripts/make-watermarks.py
"""
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "images"
OUT = SRC / "wm"
TEXT = "© Isabel Monserrat"
SUBTEXT = "Boyong estuvo aquí"  # smaller second line under the main text (same as the Ron Marinas site)
OPACITY = 0.75
MAX_WIDTH = 1400
ANGLE = 28
FONT_CANDIDATES = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf",
    "/usr/share/fonts/dejavu/DejaVuSerif.ttf",
    "/Library/Fonts/Georgia.ttf",
    "C:/Windows/Fonts/georgia.ttf",
]


def load_font(size: int) -> ImageFont.FreeTypeFont:
    for path in FONT_CANDIDATES:
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    sys.exit("No serif font found; add a path to FONT_CANDIDATES.")


def tile_layer(size: tuple[int, int]) -> Image.Image:
    w, h = size
    font = load_font(max(20, int(w * 0.055)))
    alpha = int(255 * OPACITY)
    lines = [(TEXT, font)]
    if SUBTEXT:
        lines.append((SUBTEXT, load_font(max(12, int(w * 0.03)))))
    boxes = [f.getbbox(t) for t, f in lines]
    widths = [b[2] - b[0] for b in boxes]
    heights = [b[3] - b[1] for b in boxes]
    gap = int(heights[0] * 0.35)
    pad = 8
    mark = Image.new("RGBA", (max(widths) + pad * 2, sum(heights) + gap * (len(lines) - 1) + pad * 2), (0, 0, 0, 0))
    d = ImageDraw.Draw(mark)
    y0 = pad
    for (text, f), bb, tw in zip(lines, boxes, widths):
        x0 = pad + (mark.width - pad * 2 - tw) // 2
        d.text((x0 + 2, y0 + 2 - bb[1]), text, font=f, fill=(0, 0, 0, alpha))
        d.text((x0, y0 - bb[1]), text, font=f, fill=(255, 255, 255, alpha))
        y0 += bb[3] - bb[1] + gap
    mark = mark.rotate(ANGLE, expand=True, resample=Image.BICUBIC)
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    step_x, step_y = int(mark.width * 1.55), int(mark.height * 2.1)
    for row, y in enumerate(range(-mark.height, h + mark.height, step_y)):
        off = (row % 2) * (step_x // 2)
        for x in range(-mark.width + off, w + mark.width, step_x):
            layer.paste(mark, (x, y), mark)
    return layer


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for path in sorted(SRC.glob("art*.webp")):
        im = Image.open(path).convert("RGBA")
        if im.width > MAX_WIDTH:
            im = im.resize((MAX_WIDTH, round(im.height * MAX_WIDTH / im.width)), Image.LANCZOS)
        out = Image.alpha_composite(im, tile_layer(im.size)).convert("RGB")
        out.save(OUT / path.name, quality=80, method=6)
        print(f"{path.name}: {(OUT / path.name).stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
