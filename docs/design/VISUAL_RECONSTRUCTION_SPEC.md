# Looped marketing site — visual reconstruction spec

**Status:** reconstruction target for `review/homepage-recording-fidelity-2026-09-05`.
**Authority:** the founder's screen recording `Recording 2026-08-27 230704.mp4` is the locked visual
specification of the Looped brand.

## Evidence statement — read this first

The recording itself is **not reachable from the build host**: it is not on the machine, not in the
founder's Google Drive (searched by name and by video MIME type on 2026-09-05), and not in any branch,
stash or worktree of the two Looped repositories. **No frame of the recording has been inspected.**

What *is* recoverable is the code that rendered the site two days before the recording was made:
`origin/feature/website-endgame-content` at `5ca71de` (25 Aug 2026, "add ICO registration number to
the site footer"), the last commit on the branch the founder describes as the approved website. Every
value below is **measured from that source**, not from the recording. Where the recording would be the
only evidence (Loop animation timing, scroll feel, the exact hero art) the entry says so.

Evidence labels used throughout:

- **RECOVERED** — taken verbatim from `5ca71de` source and carried into the rebuild unchanged.
- **RECONSTRUCTED** — built from recovered brand devices where the source had no equivalent; the
  recording may show something different and must be checked frame by frame when it is available.
- **NOT EVIDENCED** — the recording is the only source; nothing on this host can confirm it.

When the recording is supplied (upload to Drive, or `scp` to the host), extract frames with the
Playwright ffmpeg already on the host
(`~/.cache/ms-playwright/ffmpeg-*/ffmpeg-linux -i <mp4> -vf fps=2 frames/%04d.png`) and compare against
`docs/design/screenshots/` section by section before this spec is marked verified.

## 1. Surfaces and colour — RECOVERED (`src/app/globals.css`, `src/styles/design-system.ts`)

"Programme paper + ink": warm paper panels interleaved with full-bleed near-black plates, threaded by
one violet line.

| Token | Value | Use |
|---|---|---|
| `--bone` | `#f4f0e7` | page base (light) |
| `--paper` | `#fcfaf5` | raised light surface: cards, media frames, alternate panel |
| `--sand` | `#e8e1d2` | warm inset, hairlines on light |
| `--ink` | `#17131f` | plate base (dark) |
| `--ink-raised` | `#221c30` | raised surface on ink |
| `--violet` | `#4338ca` | primary accent: CTA fill on light, the Loop, highlights |
| `--iris` | `#a99cff` | accent and links on ink |
| `--focus` | `#6d5fe6` | focus ring; the LoopRail fill and node |
| `--ink-text` / `--graphite` / `--muted-ink` | `#17131f` / `#4f4a5c` / `#6e6879` | headings / body / captions on light |
| `--bone-text` / `--bone-dim` | `#f4f0e7` / `#b7b1c4` | headings / body on ink |

Hairlines: `rgba(23,19,31,0.06–0.12)` on light, `white/10` on ink. There are **no gradients** in the
recovered system; violet and iris are flat. (The rejected 5 Sep build's violet→pink→orange gradient was
an invention and is removed.)

Selection: `rgba(67,56,202,0.22)` on light, `rgba(169,156,255,0.28)` on ink.

## 2. Typography — RECOVERED (`src/app/layout.tsx`, `globals.css`)

- Display: **Fraunces** 300–700, used at weight 400 (hero at 500), tracking `-0.02em`, line-height 1.04.
- Body: **DM Sans** 400/500/700.
- Labels and data: **DM Mono** 400/500 — `.kicker`: 0.72rem, uppercase, tracking 0.22em, line-height 1.
- Scale: `.display-hero` clamp(2.75rem, 6.4vw, 5rem) / 0.98 / -0.03em; `.display-section`
  clamp(2rem, 3.8vw, 3.15rem) / 1.02 / -0.025em; `.display-stat` clamp(2.75rem, 5.2vw, 4.25rem).
- Body copy: `text-base leading-relaxed` (1rem/1.625) rising to `sm:text-lg`; hero lede `text-lg
  leading-[1.65]` max-width 36rem.
- Serif italic pull-quotes in violet (light) or bone-text (ink): `font-serif text-2xl…3xl italic
  leading-snug`, often with `border-l-2 border-violet pl-5`.
- Headings on ink flip to `--bone-text` via `.on-ink`.

## 3. Layout — RECOVERED

- Container `max-w-6xl` (72rem) with `px-5 sm:px-6 lg:px-8`; narrow `max-w-3xl`, wide `max-w-7xl`.
- Panel rhythm: `py-20 sm:py-28`; hero `pt-28 sm:pt-32 pb-20 sm:pb-28`; final plate `py-24 sm:py-32`.
- Run-of-show index: hairline `h-px w-8` + mono index (`01`) in violet/iris + mono kicker, `mb-10`.
- Two-column sections `grid gap-12 lg:grid-cols-2 lg:gap-14` or 12-column `lg:grid-cols-12 lg:gap-8`.
- Fixed header 4rem, transparent until 16px of scroll, then `bg-bone/85 backdrop-blur-md` with a
  hairline; nav 0.875rem/500 in graphite, hover violet; two pill CTAs (outline, violet fill).
- Footer: ink plate, wordmark + strapline, inline nav, hairline, legal line.

## 4. Components — RECOVERED

- **Buttons** `CtaButton`: `rounded-full px-6 py-3 text-sm font-semibold tracking-tight`; primary
  violet fill with `--violet-emph` ring-and-glow, hover `-translate-y-0.5`; secondary outline
  `rgba(23,19,31,0.22)` (light) / `white/25` (ink).
- **Cards**: `rounded-2xl` (1rem), hairline border, `bg-paper` + `--lift-light` on light,
  `bg-ink-raised` + `--lift-ink` on ink; highlighted card `border-violet bg-[rgba(67,56,202,0.05)]`
  + `--violet-emph`. Inner padding `p-7` (`sm:p-8` for stat cells). Small nodes `rounded-xl p-4`.
- **Media frames** `MediaFrame`: browser/app/video chrome, `rounded-2xl`, mono tag top-right, mono
  caption bottom-left with a violet/iris dot; schematic shapes only, never invented figures.
- **Lists of items**: hairline-topped rows with a mono index (`01`, `P1`) in violet/iris and a serif
  title; arrow `→` translates on hover.
- **Tables**: `rounded-2xl` bordered paper, the Looped column filled violet in the header and
  `rgba(67,56,202,0.06)` in the body.
- **Grain**: fixed SVG turbulence overlay at 0.5 opacity, multiply blend, 14s stepped drift.
- **Cursor**: custom cursor component (desktop).

## 5. The Loop — RECOVERED devices, RECONSTRUCTED figure

Recovered devices, carried unchanged:

- **LoopMark** (`src/components/brand/LoopMark.tsx`): `viewBox 0 0 28 28`; circle `cx 14 cy 14 r 8.5
  stroke-width 2`; the node `circle cx 20.01 cy 8 r 3.1` filled — a node surfacing on the loop at
  the upper-right (45°). Used at 1.15em beside the "Looped" wordmark (Fraunces 1.28em), as the
  favicon, and as a 26rem watermark at 6% opacity on the closing plate.
- **LoopRail** (`src/components/effects/LoopRail.tsx`): a 1px vertical thread fixed in the left
  margin (`top-24` to `bottom-16`, `left = max(1.5rem, (100vw − 72rem)/2 − 1.75rem)`), desktop only,
  base `rgba(124,108,255,0.2)`; a fill in `--focus` scales from the top with scroll progress
  (`scaleY(progress)`) and a 10px node with a 4px halo and 14px glow travels down it. Updated on
  `requestAnimationFrame` from scroll; removed under reduced motion.
- **Thread draw**: an SVG path with `stroke-dasharray = length` animated to `stroke-dashoffset 0`
  over 1.3s (`ease: none`) when the section reaches 74% of the viewport (GSAP ScrollTrigger),
  with nodes rising `y: 28 → 0` over 0.55s at 0.09s stagger (`CascadeDiagram`).

Reconstructed for the "connected intelligence" section (**must be checked against the recording**):

- **LoopFigure**: the LoopMark geometry enlarged (same 28-unit viewBox, same proportional stroke),
  the loop drawing itself on scroll with the recovered thread-draw timing, and the node then
  travelling the loop continuously (SMIL `animateMotion`, 12s linear, starting at the mark's 45°
  position) with the recovered live-dot halo (`animate-ping`). Four mono signal labels sit outside
  the loop at the compass points. Timing, direction, size and label placement are
  **NOT EVIDENCED**.

## 6. Motion — RECOVERED

- Hero: elements render at opacity 0 and rise `y: 22 → 0` over 0.6s `power2.out`, stagger 0.09s.
- Sections: `Reveal` rises `y: 16 → 0` over 0.55s at `top 88%`, once; `RevealStagger` 0.5s at 0.08s.
- Scroll: Lenis smooth scroll, `lerp 0.08`, `duration 1.1`, wheel only; disabled under reduced motion.
- Header: colour transition 300ms; hover transforms 200–300ms.
- Live status dot: `animate-ping` ring at 50% violet around a 2×2 violet dot.
- Everything stops under `prefers-reduced-motion`; grain is removed.

## 7. Mobile — RECOVERED

- Single column; hero CTAs stack full-width (`w-full sm:w-auto`); the LoopRail and custom cursor
  are desktop-only; tables collapse to stacked cards with the Looped card highlighted; nav becomes a
  right-hand sheet (`min(100%, 320px)`) on a blurred ink overlay.

## 8. What the recording alone can settle — NOT EVIDENCED

1. Whether the hero's right-hand slot carried real product footage or the schematic `MediaFrame`.
2. The Loop animation the founder refers to: its size, position, direction, speed and whether it
   was the rail, the mark, a drawn thread, or a device not in `5ca71de`.
3. Scroll feel (Lenis parameters were in source, but the recording is the only proof of what shipped).
4. Section entrance timing as perceived, and any hover or cursor effects.
5. Any section present in the recording that `5ca71de` does not contain.
