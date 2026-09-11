import { cn } from "@/lib/cn";

/**
 * The drill path that a dashboard cannot do. From the whole portfolio down to a
 * single signal, decision or piece of evidence, and back up again: what one
 * event proves rolls up to inform the brand and the portfolio. A bead falls
 * down the drill thread and another rises up the return thread, so both
 * directions are legible; the path still reads with no motion.
 */
export type DrillLevel = {
  name: string;
  detail: string;
};

export function PortfolioDrill({
  levels,
  downLabel = "Drill from the portfolio to a single signal",
  upLabel = "Evidence rolls back up",
  caption,
  tone = "ink",
  className,
}: {
  levels: DrillLevel[];
  downLabel?: string;
  upLabel?: string;
  caption?: string;
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const shell = ink
    ? "border-white/10 bg-ink-raised shadow-[var(--lift-ink)]"
    : "border-[rgba(23,19,31,0.10)] bg-paper shadow-[var(--lift-light)]";
  const card = ink ? "border-white/10 bg-ink" : "border-[rgba(23,19,31,0.10)] bg-bone";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const label = ink ? "text-bone-dim/70" : "text-muted-ink";
  const accent = ink ? "text-iris" : "text-violet";
  const thread = ink ? "bg-iris/30" : "bg-violet/25";
  const node = ink ? "border-iris/60 bg-ink" : "border-violet/50 bg-bone";
  const bead = ink ? "bg-iris" : "bg-violet";

  return (
    <figure className={cn("rounded-2xl border p-5 sm:p-6", shell, className)}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <span className={cn("font-mono text-[0.6rem] uppercase tracking-[0.14em]", accent)}>
          <span aria-hidden>&darr; </span>
          {downLabel}
        </span>
        <span className={cn("font-mono text-[0.6rem] uppercase tracking-[0.14em]", label)}>
          {upLabel}
          <span className={accent} aria-hidden>
            {" "}
            &uarr;
          </span>
        </span>
      </div>

      <div className="relative">
        {/* drill thread (down) on the left */}
        <div className={cn("absolute left-[11px] top-3 bottom-3 w-px", thread)} aria-hidden />
        <span
          className={cn("absolute left-2 h-[7px] w-[7px] rounded-full drill-bead-down", bead)}
          aria-hidden
        />
        {/* return thread (up) on the right */}
        <div className={cn("absolute right-[11px] top-3 bottom-3 w-px", thread)} aria-hidden />
        <span
          className={cn("absolute right-2 h-[7px] w-[7px] rounded-full drill-bead-up", bead)}
          aria-hidden
        />

        <ol className="space-y-3">
          {levels.map((level, index) => (
            <li key={level.name} className="relative flex items-start gap-4 pr-8">
              <span
                className={cn("mt-1 flex h-[23px] w-[23px] shrink-0 items-center justify-center rounded-full border font-mono text-[0.6rem]", node, accent)}
                aria-hidden
              >
                {index + 1}
              </span>
              <div className={cn("flex-1 rounded-xl border p-4", card)}>
                <p className={cn("font-serif text-lg tracking-tight", titleTone)}>{level.name}</p>
                <p className={cn("mt-1 text-xs leading-relaxed", bodyTone)}>{level.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {caption ? (
        <figcaption className={cn("mt-4 border-t pt-3 text-xs leading-relaxed", ink ? "border-white/10 text-bone-dim" : "border-[rgba(23,19,31,0.08)] text-muted-ink")}>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
