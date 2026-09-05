/**
 * Looped design tokens — the approved Claude Design system.
 *
 * Single source of truth is `src/app/globals.css`; this file mirrors it for
 * TS (metadata, canvases, inline SVG) and is the transfer surface for the
 * Product OS interior (docs/design/DESIGN_SYSTEM_HANDOFF.md).
 * Type: Newsreader (display), Hanken Grotesk (body), JetBrains Mono (labels).
 */

export const colors = {
  paper: "#ffffff",
  stone: "#fbfaf9",
  stoneDeep: "#f1eeea",
  hairline: "#ece9e4",
  night: "#0b1020",
  nightRaised: "#151b31",

  purple: "#7c3aed",
  pink: "#ec4899",
  orange: "#fb923c",
  lavender: "#a78bdb",
  focus: "#7c3aed",

  ink: "#0f172a",
  slate: "#475569",
  muted: "#64748b",
  snow: "#f8fafc",
  mist: "#cbd5e1",
  mistDim: "#94a3b8",
} as const;

/** The gradient, as CSS and as the RGB stops the ribbon canvas cycles through. */
export const gradient = {
  css: "linear-gradient(100deg, #7c3aed, #ec4899, #fb923c)",
  dot: "linear-gradient(#7c3aed, #ec4899)",
  /** purple → pink → orange → pink, cycled by the ribbon (RECOVERED from the deck). */
  ribbonStops: [
    [124, 58, 237],
    [236, 72, 153],
    [251, 146, 60],
    [236, 72, 153],
  ] as const,
} as const;

export const spacing = {
  /** 4px base grid. */
  unit: 4,
  px: (n: number) => `${n * spacing.unit}px`,
} as const;

export const radii = {
  card: "20px",
  node: "12px",
  pill: "999px",
} as const;

export const shadows = {
  liftLight: "0 1px 2px rgba(15, 23, 42, 0.04), 0 24px 48px -28px rgba(15, 23, 42, 0.18)",
  liftInk: "0 1px 2px rgba(0, 0, 0, 0.35), 0 28px 56px -30px rgba(0, 0, 0, 0.7)",
  gradEmph: "0 10px 30px -10px rgba(236, 72, 153, 0.45), 0 4px 14px -6px rgba(124, 58, 237, 0.5)",
} as const;

export const motion = {
  /** Ribbon: one full wobble cycle, and the travelling light pulse (seconds). */
  ribbonPeriodS: 22,
  ribbonPulsePeriodS: 13,
  revealMs: 550,
  revealStaggerMs: 80,
} as const;

export const typography = {
  displayClass: "font-serif tracking-tight text-ink",
  bodyClass: "font-sans text-slate",
  monoClass: "kicker text-muted",
} as const;

export const site = {
  name: "Looped",
  company: "Entwistle Digital Group Ltd",
  year: 2026,
} as const;
