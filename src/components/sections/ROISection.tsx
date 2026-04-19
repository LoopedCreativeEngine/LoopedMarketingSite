"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/motion/Reveal";

import { CountUpStat } from "./CountUpStat";

function DaysStatCard(): React.ReactElement {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.12 }}
    >
      <p className="font-mono text-3xl font-semibold tracking-tight text-indigo-800 sm:text-4xl">3–5 days</p>
      <p className="mt-3 text-sm font-semibold text-slate-900">From brief to campaign-ready</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
        Typical cascade timeline from signed brief to first campaign-ready pack — compared with 6–8 weeks of manual
        drafting and reconciliation.
      </p>
    </motion.div>
  );
}

export function ROISection(): React.ReactElement {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            The platform pays for itself on the first correct pricing decision
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
            Looped compresses intelligence production from weeks to days — so pricing, packaging, and programme decisions
            land before the market moves on without you.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <CountUpStat
            value={850000}
            prefix="£"
            label="Conservative value impact"
            sub="Illustrative portfolio impact across 100 events when cascade-led decisions improve sponsor yield and programme mix."
          />
          <CountUpStat
            value={4.8}
            suffix="×"
            decimals={1}
            label="Return on investment"
            sub="Based on internal modelling: time saved, rework avoided, and revenue uplift from faster, consistent intelligence."
          />
          <DaysStatCard />
        </div>
      </div>
    </section>
  );
}
