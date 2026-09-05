"use client";

import { Fragment } from "react";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

const BODY_PARAS = [
  `Every other option asks something of you: a tax to pay, a build to maintain, a cost to carry, or knowledge that walks out the door. This is the honest landscape, and where Looped lands on the axes that matter.`,
];

const CLOSING = `And unlike anything you build or stitch together yourself, Looped never stands still. It evolves as fast as AI does, so event organisers don't have to.`;

const AXES: { label: string; hint?: string }[] = [
  { label: "Time to value" },
  { label: "Context each time" },
  { label: "Connected to your data", hint: "CRM, bookings" },
  { label: "Proactive", hint: "live signals and feed" },
  { label: "Connected execution" },
  { label: "Intelligence across events" },
  { label: "Guardrails and legal compliance" },
  { label: "Keeps pace with AI advances" },
];

const APPROACHES = [
  {
    name: "Ad-hoc AI prompting",
    values: [
      "Instant but shallow",
      "Re-supplied every session",
      "No",
      "No, you ask and it answers",
      "Copy-paste",
      "Lost each session",
      "On you",
      "You chase it",
    ],
  },
  {
    name: "DIY connected agents",
    values: [
      "Weeks to wire up",
      "You build the memory",
      "Only if you build it",
      "Only if you build it",
      "Fragile, self-maintained",
      "Hard to retain",
      "On you",
      "You rebuild constantly",
    ],
  },
  {
    name: "Build in-house",
    values: [
      "Months to years",
      "You build the memory",
      "Only if you build it",
      "Only if you build it",
      "Only if you build it",
      "Possible, costly",
      "On you",
      "Ongoing cost, forever",
    ],
  },
  {
    name: "Agency / freelance",
    values: [
      "Per-brief lead time",
      "Re-briefed each time",
      "No",
      "No",
      "Manual handoff",
      "Walks out the door",
      "On them",
      "Varies",
    ],
  },
];

const LOOPED = {
  name: "Looped",
  values: [
    "Live across your events now",
    "Held permanently, per event",
    "Yes, by design",
    "Yes, it surfaces the moment it matters",
    "Built in, human-approved",
    "Compounds into an event brain",
    "Built in",
    "Self-evolving, kept ahead for you",
  ],
};

const MOBILE_COLUMNS = [
  { ...LOOPED, highlighted: true },
  ...APPROACHES.map((a) => ({ ...a, highlighted: false })),
];

export function TheShiftSection(): React.ReactElement {
  return (
    <Panel tone="paper" index="06" kicker="The shift">
      <Reveal className="max-w-4xl">
        <h2 className="text-balance display-section">Every other AI vendor makes your supplier list longer.</h2>
        <p className="mt-4 text-balance font-serif text-3xl italic leading-tight text-purple sm:text-4xl md:text-5xl">
          Looped is the first one that makes it shorter.
        </p>
      </Reveal>

      <Reveal className="mt-8 max-w-3xl space-y-4">
        {BODY_PARAS.map((para) => (
          <p key={para.slice(0, 24)} className="text-base leading-relaxed text-slate sm:text-lg">
            {para}
          </p>
        ))}
      </Reveal>

      {/* Desktop comparison table */}
      <Reveal className="mt-12 hidden overflow-hidden rounded-2xl border border-[rgba(15,23,42,0.12)] bg-stone shadow-[var(--lift-light)] lg:block">
        <div className="grid grid-cols-[minmax(9rem,1.3fr)_repeat(5,minmax(0,1fr))]">
          {/* header row */}
          <div className="border-b border-[rgba(15,23,42,0.08)] px-4 py-4" />
          {APPROACHES.map((approach) => (
            <div
              key={approach.name}
              className="border-b border-l border-[rgba(15,23,42,0.08)] px-3 py-4 text-sm font-medium text-muted"
            >
              {approach.name}
            </div>
          ))}
          <div className="bg-purple px-3 py-4 text-sm font-semibold text-snow">{LOOPED.name}</div>

          {/* data rows */}
          {AXES.map((axis, rowIndex) => {
            const isLast = rowIndex === AXES.length - 1;
            return (
              <Fragment key={axis.label}>
                <div className="border-b border-[rgba(15,23,42,0.06)] px-4 py-3.5">
                  <span className="text-sm font-medium text-ink">{axis.label}</span>
                  {axis.hint ? <span className="block text-xs text-muted">{axis.hint}</span> : null}
                </div>
                {APPROACHES.map((approach) => (
                  <div
                    key={approach.name}
                    className="border-b border-l border-[rgba(15,23,42,0.06)] px-3 py-3.5 text-xs leading-relaxed text-slate"
                  >
                    {approach.values[rowIndex]}
                  </div>
                ))}
                <div
                  className={`border-x border-purple/30 bg-[rgba(124,58,237,0.06)] px-3 py-3.5 text-xs font-medium leading-relaxed text-ink ${
                    isLast ? "border-b" : ""
                  }`}
                >
                  {LOOPED.values[rowIndex]}
                </div>
              </Fragment>
            );
          })}
        </div>
      </Reveal>

      {/* Mobile stacked cards */}
      <div className="mt-10 space-y-4 lg:hidden">
        {MOBILE_COLUMNS.map((column) => (
          <div
            key={column.name}
            className={`rounded-2xl border p-6 ${
              column.highlighted
                ? "border-purple bg-[rgba(124,58,237,0.05)] shadow-[var(--grad-emph)]"
                : "border-[rgba(15,23,42,0.12)] bg-stone"
            }`}
          >
            <h3 className={`flex items-center gap-2 text-xl ${column.highlighted ? "text-purple" : "text-ink"}`}>
              {column.name}
              {column.highlighted ? <span className="h-2 w-2 rounded-full bg-purple" aria-hidden /> : null}
            </h3>
            <dl className="mt-4 space-y-3">
              {AXES.map((axis, index) => (
                <div key={axis.label} className="border-b border-[rgba(15,23,42,0.08)] pb-3 last:border-b-0 last:pb-0">
                  <dt className="kicker text-muted">{axis.label}</dt>
                  <dd className={`mt-1 text-sm ${column.highlighted ? "font-medium text-ink" : "text-slate"}`}>
                    {column.values[index]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      <Reveal className="mt-12 max-w-4xl">
        <p className="text-base leading-relaxed text-slate sm:text-lg">{CLOSING}</p>
      </Reveal>

      <Reveal className="mt-10">
        <CtaButton href="/demo">Apply to pilot</CtaButton>
      </Reveal>
    </Panel>
  );
}
