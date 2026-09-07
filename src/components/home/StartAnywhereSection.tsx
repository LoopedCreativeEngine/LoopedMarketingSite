"use client";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Event work happens in parallel. Looped sits in the middle of it and forms a
 * live view across whatever is already in motion. A loose orbit, not a process:
 * no arrows, no sequence, no competing loop mark. Desktop places the workstreams
 * on scattered orbital points; mobile falls back to an organic cluster.
 */
type Node = { label: string; color: string; top: number; left: number };
const NODES: Node[] = [
  { label: "Programme", color: "#7c3aed", top: 11, left: 26 },
  { label: "Audience", color: "#ec4899", top: 7, left: 61 },
  { label: "Marketing", color: "#fb923c", top: 31, left: 85 },
  { label: "Commercial", color: "#a78bdb", top: 63, left: 86 },
  { label: "Speakers", color: "#7c3aed", top: 89, left: 63 },
  { label: "Entries", color: "#ec4899", top: 92, left: 30 },
  { label: "Operations", color: "#fb923c", top: 64, left: 10 },
  { label: "Live event", color: "#a78bdb", top: 32, left: 9 },
];

export function StartAnywhereSection(): React.ReactElement {
  return (
    <Panel tone="paper" index="03" kicker="Start anywhere">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-balance display-section">Start using Looped at the point your event is at now.</h2>
        </Reveal>
        <Reveal className="space-y-5 lg:col-span-7 lg:pt-2">
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            Whether you are at the first planning stage, already in market or close to the event, Looped starts from the
            decisions, activity and data that already exist.
          </p>
          <p className="text-base leading-relaxed text-slate sm:text-lg">
            It builds the current picture from where your teams are today, then keeps that picture live as the event
            moves. Your teams do not reset how they work. Looped forms a view across what is already happening.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-12 rounded-[20px] border border-hairline bg-stone p-6 sm:p-10">
        <p className="kicker text-muted">Everything running at once</p>

        {/* desktop: a loose orbit of concurrent workstreams around Looped */}
        <div className="relative mx-auto mt-6 hidden h-[440px] w-full max-w-3xl sm:block">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
            <defs>
              <linearGradient id="orbit-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#7c3aed" stopOpacity="0.5" />
                <stop offset="0.55" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="1" stopColor="#fb923c" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            {NODES.map((n) => (
              <line key={n.label} x1="50" y1="50" x2={n.left} y2={n.top} stroke="url(#orbit-grad)" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
            ))}
          </svg>
          {NODES.map((n) => (
            <div
              key={n.label}
              className="orbit-node absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-hairline bg-paper px-3.5 py-2 shadow-[var(--lift-light)]"
              style={{ top: `${n.top}%`, left: `${n.left}%` }}
            >
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: n.color }} aria-hidden />
              <span className="whitespace-nowrap text-sm font-semibold text-ink">{n.label}</span>
            </div>
          ))}
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center rounded-full bg-grad px-6 py-3 shadow-[var(--grad-emph)]">
            <span className="text-base font-semibold tracking-tight text-white">Looped</span>
          </div>
        </div>

        {/* mobile: an organic cluster (not a grid, not a sequence) */}
        <div className="mt-6 sm:hidden">
          <div className="mx-auto mb-4 w-fit rounded-full bg-grad px-5 py-2.5 shadow-[var(--grad-emph)]">
            <span className="text-sm font-semibold tracking-tight text-white">Looped</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {NODES.map((n) => (
              <span key={n.label} className="flex items-center gap-2 rounded-full border border-hairline bg-paper px-3 py-1.5 shadow-[var(--lift-light)]">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: n.color }} aria-hidden />
                <span className="text-sm font-semibold text-ink">{n.label}</span>
              </span>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-slate">
          Programme, sales, marketing and delivery run at the same time. You can bring Looped into an event that is
          already in motion, and it forms a live view across all of it.
        </p>
      </Reveal>
    </Panel>
  );
}
