import { cn } from "@/lib/cn";

/**
 * A page panel. The homepage is light — paper and stone — with night plates
 * reserved for the moments the brand marks as important. Each panel opens
 * with the kicker: a small gradient dot and a tracked mono label (RECOVERED).
 */
type PanelProps = {
  tone?: "paper" | "stone" | "night";
  id?: string;
  /** Run-of-show number, e.g. "02". */
  index?: string;
  /** Short mono label, e.g. "The problem". */
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
  tone = "paper",
  id,
  index,
  kicker,
  width = "default",
  className,
  containerClassName,
  children,
}: PanelProps): React.ReactElement {
  const night = tone === "night";
  const toneClass = night ? "on-night bg-night text-mist" : tone === "stone" ? "bg-stone text-slate" : "bg-paper text-slate";

  return (
    <section id={id} className={cn("relative py-20 sm:py-28", id ? "scroll-mt-24" : undefined, toneClass, className)}>
      <div className={cn("mx-auto px-5 sm:px-6 lg:px-8", WIDTHS[width], containerClassName)}>
        {index || kicker ? (
          <div className="mb-10 flex items-center gap-3.5">
            <span className="h-2.5 w-2.5 rounded-full bg-grad-dot" aria-hidden />
            {index ? <span className={cn("kicker", night ? "text-lavender" : "text-purple")}>{index}</span> : null}
            {kicker ? <span className={cn("kicker", night ? "text-lavender" : "text-muted")}>{kicker}</span> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
