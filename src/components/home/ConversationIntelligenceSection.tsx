"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { OnwardLink } from "@/components/ui/OnwardLink";

/** What an exchange leaves behind. */
const SIGNALS = [
  "Demand",
  "Confusion",
  "Intent",
  "Conversion friction",
  "Content interest",
  "Sponsor needs",
  "Participant needs",
  "Recurring questions",
];

/**
 * The lifecycle as the consequence of the proposition above it, not a taxonomy
 * beside it: an editorial run that reads top to bottom as one argument.
 */
const LIFECYCLE = [
  {
    name: "Before",
    body: "A question asked before anyone has booked is a conversion signal. What people cannot find, what they ask twice and what makes them hesitate sharpens the campaign, the programme, the commercial pitch and the onboarding that follows.",
  },
  {
    name: "During",
    body: "On the day, what people need and what has just changed tells your team where attention is required, and tells Looped what it is authorised to do about it.",
  },
  {
    name: "After",
    body: "Outcomes, fulfilment, feedback and behaviour do not close the file. They are the evidence the next decision starts from, and the reason the next edition begins ahead of this one.",
  },
];

export function ConversationIntelligenceSection(): React.ReactElement {
  return (
    <Panel tone="stone" kicker="Conversations become intelligence">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Every useful conversation can become intelligence.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            A good answer helps one person. What that exchange revealed should help the whole event. Looped turns the
            appropriate parts of an interaction into structured signals, so what someone asked for, where they got stuck
            and what they were really looking for does not disappear into a transcript nobody reads.
          </p>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Those signals join the same picture your teams already work from. Within your boundaries: what Looped may
            retain is governed like any other authority you set, your intelligence is held for your business, and
            nothing learned on your events informs anyone else&rsquo;s.
          </p>
        </Reveal>
      </div>

      <RevealStagger className="mt-10 flex flex-wrap gap-2">
        {SIGNALS.map((s) => (
          <RevealItem key={s} className="rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-sm font-medium text-slate">
            {s}
          </RevealItem>
        ))}
      </RevealStagger>

      <Reveal className="mt-14">
        <p className="max-w-3xl font-serif text-2xl italic leading-snug text-grad sm:text-3xl">
          What Looped learns in one moment can matter in the next.
        </p>
        <div className="mt-8 border-t border-hairline">
          {LIFECYCLE.map((l) => (
            <div key={l.name} className="grid gap-2 border-b border-hairline py-7 sm:grid-cols-[7rem_1fr] sm:gap-10">
              <p className="kicker text-purple">{l.name}</p>
              <p className="max-w-3xl text-base leading-relaxed text-slate sm:text-lg">{l.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
          The value isn&apos;t what Looped can show you in one session.{" "}
          <span className="text-grad">It&apos;s what it knows by the next one.</span>
        </p>
      </Reveal>
      <Reveal className="mt-10">
        <OnwardLink href="/platform/communications">One journey across every channel</OnwardLink>
      </Reveal>
    </Panel>
  );
}
