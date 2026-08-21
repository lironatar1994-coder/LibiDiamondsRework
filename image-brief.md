# ליבי דיאמונדס — Image Brief

Every image slot in the design, with the exact filename it must be saved under and
a full generation prompt. **20 files.** Nothing else is needed to ship.

The placeholder boxes in the design files are labelled with these filenames, so a
label on screen maps to exactly one entry below.

---

## 0. Naming convention

Every filename follows one grammar, no exceptions:

```
<folder>/<subject>-<nn>[-<view>].jpg
```

| Part | Rule | Values in use |
|---|---|---|
| `folder` | where it appears | `home` · `categories` · `products` |
| `subject` | what it is | `hero` `story` · `engagement` `bands` `tennis` `earrings` `pendants` `natural` `lab` · `ring` `studs` `pendant` |
| `nn` | two digits, always | `01`, `02`, `03`… |
| `view` | camera angle, products only | `front` `profile` `top` `scale` `box` |

Rules that make the set maintainable:

- **Two digits always.** `ring-01`, never `ring-1`. Sorting stays correct past ten.
- **Lowercase, hyphens only.** No spaces, no underscores, no Hebrew in filenames.
- **The view suffix is a closed vocabulary.** `front` `profile` `top` `scale` `box`.
  Never `-b`, `-c`, `-2`, `-alt`, `-final`, `-new`.
- **`nn` identifies a real item.** `ring-01` is one physical ring across every one
  of its frames. A different ring is `ring-02`, never `ring-01-v2`.
- **Category images have no view suffix** — one frame each, so none is needed.
- **Never rename a delivered file.** Add `ring-05`; don't renumber `ring-02`.

Adding a fifth angle to ring 01 later is `products/ring-01-detail.jpg`, and
`detail` joins the vocabulary above. That is the only way the list grows.

---

## 1. Master manifest

All 20 files. Generate in this order — the hero sets the look everything else matches.

| # | File | Ratio | Min px | Appears |
|---|---|---|---|---|
| 1 | `home/hero-01.jpg` | 3:4 | 1200 × 1600 | Homepage hero, headline sits on it |
| 2 | `categories/engagement-01.jpg` | 3:2 | 1400 × 933 | Homepage, full-bleed category tile |
| 3 | `categories/bands-01.jpg` | 4:5 | 1000 × 1250 | Homepage, 2-up grid |
| 4 | `categories/tennis-01.jpg` | 4:5 | 1000 × 1250 | Homepage, 2-up grid |
| 5 | `categories/earrings-01.jpg` | 4:5 | 1000 × 1250 | Homepage, 2-up grid |
| 6 | `categories/pendants-01.jpg` | 4:5 | 1000 × 1250 | Homepage, 2-up grid |
| 7 | `categories/natural-01.jpg` | 1:1 | 1100 × 1100 | Homepage, natural/lab pair (on ink) |
| 8 | `categories/lab-01.jpg` | 1:1 | 1100 × 1100 | Homepage, natural/lab pair (on cream) |
| 9 | `home/story-01.jpg` | 16:9 | 1400 × 788 | Homepage, above "בלי אולם תצוגה" |
| 10 | `products/ring-01-front.jpg` | 1:1 | 1100 × 1100 | **Homepage featured grid + product gallery frame 1** |
| 11 | `products/ring-01-profile.jpg` | 1:1 | 1100 × 1100 | Product gallery frame 2 |
| 12 | `products/ring-01-top.jpg` | 1:1 | 1100 × 1100 | Product gallery frame 3 |
| 13 | `products/ring-01-scale.jpg` | 1:1 | 1100 × 1100 | Product gallery frame 4 |
| 14 | `products/ring-01-box.jpg` | 1:1 | 1100 × 1100 | Product gallery frame 5 — closing frame |
| 15 | `products/tennis-01-front.jpg` | 1:1 | 1100 × 1100 | Homepage featured grid |
| 16 | `products/studs-01-front.jpg` | 1:1 | 1100 × 1100 | Homepage featured grid |
| 17 | `products/pendant-01-front.jpg` | 1:1 | 1100 × 1100 | Homepage featured grid |
| 18 | `products/ring-02-front.jpg` | 1:1 | 1100 × 1100 | Product page, "אבנים דומות במלאי" |
| 19 | `products/ring-03-front.jpg` | 1:1 | 1100 × 1100 | Product page, "אבנים דומות במלאי" |
| 20 | `products/ring-04-front.jpg` | 1:1 | 1100 × 1100 | Product page, "אבנים דומות במלאי" |

