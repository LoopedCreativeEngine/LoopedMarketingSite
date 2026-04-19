"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";

const PILLARS = [
  {
    name: "Marketing",
    blurb: "Market intelligence, campaign strategy, and channel-ready content.",
    modules: ["marketing_market_mapping", "marketing_messaging_architecture", "marketing_campaign_plan"],
    more: ["marketing_organic_calendar", "marketing_seo_geo_strategy", "marketing_email_sequences"],
  },
  {
    name: "Content",
    blurb: "Programme design, speaker management, and editorial coherence.",
    modules: ["content_industry_intelligence", "content_key_topics", "content_programme_framework"],
    more: ["content_speaker_identification", "content_speaker_runsheet", "content_chair_briefing"],
  },
  {
    name: "Commercial Sales",
    blurb: "Sponsor prospecting, package building, and pipeline discipline.",
    modules: ["sponsorship_lookalike_prospecting", "commercial_sponsor_brief", "commercial_media_pack"],
    more: ["sponsorship_outreach_copy", "commercial_package_builder", "sponsorship_pipeline_health"],
  },
  {
    name: "Telesales",
    blurb: "Entry conversion, table sales, and voice-assisted outreach.",
    modules: ["telesales_offer_matrix", "telesales_call_framework", "telesales_conversion_tracker"],
    more: ["telesales_objection_playbook", "telesales_list_prioritisation", "telesales_voice_qa"],
  },
  {
    name: "Event Management",
    blurb: "Awards programme design, judge pipeline, and operational readiness.",
    modules: ["ops_awards_market_intelligence", "ops_awards_programme_analysis", "content_judge_assets"],
    more: ["ops_category_review", "ops_website_quality_monitor", "event_management_run_of_show"],
  },
  {
    name: "Portfolio Directors",
    blurb: "Cross-event intelligence and performance benchmarking.",
    modules: ["portfolio_cross_event_dashboard", "portfolio_sponsor_mix", "portfolio_forecast_pack"],
    more: ["portfolio_risk_register", "portfolio_narrative_brief", "portfolio_bench_compare"],
  },
];

function PillarCard({
  pillar,
  active,
  onHover,
  onLeave,
}: {
  pillar: (typeof PILLARS)[0];
  active: boolean;
  onHover: () => void;
  onLeave: () => void;
}): React.ReactElement {
  return (
    <motion.article
      layout
      className={`rounded-2xl border bg-white p-6 transition-colors duration-200 ${
        active ? "border-indigo-600 shadow-[var(--looped-violet-glow)]" : "border-slate-200 hover:border-indigo-300"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
    >
      <h3 className="text-lg font-semibold text-slate-900">{pillar.name}</h3>
      <p className="mt-2 text-sm text-slate-600">{pillar.blurb}</p>
      <ul className="mt-4 space-y-1.5 font-mono text-[11px] text-indigo-800/90">
        {pillar.modules.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
      <AnimatePresence initial={false}>
        {active && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">Also includes</p>
            <ul className="mt-2 space-y-1 font-mono text-[11px] text-slate-600">
              {pillar.more.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export function PillarsSection(): React.ReactElement {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for every team that runs your events
          </h2>
        </Reveal>
        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <RevealItem key={pillar.name}>
              <PillarCard
                pillar={pillar}
                active={open === pillar.name}
                onHover={() => setOpen(pillar.name)}
                onLeave={() => setOpen((v) => (v === pillar.name ? null : v))}
              />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
