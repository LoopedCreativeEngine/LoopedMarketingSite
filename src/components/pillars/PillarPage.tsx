import { Check } from "lucide-react";

import { MediaFrame } from "@/components/media/MediaFrame";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

type PillarPageProps = {
  title: string;
  tensionStatement: string;
  seatLine: string;
  challenges: string[];
  howItWorks: string[];
  deliverables: string[];
  connects: string;
};

function SectionLabel({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-8 bg-purple/50" aria-hidden />
      <span className="kicker text-muted">{children}</span>
    </div>
  );
}

export function PillarPage({
  title,
  tensionStatement,
  seatLine,
  challenges,
  howItWorks,
  deliverables,
  connects,
}: PillarPageProps): React.ReactElement {
  return (
    <div className="bg-paper pb-24 pt-28 sm:pt-32">
      {/* hero */}
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <p className="kicker text-purple">Pillar</p>
            <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl font-serif text-2xl italic leading-snug text-purple sm:text-3xl">
              {tensionStatement}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">{seatLine}</p>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <MediaFrame variant="browser" tone="light" tag={title} aspect="4 / 3" label={`${title} workspace`} />
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel>What your team deals with</SectionLabel>
          <div className="space-y-4">
            {challenges.map((p) => (
              <p key={p} className="text-base leading-relaxed text-slate">
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16">
          <SectionLabel>How Looped works for you</SectionLabel>
          <div className="space-y-4">
            {howItWorks.map((p) => (
              <p key={p} className="text-base leading-relaxed text-slate">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      {/* deliverables — inset ink plate for rhythm */}
      <div className="mx-auto mt-16 max-w-5xl px-5 sm:px-6 lg:px-8">
        <Reveal className="on-night rounded-3xl bg-night p-8 shadow-[var(--lift-ink)] sm:p-12">
          <SectionLabel>What you get</SectionLabel>
          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {deliverables.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-mist">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-lavender" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <SectionLabel>How it connects</SectionLabel>
          <p className="text-base leading-relaxed text-slate">{connects}</p>
        </Reveal>

        <Reveal className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <CtaButton href="/demo">Join the waitlist</CtaButton>
          <CtaButton href="/#what-it-does" variant="secondary">See Looped in action</CtaButton>
        </Reveal>
      </div>
    </div>
  );
}