File 10 is used twice on purpose. One canonical front frame per item, reused
wherever that item appears. Never a second copy under a second name.

Everything in `products/` is **Class B** (near-white catalogue); everything else is
**Class A** (deep teal editorial). See §2 — the two use opposite light.

### What the configurator does *not* need

The product page lets the client switch origin (טבעי / מעבדה), carat, and ring
size. **None of those need their own photograph.** It is the same physical setting
in every case; only the stone data and price change. Do not generate six carat
variants or a separate lab version — that is 12 files of no value, and a
lab-versus-natural photo pair implies a visible difference that does not exist.

---

## 2. Two image classes

The site runs **two** image systems, and conflating them is the most common way a
jewellery site ends up looking either flat or unshoppable. The reference stores all
split them:

| Class | Files | Job | Ground |
|---|---|---|---|
| **A — Editorial** | 9 | Create desire. Hero, story, category tiles. | Deep teal silk |
| **B — Catalogue** | 11 | Enable judgement. Everything in `products/`. | Near-white |

Class A is where the brand colour lives, so the palette shows up automatically in
every atmospheric frame. Class B is near-white because a customer comparing two
rings needs the metal and the stone to read truthfully — on a dark coloured ground
they do not, and comparison is the whole job of a product frame. White-ground
catalogue photography is the retail standard for that reason, not for fashion.

**Class B files:** everything under `products/` — `ring-01-front`, `-profile`,
`-top`, `-scale`, `-box`, `ring-02-front`, `ring-03-front`, `ring-04-front`,
`tennis-01-front`, `studs-01-front`, `pendant-01-front`.
Every other file is Class A.

Within each class, consistency is absolute: same ground, same light, same treatment
in every frame. Blue Nile photographs its whole catalogue on one surface for exactly
this reason — recognition comes from repetition, not from clever single shots.

---

### Class A — Editorial (9 files)

**One surface.** Deep teal-blue silk with soft irregular folds — roughly `#17313A`,
falling to near-black in shadow. Desaturated and dark: closer to a bottle-glass teal
than to a bright navy or royal blue. Never brown, never black velvet, never a
saturated mid-blue.

**One light.** A single soft key from the upper right, roughly 45°, close to the
subject. Deep falloff into the lower left. No fill, no ring light, no second source.
The metal takes one long specular highlight; the stones throw one concentrated
cluster of fire rather than glitter everywhere.

**One palette.** Deep teal, graphite, ivory-white stone fire, warm champagne in the
gold. The warm metal against the cool cloth is the whole colour idea — it is what a
stone looks like under grading light. No grading toward orange, no bright or royal
blue, no purple cast.

Then per frame: shallow depth of field (100mm macro at f/2.8), sharp focus on the
stone, everything behind falling away.

### Class B — Catalogue (11 files)

**One ground.** Seamless near-white, very slightly cool — roughly `#F7F8F8`. No
fabric, no folds, no texture, no visible horizon or backdrop seam. The piece appears
to float on the page, because the site's paper is the same near-white.

**One light.** Large, broad, diffused — a softbox front-and-above with gentle fill
from below. Even across the whole piece. **No dramatic falloff and no deep shadow:**
one soft contact shadow directly beneath the piece, short and light. This is the
opposite of the Class A light, deliberately.

**Everything sharp.** Focus stacked, f/8–f/11 equivalent — the band, the setting and
the stone all crisp. Shallow depth of field is an editorial device; a customer
inspecting a piece needs all of it legible.

**One scale.** The piece fills roughly 70% of the frame width, centred, consistent
across all eleven files, so two products can be compared without the photography
lying about relative size.

