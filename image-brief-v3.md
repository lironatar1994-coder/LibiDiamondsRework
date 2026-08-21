# ליבי דיאמונדס — Image Brief, addendum v3

Nine files the v3 homepage asks for that `image-brief.md` does not cover, plus one
change to two existing files. Naming grammar (§0), the two image classes (§2) and
the negative prompt from `image-brief.md` apply unchanged — read those first.

Two new folders join the vocabulary: `guide` and `why`.

---

## 1. Manifest

| # | File | Ratio | Min px | Class | Appears |
|---|---|---|---|---|---|
| 24 | `guide/carat-01.jpg` | 1:1 | 1100 × 1100 | B | מדריך, אריח משקל |
| 25 | `guide/colour-01.jpg` | 1:1 | 1100 × 1100 | B | מדריך, אריח צבע |
| 26 | `guide/clarity-01.jpg` | 1:1 | 1100 × 1100 | B | מדריך, אריח ניקיון |
| 27 | `guide/cut-01.jpg` | 1:1 | 1100 × 1100 | B | מדריך, אריח ליטוש |
| 28 | `why/source-01.jpg` | 1:1 | 900 × 900 | A | ההבדל של ליבי — ישר מהמקור |
| 29 | `why/certificate-01.jpg` | 1:1 | 900 × 900 | A | ההבדל של ליבי — תעודה לכל אבן |
| 30 | `why/guidance-01.jpg` | 1:1 | 900 × 900 | A | ההבדל של ליבי — ליווי אישי |
| 31 | `home/consult-01.jpg` | 16:10 | 1600 × 1000 | A | באנר "קשה לכם להחליט?" |
| — | `categories/natural-01.jpg` | 1:1 | — | A | **recrop** — see §5 |
| — | `categories/lab-01.jpg` | 1:1 | — | A | **recrop** — see §5 |

Eight new files. The guide four are the important ones: they replace CSS diagrams,
so they carry information, not atmosphere.

---

## 2. `guide/*` — the four education tiles

**Class B, 1:1, min 1100 × 1100. All four rendered at 158px wide on a phone.**

These four sit in a 2×2 grid, one beside the other, and each one has to teach a
single fact at thumbnail size. That constraint decides everything:

- **The comparison happens inside the frame.** A photo of one beautiful diamond
  teaches nothing about carat. Three stones in a row, ascending, teaches carat in
  one glance. Every frame is a comparison.
- **Four to five objects maximum.** At 158px, six stones become a texture.
- **Identical ground and light across all four**, or the grid reads as four
  unrelated stock photos instead of one system. Match `products/ring-01-front.jpg`.
- **Loose stones only, no settings.** A ring introduces metal, prongs and a band —
  three variables that have nothing to do with the fact being taught.
- **No text, no scale bars, no arrows, no letter labels.** The letters (D–K,
  VS2, Excellent) are live HTML over and under the image. Baked-in type breaks
  Hebrew layout and can never be corrected.
- The tile has a light `#F1F4F5` frame around it in the design, so a near-white
  ground makes the stone appear to float on the page.

### `guide/carat-01.jpg` — משקל

The fact: size steps up gradually, and the price step is much steeper than the
visual one. Four stones, evenly spaced, ascending left to right.

```
Clean catalogue photograph of four loose round brilliant cut diamonds of clearly
ascending sizes, resting directly on a seamless near-white surface in a single
straight row, evenly spaced, table facets facing up, photographed from directly
above. The smallest stone is at the left and the largest at the right, the size
progression clearly readable. No fabric, no folds, no visible backdrop seam.
Large broad diffused softbox from front and above with gentle fill from below,
even light across all four stones, one short soft contact shadow beneath each.
Focus stacked, every stone sharp. Square 1:1, the row filling about 80% of the
frame width, centred. Near-white, cool grey shadow, ivory white stone fire, no
colour cast. Clean catalogue product photography.
```

### `guide/colour-01.jpg` — צבע

The fact: the scale runs from colourless to a warm tint, and the steps are small.
The hardest of the four to shoot — the difference between adjacent grades is
genuinely subtle, and a frame that exaggerates it teaches a lie that costs the
client trust at the counter.

```
Clean catalogue photograph of five loose round brilliant cut diamonds of identical
size resting in a single straight row on a seamless near-white surface, table
facets facing up, photographed from directly above. The stones progress from
completely colourless at the left to a faint warm champagne tint at the right, the
gradation subtle and even. No fabric, no folds, no visible backdrop seam. Large
broad diffused softbox from front and above with gentle fill from below,
identical light on every stone, one short soft contact shadow beneath each. Focus
stacked, every stone sharp. Square 1:1, the row filling about 80% of the frame
width, centred. Near-white, cool grey shadow, ivory white and faint warm
champagne, no colour cast in the background. Clean catalogue product photography.
```

