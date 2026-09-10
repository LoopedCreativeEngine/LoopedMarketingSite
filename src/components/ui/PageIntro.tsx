import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/**
 * The interior-page opening, and the top of the site's type ladder.
 *
 * One hierarchy, used everywhere, so size always means level and never
 * emphasis:
 *
 *   H1      font-serif, text-4xl / sm:text-6xl
 *   Lead    text-lg / sm:text-xl        one paragraph, the proposition
 *   H2      display-section             a section
 *   H3      font-serif text-xl          a card or sub-section
 *   Body    text-base / sm:text-lg      section copy
 *   Small   text-sm                     card copy and captions
 *
 * Emphasis comes from the brand gradient on a short phrase, not from a larger
 * font size.
 */
export function PageIntro({
  kicker,
  title,
  lead,
  support,
}: {
  kicker: string;
  title: string;
  /** The proposition, in one paragraph. */
  lead: string;
  /** Optional body paragraph where the page needs one more beat. */
  support?: string;
}): React.ReactElement {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
      <Reveal>
        <p className="kicker text-purple">{kicker}</p>
        <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate sm:text-xl">{lead}</p>
        {support ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">{support}</p>
        ) : null}
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <CtaButton href="/waitlist">Join the waitlist</CtaButton>
          <CtaButton href="/demo" variant="secondary">
            See Looped in action
          </CtaButton>
        </div>
      </Reveal>
    </div>
  );
}
