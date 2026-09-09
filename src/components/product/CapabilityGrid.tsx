import { StatusPill, type Availability } from "@/components/ui/StatusPill";
import { cn } from "@/lib/cn";

/**
 * A group of capabilities written as outcomes, not features. Each entry is a
 * short title plus the thing a team actually gets — kept deliberately at the
 * level of the work, never the level of how the work is done.
 */
export type Capability = {
  title: string;
  body: string;
  status?: Availability;
};

export function CapabilityGrid({
  items,
  columns = 3,
  tone = "light",
  className,
}: {
  items: Capability[];
  columns?: 2 | 3;
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const card = ink
    ? "border-white/10 bg-ink-raised"
    : "border-[rgba(23,19,31,0.12)] bg-paper shadow-[var(--lift-light)]";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const rule = ink ? "bg-iris/50" : "bg-violet/40";

  return (
    <ul
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item.title} className={cn("rounded-2xl border p-5", card)}>
          <span className={cn("block h-px w-7", rule)} aria-hidden />
          <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-2">
            <h3 className={cn("font-serif text-lg tracking-tight", titleTone)}>{item.title}</h3>
            {item.status && item.status !== "live" ? (
              <StatusPill status={item.status} tone={ink ? "ink" : "light"} />
            ) : null}
          </div>
          <p className={cn("mt-2 text-sm leading-relaxed", bodyTone)}>{item.body}</p>
        </li>
      ))}
    </ul>
  );
}

/**
 * The compact variant used on the diligence page, where breadth matters more
 * than air: a tight list of answered questions under one category heading.
 */
export function CapabilityList({
  items,
  tone = "light",
  className,
}: {
  items: Capability[];
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const bullet = ink ? "bg-iris/60" : "bg-violet/50";

  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li key={item.title} className="flex gap-3">
          <span className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", bullet)} aria-hidden />
          <p className={cn("text-sm leading-relaxed", bodyTone)}>
            <span className={cn("font-medium", titleTone)}>{item.title}.</span> {item.body}
            {item.status && item.status !== "live" ? (
              <StatusPill status={item.status} tone={ink ? "ink" : "light"} className="ml-2 align-middle" />
            ) : null}
          </p>
        </li>
      ))}
    </ul>
  );
}
