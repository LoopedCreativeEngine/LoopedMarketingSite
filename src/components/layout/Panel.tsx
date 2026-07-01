import { cn } from "@/lib/cn";

/**
 * A page panel. The homepage alternates `bone`/`paper` (light paper) with
 * `ink` (near-black plates) so it reads as a sequence of programme spreads,
 * never one long column. An optional run-of-show index + kicker labels each
 * movement, mono and tracked, like an agenda.
 */
type PanelProps = {
  tone?: "bone" | "paper" | "ink";
  id?: string;
  /** Run-of-show number, e.g. "02". */
  index?: string;
  /** Short mono label, e.g. "Why now". */
  kicker?: string;
  width?: "narrow" | "default" | "wide";
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
};

const WIDTHS: Record<NonNullable<PanelProps["width"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Panel({
  tone = "bone",
  id,
  index,
  kicker,
  width = "default",
  className,
  containerClassName,
  children,
}: PanelProps): React.ReactElement {
  const ink = tone === "ink";
  const toneClass = ink
    ? "on-ink bg-ink text-bone-dim"
    : tone === "paper"
      ? "bg-paper text-graphite"
      : "bg-bone text-graphite";

  return (
    <section
      id={id}
      className={cn("relative py-20 sm:py-28", id ? "scroll-mt-24" : undefined, toneClass, className)}
    >
      <div className={cn("mx-auto px-5 sm:px-6 lg:px-8", WIDTHS[width], containerClassName)}>
        {index || kicker ? (
          <div className="mb-10 flex items-center gap-3">
            <span className={cn("h-px w-8", ink ? "bg-iris/60" : "bg-violet/50")} aria-hidden />
            {index ? <span className={cn("kicker", ink ? "text-iris" : "text-violet")}>{index}</span> : null}
            {kicker ? (
              <span className={cn("kicker", ink ? "text-bone-dim" : "text-muted-ink")}>{kicker}</span>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