Reject if the warm end reads yellow or brown rather than faintly champagne, or if
the tint jumps rather than graduating.

### `guide/clarity-01.jpg` — ניקיון

The fact: inclusions exist and are tiny. One stone, filling the frame, shot close
enough that faint internal marks are visible without dominating.

```
Extreme macro catalogue photograph of a single loose round brilliant cut diamond
resting on a seamless near-white surface, table facet facing up, photographed
from directly above and filling most of a square frame. A few very small dark
internal inclusions are faintly visible inside the stone, sharp and legible but
subtle, with the facet structure clearly readable around them. No fabric, no
folds, no visible backdrop seam. Large broad diffused softbox from front and
above with gentle fill from below, even light, one short soft contact shadow
beneath. Focus stacked, the whole stone sharp. Square 1:1, stone filling about
75% of the frame width, centred. Near-white, cool grey shadow, ivory white stone
fire, no colour cast. Clean catalogue macro product photography.
```

Reject if the inclusions read as dirt on the surface, or as a large black feather —
this frame argues that inclusions are *small*, so a dramatic one contradicts the
copy (`VS2–SI1 · הפגמים קיימים בתעודה, לא במבט`).

### `guide/cut-01.jpg` — ליטוש

The fact: cut is what makes a stone come alive. The only frame of the four where
drama is correct, because brilliance is the subject.

```
Clean catalogue photograph of two loose round brilliant cut diamonds of identical
size side by side on a seamless near-white surface, table facets facing up,
photographed from directly above. The stone on the right returns bright white
light with a crisp symmetrical facet pattern and strong internal fire; the stone
on the left looks flat and glassy, returning noticeably less light, with a dull
grey centre. No fabric, no folds, no visible backdrop seam. Large broad diffused
softbox from front and above with gentle fill from below, identical light on both
stones, one short soft contact shadow beneath each. Focus stacked, both stones
sharp. Square 1:1, the pair filling about 75% of the frame width, centred.
Near-white, cool grey shadow, ivory white stone fire, no colour cast. Clean
catalogue product photography.
```

The two stones must be lit identically — the difference has to come from the
stones, not from the lighting, or the frame proves nothing.

---

## 3. `why/*` — ההבדל של ליבי

**Class A, 1:1, min 900 × 900.** Three small square frames beside three short
claims, rendered at roughly 120px.

Currently the section runs on line icons, and icons are the safer choice at that
size: a photograph shrunk to 120px loses its subject. Commission these only if the
section grows to full-width tiles. If it stays as an icon row, skip §3 entirely —
that is a legitimate outcome, not a gap.

If commissioned, all three are on the Class A deep teal silk, single key from the
upper right, and each frame contains **one object, centred, large**. No scenes.

### `why/source-01.jpg` — ישר מהמקור

```
Editorial macro photograph of a small folded white diamond parcel paper lying open
on deep teal-blue silk with three loose round brilliant diamonds resting on it,
centred in a square frame. Single soft key light from the upper right at 45
degrees, no fill light, deep shadow falloff to the lower left. Shallow depth of
field, sharp focus on the stones. Square 1:1, 100mm macro at f/2.8. Deep teal,
graphite, ivory white. Quiet restrained luxury still life.
```

### `why/certificate-01.jpg` — תעודה לכל אבן

Certificate stays blank or illegible. No invented grading numbers.

```
Editorial macro photograph of the corner of a plain folded grading document
resting on deep teal-blue silk with a single loose round brilliant diamond
standing on it, centred in a square frame. The document carries no readable text
of any kind. Single soft key light from the upper right at 45 degrees, no fill
light, deep shadow falloff to the lower left. Shallow depth of field, sharp focus
on the stone. Square 1:1, 100mm macro at f/2.8. Deep teal, graphite, ivory white,
soft paper white. Quiet restrained documentary luxury still life.
```

### `why/guidance-01.jpg` — ליווי אישי

```
Editorial macro photograph of a pair of fine steel diamond tweezers lying beside
an open jeweller's loupe on deep teal-blue silk, centred in a square frame with
generous empty space around them. Single soft key light from the upper right at
45 degrees, no fill light, deep shadow falloff to the lower left. Shallow depth
of field, sharp focus on the tweezer tips. Square 1:1, 100mm macro at f/2.8.
Deep teal, graphite, brushed steel. Quiet restrained documentary luxury still
life.
```

---

## 4. `home/consult-01.jpg` — the appointment band

**Class A, 16:10, min 1600 × 1000.** Sits directly above "קשה לכם להחליט?" with
two buttons under it. No type sits on the image, so the whole frame is usable.

The copy promises a table where three stones in your range come out and get
compared. The frame is that table before anyone sits down — the setup, not the
meeting. It is the closest the site comes to showing a place, and it has to do it
without a showroom, because the whole argument is that there isn't one.

