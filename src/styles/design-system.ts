/**
 * Looped Event OS — marketing site design tokens.
 * Spacing: 4px base grid. Typography: Geist (via layout).
 */

export const colors = {
  heroBg: "#0a0a0f",
  accentWhite: "#ffffff",
  contentBg: "#ffffff",
  contentFg: "#0f172a", // slate-900
  muted: "#64748b", // slate-500

  violet: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1",
    600: "#4f46e5",
    700: "#4338ca", // primary brand
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b",
  },

  slate: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },
} as const;

export const spacing = {
  /** 4px base */
  unit: 4,
  px: (n: number) => `${n * spacing.unit}px`,
} as const;

export const shadows = {
  violetGlow:
    "0 0 0 1px rgba(99, 102, 241, 0.15), 0 12px 40px -12px rgba(67, 56, 202, 0.45)",
  violetGlowSm: "0 0 24px -4px rgba(99, 102, 241, 0.35)",
} as const;

export const typography = {
  headingClass: "font-sans tracking-tight text-slate-900",
  bodyClass: "font-sans text-slate-600 font-normal",
  monoClass: "font-mono text-sm text-slate-700",
} as const;

export const site = {
  name: "Looped Event OS",
  company: "Entwistle Digital Group Ltd",
  year: 2026,
} as const;
