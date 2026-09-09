import { cn } from "@/lib/cn";

/**
 * A relationship or lifecycle shown as one continuous run rather than four
 * disconnected systems. Used for the commercial lifecycle (prospect through
 * renewal) and the awards year. The final stage loops back to the first.
 */
export type LifecycleStage = {
  name: string;
  summary: string;
  items: string[];
};

export function LifecycleRail({
  stages,
  loopBackNote,
  tone = "light",
  className,
}: {
  stages: LifecycleStage[];
  loopBackNote?: string;
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const card = ink
    ? "border-white/10 bg-ink-raised"
    : "border-[rgba(23,19,31,0.12)] bg-paper shadow-[var(--lift-light)]";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const itemTone = ink ? "text-bone-dim/85" : "text-graphite";
  const accent = ink ? "text-iris" : "text-violet";
  const bullet = ink ? "bg-iris/60" : "bg-violet/50";
  const thread = ink ? "bg-iris/30" : "bg-violet/25";
  const node = ink ? "border-iris/60 bg-ink" : "border-violet/50 bg-bone";

  /* Long lifecycles wrap to two rows at md, so the connecting thread only
     appears at the breakpoint where the stages genuinely sit on one line. */
  const wide = stages.length > 4;
  const gridClass = wide ? "md:grid-cols-3 lg:grid-cols-6" : stages.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  const railClass = wide ? "lg:block" : "md:block";
  const stackClass = wide ? "lg:hidden" : "md:hidden";
  const rowClass = wide ? "lg:block" : "md:block";
  const nodeClass = wide ? "lg:mt-0" : "md:mt-0";
  const cardClass = wide ? "lg:mt-4" : "md:mt-4";

  return (
    <div className={className}>
      <div className="relative">
        <div className={cn("absolute left-[11px] top-2 bottom-2 w-px", thread, stackClass)} aria-hidden />
        <div className={cn("absolute left-0 right-0 top-[11px] hidden h-px", thread, railClass)} aria-hidden />

        <ol className={cn("relative grid gap-5 md:gap-4", gridClass)}>
          {stages.map((stage, index) => (
            <li key={stage.name} className={cn("relative flex gap-4", rowClass)}>
              <span
                className={cn("mt-1 h-[23px] w-[23px] shrink-0 rounded-full border", node, nodeClass)}
                aria-hidden
              />
              <div className={cn("flex-1 rounded-xl border p-4", card, cardClass)}>
                <div className="flex items-baseline gap-2.5">
                  <span className={cn("font-mono text-[0.62rem]", accent)}>{String(index + 1).padStart(2, "0")}</span>
                  <h3 className={cn("font-serif text-xl tracking-tight", titleTone)}>{stage.name}</h3>
                </div>
                <p className={cn("mt-2 text-xs leading-relaxed", bodyTone)}>{stage.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {stage.items.map((item) => (
                    <li key={item} className={cn("flex gap-2 text-xs leading-relaxed", itemTone)}>
                      <span className={cn("mt-1.5 h-1 w-1 shrink-0 rounded-full", bullet)} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {loopBackNote ? (
        <p className={cn("mt-5 flex items-start gap-2.5 text-sm italic leading-relaxed", bodyTone)}>
          <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", ink ? "bg-iris" : "bg-violet")} aria-hidden />
          <span>{loopBackNote}</span>
        </p>
      ) : null}
    </div>
  );
}
