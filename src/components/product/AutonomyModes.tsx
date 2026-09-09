import { cn } from "@/lib/cn";

/**
 * The three ways a team can run Looped, shown as a ladder rather than a
 * switch: how much Looped does on its own rises left to right, and the
 * organisation decides where it sits. The bar under each mode is a
 * proportional indicator only.
 */
export type AutonomyMode = {
  name: string;
  /** The one-line definition. */
  rule: string;
  detail: string;
  /** What a team actually sees day to day. */
  inPractice: string;
  /** 0-100, how much Looped carries in this mode. */
  weight: number;
};

export function AutonomyModes({
  modes,
  tone = "light",
  className,
}: {
  modes: AutonomyMode[];
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const card = ink
    ? "border-white/10 bg-ink-raised"
    : "border-[rgba(23,19,31,0.12)] bg-paper shadow-[var(--lift-light)]";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const ruleTone = ink ? "text-iris" : "text-violet";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const metaTone = ink ? "text-bone-dim/70" : "text-muted-ink";
  const track = ink ? "bg-white/[0.08]" : "bg-[rgba(23,19,31,0.07)]";
  const fill = ink ? "bg-iris/70" : "bg-violet/70";

  return (
    <ol className={cn("grid gap-4 md:grid-cols-3", className)}>
      {modes.map((mode, index) => (
        <li key={mode.name} className={cn("flex flex-col rounded-2xl border p-5 sm:p-6", card)}>
          <div className="flex items-baseline gap-3">
            <span className={cn("font-mono text-xs", ruleTone)}>{String(index + 1).padStart(2, "0")}</span>
            <h3 className={cn("font-serif text-2xl tracking-tight", titleTone)}>{mode.name}</h3>
          </div>

          <p className={cn("mt-4 font-serif text-lg italic leading-snug", ruleTone)}>{mode.rule}</p>
          <p className={cn("mt-3 text-sm leading-relaxed", bodyTone)}>{mode.detail}</p>

          <div className="mt-auto pt-6">
            <p className={cn("font-mono text-[0.58rem] uppercase tracking-[0.14em]", metaTone)}>In practice</p>
            <p className={cn("mt-1.5 text-xs leading-relaxed", bodyTone)}>{mode.inPractice}</p>
            <div className={cn("mt-4 h-1.5 w-full overflow-hidden rounded-full", track)} aria-hidden>
              <div
                className={cn("h-full rounded-full", fill)}
                style={{ width: `${Math.max(0, Math.min(100, mode.weight))}%` }}
              />
            </div>
            <p className={cn("mt-2 font-mono text-[0.55rem] uppercase tracking-[0.14em]", metaTone)}>
              How much Looped carries
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
