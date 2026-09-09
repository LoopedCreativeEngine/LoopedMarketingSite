import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * A section's label + H2 + standfirst, in the run-of-show style used across
 * the site: a short violet rule, a mono kicker, then the heading.
 */
export function SectionHeading({
  kicker,
  title,
  lede,
  tone = "light",
  align = "left",
  className,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  tone?: "light" | "ink";
  align?: "left" | "center";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";
  const centered = align === "center";

  return (
    <Reveal className={cn(centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {kicker ? (
        <div className={cn("mb-5 flex items-center gap-3", centered && "justify-center")}>
          <span className={cn("h-px w-8", ink ? "bg-iris/60" : "bg-violet/50")} aria-hidden />
          <span className={cn("kicker", ink ? "text-bone-dim" : "text-muted-ink")}>{kicker}</span>
        </div>
      ) : null}
      <h2 className={cn("text-balance display-section", ink && "text-bone-text")}>{title}</h2>
      {lede ? (
        <p className={cn("mt-5 text-pretty text-base leading-relaxed sm:text-lg", ink ? "text-bone-dim" : "text-graphite")}>
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