Empty chair, no people. §9 of the main brief still holds.

```
Editorial still life photograph of a jeweller's consultation table photographed
from a low three-quarter angle: a small dark velvet tray holding three loose
round brilliant diamonds of different sizes, a pair of fine steel diamond
tweezers resting beside it, an open jeweller's loupe, and a closed plain notebook
at the edge of the frame. Deep teal-blue cloth covers the table, falling out of
focus into darkness behind. No people, no hands, no chairs, no room visible.
Single soft key light from the upper right at 45 degrees, no fill light, deep
shadow falloff to the lower left. Horizontal 16:10 composition, shallow depth of
field, sharp focus on the tray of stones, generous quiet space in the upper left.
Deep teal, graphite, brushed steel, ivory white stone fire. Quiet restrained
documentary luxury still life.
```

Reject if: a room, a wall, a window or a chair is readable; the tray looks like a
retail display case; more than one light source is visible; the cloth reads navy,
turquoise or brown.

---

## 4b. `home/measure-01.jpg` — the live-measure band

**Class C (worn), 4:3, min 1600 × 1200.** Heads the מדידה חיה section, with two lines
of live HTML type over it: the gold kicker "בלעדי ב־Libi Diamonds" and the 24px
headline "מדידה חיה", both set in the **upper-left third** of the frame.

That type placement is the whole constraint. The frame is read right-to-left, so
the hand enters from the right and the empty space sits left:

| Zone | Content |
|---|---|
| Right 55% | **The subject.** One hand, ring on it, cropped tight. |
| Upper-left 45% | Empty, quiet, out-of-focus mid-tone. No detail, no highlight. |
| Lower-left | May carry soft falloff; nothing legible. |

This file is the same exception §10 of `image-brief.md` describes for
`editorial/fitting-01.jpg`: it shows a hand, so **it must be a real photograph, not
a generation.** Generated hands fail visibly — wrong knuckles, a fused finger, six
nails — and this band's entire claim is that the measurement is honest. If it must
be generated for the mock, treat it as placeholder only and reshoot before launch.

Ground and light stay ours: the Class A deep teal falling out of focus behind, one
soft key from the upper right, no fill.

```
Editorial photograph of a woman's hand seen from the side at a slight angle,
cropped tight so only the fingers and part of the back of the hand are visible,
entering the frame from the right side. A single solitaire diamond engagement
ring in white gold sits on the ring finger, sharp and clearly legible, the round
brilliant stone catching one concentrated cluster of white fire. The entire
upper-left area of the frame is empty deep teal-blue background falling softly
out of focus, an even mid-tone with no detail and no highlights. Single soft key
light from the upper right at 45 degrees, no fill light, deep shadow falloff to
the lower left. Horizontal 4:3 composition, shallow depth of field, sharp focus
on the ring. Deep teal, graphite, ivory white, faint champagne. Natural bare
skin, no manicure styling, no nail polish, no additional jewellery, no props,
no face, no arm, no text. Quiet restrained luxury photography.
```

Negative prompt: use §2 of `image-brief.md` but drop `no hands, no fingers,
no fingernails, no skin`. Keep every other exclusion, especially `no text`,
`no logo` and `no watermark` — the type is HTML and must never be baked in.

Reject if: the upper-left third carries any detail or highlight that competes with
the two lines of type; the hand reads as a beauty portrait rather than a cropped
detail; fingers, knuckles or nails look anatomically wrong at full size; the
background reads navy, turquoise or grey-brown.

---

## 5. `categories/natural-01.jpg` and `categories/lab-01.jpg` — recrop

Both files are already 1:1 and both prompts stand. What changed is where they run.
On v3 they appear twice: once as 132px square tiles in the category carousel, and
once as **58 × 58px thumbnails** in the חיפוש מהיר origin pair.

At 58px, `natural-01`'s loose triangle of three stones reads as a grey smudge and
the two frames become hard to tell apart — which defeats the one job of that pair,
letting someone pick an origin at a glance.

Two ways out, in order of preference:

1. **Deliver a tight square crop of each as part of the same file** — subject
   filling roughly 85% of the frame instead of sitting in a composition. Same
   shoot, same surface, same light; just a second export. The stone shapes (round
   versus emerald cut) are what distinguishes them, so the crop has to make the
   outline unmistakable.
2. Grow the thumbnails in the design to 80px and accept the current crops.

Either is fine. What does not work is leaving atmospheric compositions at 58px.

---

## 6. What is deliberately still absent

No showroom interior, no craftsman-at-a-bench, no couple, no proposal frame. The
UGC grid on v3 (`social/ugc-01…06.jpg`) is the one place people appear, and those
must be real client photographs — a generated or stock UGC grid is recognisable
immediately and costs more trust than the grid earns.
