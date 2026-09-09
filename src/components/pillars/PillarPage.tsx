import { Check } from "lucide-react";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CapabilityGrid, type Capability } from "@/components/product/CapabilityGrid";
import { ClosingCTA } from "@/components/ui/ClosingCTA";
import { CtaButton } from "@/components/ui/CtaButton";
import { ExploreNext, type ExploreLink } from "@/components/ui/ExploreNext";
import { PageContents } from "@/components/ui/PageContents";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * The shared pillar template.
 *
 * Every pillar reads to the same rhythm, so a buyer comparing two teams is
 * comparing like with like: what Looped understands, the hub the team works
 * in, what it produces, what it can help execute, what it watches, what it
 * learns, and how it connects to the rest of the event. Each pillar supplies
 * its own product visual, and may add one bespoke section of its own.
 */
type PillarPageProps = {
  title: string;
  /** The hook: one line of tension, set in display italic. */
  tensionStatement: string;
  /** Who this page is for. */
  seatLine: string;
  challenges: string[];
  understands: Capability[];
  /** The team's working hub: heading, framing, and the page's product visual. */
  hub: { heading: string; lede: string; visual: React.ReactNode; note?: string };
  produces: string[];
  executes: Capability[];
  watches: string[];
  learns: string[];
  connects: string;
  /** Optional bespoke panel, rendered after execution. Supply a full Panel. */
  extra?: React.ReactNode;
  explore: ExploreLink[];
  closing: { title: string; body: string };
};

/** The page's own run of show, so a buyer can jump to the part they came for. */
const MOVEMENTS: { id: string; label: string }[] = [
  { id: "challenges", label: "What your team deals with" },
  { id: "understands", label: "What Looped understands" },
  { id: "hub", label: "Your working hub" },
  { id: "produces", label: "What Looped produces" },
  { id: "executes", label: "What Looped can help execute" },
  { id: "watching", label: "What it watches and learns" },
  { id: "connects", label: "How this connects" },
];

export function PillarPage({
  title,
  tensionStatement,
  seatLine,
  challenges,
  understands,
  hub,
  produces,
  executes,
  watches,
  learns,
  connects,
  extra,
  explore,
  closing,
}: PillarPageProps): React.ReactElement {
  let step = 0;
  const next = (): string => String(++step).padStart(2, "0");

  return (
    <>
      {/* hero */}
      <section className="bg-bone pt-28 sm:pt-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <p className="kicker text-violet">Pillar</p>
              <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink-text sm:text-6xl">{title}</h1>
              <p className="mt-6 text-pretty font-serif text-2xl italic leading-snug text-violet sm:text-3xl">
                {tensionStatement}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-graphite">{seatLine}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <CtaButton href="/demo">Apply to pilot</CtaButton>
                <CtaButton href="/platform" variant="secondary">
                  See the platform
                </CtaButton>
              </div>
            </Reveal>

            {/* run of show */}
            <Reveal className="lg:col-span-5 lg:pt-3">
              <PageContents items={MOVEMENTS} label={`${title} page contents`} />
            </Reveal>
          </div>
        </div>
      </section>

      <Panel tone="ink" id="challenges" index={next()} kicker="What your team deals with">
        <div className="max-w-3xl space-y-5">
          {challenges.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.05}>
              <p className="text-base leading-relaxed text-bone-dim sm:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </Panel>

      <Panel tone="bone" id="understands" index={next()} kicker="What Looped understands">
        <SectionHeading
          title="The context this team never has time to rebuild."
          lede="Held against the event, kept current, and available to everyone who needs it without a briefing meeting."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={understands} />
        </Reveal>
      </Panel>

      <Panel tone="paper" id="hub" index={next()} kicker="Your working hub">
        <SectionHeading title={hub.heading} lede={hub.lede} />
        <Reveal className="mt-12">{hub.visual}</Reveal>
        {hub.note ? (
          <Reveal className="mt-8">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-ink">{hub.note}</p>
          </Reveal>
        ) : null}
      </Panel>

      <Panel tone="ink" id="produces" index={next()} kicker="What Looped produces">
        <SectionHeading
          tone="ink"
          title="The deliverables, not the promise of them."
          lede="Real outputs your team reviews, edits and approves. Nothing here leaves the platform without someone saying yes."
        />
        <Reveal className="mt-12">
          <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {produces.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-bone-dim">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-iris" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Panel>

      <Panel tone="bone" id="executes" index={next()} kicker="What Looped can help execute">
        <SectionHeading
          title="Where the work actually gets done."
          lede="With your approval, and inside whatever limits your organisation has set."
        />
        <Reveal className="mt-12">
          <CapabilityGrid items={executes} />
        </Reveal>
      </Panel>

      {extra}

      <Panel tone="paper" id="watching" index={next()} kicker="Watching and learning">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-serif text-3xl tracking-tight text-ink-text sm:text-4xl">What Looped watches</h2>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              Continuously, in the background, so a problem reaches you while it is still cheap to fix.
            </p>
            <ul className="mt-8 space-y-3">
              {watches.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/60" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-serif text-3xl tracking-tight text-ink-text sm:text-4xl">What Looped learns</h2>
            <p className="mt-4 text-base leading-relaxed text-graphite">
              Kept against the event rather than in someone&rsquo;s head, so the next edition starts further ahead.
            </p>
            <ul className="mt-8 space-y-3">
              {learns.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/60" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Panel>

      <Panel tone="bone" id="connects" index={next()} kicker="How this connects" width="narrow">
        <Reveal>
          <h2 className="font-serif text-3xl tracking-tight text-ink-text sm:text-4xl">
            How this connects to the rest of the event.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-graphite sm:text-lg">{connects}</p>
        </Reveal>
      </Panel>

      <ExploreNext links={explore} tone="paper" />

      <ClosingCTA title={closing.title} body={closing.body} />
    </>
  );
}
