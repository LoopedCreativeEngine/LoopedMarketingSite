"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

/** What an exchange leaves behind, and the lifecycle it accumulates across. */
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

const LIFECYCLE = [
  {
    name: "Before",
    body: "Audience, commercial, programme, onboarding, entries, and the readiness of everyone taking part.",
  },
  {
    name: "During",
    body: "Live support, event context, operational guidance, participant needs, and the changes that need someone's attention now.",
  },
  {
    name: "After",
    body: "Outcomes, fulfilment, feedback, content, and the portfolio intelligence the next edition starts from.",
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
            A good answer helps one person. What that exchange revealed should help the whole event. Looped can turn the
            appropriate parts of an interaction into structured signals, so what people asked for, where they got stuck
            and what they were really looking for does not disappear into a transcript nobody reads.
          </p>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Those signals join the same picture your teams already work from, and sharpen the next recommendation, the
            next decision and the next edition. Within your boundaries: what Looped may retain is governed like any other
            authority you set, your intelligence is held for your business, and nothing learned on your events informs
            anyone else&rsquo;s.
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

      <Reveal className="mt-12">
        <p className="kicker text-muted">Across the whole lifecycle</p>
        <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-3">
          {LIFECYCLE.map((l, i) => (
            <div key={l.name} className="border-t border-hairline pt-4">
              <dt className="flex items-center gap-2.5 text-base font-semibold text-ink">
                <span className="h-2 w-2 rounded-full" style={{ background: ["#7c3aed", "#ec4899", "#fb923c"][i] }} aria-hidden />
                {l.name}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-slate">{l.body}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
          The value isn&apos;t what Looped can show you in one session.{" "}
          <span className="text-grad">It&apos;s what it knows by the next one.</span>
        </p>
      </Reveal>
    </Panel>
  );
}
