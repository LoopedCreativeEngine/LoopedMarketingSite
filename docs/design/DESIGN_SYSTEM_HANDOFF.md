# Looped design-system handoff — for the Product OS interior

The marketing site's recovered visual system (`docs/design/VISUAL_RECONSTRUCTION_SPEC.md`) is the
brand the inside of Looped must inherit. This is the transfer note for future Product OS UI work.
It changes nothing in the product today. Values are RECOVERED from `5ca71de` unless marked.

## Typography

| Role | Face | Weight | Size / leading / tracking |
|---|---|---|---|
| Page and panel titles | Fraunces | 400 (hero 500) | display scale, leading 1.02–1.04, tracking −0.02…−0.03em |
| Card / row titles | Fraunces | 400 | 1.25–1.5rem, leading-snug |
| Body | DM Sans | 400 | 0.875–1rem, leading 1.5–1.65 |
| Emphasis | DM Sans | 500/700 | as body |
| Labels, indices, data, IDs | DM Mono | 400/500 | 0.62–0.72rem, uppercase, tracking 0.16–0.22em |
| Pull-quotes | Fraunces italic | 400 | 1.5–1.875rem, leading-snug, violet on light / bone on ink |

Product mapping: module names and section headers → Fraunces; table cells and forms → DM Sans;
IDs, timestamps, statuses, metric labels → DM Mono kicker style.

## Colour tokens

Light surfaces `bone #f4f0e7` (app canvas), `paper #fcfaf5` (panels, cards, sheets), `sand #e8e1d2`
(insets, hairlines). Dark surfaces `ink #17131f` (plates, sidebars, the Chief-of-Staff panel),
`ink-raised #221c30` (cards on ink). Accent `violet #4338ca` (primary actions, selected state, the
Loop) with `iris #a99cff` on ink; `focus #6d5fe6` for focus rings and the moving node. Text
`ink-text / graphite / muted-ink` on light, `bone-text / bone-dim` on ink.

Status colours are **not** in the recovered system; when the product needs danger/warn/ok they must be
added as tokens in this family (desaturated, on paper) rather than borrowed from Tailwind defaults.
No gradients.

## Spacing

4px base grid. Panel padding 5rem/7rem vertical; card padding 1.75rem (`p-7`), compact nodes 1rem;
row spacing 1.5rem with hairline dividers; container max-widths 48/72/80rem; gutters 1.25/1.5/2rem.

## Cards and panels

Radius 1rem (`rounded-2xl`) for cards, frames and sheets; 0.75rem for small nodes; pills fully round.
Light: hairline `rgba(23,19,31,0.10–0.12)` + `--lift-light`. Ink: `white/10` + `--lift-ink`.
Selected / highlighted: violet hairline + `rgba(67,56,202,0.05)` fill + `--violet-emph` glow.
Chrome bars (media frames): `sand/60` on light, `black/25` on ink, mono tag right-aligned.

## Navigation

Top bar 4rem, transparent → `bone/85` blurred with a hairline after scroll. Wordmark = LoopMark
(1.15em, violet) + "Looped" in Fraunces 1.28em. Items 0.875rem/500 graphite, hover violet. Two pill
actions: outline and violet fill. Mobile: right sheet on a blurred ink overlay. Product mapping: the
same bar for the app shell; sidebars are ink plates with `bone-dim` items and `iris` active state.

## Buttons

Primary: violet fill, bone text, `rounded-full px-6 py-3 text-sm font-semibold tracking-tight`,
`--violet-emph`, hover lifts 2px and darkens to `#3b31b4`. Secondary: outline (`rgba(23,19,31,0.22)`
light / `white/25` ink), hover `sand/70` / `white/10`. Tertiary: text link in violet with an arrow
that translates on hover. Small: `px-4 py-2`.

## Gradients

None. Emphasis is achieved with the violet ring-and-glow (`--violet-emph`, `--iris-emph`), flat
fills at 5–8% opacity, and the serif italic.

## Motion

Entrances rise 16–22px over 0.5–0.6s `power2.out`, stagger 0.08–0.09s, once, triggered at ~85% of
the viewport. Threads draw over 1.3s linear. Hover 200–300ms. Live indicators use a ping ring.
Smooth scroll (Lenis, lerp 0.08) on marketing only; **not** recommended inside the product. All motion
honours `prefers-reduced-motion`.

## Loop motif

One continuous loop with one node surfacing on it (LoopMark), the node travelling a thread (LoopRail),
threads that draw themselves (CascadeDiagram / LoopFigure). Product mapping: the node as the "live"
indicator, the thread as progress and pipeline chrome, the mark as the Chief-of-Staff avatar. Keep
it to one loop and one node; never orbits, particles or generic AI animation.

## Light and dark surface treatment

The product is light-first on `bone`/`paper`. Ink plates are reserved for the moments the brand marks
as important on the site — the Chief-of-Staff conversation, governance, the founder's voice — and for
sidebars. Headings flip to `bone-text` on ink; body to `bone-dim`; accent to `iris`. Do not build a
separate dark theme; build the same two-surface system.
