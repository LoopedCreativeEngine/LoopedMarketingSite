import { type Availability } from "@/components/ui/StatusPill";
import { cn } from "@/lib/cn";

/**
 * The channel estate, with each channel's real state next to it. Cards on
 * small screens, a scannable table-like run on desktop.
 */
export type ChannelRow = {
  channel: string;
  useFor: string;
  detail: string;
  status: Availability;
};

export function ChannelMatrix({
  rows,
  tone = "light",
  className,
}: {
  rows: ChannelRow[];
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const row = ink ? "border-white/10" : "border-[rgba(23,19,31,0.12)]";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const metaTone = ink ? "text-bone-dim/75" : "text-muted-ink";

  return (
    <ul className={cn("divide-y", row, ink ? "divide-white/10" : "divide-[rgba(23,19,31,0.10)]", className)}>
      {rows.map((item) => (
        <li key={item.channel} className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline md:gap-6">
          <div className="flex items-center gap-3 md:col-span-3">
            <h3 className={cn("font-serif text-xl tracking-tight", titleTone)}>{item.channel}</h3>
          </div>
          <p className={cn("text-sm font-medium md:col-span-3", metaTone)}>{item.useFor}</p>
          <p className={cn("text-sm leading-relaxed md:col-span-6", bodyTone)}>{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}
