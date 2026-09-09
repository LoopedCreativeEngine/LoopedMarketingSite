import { cn } from "@/lib/cn";

/**
 * The chain that turns intelligence into the working environment around an
 * event: research through to action, threaded by one violet line. Horizontal
 * on desktop, a threaded vertical run on mobile. Deliberately an abstraction —
 * labels and outputs, never a mocked-up screen.
 */
export type ChainStep = {
  label: string;
  /** What actually comes out of this stage, in the customer's words. */
  output: string;
};

export function ChainFlow({
  steps,
  tone = "light",
  className,
}: {
  steps: ChainStep[];
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ink = tone === "ink";

  const card = ink
    ? "border-white/10 bg-ink-raised"
    : "border-[rgba(23,19,31,0.12)] bg-paper shadow-[var(--lift-light)]";
  const labelTone = ink ? "text-bone-text" : "text-ink-text";
  const bodyTone = ink ? "text-bone-dim" : "text-graphite";
  const indexTone = ink ? "text-iris" : "text-violet";
  const thread = ink ? "bg-iris/30" : "bg-violet/25";
  const nodeRing = ink ? "border-iris/60 bg-ink" : "border-violet/50 bg-bone";

  return (
    <div className={cn("relative", className)}>
      {/* the thread — vertical on mobile, horizontal from md */}
      <div className={cn("absolute left-[15px] top-2 bottom-2 w-px md:hidden", thread)} aria-hidden />
      <div className={cn("absolute left-0 right-0 top-[15px] hidden h-px md:block", thread)} aria-hidden />

      <ol className="relative grid gap-5 md:grid-cols-3 md:gap-x-5 md:gap-y-9 lg:grid-cols-6">
        {steps.map((step, index) => (
          <li key={step.label} className="relative flex gap-4 md:block">
            <span
              className={cn(
                "flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full border font-mono text-[0.62rem]",
                nodeRing,
                indexTone,
              )}
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className={cn("flex-1 rounded-xl border p-4 md:mt-5", card)}>
              <p className={cn("font-serif text-lg tracking-tight", labelTone)}>{step.label}</p>
              <p className={cn("mt-1.5 text-xs leading-relaxed", bodyTone)}>{step.output}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
