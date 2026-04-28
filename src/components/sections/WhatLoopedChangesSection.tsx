"use client";

import { CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  {
    title: "Brief the event",
    body: "Scrape the website, answer four questions, and upload last year's data.",
  },
  {
    title: "Approve the intelligence cascade",
    body: "Root modules run automatically and feed every downstream output.",
  },
  {
    title: "Your team executes",
    body: "Everything they produce runs on approved intelligence.",
  },
];

export function WhatLoopedChangesSection(): React.ReactElement {
  return (
    <section className="bg-[#12141c] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            Keep it simple. Build the foundation first, then let your teams execute from it.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal key={step.title} className="rounded-xl border border-violet-200/20 bg-[#23283a] p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-300">Step {index + 1}</p>
              <h3 className="mt-3 text-lg text-[#f8f9ff]">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#d4d8e6]">{step.body}</p>
              <CheckCircle2 className="mt-4 h-5 w-5 text-violet-200" aria-hidden />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
