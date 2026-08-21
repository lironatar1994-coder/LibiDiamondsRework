from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import sys

out = Path(sys.argv[1])
paths = [Path(p) for p in sys.argv[2:]]
thumb_w, thumb_h = 240, 320
cols = 5
rows = (len(paths) + cols - 1) // cols
sheet = Image.new("RGB", (cols * thumb_w, rows * (thumb_h + 32)), "#eeeeee")
draw = ImageDraw.Draw(sheet)
for i, path in enumerate(paths):
    im = Image.open(path).convert("RGB")
    im.thumbnail((thumb_w - 8, thumb_h - 8), Image.Resampling.LANCZOS)
    x = (i % cols) * thumb_w + (thumb_w - im.width) // 2
    y = (i // cols) * (thumb_h + 32) + (thumb_h - im.height) // 2
    sheet.paste(im, (x, y))
    draw.text(((i % cols) * thumb_w + 8, (i // cols) * (thumb_h + 32) + thumb_h + 6), f"{i+1:02d}", fill="black")
out.parent.mkdir(parents=True, exist_ok=True)
sheet.save(out, quality=90)
