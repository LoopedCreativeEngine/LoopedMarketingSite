import { cn } from "@/lib/cn";

/**
 * Committed plan versus modelled outlook. Leadership keeps the official number
 * intact; Looped shows, separately, what current evidence suggests. The bar is
 * a proportional abstraction and the figures are labelled as an illustration —
 * the modelling behind them is deliberately not described.
 */
export type GapDriver = { label: string; note: string };
export type Intervention = { label: string; effect: string; tradeoff: string };

export function ScenarioBoard({
  committedLabel,
  committedValue,
  modelledLabel,
  modelledValue,
  /** 0–100. Width of the modelled bar against the committed bar. */
  modelledPercent,
  confidence,
  drivers,
  interventions,
  caption,
  tone = "light",
  className,
}: {
  committedLabel: string;
  committedValue: string;
  modelledLabel: string;
  modelledValue: string;
  modelledPercent: number;
  confidence: string;
  drivers: GapDriver[];
  interventions: Intervention[];
  caption: string;
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const shell = ink
    ? "border-white/10 bg-ink-raised shadow-[var(--lift-ink)]"
    : "border-[rgba(23,19,31,0.10)] bg-paper shadow-[var(--lift-light)]";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const metaTone = ink ? "text-bone-dim/70" : "text-muted-ink";
  const accent = ink ? "text-iris" : "text-violet";
  const track = ink ? "bg-white/[0.07]" : "bg-[rgba(23,19,31,0.07)]";
  const fill = ink ? "bg-iris/70" : "bg-violet/70";
  const committedFill = ink ? "bg-white/25" : "bg-[rgba(23,19,31,0.22)]";
  const divider = ink ? "border-white/10" : "border-[rgba(23,19,31,0.10)]";
  const inner = ink ? "border-white/10 bg-ink" : "border-[rgba(23,19,31,0.10)] bg-bone";

  return (
    <figure className={cn("overflow-hidden rounded-2xl border", shell, className)}>
      <div className="p-5 sm:p-6">
        {/* the two numbers, side by side and never merged */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className={cn("font-mono text-[0.6rem] uppercase tracking-[0.16em]", metaTone)}>{committedLabel}</p>
            <p className={cn("mt-2 font-serif text-3xl tracking-tight sm:text-4xl", titleTone)}>{committedValue}</p>
            <div className={cn("mt-3 h-2 w-full overflow-hidden rounded-full", track)} aria-hidden>
              <div className={cn("h-full w-full rounded-full", committedFill)} />
            </div>
          </div>
          <div>
            <p className={cn("font-mono text-[0.6rem] uppercase tracking-[0.16em]", accent)}>{modelledLabel}</p>
            <p className={cn("mt-2 font-serif text-3xl tracking-tight sm:text-4xl", titleTone)}>{modelledValue}</p>
            <div className={cn("mt-3 h-2 w-full overflow-hidden rounded-full", track)} aria-hidden>
              <div
                className={cn("h-full rounded-full", fill)}
                style={{ width: `${Math.max(0, Math.min(100, modelledPercent))}%` }}
              />
            </div>
          </div>
        </div>

        <p className={cn("mt-4 text-sm leading-relaxed", bodyTone)}>
          <span className={cn("kicker mr-2.5 text-[0.6rem]", accent)}>Confidence</span>
          {confidence}
        </p>
      </div>

      <div className={cn("grid border-t lg:grid-cols-2", divider)}>
        <div className={cn("border-b p-5 lg:border-b-0 lg:border-r", divider)}>
          <p className={cn("font-mono text-[0.6rem] uppercase tracking-[0.16em]", metaTone)}>What is driving the gap</p>
          <ul className="mt-3 space-y-2.5">
            {drivers.map((driver) => (
              <li key={driver.label} className={cn("rounded-lg border px-3 py-2.5", inner)}>
                <p className={cn("text-sm font-medium", titleTone)}>{driver.label}</p>
                <p className={cn("mt-1 text-xs leading-relaxed", bodyTone)}>{driver.note}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <p className={cn("font-mono text-[0.6rem] uppercase tracking-[0.16em]", metaTone)}>
            Options, with their cost
          </p>
          <ul className="mt-3 space-y-2.5">
            {interventions.map((intervention) => (
              <li key={intervention.label} className={cn("rounded-lg border px-3 py-2.5", inner)}>
                <p className={cn("text-sm font-medium", titleTone)}>{intervention.label}</p>
                <p className={cn("mt-1 text-xs leading-relaxed", bodyTone)}>{intervention.effect}</p>
                <p className={cn("mt-1.5 font-mono text-[0.58rem] uppercase tracking-[0.12em]", metaTone)}>
                  Trade-off &middot; {intervention.tradeoff}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <figcaption className={cn("border-t px-5 py-3 text-xs leading-relaxed", divider, metaTone)}>{caption}</figcaption>
    </figure>
  );
}