**One palette.** Near-white, cool grey shadow, ivory-white stone fire, true metal
colour. No colour cast of any kind — a cast on a white ground is immediately visible
and makes the metal read wrong.

### Negative prompt — append to every single generation

```
no people, no person, no hands, no fingers, no fingernails, no skin, no arms,
no neck, no ears, no face, no body, no model, no mannequin, no bust, no display
head, no text, no letters, no numbers, no logo, no watermark, no signature,
no price tag, no packaging box, no gift box, no ribbon, no flowers, no petals,
no glitter dust, no bokeh light balls, no lens flare, no rainbow prism effects,
no purple tint, no pink tint, no HDR, no oversaturation, no plastic-looking
metal, no CGI render look, no fisheye, no tilt-shift, no border, no frame,
no collage, no split screen
```

### Technical, all files

sRGB. JPEG quality 82 for the source. Export AVIF + WebP at 1×/2×/3× of the
displayed box. Cap the longest edge at 1600px — a luxury site that loads slowly
stops feeling luxury. Never bake text into an image.

---

## 3. `home/hero-01.jpg` — the hero

**3:4 portrait, min 1200 × 1600.** The most important file in the set. Generate 20
candidates and keep one.

### The constraint that decides everything

The headline sits **on** this image. The bottom of the frame carries a dark
gradient and three lines of large Hebrew type (יהלום, בלי כל מה שסביבו) plus a
kicker and a hairline rule.

| Zone | Height | Content |
|---|---|---|
| Top | 0–45% | Near-empty. Dark silk falling into shadow. |
| Middle | 45–70% | **The subject.** One ring, slightly right of centre. |
| Bottom | 70–100% | Empty dark cloth. No detail, no highlight, no stone. |

A stone in the bottom third gets covered by the headline and the shot is unusable.
An evenly busy frame gives the type nothing to sit on. **Empty bottom third is a
hard requirement.**

Subject sits right of centre because Hebrew reads right-to-left: the eye enters
top right, finds the stone, drops to the headline.

### Why one ring, not a group

Every competitor opens with abundance — a tray of rings, a spread of shapes, a
model. Abundance is how a mass retailer signals selection. A single object in a
large dark frame is how a jeweller signals confidence, and it is the cheaper claim
to make honestly when the whole argument is that nothing is padded.

### Prompt

```
Editorial macro photograph of a single solitaire diamond engagement ring in
white gold, standing upright on deep teal-blue silk fabric with soft irregular
folds. The ring is positioned in the middle-upper area of a vertical portrait
frame, slightly right of centre. The entire bottom third of the frame is empty
deep teal silk falling into deep shadow, with no detail and no highlights.
Single soft key light from the upper right at 45 degrees, no fill light, deep
shadow falloff to the lower left. The round brilliant diamond catches one
concentrated cluster of white fire; the white gold band shows one long soft
specular highlight. Shallow depth of field, sharp focus on the stone, background
folds falling out of focus. Cool palette: deep teal, graphite,
ivory white, faint champagne reflection. Dark, quiet, restrained,
luxury still life. Vertical 3:4 composition. Shot on a 100mm macro lens at f/2.8.
```

### Rejecting candidates

Reject if: the bottom third has any visible highlight or fold detail; the stone
reads grey or glassy rather than white and alive; the metal looks like chrome or
plastic; more than one light source is visible; the silk reads brown, royal blue, or
bright turquoise; the ring is dead-centre rather than slightly right.

---

## 4. Category images

`engagement-01` is full-bleed with its label over the image — same overlay logic
as the hero, so **keep its bottom 30% quiet.** The other six are inset with labels
underneath and can fill the frame edge to edge.

### `categories/engagement-01.jpg` — 3:2, min 1400 × 933

Wider and calmer than the hero, and it must not repeat it — a different angle on
the same world.

```
Editorial macro photograph of three white gold diamond engagement rings lying
on their sides on deep teal-blue silk, arranged in a loose diagonal line running
from lower right to upper left, spaced apart with silk visible between them.
Only the ring nearest the camera is in sharp focus; the other two fall softly
out of focus. The bottom third of the frame is quiet dark silk with no detail.
Single soft key light from the upper right, no fill, deep shadow to the lower
left. Horizontal 3:2 composition, shallow depth of field, 100mm macro at f/2.8.
Deep teal, graphite, ivory, faint champagne. Restrained luxury still life.
```

