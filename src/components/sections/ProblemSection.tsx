"use client";

import { Brain, GitBranch, UserX } from "lucide-react";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

const items = [
  {
    icon: GitBranch,
    title: "No cascade",
    body: "Each module output informs the next. Approving the Persona Builder unlocks the Messaging Architecture. Approving that unlocks the Campaign Plan. Generic AI tools can't do this.",
  },
  {
    icon: Brain,
    title: "No domain knowledge",
    body: "Looped knows that Awards Entrants and Table Buyers are different audiences. That finalist social copy must not fire before the announcement date. That a registration campaign is not an attendee activation campaign.",
  },
  {
    icon: UserX,
    title: "No institutional memory",
    body: "Every approved output is stored and feeds the next edition. When your best event manager leaves, their strategic thinking stays in the platform.",
  },
];

export function ProblemSection(): React.ReactElement {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-indigo-700">The problem</p>
          <h2 className="mt-3 text-balance text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            ChatGPT writes fast. Looped thinks first.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Your team is already prompting their way through campaigns, briefs, and outreach. The problem isn&apos;t speed
            — it&apos;s that every prompt starts from scratch, with no shared context, no connection to what the rest of
            the team produced, and no memory of what worked last year.
          </p>
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
