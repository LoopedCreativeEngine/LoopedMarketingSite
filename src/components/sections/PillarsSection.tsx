"use client";

import { motion } from "framer-motion";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

const PILLARS = [
  {
    name: "Marketing",
    description:
      "Market mapping, competitor intelligence, persona building, campaign strategy, email sequences, paid ad intelligence, organic calendar",
    tag: "26 modules",
  },
  {
    name: "Content",
    description:
      "Programme narrative, speaker identification, session development, agenda architecture, photography and videography briefs, press releases",
    tag: "18 modules",
  },
  {
    name: "Commercial Sales",
    description:
      "Sponsor prospect finder, package builder, pitch generator, tailored sponsor proposals, pipeline health, renewal intelligence",
    tag: "14 modules",
  },
  {
    name: "Telesales",
    description:
      "Entry conversion, table sales, nominations drive, list segmentation, Retell AI voice agent campaigns, call log intelligence",
    tag: "12 modules",
  },
  {
    name: "Event Management",
    description:
      "Awards programme analysis, category review, judge discovery, judge pipeline, run of show, risk detection, post-event intelligence",
    tag: "16 modules",
  },
  {
    name: "Portfolio Directors",
    description:
      "Cross-event performance benchmarking, audience overlap analysis, community strategy, spinoff recommendations, opportunity detection",
    tag: "10 modules",
  },
];

function PillarCard({ pillar }: { pillar: (typeof PILLARS)[0] }): React.ReactElement {
  return (
    <motion.article
      layout
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:border-indigo-300 hover:shadow-md"
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      <h3 className="text-lg font-semibold text-slate-900">{pillar.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
      <p className="mt-4 inline-flex rounded-full bg-indigo-50 px-3 py-1 font-mono text-xs font-semibold text-indigo-800">
        {pillar.tag}
      </p>
    </motion.article>
  );
}

export function PillarsSection(): React.ReactElement {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-indigo-700">Six team workspaces</p>
          <h2 className="mt-3 text-balance text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            One platform. Every team that runs your events.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Each pillar has its own intelligence thread. The intelligence each team produces is available to every other
            team working on the same event. No briefing each other. No duplication. The system is the shared context.
          </p>
        </Reveal>
        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <RevealItem key={pillar.name}>
              <PillarCard pillar={pillar} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