### `categories/bands-01.jpg` — 4:5, min 1000 × 1250

```
Editorial macro photograph of two slim diamond eternity wedding bands in white
gold, resting one leaning against the other on deep teal-blue silk, filling the
centre of a vertical frame. Pave-set round diamonds run the full circumference,
catching one concentrated cluster of white fire. Single soft key light from the
upper right, no fill light, deep shadow falloff. Vertical 4:5 composition,
shallow depth of field, 100mm macro at f/2.8. Deep teal, graphite, ivory,
faint champagne. Quiet restrained luxury still life.
```

### `categories/tennis-01.jpg` — 4:5, min 1000 × 1250

```
Editorial macro photograph of a diamond tennis bracelet in white gold, curved in
a loose S-curve across deep teal-blue silk, running from the upper right of the
vertical frame to the lower left. The nearest links are in sharp focus; the far
end of the bracelet falls out of focus. Each round diamond catches a small point
of white fire in sequence along the line. Single soft key light from the upper
right, no fill, deep shadow falloff. Vertical 4:5, shallow depth of field,
100mm macro at f/2.8. Deep teal, graphite, ivory. Restrained luxury still life.
```

### `categories/earrings-01.jpg` — 4:5, min 1000 × 1250

No ears, no ear shapes, no display stands.

```
Editorial macro photograph of a pair of round solitaire diamond stud earrings in
white gold, lying flat and close together on deep teal-blue silk in the centre of
a vertical frame, posts visible, slightly angled toward each other. Both stones
catch one tight cluster of white fire. Single soft key light from the upper
right, no fill light, deep shadow falloff to the lower left. Vertical 4:5,
shallow depth of field, 100mm macro at f/2.8. Deep teal, graphite, ivory.
Quiet restrained luxury still life.
```

### `categories/pendants-01.jpg` — 4:5, min 1000 × 1250

```
Editorial macro photograph of a single solitaire diamond pendant on a fine white
gold chain, the pendant resting in the lower centre of a vertical frame with the
chain trailing loosely upward and out of focus behind it on deep teal-blue silk.
The stone catches one concentrated cluster of white fire. Single soft key light
from the upper right, no fill, deep shadow falloff. Vertical 4:5, shallow depth
of field, 100mm macro at f/2.8. Deep teal, graphite, ivory. Restrained luxury
still life.
```

### `categories/natural-01.jpg` — 1:1, min 1100 × 1100

Sits on ink. Loose stones only, no settings — the stone itself as subject.

```
Editorial macro photograph of three loose round brilliant cut diamonds of
different sizes resting directly on deep teal-blue silk, arranged in a loose
triangle in a square frame, table facets facing up. The largest stone is in
sharp focus, the other two soften. Single soft key light from the upper right,
no fill, deep shadow falloff to the lower left, strong internal white fire and
visible facet structure. Square 1:1, shallow depth of field, 100mm macro at
f/2.8. Deep teal, graphite, ivory white. Quiet restrained luxury still life.
```

### `categories/lab-01.jpg` — 1:1, min 1100 × 1100

Sits on cream, directly beside `natural-01`. It must **not** look cheaper or
cooler — any visual hierarchy between the two contradicts the copy
("אותה אבן, מחיר אחר"). Same surface, same light, same stone quality; only the
arrangement differs.

```
Editorial macro photograph of two loose emerald cut diamonds resting side by side
on deep teal-blue silk, filling the centre of a square frame, table facets facing
up, step facets clearly visible. Both stones in sharp focus, silk folds falling
away behind. Single soft key light from the upper right, no fill, deep shadow
falloff to the lower left, clean white internal reflections. Square 1:1, shallow
depth of field, 100mm macro at f/2.8. Deep teal, graphite, ivory white. Quiet
restrained luxury still life.
```

---

## 5. `home/story-01.jpg` — the story band

