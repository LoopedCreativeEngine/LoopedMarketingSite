# Looped design-system handoff — for the Product OS interior

The approved Claude Design aesthetic (see `VISUAL_RECONSTRUCTION_SPEC.md`) is the design authority for
the inside of Looped. This note captures the reusable tokens and components as the marketing site
implements them, so Product OS UI work inherits one brand rather than growing a second one. It changes
nothing in the product today. Source of truth: `src/app/globals.css` + `src/styles/design-system.ts`.

## Typography
| Role | Face | Weight | Size / leading / tracking |
|---|---|---|---|
| Page and panel titles | Newsreader | 400 | display scale, leading 0.96–1.0, tracking −0.02…−0.025em |
| Card / row titles | Newsreader | 400 | 1.25–1.5rem, leading-snug |
| Pull-quotes | Newsreader italic | 400 | 1.5–1.875rem |
| Body | Hanken Grotesk | 400 | 0.875–1rem, leading 1.5–1.6 |
| Emphasis, buttons | Hanken Grotesk | 600/700 | as body; wordmark 700 at −0.02em |
| Labels, indices, data, IDs | JetBrains Mono | 400/500 | 0.72–0.78rem, uppercase 0.22em for kickers, 0.06em for data |

Product mapping: module names and panel headers → Newsreader; forms, tables, prose → Hanken;
IDs, timestamps, statuses, metric labels → JetBrains Mono.

## Colour tokens
Light surfaces `paper #FFFFFF` (canvas), `stone #FBFAF9` (panels, cards, sheets), `stone-deep
#F1EEEA` (insets, hovers), `hairline #ECE9E4`. Dark `night #0B1020` (Chief-of-Staff panel, sidebars,
the few emphasised plates), `night-raised #151B31`. Text `ink / slate / muted` on light, `snow / mist /
mist-dim` on night. Accent is the gradient only: `purple #7C3AED`, `pink #EC4899`, `orange #FB923C`,
with `lavender #A78BDB` on night. Status colours are not in the recovered system; add them in this
family (desaturated, on stone) rather than borrowing framework defaults.

## Gradients
`--grad: linear-gradient(100deg, purple, pink, orange)` for primary actions, the hero line, the
selected state and the ribbon. `--grad-dot: linear-gradient(purple, pink)` for the 9px kicker dot.
Tints at 7% (`rgba(124,58,237,0.07)`, `rgba(236,72,153,0.07)`) for highlighted cards. Never a full
gradient background.

## The Loop / ribbon
`Ribbon.tsx` (canvas, recovered code). Product mapping: the hero-scale ribbon on the sign-in and
empty states; a `weight 0.6–0.8` ribbon as the Chief-of-Staff "thinking" indicator; the ring mark as
the avatar. Keep it one loop; never particles, orbits or generic AI animation.

## Buttons
Primary: gradient pill, white text, `rounded-full px-6 py-3 text-sm font-semibold`, glow
`--grad-emph`, hover lifts 2px. Secondary: outline `rgba(15,23,42,0.18)` on light, `white/25` on
night. Tertiary: text link in purple with an arrow that translates on hover. Small: `px-5 py-2.5`.

## Spacing
4px grid. Panels 5rem/7rem vertical; cards 1.75rem; compact nodes 1rem; container 48/72/80rem;
gutters 1.25/1.5/2rem. Generous whitespace is part of the brand: prefer one more rem than fewer.

## Cards and panels
Radius 20px (cards, frames, sheets), 12px (nodes), pills fully round. Light: white, hairline border,
`--lift-light`, a 12px accent dot above the title. Highlighted: 7% gradient tint, no border. Night:
`night-raised` with `white/10` border and `--lift-ink`.

## Light and dark surfaces
Light-first. Night plates are reserved for emphasis (the human-judgement statement, evidence, the
founder's voice, the Chief-of-Staff conversation) and for sidebars. Headings flip to snow, body to
mist, kicker to lavender. One two-surface system, not a separate dark theme.

## Navigation
4.5rem bar, transparent → `paper/85` blurred with a hairline once scrolled; wordmark (ring + bold
"Looped"); quiet 0.95rem/500 links; one gradient pill. Mobile: right sheet on a blurred night overlay.
Product mapping: same bar for the app shell; night sidebar with mist items and lavender active state.

## Motion
Entrances rise 16–22px over 0.55–0.6s `power2.out`, staggered 80–90ms, once. Hover 200–300ms.
The ribbon runs at ≤30fps and pauses off-screen. Everything honours `prefers-reduced-motion`.
