import { MediaFrame } from "@/components/media/MediaFrame";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

export type PillarExample = { signal: string; insight: string; action: string };

type PillarPageProps = {
  /** Pillar name shown as the kicker, e.g. "Marketing / Audience". */
  kicker: string;
  title: string;
  tension: string;
  seatLine: string;
  sees: string[];
  decisions: string[];
  afterApproval: string[];
  examples: PillarExample[];
  connects: string;
};

function ListCard({ label, color, items }: { label: string; color: string; items: string[] }): React.ReactElement {
  return (
    <div className="rounded-2xl border border-hairline bg-paper p-6 shadow-[var(--lift-light)]">
      <p className="flex items-center gap-2 kicker text-muted">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} aria-hidden />
        {label}
      </p>
      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-slate">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5">
            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: color }} aria-hidden />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PillarPage({
  kicker,
  title,
  tension,
  seatLine,
  sees,
  decisions,
  afterApproval,
  examples,
  connects,
}: PillarPageProps): React.ReactElement {
  return (
    <div className="bg-paper pb-8 pt-28 sm:pt-32">
      {/* 1. role-specific hero */}
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-7">
            <p className="kicker text-purple">{kicker}</p>
            <h1 className="mt-4 font-serif text-5xl tracking-tight text-ink sm:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl font-serif text-2xl italic leading-snug text-grad sm:text-3xl">{tension}</p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate">{seatLine}</p>
          </Reveal>
          <Reveal className="lg:col-span-5">
            <MediaFrame variant="browser" tone="light" tag={kicker} aspect="4 / 3" label={`${title} workspace`} />
          </Reveal>
        </div>
      </div>

      {/* 2-4. see / decide / after approval */}
      <Panel tone="stone" kicker="How Looped works for you">
        <div className="grid gap-4 lg:grid-cols-3">
          <ListCard label="What Looped helps you see" color="#7c3aed" items={sees} />
          <ListCard label="What it helps you decide" color="#ec4899" items={decisions} />
          <ListCard label="What Looped can do once you approve" color="#fb923c" items={afterApproval} />
        </div>
      </Panel>

      {/* 5. illustrative intelligence examples */}
      <Panel tone="paper" kicker="Illustrative Looped intelligence">
        <div className="grid gap-4 md:grid-cols-2">
          {examples.map((e) => (
            <Reveal key={e.signal} className="rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)] sm:p-7">
              <p className="font-serif text-xl leading-snug text-ink">{e.signal}</p>
              <p className="mt-4 flex items-center gap-2 kicker text-muted">
                <span className="h-2 w-2 rounded-full bg-pink" aria-hidden /> Why it matters
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">{e.insight}</p>
              <p className="mt-4 flex items-center gap-2 kicker text-muted">
                <span className="h-2 w-2 rounded-full bg-orange" aria-hidden /> What Looped can do
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate">{e.action}</p>
            </Reveal>
          ))}
        </div>
      </Panel>

      {/* 6. how this connects with other teams + 7. CTA */}
      <div className="mx-auto mt-4 max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-purple/50" aria-hidden />
            <span className="kicker text-muted">How this connects with other teams</span>
          </div>
          <p className="text-base leading-relaxed text-slate">{connects}</p>
        </Reveal>

        <Reveal className="mt-12 flex flex-col gap-3 border-t border-hairline pt-10 sm:flex-row sm:gap-4">
          <CtaButton href="/demo">Join the waitlist</CtaButton>
          <CtaButton href="/#what-it-does" variant="secondary">See Looped in action</CtaButton>
        </Reveal>
      </div>
    </div>
  );
}