**16:9, min 1400 × 788.** Sits directly above "בלי אולם תצוגה. בלי עלויות מיותרות."

The only frame in the set that is not a finished piece. The copy argues the money
goes into the stone rather than the storefront, so the image shows the stone being
**judged**, not worn: tweezers, loupe, a grading document. It earns the claim
visually, and it turns certification — the one fully backable trust signal — into
an image.

Certificate stays blank or illegible. No invented GIA numbers.

```
Editorial overhead still life of a jeweller's grading bench on deep teal grey
silk: a pair of fine steel diamond tweezers holding a single round brilliant
diamond, a jeweller's loupe lying open beside it, and the corner of a plain
grading document visible at the edge of the frame with no readable text.
Arranged with generous empty space in a wide horizontal frame. Single soft key
light from the upper right, no fill light, deep shadow falloff to the lower
left. Horizontal 16:9, shallow depth of field, sharp focus on the held stone.
Deep teal, graphite, brushed steel, ivory white. Quiet restrained documentary
luxury still life.
```

---

## 6. Ring 01 — the four gallery frames

**Class B.** All 1:1, min 1100 × 1100. Five frames: four that let a buyer judge the
piece, then the box. Each answers one specific question.

Consistency note: the first four are the same physical ring. Scale, ground and light
must be identical across all four so the angles read as one object turning, not
four different rings.

### `products/ring-01-front.jpg` — the canonical frame

Also used in the homepage featured grid. Generate this one first: it fixes the
ground, light and scale that the other ten Class B files must match.

```
Clean catalogue photograph of a single solitaire round brilliant diamond
engagement ring in white gold, standing upright and centred, photographed straight
on. Six-prong setting clearly visible.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

### `products/ring-01-profile.jpg` — how high it sits

Answers "how much does it stick up." Strictly side-on, at stone level.

```
Clean catalogue photograph of a solitaire diamond engagement ring in white gold
photographed from the side at stone level, centred. The full height of the setting
is visible in profile: the gallery under the stone, the prongs, and the band.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

### `products/ring-01-top.jpg` — the face of the stone

Answers "what does it look like on the hand," without a hand.

```
Clean catalogue photograph of a solitaire round brilliant diamond engagement
ring in white gold photographed from directly above, lying flat and centred. The
table and crown facets are fully visible from above, showing the symmetrical facet
pattern and white internal fire.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

### `products/ring-01-scale.jpg` — how big it actually is

The most useful frame on the page and the one most stores omit. Carat weight means
nothing to most buyers. A coin is a universal reference and needs no model.
Israeli ₪1 coin: 18mm diameter.

```
Clean catalogue photograph of a solitaire diamond engagement ring in white gold
lying flat beside a plain small silver-coloured coin of similar size, both in the
same plane, centred together in the frame. The coin is plain and worn with no
readable markings.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

### `products/ring-01-box.jpg` — the piece in its box

**Class B, 1:1, min 1100 × 1100.** The last frame in the gallery, and the one that
answers "what actually arrives." The references all end their galleries this way:
after judgement comes anticipation, so the box is the closing frame, never the
opening one.

The box is the one place the brand's teal is allowed into a Class B frame — the box
itself is the object, so its colour is product, not backdrop. Ground and light stay
Class B: near-white, broad, even.

Keep it plain. No ribbon, no bow, no scattered petals, no gift styling — the whole
point is that the money went into the stone.

```
Clean catalogue photograph of an open square jewellery presentation box in deep
teal-blue, photographed slightly from above, centred, with a solitaire diamond
engagement ring in white gold seated upright in the slot inside. The box is plain
matte with no visible logo, lettering or ribbon, and the lid is open behind it.
Seamless near-white background, no visible backdrop seam. Large broad diffused
softbox from front and above with gentle fill, even across the whole subject, one
short soft contact shadow directly beneath the box. Everything sharp. Square 1:1,
box filling about 70% of the frame width. Near-white, deep teal, cool grey shadow,
ivory white stone fire, true metal colour. Clean catalogue product photography,
no gift styling.
```

