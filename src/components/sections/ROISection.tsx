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
      initial={{ opacity: 0, y: 20, scale: 0.82, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y: 20, scale: 0.82, filter: "blur(8px)" }
      }
      transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-mono text-3xl font-semibold tracking-tight text-indigo-800 sm:text-4xl">3–5 days</p>
      <p className="mt-3 text-sm font-semibold text-slate-900">From brief to campaign-ready</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
        vs 6–8 weeks of senior team time per event manually
      </p>
    </motion.div>
  );
}

export function ROISection(): React.ReactElement {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-indigo-700">The return</p>
          <h2 className="mt-3 text-balance text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            The platform pays for itself on the first correct pricing decision.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <CountUpStat
            value={850000}
            prefix="£"
            label="Conservative value impact across 100 events"
            sub="Pricing corrections, additional sponsor revenue, table sales uplift, telesales savings, recovered strategic time"
          />
          <CountUpStat
            value={4.8}
            suffix="×"
            decimals={1}
            label="Return on investment"
            sub="Against total investment including your own API costs at moderate usage"
          />
          <DaysStatCard />
        </div>
        <Reveal>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            Every event team — regardless of experience — works from the same quality of strategic intelligence that
            currently only your most experienced people produce, and only when they have time for it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
