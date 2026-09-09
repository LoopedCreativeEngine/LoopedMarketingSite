import { cn } from "@/lib/cn";

/**
 * The creative argument in one picture: a real announcement is not one asset,
 * it is a batch, personalised per name, sized per channel, with the copy and
 * the approval attached. Card shapes are abstract placeholders — never an
 * invented finalist, never a fake logo.
 */
export type BatchStage = {
  count: string;
  label: string;
  detail: string;
};

export function CreativeBatch({
  headline,
  stages,
  tone = "light",
  className,
}: {
  headline: string;
  stages: BatchStage[];
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const shell = ink
    ? "border-white/10 bg-ink-raised shadow-[var(--lift-ink)]"
    : "border-[rgba(23,19,31,0.10)] bg-paper shadow-[var(--lift-light)]";
  const tile = ink ? "border-white/10 bg-ink" : "border-[rgba(23,19,31,0.10)] bg-bone";
  const shape = ink ? "bg-white/[0.08]" : "bg-[rgba(23,19,31,0.07)]";
  const shapeStrong = ink ? "bg-iris/30" : "bg-violet/20";
  const accent = ink ? "text-iris" : "text-violet";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const divider = ink ? "border-white/10" : "border-[rgba(23,19,31,0.10)]";

  return (
    <figure className={cn("overflow-hidden rounded-2xl border", shell, className)}>
      <div className="p-5 sm:p-6">
        <p className={cn("kicker text-[0.6rem]", accent)}>{headline}</p>

        {/* the batch — abstract card tiles */}
        <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
          {Array.from({ length: 16 }, (_, index) => (
            <div key={index} className={cn("rounded-md border p-2", tile)} aria-hidden>
              <div className={cn("mb-1.5 h-5 w-5 rounded-full", index % 5 === 2 ? shapeStrong : shape)} />
              <div className={cn("h-1 w-full rounded-full", shape)} />
              <div className={cn("mt-1 h-1 w-2/3 rounded-full", shape)} />
            </div>
          ))}
          <div
            className={cn(
              "flex items-center justify-center rounded-md border font-mono text-[0.6rem]",
              tile,
              accent,
            )}
            aria-hidden
          >
            +31
          </div>
        </div>
      </div>

      {/* the pipeline underneath */}
      <div className={cn("grid divide-y border-t sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5", divider, ink ? "divide-white/10" : "divide-[rgba(23,19,31,0.10)]")}>
        {stages.map((stage) => (
          <div key={stage.label} className={cn("border-t px-4 py-4 first:border-t-0 sm:border-t-0 lg:border-l lg:first:border-l-0", divider)}>
            <p className={cn("font-mono text-lg", accent)}>{stage.count}</p>
            <p className={cn("mt-1 text-sm font-medium leading-snug", titleTone)}>{stage.label}</p>
            <p className={cn("mt-1 text-xs leading-relaxed", bodyTone)}>{stage.detail}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
