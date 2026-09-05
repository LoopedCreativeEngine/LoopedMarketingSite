import { cn } from "@/lib/cn";

/**
 * Framed product placeholder. Renders browser / app / video chrome around a
 * clearly-labelled slot so real screenshots or footage swap straight in later
 * (search `data-media-slot`). The default fill is an abstract UI schematic —
 * shapes only, never invented figures — so nothing here reads as a claim.
 */
type MediaFrameProps = {
  /** What the real media will show. Rendered as the slot caption. */
  label: string;
  /** Small mono tag, e.g. "Preview", "Live feed". */
  tag?: string;
  variant?: "browser" | "app" | "video";
  tone?: "light" | "ink";
  /** CSS aspect-ratio, e.g. "16 / 10". */
  aspect?: string;
  className?: string;
  /** Real media to render in place of the schematic, once available. */
  children?: React.ReactNode;
};

export function MediaFrame({
  label,
  tag = "Preview",
  variant = "browser",
  tone = "light",
  aspect = "16 / 10",
  className,
  children,
}: MediaFrameProps): React.ReactElement {
  const ink = tone === "ink";

  const shell = ink
    ? "border-white/10 bg-night-raised shadow-[var(--lift-ink)]"
    : "border-[rgba(15,23,42,0.10)] bg-stone shadow-[var(--lift-light)]";
  const chrome = ink ? "border-white/10 bg-black/25" : "border-[rgba(15,23,42,0.08)] bg-stone-deep/60";
  const dot = ink ? "bg-white/20" : "bg-[rgba(15,23,42,0.18)]";
  const pill = ink ? "bg-white/10 text-mist" : "bg-[rgba(15,23,42,0.05)] text-muted";
  const body = ink ? "bg-night" : "bg-paper";
  const shape = ink ? "bg-white/[0.06]" : "bg-[rgba(15,23,42,0.05)]";
  const shapeStrong = ink ? "bg-pink/25" : "bg-purple/15";
  const captionTone = ink ? "text-mist" : "text-muted";

  return (
    <figure
      data-media-slot={label}
      className={cn("overflow-hidden rounded-2xl border", shell, className)}
    >
      {/* chrome bar */}
      <div className={cn("flex items-center gap-2 border-b px-4 py-2.5", chrome)}>
        {variant === "browser" ? (
          <>
            <span className="flex gap-1.5" aria-hidden>
              <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
              <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
              <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
            </span>
            <span className={cn("ml-2 flex-1 truncate rounded-md px-3 py-1 font-mono text-[0.62rem] tracking-wide", pill)}>
              app.looped.example
            </span>
          </>
        ) : (
          <>
            <span className="flex gap-1.5" aria-hidden>
              <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
              <span className={cn("h-2.5 w-2.5 rounded-full", dot)} />
            </span>
            <span className={cn("ml-1 rounded-md px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em]", pill)}>
              {variant === "video" ? "Walkthrough" : "Looped"}
            </span>
          </>
        )}
        <span className={cn("ml-auto kicker text-[0.6rem]", ink ? "text-lavender/80" : "text-purple/70")}>{tag}</span>
      </div>

      {/* body */}
      <div className={cn("relative w-full", body)} style={{ aspectRatio: aspect }}>
        {children ?? (
          <div className="absolute inset-0 p-4 sm:p-5">
            {variant === "video" ? (
              <div className="flex h-full items-center justify-center">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-purple text-snow shadow-[0_10px_30px_-8px_rgba(124,58,237,0.6)]"
                  aria-hidden
                >
                  <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            ) : (
              <div className="flex h-full gap-4">
                {/* rail */}
                <div className="hidden w-1/5 flex-col gap-2 sm:flex" aria-hidden>
                  <div className={cn("h-2 w-3/4 rounded-full", shapeStrong)} />
                  <div className={cn("h-2 w-full rounded-full", shape)} />
                  <div className={cn("h-2 w-2/3 rounded-full", shape)} />
                  <div className={cn("mt-auto h-2 w-1/2 rounded-full", shape)} />
                </div>
                {/* main */}
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex gap-3">
                    <div className={cn("h-16 flex-1 rounded-lg", shape)} />
                    <div className={cn("h-16 flex-1 rounded-lg", shape)} />
                    <div className={cn("hidden h-16 flex-1 rounded-lg sm:block", shapeStrong)} />
                  </div>
                  <div className={cn("flex-1 rounded-lg", shape)} />
                  <div className="flex h-14 items-end gap-1.5 sm:h-16" aria-hidden>
                    {[40, 62, 48, 74, 58, 88, 70].map((h, i) => (
                      <div
                        key={i}
                        className={cn("flex-1 rounded-sm", i === 5 ? shapeStrong : shape)}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* slot caption */}
        <figcaption
          className={cn(
            "pointer-events-none absolute bottom-3 left-4 right-4 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.16em]",
            captionTone,
          )}
        >
          <span className={cn("inline-block h-1.5 w-1.5 shrink-0 rounded-full", ink ? "bg-pink" : "bg-purple")} aria-hidden />
          <span className="truncate">{label}</span>
        </figcaption>
      </div>
    </figure>
  );
}
