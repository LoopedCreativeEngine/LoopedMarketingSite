"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/motion/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Seed your brief",
    body: "Event details, brand rules, team notes, previous year learnings. The brief is the foundation every module builds from. Team notes are injected into every prompt automatically — if your brand never uses a particular word, no module ever will.",
  },
  {
    n: "02",
    title: "Run the cascade",
    body: "106 modules organised into 12 cascade phases. Each module output is reviewed and approved by a human before the next module fires. Intelligence compounds — the Persona Builder informs the Messaging Architecture which informs the Campaign Plan which informs the Email Sequences.",
  },
  {
    n: "03",
    title: "Your team executes",
    body: "Looped doesn't replace your team. It gives them 3–5 days of strategic foundation instead of 6–8 weeks of research. They spend their time on relationships, judgement calls, and execution — not on figuring out what the campaign should say.",
  },
];

export function HowItWorksSection(): React.ReactElement {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });

  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="module-id text-center text-xs font-semibold uppercase tracking-wider text-violet-300">How it works</p>
          <h2 className="mt-3 text-balance text-center text-3xl tracking-tight text-white sm:text-4xl">
            Brief in. Intelligence out. Team executes.
          </h2>
        </Reveal>

        <div
          ref={ref}
          className="relative mt-16 grid gap-10 [perspective:1200px] md:grid-cols-3"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-0.5 bg-gradient-to-r from-violet-900 via-violet-400 to-violet-900 md:block"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center" }}
            aria-hidden
          />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className="relative rounded-2xl border border-white/10 bg-looped-card p-6"
              style={{ transformStyle: "preserve-3d", transformOrigin: "center top" }}
              initial={{ opacity: 0, y: 24, rotateX: 12 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.12 + i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="module-id text-xs font-semibold text-violet-300">{s.n}</span>
              <h3 className="mt-2 text-lg text-slate-100">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
