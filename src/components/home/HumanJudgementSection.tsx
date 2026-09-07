"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

export function HumanJudgementSection(): React.ReactElement {
  return (
    <Panel tone="night" index="06" kicker="Human judgement">
      <Reveal className="max-w-4xl">
        <h2 className="text-balance display-section">Great event teams do not lack judgement. They lack a complete view.</h2>
        <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-mist sm:text-lg">
          <p>
            Event professionals are already making dozens of decisions every week across audience, content, commercial
            and delivery.
          </p>
          <p>
            The problem is that the information behind those decisions is often spread across systems, meetings,
            spreadsheets and people&apos;s heads. A speaker confirms. A sponsor changes direction. A campaign starts
            underperforming. Entries are extended. A competitor moves. The implications rarely reach everyone at the same
            time.
          </p>
          <p>
            Looped keeps that picture current, connects what changed and puts the right context in front of the person
            making the decision.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-2xl border border-white/10 bg-night-raised p-7">
          <p className="kicker text-lavender">People bring</p>
          <p className="mt-5 font-serif text-2xl leading-snug text-snow">
            The judgement, creativity, relationships and market knowledge.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="rounded-2xl border border-pink/50 bg-[rgba(167,139,219,0.08)] p-7 shadow-[var(--lavender-emph)]">
          <p className="kicker text-lavender">Looped brings</p>
          <p className="mt-5 font-serif text-2xl leading-snug text-snow">
            The connected context, live intelligence, coordination and follow-through.
          </p>
        </Reveal>
      </div>

      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-snow sm:text-3xl">
          Better information. Better timing. Better judgement.
        </p>
      </Reveal>
    </Panel>
  );
}