For this frame only, drop `no packaging box, no gift box` from the negative prompt
in §2 — keep every other exclusion, especially `no ribbon`.

---

## 7. The remaining product frames

**Class B.** All 1:1, min 1100 × 1100. Same ground, light and scale as
`ring-01-front` — match it exactly.

### `products/tennis-01-front.jpg` — צמיד טניס יהלומי מעבדה

```
Clean catalogue photograph of a diamond tennis bracelet in white gold coiled in
a loose circle, centred. Round diamonds in a continuous line around the coil, the
links clearly legible.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

### `products/studs-01-front.jpg` — עגילי סוליטר צמודים

No ears, no ear shapes, no display stands.

```
Clean catalogue photograph of a pair of round solitaire diamond stud earrings
in white gold, angled slightly toward each other and centred together. Four-prong
settings and posts clearly visible.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

### `products/pendant-01-front.jpg` — תליון סוליטר, שרשרת עדינה

```
Clean catalogue photograph of a solitaire round brilliant diamond pendant in
white gold on a fine chain, the pendant centred with the chain looping loosely and
neatly behind it.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

### `products/ring-02-front.jpg` — סוליטר 0.91ct, זהב לבן

Must read as a visibly *different ring* from ring 01, not another angle on it.
Change the setting.

```
Clean catalogue photograph of a solitaire round brilliant diamond engagement
ring in white gold with a thin pave-set band, standing upright and centred,
photographed straight on. Four-prong setting, small diamonds along the shoulders
of the band.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

### `products/ring-03-front.jpg` — סוליטר אובל 1.20ct

Oval stone — the shape must read clearly, since it is the reason this card exists.

```
Clean catalogue photograph of a solitaire oval cut diamond engagement ring in
white gold, standing upright and centred with the long axis of the oval stone
vertical, photographed straight on. The elongated oval outline is clearly
readable, prongs at each end.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

### `products/ring-04-front.jpg` — סוליטר 1.05ct, זהב ורוד

Rose gold — the only warm metal in the set. Ground and light stay identical; the
metal is the only difference, and on a white ground its true colour is finally
legible.

```
Clean catalogue photograph of a solitaire round brilliant diamond engagement
ring in rose gold, standing upright and centred, photographed straight on.
Six-prong rose gold setting with a warm copper-pink sheen.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

---

## 8. Workflow

1. **`home/hero-01.jpg` first**, 20 candidates, judged against the zone map in §3.
   It fixes the surface and light the other 8 Class A frames must match.
2. **`products/ring-01-front.jpg` second.** It fixes the ground, light and scale
   every other Class B frame must match, and it appears in two places.
3. Reuse each accepted frame as the style reference for the rest of **its own
   class** — never across classes, or the two systems collapse into one.
4. Save under the exact path and filename from §1. The design placeholders carry
   these names on screen — match them character for character.
5. Check the hero on a phone at 393px: the headline must stay fully legible over
   the bottom third. If it doesn't, the shot is wrong. Do not fix it by darkening
   the gradient, which flattens the whole image.
6. Check `natural-01` and `lab-01` side by side at actual size. If one looks better
   than the other, reshoot the weaker one.

### Before generating a single frame

The four `ring-01-*` frames and the three related-stone frames sit next to a
specific certificate number, grading line, and price. A generated image is not
the item you will ship, and a client comparing the photo to the stone that
arrives will notice. Generation is right for the hero, the story band, and the
category tiles. For anything a client can enquire about by cert number, a phone
in a lightbox on the same deep teal silk beats any generation — and the surface
rule in §2 is what makes those phone shots sit convincingly beside the generated
ones.

## 9. Deliberately absent

No lifestyle frames, no hands, no styled tabletops with candles or stone slabs, no
workshop-with-craftsman shots. Partly the brief's constraint, partly where the
market has moved: over-produced lifestyle photography with loosely-related models
now converts worse than honest product photography. The restriction is an
advantage — it forces every frame onto the stone.


---

## 10. Added after the category-page review

Three files the design now asks for that the original 20 did not cover. The
manifest in §1 moves from 20 to 23. Naming grammar and class rules from §0 and §2
apply unchanged.

