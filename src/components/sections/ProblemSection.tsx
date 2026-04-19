"use client";

import { GitBranch, Layers, UserX } from "lucide-react";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

const items = [
  {
    icon: Layers,
    title: "No shared context",
    body: "Each team member prompts from scratch. The brief lives in decks, inboxes, and side conversations — not in the workflow.",
  },
  {
    icon: GitBranch,
    title: "No cascade",
    body: "Outputs do not connect to each other. Campaign copy does not inherit market mapping. Programme design does not inherit intelligence.",
  },
  {
    icon: UserX,
    title: "No institutional memory",
    body: "Knowledge leaves when people do. Next year’s team repeats the same research, the same debates, the same late nights.",
  },
];

export function ProblemSection(): React.ReactElement {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Your team is already using ChatGPT. That&apos;s the problem.
          </h2>
        </Reveal>
        <RevealStagger className="mt-14 grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <RevealItem
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 transition-shadow duration-200 hover:shadow-md"
            >
              <item.icon className="h-8 w-8 text-indigo-700" aria-hidden />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
