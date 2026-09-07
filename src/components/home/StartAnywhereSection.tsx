"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Event work is already in motion, each workstream at a different stage, and
 * Looped forms a live view across all of it. Staggered horizontal tracks with a
 * single vertical Looped slice cutting through them. No spokes, no arrows, no
 * lifecycle, no loop mark.
 */
const TRACKS: { label: string; pct: number; color: string }[] = [
  { label: "Programme", pct: 68, color: "#7c3aed" },
  { label: "Audience", pct: 44, color: "#ec4899" },
  { label: "Marketing", pct: 58, color: "#fb923c" },
  { label: "Commercial", pct: 32, color: "#a78bdb" },
  { label: "Speakers", pct: 80, color: "#7c3aed" },
  { label: "Entries", pct: 50, color: "#ec4899" },
  { label: "Operations", pct: 38, color: "#fb923c" },
  { label: "Live event", pct: 18, color: "#a78bdb" },
];

export function StartAnywhereSection(): React.ReactElement {
  return (
    <Panel tone="paper" kicker="Start anywhere">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Start using Looped at the point your event is at now.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Your event is already in motion, with every workstream at a different stage. Looped joins the picture at any
            point and forms a live view across what is already happening. Your teams do not reset how they work.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12 rounded-[20px] border border-hairline bg-stone p-6 sm:p-8">
        <p className="kicker text-muted">Everything running at once, at different stages</p>
        <div className="relative mt-8">
          {/* the Looped slice cutting across every track */}
          <div className="pointer-events-none absolute inset-y-0 left-[58%] z-0 w-[76px] -translate-x-1/2 rounded-2xl bg-grad opacity-[0.14]" aria-hidden />
          <div className="pointer-events-none absolute -top-1 left-[58%] z-10 -translate-x-1/2 rounded-full bg-grad px-3 py-1 shadow-[var(--grad-emph)]">
            <span className="text-xs font-semibold tracking-tight text-white">Looped</span>
          </div>

          <div className="relative z-[5] mt-8 space-y-3.5">
            {TRACKS.map((t) => (
              <div key={t.label} className="grid grid-cols-[6.5rem_1fr] items-center gap-4 sm:grid-cols-[8rem_1fr]">
                <span className="text-sm font-semibold text-ink">{t.label}</span>
                <div className="relative h-1.5 rounded-full bg-hairline">
                  <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${t.pct}%`, background: t.color }} aria-hidden />
                  <span
                    className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-paper"
                    style={{ left: `calc(${t.pct}% - 6px)`, background: t.color }}
                    aria-hidden
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate">
          Programme, sales, marketing and delivery run at the same time. You can bring Looped into an event that is
          already underway, and it forms a live view across all of it.
        </p>
      </Reveal>
    </Panel>
  );
}