| # | File | Ratio | Min px | Appears |
|---|---|---|---|---|
| 21 | `products/ring-05-front.jpg` | 1:1 | 1100 × 1100 | Category page, סגנונות index — halo |
| 22 | `products/ring-06-front.jpg` | 1:1 | 1100 × 1100 | Category page, סגנונות index — three-stone |
| 23 | `editorial/fitting-01.jpg` | 1:1 | 1200 × 1200 | Category page, "אותה משבצת, אבן אחרת" band |

### Why 21 and 22 exist

The category page carries a **סגנונות** index whose entire job is teaching setting
vocabulary. The image is the content there — a mislabelled frame teaches a wrong
definition. The existing photography truthfully shows only two settings:
`ring-01-front` is a six-prong solitaire, `ring-02-front` is a solitaire on a
pave-set band. Halo and three-stone have no frame in the set, so the index ships
with two tiles until these two land, then grows to four.

### `products/ring-05-front.jpg` — halo

**Class B.** Match `ring-01-front` exactly for ground, light and scale. The halo
must be unmistakable at 180px wide — that is the size it renders at.

```
Clean catalogue photograph of a halo diamond engagement ring in white gold,
standing upright and centred, photographed straight on. A round brilliant centre
stone is fully encircled by one continuous ring of small round pave diamonds, the
halo clearly separated and legible against the centre stone. Plain slim band.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

### `products/ring-06-front.jpg` — three-stone

**Class B.** Same ground, light and scale. All three stones must read as three
separate stones, not a cluster.

```
Clean catalogue photograph of a three-stone diamond engagement ring in white gold,
standing upright and centred, photographed straight on. One larger round brilliant
centre stone with a single smaller round stone set close on each side, all three
clearly separate and individually legible, set in a row along the band.
Seamless near-white background, no fabric and no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below, even
across the whole piece, one short soft contact shadow directly beneath. Focus
stacked so the band, setting and stone are all sharp. Square 1:1, piece filling
about 70% of the frame width, centred. Near-white, cool grey shadow, ivory white
stone fire, true metal colour, no colour cast. Clean catalogue product
photography.
```

### `editorial/fitting-01.jpg` — the worn frame

**A new class. Read this before commissioning it.**

§9 rules out lifestyle frames and hands, and the negative prompt on all 20 original
files excludes skin, fingers and nails. This file breaks that rule deliberately,
at the client's request, for one placement: the band on the category page that
argues the setting stays and the stone changes.

Three conditions, or it costs more than it returns:

1. **A real photograph, not a generation.** Hands are where image generation fails
   most visibly, and this frame sits on a page full of certificate numbers. One
   bad hand undoes the trust the rest of the photography builds.
2. **The hand is not the subject.** Framed tight enough that it reads as a ring
   being worn, not as a portrait of a model. No manicure styling, no jewellery on
   other fingers, no props.
3. **If it works, it becomes a class, not an exception.** A single worn frame among
   twenty still lifes reads as a stock photo. Either commission three to four and
   document them as Class C here, or drop the idea and leave the band on teal.

Surface and light: keep it recognisably ours — the deep teal-blue of Class A as the
ground or backdrop, single soft key from the upper right, no fill. The warm metal
against the cool cloth is still the colour idea.

```
Editorial macro photograph of a single solitaire diamond engagement ring in white
gold worn on a hand, framed tight and cropped close so only part of the hand is
visible and the ring fills the centre of a square frame. Deep teal-blue silk
falling out of focus behind. Single soft key light from the upper right at 45
degrees, no fill light, deep shadow falloff. The round brilliant diamond catches
one concentrated cluster of white fire; the white gold shows one long soft
specular highlight. Shallow depth of field, sharp focus on the stone. Square 1:1,
100mm macro at f/2.8. Deep teal, graphite, ivory white, faint champagne. Quiet
restrained luxury still life. No manicure styling, no additional jewellery, no
props, no face, no arm, no full hand.
```

For this frame only, drop `no hands, no fingers, no fingernails, no skin` from the
negative prompt in §2. Every other exclusion stays.
