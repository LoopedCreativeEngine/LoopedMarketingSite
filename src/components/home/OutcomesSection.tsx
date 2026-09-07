"use client";

import { useEffect, useState } from "react";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/** Concrete things the intelligence does, by the person who feels them. Illustrative, not claims. */
const EXAMPLES = [
  { who: "Marketing / Audience", signal: "Registrations up 18%. Senior buyers down 11%.", insight: "A healthy-looking number can hide a shifting audience. Looped reads the two together and shows whether you need more registrations or a specific set of the right people.", action: "On approval, Looped can rebalance targeting, messaging, channel priorities and personalised outreach towards the audience the event actually needs, down to the organisations and people that matter." },
  { who: "Content / Programme", signal: "Two sessions are doing the work of the whole agenda.", insight: "Looped reads what the audience is responding to, where the programme has gaps or overlaps, and which themes the market is moving towards.", action: "On approval, Looped can shape the agenda around what will land, brief speakers and line up the content that supports it." },
  { who: "Commercial", signal: "\u00a326k of sponsorship, hiding in plain sight.", insight: "Audience demand, content themes and commercial whitespace point to the strongest sponsor categories and the best-fit accounts, and to where a single partner could be worth more.", action: "On approval, Looped can build the target list, account plan, personalised outreach and the proposition most likely to land." },
  { who: "Telesales", signal: "400 names on a call list. 74 worth calling first.", insight: "Looped ranks who is most likely to convert now, why they matter and what is relevant to them.", action: "On approval, Looped can reorder the call list, rewrite the scripts and give each prospect its own talking points. Ask why anyone ranks where they do." },
  { who: "Event Management", signal: "Three deadlines just moved. One of them matters this week.", insight: "Looped keeps the moving parts of the edition in one view, speakers, entries, suppliers and milestones, and shows what needs attention now and what can wait.", action: "On approval, Looped can reorder the plan, chase what is outstanding and flag the decisions that need a person." },
  { who: "Portfolio", signal: "Three events. Same problem. One answer worth reusing.", insight: "An objection that looks like an event problem is often a portfolio problem, and the same answer applies across all three.", action: "On approval, Looped can carry the change across every event and measure each one's outcome." },
];

const ROTATE_MS = 13000;

export function OutcomesSection(): React.ReactElement {
  const [active, setActive] = useState(0);
  const [userPicked, setUserPicked] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (userPicked || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % EXAMPLES.length), ROTATE_MS);
    return () => window.clearInterval(t);
  }, [userPicked, paused]);

  const e = EXAMPLES[active];

  return (
    <Panel tone="stone" id="what-it-does" index="02" kicker="What the intelligence does">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">See it. Understand it. Decide. Move.</h2>
        <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
          Looped connects the evidence, recommends the strongest route and waits for your decision before consequential
          action.
        </p>
      </Reveal>

      <div
        className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <RevealStagger className="grid gap-2 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
          {EXAMPLES.map((x, i) => (
            <RevealItem key={x.who}>
              <button
                type="button"
                onClick={() => {
                  setActive(i);
                  setUserPicked(true);
                }}
                className={cn(
                  "w-full cursor-pointer rounded-full border px-4 py-2.5 text-left text-sm font-medium transition-colors",
                  i === active ? "border-transparent bg-grad text-white" : "border-hairline bg-paper text-slate hover:text-ink",
                )}
                aria-pressed={i === active}
              >
                {x.who}
              </button>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="lg:col-span-8">
          <div key={active} className="grid gap-4 rounded-[20px] border border-hairline bg-paper p-6 shadow-[var(--lift-light)] sm:grid-cols-3 sm:p-8">
            {[
              ["What Looped sees", e.signal, "#7c3aed"],
              ["Why it matters", e.insight, "#ec4899"],
              ["What Looped can do", e.action, "#fb923c"],
            ].map(([label, text, color], i) => (
              <div key={label} className="signal-step" style={{ animationDelay: `${i * 0.35}s` }}>
                <p className="flex items-center gap-2 kicker text-muted">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: color }} aria-hidden />
                  {label}
                </p>
                <p className="mt-3 text-base leading-relaxed text-ink">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 kicker text-muted">Illustrative Looped intelligence</p>
        </Reveal>
      </div>

      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
          Time saved isn&apos;t the outcome. <span className="text-grad">Better events are.</span>
        </p>
      </Reveal>
    </Panel>
  );
}
