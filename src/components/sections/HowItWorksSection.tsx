"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Seed your brief",
    body: "Event details, brand rules, targets, and team notes become the single source the cascade reads — not scattered prompts.",
  },
  {
    n: "02",
    title: "Run the cascade",
    body: "Intelligence builds module by module. Each output waits for human approval before the next layer auto-fires.",
  },
  {
    n: "03",
    title: "Your team executes",
    body: "Every downstream deliverable inherits upstream decisions — so sales, content, and ops stay aligned without constant meetings.",
  },
];

export function HowItWorksSection(): React.ReactElement {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
            Three disciplined steps replace ad-hoc prompting — without removing humans from the decisions that matter.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-16 grid gap-10 md:grid-cols-3">
          <motion.div
            className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-0.5 bg-gradient-to-r from-indigo-200 via-indigo-500 to-indigo-200 md:block"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center" }}
            aria-hidden
          />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className="relative rounded-2xl border border-slate-200 bg-slate-50/80 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 + i * 0.15, duration: 0.45 }}
            >
              <span className="font-mono text-xs font-semibold text-indigo-700">{s.n}</span>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
