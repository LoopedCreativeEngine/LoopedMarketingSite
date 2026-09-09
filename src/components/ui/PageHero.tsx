import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
import { PageContents, type ContentsItem } from "@/components/ui/PageContents";
import { cn } from "@/lib/cn";

/**
 * The one hero treatment every interior page uses, so the site reads as one
 * publication rather than a set of landing pages. Kicker, single H1, a
 * value-proposition standfirst above the fold, then the page's own CTA pair.
 * `aside` takes the page's product visual and sits alongside on large screens.
 */
type PageHeroProps = {
  kicker: string;
  title: string;
  /** The above-fold value proposition. One or two sentences. */
  lede: string;
  /** Optional second paragraph for pages that need a beat more context. */
  support?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  aside?: React.ReactNode;
  /** The page's movements, rendered as a run-of-show index beside the hero. */
  contents?: ContentsItem[];
  className?: string;
};

export function PageHero({
  kicker,
  title,
  lede,
  support,
  primaryCta = { href: "/demo", label: "Apply to pilot" },
  secondaryCta,
  aside,
  contents,
  className,
}: PageHeroProps): React.ReactElement {
  const side = aside ?? (contents ? <PageContents items={contents} label={`${title} page contents`} /> : null);
  const wide = Boolean(aside);

  return (
    <section className={cn("bg-bone pt-28 sm:pt-32", className)}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className={cn("grid gap-12", side ? "lg:grid-cols-12 lg:gap-14" : undefined, wide && "lg:items-center")}>
          <Reveal className={side ? (wide ? "lg:col-span-6" : "lg:col-span-7") : "max-w-3xl"}>
            <p className="kicker text-violet">{kicker}</p>
            <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink-text sm:text-5xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-graphite">{lede}</p>
            {support ? <p className="mt-4 max-w-2xl text-base leading-relaxed text-graphite">{support}</p> : null}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <CtaButton href={primaryCta.href}>{primaryCta.label}</CtaButton>
              {secondaryCta ? (
                <CtaButton href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </CtaButton>
              ) : null}
            </div>
          </Reveal>

          {side ? (
            <Reveal className={cn(wide ? "lg:col-span-6" : "lg:col-span-5 lg:pt-3")}>{side}</Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
