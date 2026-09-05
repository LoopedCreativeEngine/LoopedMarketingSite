"use client";

import Link from "next/link";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  {
    title: "Connect",
    body: `Looped plugs into your existing stack and your real event data: bookings, CRM, programme, commercial history.`,
  },
  {
    title: "Surface",
    body: `It builds and validates your event context as the lifecycle moves, then surfaces the intelligence and the options live, while the moment can still change the outcome, not weeks later when it has already passed.`,
  },
  {
    title: "Act",
    body: `Your team decides and Looped automates the output. The judgement stays human. The grunt work doesn't.`,
  },
];

export function WhatLoopedChangesSection(): React.ReactElement {
  return (
    <Panel tone="night" index="03" kicker="How it works">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">Your whole event operation, finally thinking together.</h2>
      </Reveal>

      <div className="relative mt-16">
        {/* the thread the nodes sit on */}
        <div className="absolute inset-x-8 top-[26px] hidden h-px bg-pink/25 md:block" aria-hidden />
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.08}>
              <div className="flex items-center justify-center md:justify-start">
                <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-pink/60 bg-night font-mono text-sm text-lavender shadow-[0_0_0_6px_var(--night)]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-center text-2xl text-snow md:text-left">{step.title}</h3>
              <p className="mt-3 text-center text-sm leading-relaxed text-mist md:text-left">{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className="mt-14">
        <Link
          href="/how-it-works"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-lavender transition-colors hover:text-snow"
        >
          See how it works, step by step
          <span aria-hidden>→</span>
        </Link>
      </Reveal>
    </Panel>
  );
}
