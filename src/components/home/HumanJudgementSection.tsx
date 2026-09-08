"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** What your organisation decides Looped may do, in plain language. */
const AUTHORITY = [
  { name: "Observe", body: "What Looped may see across your events and the systems you connect to it." },
  { name: "Prepare", body: "What it may draft, plan and get ready for a person to look at." },
  { name: "Act within your rules", body: "What it may carry out on its own, inside the boundaries set for that organisation, that event and that kind of action." },
  { name: "Ask first", body: "What always comes back for explicit approval before anything leaves your business." },
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

      <Reveal className="mt-12">
        <p className="kicker text-lavender">You set what Looped may do</p>
        <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {AUTHORITY.map((a) => (
            <div key={a.name} className="border-t border-white/12 pt-4">
              <dt className="text-base font-semibold text-snow">{a.name}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-mist">{a.body}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-mist sm:text-lg">
          Authority can be shaped by organisation, by event and by the kind of action in question. Where Looped cannot
          establish that an action is permitted, or cannot confirm it completed, it stops and surfaces the exception
          rather than guessing.
        </p>
      </Reveal>

      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-snow sm:text-3xl">
          The point isn&apos;t to remove people from events. It&apos;s to make more of their time worth being human.
        </p>
      </Reveal>
    </Panel>
  );
}
