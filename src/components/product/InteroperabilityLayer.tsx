import { cn } from "@/lib/cn";

/**
 * Your AI, and Looped. Three tiers stacked top to bottom: the organisation's
 * own AI environment, then Looped as the event intelligence and authority
 * layer, then the event systems underneath. A governed interface sits between
 * the wider AI environment and Looped: event intelligence flows up through it,
 * governed requests come down through it, and Looped stays the authority on the
 * tenant, the policy, the security and the consequential action.
 *
 * The point of the picture is that Looped is not a bypass around anyone's
 * controls. It is the authoritative event-domain layer that a general-purpose
 * AI environment can draw on without inheriting Looped's authority. Shapes and
 * labels only, never a mocked screen, so nothing here reads as a claim about a
 * specific external product.
 */
export type InteropChip = { label: string };

function Chips({ items, chipClass }: { items: InteropChip[]; chipClass: string }): React.ReactElement {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item.label} className={cn("inline-flex items-center rounded-full border px-3 py-1.5 text-xs", chipClass)}>
          {item.label}
        </li>
      ))}
    </ul>
  );
}

function Flow({ stroke, reverse = false }: { stroke: string; reverse?: boolean }): React.ReactElement {
  return (
    <svg viewBox="0 0 600 22" className="h-5 w-full" aria-hidden fill="none" preserveAspectRatio="none">
      {[150, 300, 450].map((x) => (
        <line
          key={x}
          x1={x}
          y1="0"
          x2={x}
          y2="22"
          stroke={stroke}
          strokeWidth="1.25"
          opacity="0.4"
          className={cn("flow-line", reverse && "flow-line--rev")}
        />
      ))}
    </svg>
  );
}

export function InteroperabilityLayer({
  aiLabel = "Your AI environment",
  aiNote = "assistants, copilots and agents your organisation already runs",
  aiItems,
  interfaceLabel = "Governed interface",
  interfaceNote = "policy · permissions · identity · audit",
  loopTitle = "Looped",
  loopSubtitle = "The event intelligence and authority layer",
  loopItems,
  authorityLine = "Looped keeps the tenant, policy, security, data and action authority. Your wider AI draws on the intelligence; it does not inherit the control.",
  systemsLabel = "Your event systems",
  systemsItems,
  caption,
  tone = "light",
  className,
}: {
  aiLabel?: string;
  aiNote?: string;
  aiItems: InteropChip[];
  interfaceLabel?: string;
  interfaceNote?: string;
  loopTitle?: string;
  loopSubtitle?: string;
  /** What only the specialist event layer holds. */
  loopItems: string[];
  authorityLine?: string;
  systemsLabel?: string;
  systemsItems: InteropChip[];
  caption?: string;
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const shell = ink
    ? "border-white/10 bg-ink-raised shadow-[var(--lift-ink)]"
    : "border-[rgba(23,19,31,0.10)] bg-paper shadow-[var(--lift-light)]";
  const chip = ink
    ? "border-white/12 bg-ink text-bone-dim"
    : "border-[rgba(23,19,31,0.12)] bg-bone text-graphite";
  const label = ink ? "text-bone-dim/70" : "text-muted-ink";
  const accent = ink ? "text-iris" : "text-violet";
  const band = ink ? "border-iris/35 bg-iris/[0.08]" : "border-violet/30 bg-violet/[0.05]";
  const titleTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const inner = ink ? "border-white/10 bg-ink" : "border-[rgba(23,19,31,0.10)] bg-bone";
  const gate = ink ? "border-iris/40 bg-ink" : "border-violet/35 bg-paper";
  const stroke = ink ? "var(--iris)" : "var(--violet)";
  const cue = cn("font-mono text-[0.58rem] uppercase tracking-[0.12em]", label);

  return (
    <figure className={cn("rounded-2xl border p-5 sm:p-6", shell, className)}>
      {/* Tier 1 — the organisation's own AI environment */}
      <div className={cn("rounded-xl border px-4 py-4", inner)}>
        <p className={cn("font-mono text-[0.6rem] uppercase tracking-[0.16em]", label)}>{aiLabel}</p>
        <p className={cn("mt-1 text-xs leading-relaxed", bodyTone)}>{aiNote}</p>
        <Chips items={aiItems} chipClass={chip} />
      </div>

      {/* the governed interface between the wider AI environment and Looped */}
      <Flow stroke={stroke} />
      <div className={cn("flex flex-wrap items-center justify-between gap-x-4 gap-y-2 rounded-xl border px-4 py-2.5", gate)}>
        <span className={cue}>
          <span className={accent} aria-hidden>
            &uarr;{" "}
          </span>
          Event intelligence
        </span>
        <span className={cn("font-mono text-[0.62rem] uppercase tracking-[0.16em]", accent)}>
          {interfaceLabel}
          <span className={cn("ml-2 normal-case tracking-normal", label)}>{interfaceNote}</span>
        </span>
        <span className={cue}>
          Governed requests{" "}
          <span className={accent} aria-hidden>
            &darr;
          </span>
        </span>
      </div>
      <Flow stroke={stroke} reverse />

      {/* Tier 2 — Looped, the specialist event layer that holds the authority */}
      <div className={cn("rounded-xl border px-4 py-4", band)}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <p className={cn("font-serif text-lg tracking-tight", titleTone)}>{loopTitle}</p>
          <span className={cn("kicker text-[0.6rem]", accent)}>Authority layer</span>
        </div>
        <p className={cn("mt-1 text-sm leading-relaxed", bodyTone)}>{loopSubtitle}</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {loopItems.map((item) => (
            <li key={item} className={cn("rounded-lg border px-3 py-2 text-xs leading-relaxed", inner)}>
              <span className={cn("mr-2 font-mono", accent)} aria-hidden>
                &rarr;
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className={cn("mt-3 border-t pt-3 text-xs leading-relaxed", ink ? "border-white/10" : "border-[rgba(23,19,31,0.10)]", bodyTone)}>
          {authorityLine}
        </p>
      </div>

      {/* Looped's own connected execution into the systems the customer runs */}
      <div className="flex items-center justify-between gap-4 px-1 pt-3">
        <span className={cue}>
          <span className={accent} aria-hidden>
            &uarr;{" "}
          </span>
          Signals
        </span>
        <span className={cue}>
          Permitted actions{" "}
          <span className={accent} aria-hidden>
            &darr;
          </span>
        </span>
      </div>
      <Flow stroke={stroke} />

      {/* Tier 3 — the systems that stay the customer's own */}
      <div className={cn("rounded-xl border px-4 py-4", inner)}>
        <p className={cn("font-mono text-[0.6rem] uppercase tracking-[0.16em]", label)}>{systemsLabel}</p>
        <Chips items={systemsItems} chipClass={chip} />
      </div>

      {caption ? (
        <figcaption className={cn("mt-4 border-t pt-3 text-xs leading-relaxed", ink ? "border-white/10 text-bone-dim" : "border-[rgba(23,19,31,0.08)] text-muted-ink")}>
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
