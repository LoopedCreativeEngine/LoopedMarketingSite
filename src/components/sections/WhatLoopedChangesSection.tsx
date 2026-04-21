"use client";

import { Reveal } from "@/components/motion/Reveal";

const TIME_ITEMS = [
  {
    title: "Manually researching your sector before every campaign",
    body: "Hours in Google, in ChatGPT, across competitor websites — assembling context that should already exist. Looped builds sector intelligence, competitor analysis, and market mapping once, approved by your team, available to every module that follows.",
  },
  {
    title: "Briefing the same context repeatedly across departments",
    body: "Your marketing manager knows things your content team doesn't. Your telesales team doesn't have what sponsorship knows. Approved intelligence flows to every pillar automatically — no briefing meetings to share what one team already knows.",
  },
  {
    title: "Starting from scratch in ChatGPT for every piece of copy",
    body: "Generic outputs because there's no event context. No memory of your audience, your messaging strategy, or last week's decisions. Looped's copy modules are briefed by approved intelligence before they write a word.",
  },
  {
    title: "Compiling weekly reports across events",
    body: "Manual aggregation of what happened this week. Looped's weekly digest does this automatically — per event, per brand, per portfolio — surfacing only what genuinely needs your attention.",
  },
  {
    title: "Onboarding new team members to event context",
    body: "Every time someone joins a project, they start without context. In Looped, every approved output is there — the research, the strategy, the decisions made. New team members work from the same intelligence as the director who's been on the event for six months.",
  },
];

const TOOL_ITEMS = [
  {
    title: "Your data lists work harder — not replaced",
    body: "You still run your own Cognism or Apollo account. What changes is the brief behind every pull. Instead of a generic sector search, Looped tells your data tool exactly who to find — scoped to your event audience, built from approved persona profiles. Same subscription, dramatically better lists.",
  },
  {
    title: "Outbound calling becomes a choice, not a constraint",
    body: "Right now your team calls in-house or through an agency — because there's no better option. Looped connects to Retell voice agents that are briefed entirely from your platform intelligence. Personas, objections, pricing, agenda highlights — all injected automatically. Run it when it makes sense. Your existing callers still work alongside it.",
  },
  {
    title: "Social scheduling stays — the content it schedules gets better",
    body: "Looped doesn't replace your scheduling tool. It produces the content your scheduling tool posts — organic calendars, social copy, campaign assets — all briefed from your approved messaging strategy rather than written from scratch each time.",
  },
];

export function WhatLoopedChangesSection(): React.ReactElement {
  return (
    <section className="bg-[#12141c] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            The hours and tools your team won&apos;t need.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            Two distinct things — time your team currently spends, and tools that either go or work harder.
          </p>
        </Reveal>

        <div className="mt-12 space-y-12">
          <div>
            <Reveal>
              <h3 className="font-serif text-2xl italic text-[#f8f9ff]">Time your team spends that Looped handles</h3>
            </Reveal>
            <div className="mt-6 space-y-4">
              {TIME_ITEMS.map((item) => (
                <Reveal key={item.title} className="rounded-xl border border-white/10 bg-looped-card p-5">
                  <h4 className="text-lg text-[#f8f9ff]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#c4c8d8]">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="font-serif text-2xl italic text-[#f8f9ff]">Tools that go or work harder</h3>
            </Reveal>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {TOOL_ITEMS.map((item) => (
                <Reveal key={item.title} className="rounded-xl border border-white/10 bg-looped-card p-5">
                  <h4 className="text-lg text-[#f8f9ff]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#c4c8d8]">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
