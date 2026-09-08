"use client";

import { useEffect, useState } from "react";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/** The operating loop, in buyer language. The human-control moment is DECIDE. */
const LOOP = [
  { name: "Understand", body: "Looped continuously builds the picture from your event data, your connected systems, the market around you and what your teams are learning." },
  { name: "Recommend", body: "It names the opportunity, risk, exception or shortfall, proposes the next move and shows the evidence behind it." },
  { name: "Decide", body: "Work that sits inside rules you have already set can run. Where judgement matters, the decision stays with your team." },
  { name: "Act", body: "Once authorised, Looped carries the work through the systems you already use, through a connected integration or, where that is the better route, the software itself." },
  { name: "Verify", body: "Looped checks the destination and records what actually happened. An attempted action is never quietly counted as a success." },
  { name: "Learn", body: "Response and outcome return to your event intelligence, so the next decision starts with what the last one taught." },
];

/** Concrete things the intelligence does, by the person who feels them. Illustrative, not claims. */
const EXAMPLES = [
  {
    who: "Marketing / Audience",
    signal: "Registrations up 18%. Senior buyers down 11%.",
    insight: "A healthy-looking number can hide a shifting audience. Looped reads the two together and shows whether you need more registrations or a specific set of the right people.",
    action: "Once approved, Looped rebalances targeting, messaging and channel priorities across your campaign stack, down to the organisations and people the event actually needs.",
    result: "It then watches the registrations that follow rather than the sends that went out, and the mix that responded shapes the next recommendation.",
  },
  {
    who: "Content / Programme",
    signal: "Two sessions are doing the work of the whole agenda.",
    insight: "Looped reads what the audience is responding to, where the programme has gaps or overlaps, and which themes the market is moving towards.",
    action: "Once approved, Looped shapes the agenda around what will land, prepares the speaker approaches and sends the ones you sign off.",
    result: "It tracks who replies and who confirms, keeps the gap open until the seat is actually filled, and remembers which approaches worked.",
  },
  {
    who: "Commercial",
    signal: "£26k of sponsorship, hiding in plain sight.",
    insight: "Audience demand, content themes and commercial whitespace point to the strongest sponsor categories and the best-fit accounts, and to where a single partner could be worth more.",
    action: "Once approved, Looped builds the target list, the account plan and the proposition, and carries the outreach into the systems your commercial team already works in.",
    result: "Replies, meetings and closes come back as evidence, so the next set of opportunities is ranked on what actually converted here.",
  },
  {
    who: "Telesales",
    signal: "400 names on a call list. 74 worth calling first.",
    insight: "Looped ranks who is most likely to convert now, why they matter and what is relevant to them.",
    action: "Once approved, Looped reorders the call list, rewrites the scripts and gives each prospect its own talking points, inside your calling, consent and suppression rules.",
    result: "Call outcomes return to the ranking, so tomorrow's list is built from what happened on the phone today. Ask why anyone ranks where they do.",
  },
  {
    who: "Event Management",
    signal: "Three deadlines just moved. One of them matters this week.",
    insight: "Looped keeps the moving parts of the edition in one view, speakers, entries, suppliers and milestones, and shows what needs attention now and what can wait.",
    action: "Once approved, Looped reorders the plan and chases what is outstanding with the sponsors, speakers and suppliers it affects.",
    result: "The exception stays open until Looped can see the deliverable has landed, not from the moment the chaser was sent.",
  },
  {
    who: "Portfolio",
    signal: "Three events. Same problem. One answer worth reusing.",
    insight: "An objection that looks like an event problem is often a portfolio problem, and the same answer applies across all three.",
    action: "Once approved, Looped carries the change across every event it fits and runs it through each one's own systems.",
    result: "Each event's verified outcome returns to the portfolio picture, so the play is either proven or retired on evidence rather than opinion.",
  },
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
    <Panel tone="stone" id="what-it-does" kicker="What the intelligence does">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">Understand. Recommend. Decide. Act. Verify. Learn.</h2>
        <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
          One loop, running continuously across your events. Looped keeps the picture current, brings the evidence with
          the recommendation, waits for your decision where judgement matters, carries the approved work through your
          stack and checks what actually happened at the other end.
        </p>
      </Reveal>

      <Reveal className="mt-10">
        <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {LOOP.map((l, i) => (
            <div key={l.name} className="border-t border-hairline pt-4">
              <dt className="flex items-center gap-2.5 text-base font-semibold text-ink">
                <span className="font-mono text-xs text-purple">0{i + 1}</span>
                {l.name}
                {l.name === "Decide" ? (
                  <span className="rounded-full bg-[rgba(236,72,153,0.12)] px-2 py-0.5 font-mono text-[0.6rem] tracking-[0.12em] text-pink">YOU</span>
                ) : null}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-slate">{l.body}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <div
        className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-10"
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
          <div key={active} className="rounded-[20px] border border-hairline bg-paper p-6 shadow-[var(--lift-light)] sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["What Looped sees", e.signal, "#7c3aed"],
                ["Why it matters", e.insight, "#ec4899"],
                ["What Looped does", e.action, "#fb923c"],
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
            <div className="signal-step mt-6 border-t border-hairline pt-5" style={{ animationDelay: "1.05s" }}>
              <p className="flex items-center gap-2 kicker text-muted">
                <span className="h-2.5 w-2.5 rounded-full bg-grad-dot" aria-hidden />
                What comes back
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink">{e.result}</p>
            </div>
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
