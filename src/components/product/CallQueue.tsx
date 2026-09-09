import { cn } from "@/lib/cn";

/**
 * Tomorrow's call queue — the telesales page's one visual. Every row is a
 * sector-level stand-in, never a real or invented company, and the columns are
 * the four things a caller actually wants before they dial: who, why now, what
 * has already touched them, and when to call.
 */
export type QueueRow = {
  /** Anonymised account stand-in, e.g. "Account 01 — Manufacturing". */
  account: string;
  reason: string;
  warmedBy: string;
  bestTime: string;
  priority: "high" | "medium" | "watch";
};

const PRIORITY_LABEL: Record<QueueRow["priority"], string> = {
  high: "Call first",
  medium: "Call today",
  watch: "Warm first",
};

export function CallQueue({
  rows,
  footnote,
  tone = "light",
  className,
}: {
  rows: QueueRow[];
  footnote?: string;
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const shell = ink
    ? "border-white/10 bg-ink-raised shadow-[var(--lift-ink)]"
    : "border-[rgba(23,19,31,0.10)] bg-paper shadow-[var(--lift-light)]";
  const chrome = ink ? "border-white/10 bg-black/25" : "border-[rgba(23,19,31,0.08)] bg-sand/60";
  const divider = ink ? "border-white/10" : "border-[rgba(23,19,31,0.08)]";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const metaTone = ink ? "text-bone-dim/70" : "text-muted-ink";
  const accent = ink ? "text-iris" : "text-violet";

  const priorityStyles: Record<QueueRow["priority"], string> = ink
    ? {
        high: "border-iris/50 bg-iris/[0.12] text-iris",
        medium: "border-white/20 bg-white/[0.05] text-bone-dim",
        watch: "border-white/12 text-bone-dim/70",
      }
    : {
        high: "border-violet/40 bg-violet/[0.07] text-violet",
        medium: "border-[rgba(23,19,31,0.18)] bg-[rgba(23,19,31,0.03)] text-graphite",
        watch: "border-[rgba(23,19,31,0.12)] text-muted-ink",
      };

  return (
    <figure className={cn("overflow-hidden rounded-2xl border", shell, className)}>
      <div className={cn("flex items-center justify-between gap-3 border-b px-4 py-3", chrome)}>
        <p className={cn("font-mono text-[0.62rem] uppercase tracking-[0.16em]", metaTone)}>Tomorrow&rsquo;s call queue</p>
        <span className={cn("kicker text-[0.6rem]", accent)}>Rebuilt overnight</span>
      </div>

      <ul className={cn("divide-y", ink ? "divide-white/10" : "divide-[rgba(23,19,31,0.08)]")}>
        {rows.map((row, index) => (
          <li key={row.account} className="grid gap-2 px-4 py-4 lg:grid-cols-12 lg:items-center lg:gap-4">
            <div className="flex items-center gap-3 lg:col-span-4">
              <span className={cn("font-mono text-[0.62rem]", accent)}>{String(index + 1).padStart(2, "0")}</span>
              <span className={cn("text-sm font-medium", titleTone)}>{row.account}</span>
            </div>
            <p className={cn("text-xs leading-relaxed lg:col-span-4", bodyTone)}>{row.reason}</p>
            <p className={cn("font-mono text-[0.58rem] uppercase tracking-[0.12em] lg:col-span-2", metaTone)}>
              {row.warmedBy}
            </p>
            <div className="flex items-center gap-2 lg:col-span-2 lg:justify-end">
              <span className={cn("font-mono text-[0.58rem] uppercase tracking-[0.12em]", metaTone)}>
                {row.bestTime}
              </span>
              <span
                className={cn(
                  "shrink-0 rounded-full border px-2.5 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.12em]",
                  priorityStyles[row.priority],
                )}
              >
                {PRIORITY_LABEL[row.priority]}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {footnote ? (
        <figcaption className={cn("border-t px-4 py-3 text-xs leading-relaxed", divider, metaTone)}>
          {footnote}
        </figcaption>
      ) : null}
    </figure>
  );
}
