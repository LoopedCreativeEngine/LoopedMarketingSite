"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { colors } from "@/styles/design-system";

const FLOATING_MODULES = [
  { label: "content_industry_intelligence", x: "8%", y: "18%", delay: 0 },
  { label: "marketing_market_mapping", x: "72%", y: "22%", delay: 0.4 },
  { label: "marketing_messaging_architecture", x: "14%", y: "62%", delay: 0.8 },
  { label: "marketing_campaign_calendar", x: "68%", y: "58%", delay: 1.2 },
];

export function HeroSection(): React.ReactElement {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-16"
      style={{ backgroundColor: colors.heroBg }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-90"
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(79, 70, 229, 0.35), transparent 55%)",
            "radial-gradient(ellipse 70% 55% at 75% 30%, rgba(99, 102, 241, 0.28), transparent 50%)",
            "radial-gradient(ellipse 85% 65% at 45% 70%, rgba(67, 56, 202, 0.25), transparent 55%)",
            "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(79, 70, 229, 0.35), transparent 55%)",
          ],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        aria-hidden
      />

      {FLOATING_MODULES.map((m) => (
        <motion.div
          key={m.label}
          className="pointer-events-none absolute hidden rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-mono text-[10px] text-indigo-200/90 shadow-lg backdrop-blur-sm sm:block"
          style={{ left: m.x, top: m.y }}
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            y: [0, -10, 0],
            rotate: [0, 0.6, 0],
          }}
          transition={{
            opacity: { delay: m.delay, duration: 0.8 },
            y: { duration: 14 + m.delay * 2, repeat: Infinity, ease: "easeInOut", delay: m.delay },
            rotate: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: m.delay },
          }}
          aria-hidden
        >
          {m.label}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-20 pt-12 text-center sm:px-6 lg:px-8">
        <motion.h1
          className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Your events team is already using AI. Just not like this.
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          Looped is the intelligence operating system for B2B conference and awards teams. 106 modules. 6 team pillars.
          One cascade — where every approved output informs the next decision.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          <Link
            href="/demo"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02] sm:w-auto"
          >
            Book a demo
          </Link>
          <a
            href="#product"
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-white/25 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
