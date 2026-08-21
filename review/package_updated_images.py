from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(r"C:\Users\User\Desktop\Liron\Work\LibiDiamonds website design")
OUT = ROOT / "uploads" / "final-images-v2"

FILES = {
    "hero-01.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-b0b94ca7-793a-4ffc-9a34-b10217efde14.png", (1200, 1600)),
    "engagement-01.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-294bc2c7-f38f-4997-8ace-1acc064115a6.png", (1400, 933)),
    "bands-01.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-36bc0f61-a350-4108-acca-39bbdfb6f640.png", (1000, 1250)),
    "tennis-01.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-87215f68-73b2-4c3f-9875-1868df3cf378.png", (1000, 1250)),
    "earrings-01.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-f820853e-0218-4a80-81f6-e7188859a38f.png", (1000, 1250)),
    "pendants-01.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-4c88bc83-069b-4709-9ce8-9ef1b535a33c.png", (1000, 1250)),
    "natural-01.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-fce7d4ff-bc40-4ed3-a017-50d0ae190689.png", (1100, 1100)),
    "lab-01.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-b0aa271a-d1e8-47de-b2c5-66ae550de0d3.png", (1100, 1100)),
    "story-01.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-7558d329-3f62-4dc0-a66d-825b569b913c.png", (1400, 788)),
    "ring-01-front.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-f6eac961-c7a4-434f-a787-0b9f861c28cf.png", (1100, 1100)),
    "ring-01-profile.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-302c0c9b-4bd8-4f55-b19f-76b9b27cdaac.png", (1100, 1100)),
    "ring-01-top.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-714adc84-dd61-41b8-b2f1-4366307996f0.png", (1100, 1100)),
    "ring-01-scale.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-2eecfa16-e59b-492b-beb1-9d429c98da99.png", (1100, 1100)),
    "ring-01-cert.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-5fb4d409-8c29-4bce-8ebf-f4000d24f374.png", (600, 800)),
    "tennis-01-front.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-ae57601c-b844-443a-830e-dedb17311324.png", (1100, 1100)),
    "studs-01-front.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-46d22007-7bf6-4feb-bb42-c67104f1085a.png", (1100, 1100)),
    "pendant-01-front.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-24ccafc6-20fd-4221-9dec-ea8bd83f8efc.png", (1100, 1100)),
    "ring-02-front.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-2f461719-85db-4fe6-acfe-9183a4bf5d0b.png", (1100, 1100)),
    "ring-03-front.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-f14c178c-a55a-476d-972a-49e446c499b6.png", (1100, 1100)),
    "ring-04-front.jpg": (r"C:\Users\User\.codex\generated_images\01a010ff-3bfb-7720-9056-112e6fac338b\exec-170f7639-7671-435f-867e-66a9101b3cf1.png", (1100, 1100)),
}

OUT.mkdir(parents=True, exist_ok=True)
for name, (source, size) in FILES.items():
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image = ImageOps.fit(image, size, method=Image.Resampling.LANCZOS, centering=(0.5, 0.5))
        image.save(OUT / name, "JPEG", quality=82, optimize=True, progressive=True)
        print(f"{name}\t{image.width}x{image.height}")
