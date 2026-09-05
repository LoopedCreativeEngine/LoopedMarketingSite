# Looped marketing site — visual reconstruction spec (Claude Design system)

**Status:** reconstruction target for `review/homepage-claude-design-2026-09-05`.
**Authority:** the founder's approved Claude Design artefact (the homepage shown in the founder
screenshot, 2026-09-05). The earlier baseline `feature/website-endgame-content@5ca71de` is **not** the
approved design and is no longer used.

## Evidence statement — read this first

Two sources were reachable from the build host:

1. **The founder's "Looped ribbon hero animation" artefact** (claude.ai/code artifact
   `88fbfa1c…`, published 4 Aug 2026) — the Emap August deck built in the approved design language.
   Its bundle was unpacked and yields, verbatim: the ribbon Loop's canvas code, the three typefaces,
   the full palette, the gradient stops and direction, the kicker treatment, the card geometry, the
   light and dark plate colours. Everything marked **RECOVERED** below is taken from it.
2. **The founder's written description of the approved homepage** (2026-09-05): near-white page,
   large dark serif hero, second line in the pink → purple → orange gradient, the animated gradient
   Loop oversized and partially cropped on the right, clean light navigation, small purple-dot kicker
   "FOR CONFERENCE AND AWARDS TEAMS", gradient rounded CTA, generous whitespace. Everything marked
   **RECONSTRUCTED** is built from that description using the recovered tokens.

**The founder screenshot itself and the Claude Design file were not reachable from this host**, so
proportions — hero column width, Loop size and crop, nav height, section spacing — are
**NOT EVIDENCED** and must be checked side-by-side against the screenshot before this spec is
marked verified. `docs/design/screenshots/` holds the rebuild's desktop and mobile captures for that
comparison.

## 1. Surfaces and colour — RECOVERED

| Token | Value | Use |
|---|---|---|
| `--paper` | `#FFFFFF` | page base |
| `--stone` | `#FBFAF9` | alternate panel, cards |
| `--stone-deep` | `#F1EEEA` | insets, hover fills |
| `--hairline` | `#ECE9E4` | borders on light |
| `--night` | `#0B1020` | dark plate (sparingly) |
| `--night-raised` | `#151B31` | cards on night (reconstructed from the deck's dark cards) |
| `--purple` / `--pink` / `--orange` | `#7C3AED` / `#EC4899` / `#FB923C` | the gradient stops; the three dots |
| `--lavender` | `#A78BDB` | kicker and links on night |
| `--ink` / `--slate` / `--muted` | `#0F172A` / `#475569` / `#64748B` | headings / body / captions on light |
| `--snow` / `--mist` / `--mist-dim` | `#F8FAFC` / `#CBD5E1` / `#94A3B8` | text on night |

Gradient: `linear-gradient(100deg, #7C3AED, #EC4899, #FB923C)` (12 uses in the deck); the kicker dot
is `linear-gradient(#7C3AED, #EC4899)` at 9px. Card tints: `rgba(124,58,237,0.07)` / `rgba(236,72,153,0.07)`
at 160°.

## 2. Typography — RECOVERED faces, RECONSTRUCTED web scale

- Display: **Newsreader** 400 (italic for pull-quotes and the deck's sub-lines), tracking −0.02em,
  line-height 0.94–1.0. Deck scale 150px title / 92px section heads on a 1920 canvas → web
  `clamp(2.9rem, 6.6vw, 5.6rem)` hero, `clamp(2rem, 3.9vw, 3.4rem)` sections.
- Body: **Hanken Grotesk** 400/500/600/700, line-height 1.5.
- Labels: **JetBrains Mono**, uppercase, tracking 0.22em, beside the gradient dot; credibility line in
  mono at 0.78rem with tracking 0.06em and a purple / pink / orange dot each (deck title slide).

## 3. Layout — RECONSTRUCTED

Container 72rem; hero copy column 42rem; panels `py-20 sm:py-28`; header 4.5rem, transparent until
scrolled then `paper/85` blurred with a hairline. Nav: wordmark left, four quiet links centred, one
gradient pill right.

## 4. Components

- **Buttons** — RECONSTRUCTED from "gradient rounded CTA": gradient pill `rounded-full px-6 py-3
  text-sm font-semibold`, white text, pink/purple glow; secondary outline `rgba(15,23,42,0.18)`.
- **Cards** — RECOVERED: white, `border: 1px solid #ECE9E4`, radius 20px, padding 22–26px, a 12px
  accent dot above the title.
- **Kicker** — RECOVERED: 9px gradient dot + mono label.
- **Mark** — RECOVERED: a ring (30px, 3px stroke) beside a bold "Looped" (Hanken 700, −0.02em);
  gradient-stroked on light.
- **Media frames** carried from the previous build with the new tokens (schematic only).

## 5. The Loop — RECOVERED code, RECONSTRUCTED placement

`src/components/brand/Ribbon.tsx` is a line-for-line port of the deck's `Component` script:

- a closed loop of 220 segments, `x = cx + rx·cos u + ax·sin(2u + t) + bx·cos(3u − 0.6t)`,
  `y = cy + ry·sin u + ay·sin(3u − t) + by·cos(2u + 0.7t)` with `rx = 0.185w`, `ry = 0.30h`;
- stroke colour cycles purple → pink → orange → pink along the loop and rotates once per cycle;
  stroke width `max(9, 0.0135w)·(0.78 + 0.30·sin(u + t))`;
- drawn to an offscreen canvas, composited twice: blurred 26px at 42% (the glow) and sharp at 90%;
- a warm light pulse (`rgba(255,244,232)`, blur 7px, additive) travels the loop every 13 s;
- one wobble cycle = 22 s; frames capped at ~30/s; static single frame under reduced motion.

Placement (RECONSTRUCTED from "oversized, partially cropped, right side"): a 64rem × 52rem canvas
anchored at the right edge with 12vw cropped off; on small screens beneath the copy, cropped right.

## 6. Motion — RECONSTRUCTED

Hero elements rise 22px over 0.6s at 0.09s stagger; sections rise 16px over 0.55s once at 88% of
the viewport (GSAP); the ribbon runs continuously. No smooth-scroll library, no grain, no cursor.

## 7. What only the founder screenshot can settle — NOT EVIDENCED

1. The hero's exact proportions: headline size against the Loop, the Loop's size and crop.
2. Whether the nav carries one CTA or two, and the link set.
3. Section backgrounds beyond the hero (how many night plates the approved page has).
4. The credibility line's presence and treatment beneath the CTA.
5. Any product screenshot or illustration in the approved page.
