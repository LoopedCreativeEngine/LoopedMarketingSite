import { LoopMark } from "@/components/brand/LoopMark";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/**
 * The single closing conversion block. One per page, at the end, in the same
 * ink-plate treatment as the homepage founder note so the site closes the same
 * way everywhere. The line above the buttons is page-specific, not generic.
 */
export function ClosingCTA({
  title,
  body,
  primary = { href: "/demo", label: "Apply to pilot" },
  secondary = { href: "/demo", label: "Join the waitlist" },
}: {
  title: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string } | null;
}): React.ReactElement {
  return (
    <section className="on-ink relative overflow-hidden bg-ink py-24 text-bone-dim sm:py-28">
      <LoopMark
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/2 h-[22rem] w-[22rem] -translate-y-1/2 text-iris opacity-[0.06]"
      />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl italic leading-snug text-bone-text sm:text-4xl">
            {title}
          </h2>
          {body ? <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed">{body}</p> : null}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href={primary.href} tone="ink">
              {primary.label}
            </CtaButton>
            {secondary ? (
              <CtaButton href={secondary.href} variant="secondary" tone="ink">
                {secondary.label}
              </CtaButton>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
