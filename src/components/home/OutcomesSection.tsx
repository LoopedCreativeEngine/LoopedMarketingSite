"use client";

import { useEffect, useState } from "react";

import { Panel } from "@/components/layout/Panel";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

/** Concrete things the intelligence does, by the person who feels them. Illustrative, not claims. */
const EXAMPLES = [
  { who: "Marketing", signal: "Bookings from one segment slow three weeks earlier than last year.", insight: "The message that worked in March is not landing with this year's job titles.", action: "Reworked messaging for that segment, with the evidence attached; the next fortnight's response measured against it." },
  { who: "Content", signal: "A competitor announces two speakers your programme shortlisted.", insight: "Your theme is being contested. Three adjacent angles are still open.", action: "A shortlist of fifteen speakers your editors had not considered, ranked by fit and availability." },
  { who: "Sponsorship", signal: "A partner's sector is consolidating and their renewal is due.", insight: "Their reason to renew has changed. The audience data supports a different proposition.", action: "A renewed proposition built from what the audience actually did, before the renewal call." },
  { who: "Awards", signal: "Entries from one category are down while the sector is growing.", insight: "The category name no longer matches how the market describes the work.", action: "A renamed category and a targeted call for entries to the people doing that work." },
  { who: "Event Director", signal: "Two decisions taken this week pull the room in different directions.", insight: "The audience mix you are selling to partners is drifting from the one you are marketing to.", action: "One recommended correction, with what it means for revenue and for the room." },
  { who: "Portfolio Director", signal: "Three events in the portfolio hit the same objection in telesales.", insight: "It is a portfolio problem, not an event problem.", action: "A change applied across all three, with each event's outcome measured." },
];

export function OutcomesSection(): React.ReactElement {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % EXAMPLES.length), 5200);
    return () => window.clearInterval(t);
  }, []);
  const e = EXAMPLES[active];

  return (
    <Panel tone="stone" id="what-it-does" index="02" kicker="What the intelligence does">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">Sees it early. Explains it. Tells you what to change. Shows what it changed.</h2>
        <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
          Not a dashboard to read and not a chatbot to prompt: intelligence that arrives with the evidence and the
          recommendation, for the person who has to decide.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <RevealStagger className="grid gap-2 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
          {EXAMPLES.map((x, i) => (
            <RevealItem key={x.who}>
              <button
                type="button"
                onClick={() => setActive(i)}
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
              ["What Looped saw", e.signal, "#7c3aed"],
              ["What it meant", e.insight, "#ec4899"],
              ["What changed", e.action, "#fb923c"],
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
          <p className="mt-3 kicker text-muted">Illustrative examples of the kind of intelligence Looped surfaces</p>
        </Reveal>
      </div>

      <Reveal>
        <p className="mx-auto mt-12 max-w-4xl text-balance text-center font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
          Time saved isn&apos;t the outcome. Better events are.
        </p>
      </Reveal>
    </Panel>
  );
}
