"use client";

import { LoopMark } from "@/components/brand/LoopMark";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/**
 * Event work is concurrent, not a line. Looped sits in the centre while the
 * workstreams run at the same time, so you can start from wherever the event is.
 * A 3x3 cluster with Looped at the middle: no arrows, no sequence.
 */
const WORKSTREAMS = ["Programme", "Audience", "Marketing", "Speakers", "__LOOPED__", "Commercial", "Entries", "Operations", "Live event"];
const DOTS = ["#7c3aed", "#ec4899", "#fb923c", "#a78bdb", "", "#ec4899", "#7c3aed", "#fb923c", "#a78bdb"];

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
            moves.
          </p>
        </Reveal>
      </div>

      {/* concurrent workstreams: Looped in the centre, nothing in sequence */}
      <Reveal className="mt-12 rounded-[20px] border border-hairline bg-stone p-6 sm:p-8">
        <p className="kicker text-muted">Concurrent, not sequential</p>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {WORKSTREAMS.map((w, i) =>
            w === "__LOOPED__" ? (
              <div
                key="looped"
                className="col-span-2 flex items-center justify-center gap-2.5 rounded-2xl bg-grad px-4 py-4 text-white shadow-[var(--grad-emph)] sm:col-span-1"
              >
                <LoopMark className="h-5 w-5" />
                <span className="text-base font-semibold tracking-tight">Looped</span>
              </div>
            ) : (
              <div
                key={w}
                className={cn("flex items-center gap-2.5 rounded-2xl border border-hairline bg-paper px-4 py-4 shadow-[var(--lift-light)]")}
              >
                <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: DOTS[i] }} aria-hidden />
                <span className="text-sm font-semibold text-ink">{w}</span>
              </div>
            ),
          )}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-slate">
          Programme, sales, marketing and delivery run at the same time. You can start using Looped while any combination
          of these is already underway.
        </p>
      </Reveal>
    </Panel>
  );
}
