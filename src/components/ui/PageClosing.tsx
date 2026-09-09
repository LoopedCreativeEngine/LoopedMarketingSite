import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

export type ContinueLink = { href: string; label: string; blurb: string };

/**
 * How every deeper page ends: where to go next, then the same closing line and
 * the same CTA pair as the Platform page. One conversion path, repeated
 * consistently, never a second competing offer.
 */
export function PageClosing({
  continueLinks,
  line,
}: {
  continueLinks: ContinueLink[];
  /** The page-specific closing thought, set in display italic. */
  line: string;
}): React.ReactElement {
  return (
    <>
      <div className="mx-auto mt-16 max-w-6xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-muted">Continue</p>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {continueLinks.map((link) => (
            <Reveal key={link.href}>
              <Link
                href={link.href}
                className="group block rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)] transition-colors hover:border-purple/40"
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-serif text-xl text-ink transition-colors group-hover:text-purple">
                    {link.label}
                  </span>
                  <span className="text-purple transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    &rarr;
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-slate">{link.blurb}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-serif text-2xl italic text-ink sm:text-3xl">{line}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/waitlist">Join the waitlist</CtaButton>
            <CtaButton href="/demo" variant="secondary">
              See Looped in action
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </>
  );
}
