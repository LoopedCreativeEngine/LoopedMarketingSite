/**
 * Looped marketing site — design tokens.
 *
 * Single source of truth is `src/app/globals.css`; this file mirrors it for
 * use in TS (metadata, canvases, inline SVG). "Programme paper + ink":
 * warm paper panels interleaved with ink plates, threaded by one violet Loop.
 * Type: Fraunces (display), DM Sans (body), DM Mono (labels/data).
 */

export const colors = {
  /** Warm paper — page base. */
  bone: "#f4f0e7",
  /** Raised light surface: cards, media frames. */
  paper: "#fcfaf5",
  /** Warm inset / hairline on light. */
  sand: "#e8e1d2",
  /** Near-black plate. */
  ink: "#17131f",
  /** Raised surface on ink. */
  inkRaised: "#221c30",

  /** Primary accent: CTAs on light, the Loop, highlights. */
  violet: "#4338ca",
  /** Light violet: accents + links on ink. */
  iris: "#a99cff",
  /** Focus ring — legible on both bone and ink. */
  focus: "#6d5fe6",

  /** Text. */
  inkText: "#17131f",
  graphite: "#4f4a5c",
  mutedInk: "#6e6879",
  boneText: "#f4f0e7",
  boneDim: "#b7b1c4",
} as const;

export const spacing = {
  /** 4px base grid. */
  unit: 4,
  px: (n: number) => `${n * spacing.unit}px`,
} as const;

export const shadows = {
  liftLight: "0 1px 2px rgba(23, 19, 31, 0.05), 0 22px 48px -28px rgba(23, 19, 31, 0.28)",
  liftInk: "0 1px 2px rgba(0, 0, 0, 0.35), 0 28px 56px -30px rgba(0, 0, 0, 0.75)",
  violetEmph: "0 0 0 1px #4338ca, 0 22px 50px -22px rgba(67, 56, 202, 0.55)",
} as const;

export const typography = {
  displayClass: "font-serif tracking-tight text-ink-text",
  bodyClass: "font-sans text-graphite",
  monoClass: "kicker text-muted-ink",
} as const;

export const site = {
  name: "Looped",
  company: "Entwistle Digital Group Ltd",
  year: 2026,
} as const;
