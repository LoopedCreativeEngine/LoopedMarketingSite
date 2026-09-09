import { cn } from "@/lib/cn";

/**
 * An elegant abstraction of a Looped working hub: the chrome, the tabs a team
 * moves between, and columns of live items with their state. Shapes and
 * labels only — no invented figures, no fake screenshot — so it communicates
 * what the workspace holds without implying a screen that does not exist.
 */
export type BoardItem = {
  title: string;
  meta?: string;
  /** Visual weight only: `focus` marks the item the hub is drawing attention to. */
  accent?: "default" | "focus" | "quiet";
};

export type BoardColumn = {
  label: string;
  items: BoardItem[];
};

export function WorkspaceBoard({
  name,
  tabs,
  columns,
  footnote,
  tone = "light",
  className,
}: {
  /** The hub's name, shown in the chrome. */
  name: string;
  tabs: string[];
  columns: BoardColumn[];
  footnote?: string;
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";

  const shell = ink
    ? "border-white/10 bg-ink-raised shadow-[var(--lift-ink)]"
    : "border-[rgba(23,19,31,0.10)] bg-paper shadow-[var(--lift-light)]";
  const chrome = ink ? "border-white/10 bg-black/25" : "border-[rgba(23,19,31,0.08)] bg-sand/60";
  const dot = ink ? "bg-white/20" : "bg-[rgba(23,19,31,0.18)]";
  const pill = ink ? "bg-white/10 text-bone-dim" : "bg-[rgba(23,19,31,0.05)] text-muted-ink";
  const body = ink ? "bg-ink" : "bg-bone";
  const tabIdle = ink ? "text-bone-dim/70" : "text-muted-ink";
  const tabActive = ink ? "text-iris border-iris" : "text-violet border-violet";
  const colLabel = ink ? "text-bone-dim/70" : "text-muted-ink";
  const cardBase = ink ? "border-white/10 bg-ink-raised" : "border-[rgba(23,19,31,0.10)] bg-paper";
  const cardFocus = ink
    ? "border-iris/45 bg-iris/[0.08]"
    : "border-violet/35 bg-violet/[0.05]";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const metaTone = ink ? "text-bone-dim/80" : "text-muted-ink";
  const divider = ink ? "border-white/10" : "border-[rgba(23,19,31,0.08)]";

  return (
    <figure className={cn("overflow-hidden rounded-2xl border", shell, className)}>
      {/* chrome */}
      <div className={cn("flex items-center gap-2 border-b px-4 py-2.5", chrome)}>
        <span className="flex gap-1.5" aria-hidden>
          <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
          <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
          <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
        </span>
        <span className={cn("ml-2 truncate rounded-md px-3 py-1 font-mono text-[0.62rem] tracking-wide", pill)}>
          {name}
        </span>
        <span className={cn("ml-auto kicker text-[0.6rem]", ink ? "text-iris/80" : "text-violet/70")}>Workspace</span>
      </div>

      <div className={body}>
        {/* tabs */}
        <div className={cn("flex gap-5 overflow-x-auto border-b px-4 pt-3", divider)}>
          {tabs.map((tab, index) => (
            <span
              key={tab}
              className={cn(
                "shrink-0 border-b-2 pb-2 font-mono text-[0.62rem] uppercase tracking-[0.14em]",
                index === 0 ? tabActive : cn("border-transparent", tabIdle),
              )}
            >
              {tab}
            </span>
          ))}
        </div>

        {/* columns */}
        <div className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.label}>
              <div className="mb-2.5 flex items-baseline justify-between gap-2">
                <span className={cn("font-mono text-[0.6rem] uppercase tracking-[0.16em]", colLabel)}>
                  {column.label}
                </span>
                <span className={cn("font-mono text-[0.6rem]", colLabel)}>{column.items.length}</span>
              </div>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li
                    key={item.title}
                    className={cn(
                      "rounded-lg border px-3 py-2.5",
                      item.accent === "focus" ? cardFocus : cardBase,
                      item.accent === "quiet" && "opacity-70",
                    )}
                  >
                    <p className={cn("text-[0.78rem] font-medium leading-snug", titleTone)}>{item.title}</p>
                    {item.meta ? (
                      <p className={cn("mt-1 font-mono text-[0.58rem] uppercase tracking-[0.12em]", metaTone)}>
                        {item.meta}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {footnote ? (
          <figcaption
            className={cn("border-t px-4 py-3 text-xs leading-relaxed", divider, ink ? "text-bone-dim" : "text-muted-ink")}
          >
            {footnote}
          </figcaption>
        ) : null}
      </div>
    </figure>
  );
}
