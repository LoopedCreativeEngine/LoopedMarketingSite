import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/**
 * The interior-page opening, matching the Platform page: mono kicker, a large
 * Newsreader headline, the proposition, then the site's one CTA pair. Every
 * deeper page opens the same way so the set reads as one publication.
 */
export function PageIntro({
  kicker,
  title,
  lede,
  support,
}: {
  kicker: string;
  title: string;
  lede: string;
  /** An optional second paragraph where the page needs one more beat. */
  support?: string;
}): React.ReactElement {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
      <Reveal>
        <p className="kicker text-purple">{kicker}</p>
        <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate sm:text-lg">{lede}</p>
        {support ? <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate">{support}</p> : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <CtaButton href="/waitlist">Join the waitlist</CtaButton>
          <CtaButton href="/demo" variant="secondary">
            See Looped in action
          </CtaButton>
        </div>
      </Reveal>
    </div>
  );
}
