"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** The authority model, in the four words an organiser actually thinks in. */
const AUTHORITY = [
  { name: "See", body: "What Looped is allowed to understand about your events, your systems and the people around them." },
  { name: "Prepare", body: "What it can research, draft and get ready, so the work is waiting rather than starting from nothing." },
  { name: "Act", body: "What it can carry out on its own, inside rules you have already set for that organisation, event and kind of action." },
  { name: "Ask", body: "What always comes back to a person first, however routine the rest of the job has become." },
];

export function HumanJudgementSection(): React.ReactElement {
  return (
    <Panel tone="night" kicker="Human judgement">
      <Reveal className="max-w-4xl">
        <h2 className="text-balance display-section">Some work needs AI. Some decisions need people.</h2>
        <div className="mt-6 max-w-3xl space-y-5 text-base leading-relaxed text-mist sm:text-lg">
          <p>
            Great event teams do not lack judgement. They lack a complete view, and they lose their week to the work
            that surrounds a decision. Looped is not built to take the judgement out of events. It is built to take that
            surrounding work off the desk.
          </p>
          <p>
            The information behind a decision is usually spread across systems, meetings, spreadsheets and people&apos;s
            heads. A speaker confirms. A sponsor changes direction. A campaign starts underperforming. Entries are
            extended. A competitor moves. The implications rarely reach everyone at the same time.
          </p>
          <p>
            Looped keeps that picture current, connects what changed and puts the right context in front of the person
            making the call. Then it carries out what that person approves, and tells them what actually happened.
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
            The connected context, the evidence, the recommendation and the follow-through to a verified result.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <h3 className="max-w-3xl text-balance font-serif text-3xl leading-tight text-snow sm:text-4xl">
          You set the boundaries. <span className="text-lavender">Looped works inside them.</span>
        </h3>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-mist sm:text-lg">
          Looped is genuinely capable of acting. That is exactly why the limits matter, and why you draw them rather
          than us. Authority can differ by organisation, by event, by person and by the kind of action in question, and
          it is yours to widen or narrow as trust builds.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {AUTHORITY.map((a, i) => (
          <Reveal key={a.name} delay={i * 0.05} className="rounded-2xl border border-white/10 bg-night-raised p-6">
            <p className="font-serif text-2xl leading-snug text-snow">{a.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-mist">{a.body}</p>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist sm:text-lg">
          Routine work can run on its own inside those rules. Consequential decisions can always stay with people. And
          if Looped cannot establish that an action is allowed, or cannot confirm that it worked, it stops and surfaces
          the exception. It never guesses, and it never records an attempt as a result.
        </p>
      </Reveal>

      <Reveal>
        <p className="mx-auto mt-14 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-snow sm:text-3xl">
          The point isn&apos;t to remove people from events. It&apos;s to make more of their time worth being human.
        </p>
      </Reveal>
    </Panel>
  );
}
