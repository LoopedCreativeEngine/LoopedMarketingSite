"use client";

import { Fragment } from "react";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";

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
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            Every other AI vendor makes your supplier list longer.
          </h2>
          <p className="mt-4 text-balance font-serif text-3xl italic text-violet-300 sm:text-4xl md:text-5xl">
            Looped is the first one that makes it shorter.
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-8 max-w-4xl space-y-4 text-center">
          {BODY_PARAS.map((para) => (
            <p key={para.slice(0, 24)} className="text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
              {para}
            </p>
          ))}
        </Reveal>

        {/* Desktop comparison table */}
        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-white/10 bg-looped-card/40 lg:block">
          <div className="grid grid-cols-[minmax(9rem,1.3fr)_repeat(5,minmax(0,1fr))]">
            {/* header row */}
            <div className="border-b border-white/10 px-4 py-4" />
            {APPROACHES.map((approach) => (
              <div
                key={approach.name}
                className="border-b border-l border-white/10 px-3 py-4 text-sm font-medium text-[#c4c8d8]"
              >
                {approach.name}
              </div>
            ))}
            <div className="rounded-t-xl bg-looped-violet-700 px-3 py-4 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)]">
              {LOOPED.name}
            </div>

            {/* data rows */}
            {AXES.map((axis, rowIndex) => {
              const isLast = rowIndex === AXES.length - 1;
              return (
                <Fragment key={axis.label}>
                  <div className="border-b border-white/5 px-4 py-3.5">
                    <span className="text-sm font-medium text-[#f8f9ff]">{axis.label}</span>
                    {axis.hint ? <span className="block text-xs text-[#c4c8d8]/60">{axis.hint}</span> : null}
                  </div>
                  {APPROACHES.map((approach) => (
                    <div
                      key={approach.name}
                      className="border-b border-l border-white/5 px-3 py-3.5 text-xs leading-relaxed text-[#c4c8d8]"
                    >
                      {approach.values[rowIndex]}
                    </div>
                  ))}
                  <div
                    className={`border-x border-looped-violet-700/50 bg-looped-violet-700/15 px-3 py-3.5 text-xs font-medium leading-relaxed text-[#f8f9ff] ${
                      isLast ? "rounded-b-xl border-b" : ""
                    }`}
                  >
                    {LOOPED.values[rowIndex]}
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-10 space-y-4 lg:hidden">
          {MOBILE_COLUMNS.map((column) => (
            <div
              key={column.name}
              className={`rounded-2xl border p-6 ${
                column.highlighted
                  ? "border-looped-violet-700 bg-looped-card shadow-[var(--looped-violet-glow)]"
                  : "border-white/10 bg-looped-card"
              }`}
            >
              <h3 className={`text-xl ${column.highlighted ? "text-white" : "text-[#f8f9ff]"}`}>{column.name}</h3>
              <dl className="mt-4 space-y-3">
                {AXES.map((axis, index) => (
                  <div key={axis.label} className="border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                    <dt className="text-xs uppercase tracking-wide text-[#c4c8d8]/70">{axis.label}</dt>
                    <dd className={`mt-0.5 text-sm ${column.highlighted ? "font-medium text-[#f8f9ff]" : "text-[#c4c8d8]"}`}>
                      {column.values[index]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-4xl">
          <p className="text-sm leading-relaxed text-[#c4c8d8] sm:text-base">{CLOSING}</p>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <Link
            href="/demo"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-looped-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02]"
          >
            Apply to pilot
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
