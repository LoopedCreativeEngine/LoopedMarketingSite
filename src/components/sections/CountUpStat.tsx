"use client";

import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CountUpStat({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
  sub,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sub: string;
}): React.ReactElement {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const mv = useMotionValue(0);
  const [text, setText] = useState(decimals > 0 ? (0).toFixed(decimals) : "0");

  useMotionValueEvent(mv, "change", (v) => {
    if (decimals > 0) {
      setText(v.toFixed(decimals));
    } else {
      setText(Math.round(v).toLocaleString("en-GB"));
    }
  });

  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
    return () => c.stop();
  }, [inView, mv, value]);

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-white/10 bg-looped-card p-6 text-center shadow-sm"
      initial={{ opacity: 0, y: 20, scale: 0.82, filter: "blur(8px)" }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
          : { opacity: 0, y: 20, scale: 0.82, filter: "blur(8px)" }
      }
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-serif text-3xl font-semibold tracking-tight text-violet-200 sm:text-4xl">
        {prefix}
        {text}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-semibold text-slate-100">{label}</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">{sub}</p>
    </motion.div>
  );
}
