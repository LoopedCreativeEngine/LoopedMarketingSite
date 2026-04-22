"use client";

import { Briefcase, Clock3, Database, FileClock, ListChecks, Megaphone, Users } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

const TIME_ITEMS = [
  {
    icon: Clock3,
    title: "Research time disappears",
    body: "Looped builds approved sector and competitor intelligence once, then every team works from it.",
  },
  {
    icon: Users,
    title: "Briefings stop repeating",
    body: "Shared approved context flows to each pillar automatically, so teams stop re-explaining the same event story.",
  },
  {
    icon: Briefcase,
    title: "Copy starts from context",
    body: "Campaign drafts inherit audience, messaging, and prior decisions instead of starting from blank prompts.",
  },
  {
    icon: FileClock,
    title: "Weekly reporting is automated",
    body: "Digest views roll up key changes by event and portfolio without manual status compiling.",
  },
  {
    icon: ListChecks,
    title: "Onboarding gets instant context",
    body: "New joiners open one source of approved intelligence and operate like tenured team members faster.",
  },
];

const TOOL_ITEMS = [
  {
    icon: Database,
    title: "Data tools pull better lists",
    body: "Cognism and Apollo stay in place, but every pull is briefed by approved personas and targeting logic.",
  },
  {
    icon: Megaphone,
    title: "Outbound becomes optional",
    body: "In-house reps, agencies, and voice agents run from the same approved brief so quality stays consistent.",
  },
  {
    icon: Users,
    title: "Scheduling tools get stronger content",
    body: "Your existing scheduler posts content generated from approved messaging rather than ad-hoc drafting.",
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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div>
            <Reveal>
              <h3 className="font-serif text-2xl italic text-[#f8f9ff]">Time your team spends that Looped handles</h3>
            </Reveal>
            <div className="mt-6 space-y-4">
              {TIME_ITEMS.map((item) => (
                <Reveal key={item.title} className="rounded-xl border border-white/10 bg-[#161926] p-5">
                  <item.icon className="h-5 w-5 text-violet-300" aria-hidden />
                  <h4 className="mt-3 text-lg text-[#f8f9ff]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#c4c8d8]">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h3 className="font-serif text-2xl italic text-[#f8f9ff]">Tools that go or work harder</h3>
            </Reveal>
            <div className="mt-6 space-y-4">
              {TOOL_ITEMS.map((item) => (
                <Reveal key={item.title} className="rounded-xl border border-violet-200/20 bg-[#23283a] p-5">
                  <item.icon className="h-5 w-5 text-violet-200" aria-hidden />
                  <h4 className="mt-3 text-lg text-[#f8f9ff]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#d4d8e6]">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
