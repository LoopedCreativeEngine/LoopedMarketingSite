"use client";

import Link from "next/link";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/** RECOVERED indexed-row list (5ca71de PillarsSection), set on paper. */
const DOMAINS = [
  { name: "Programme & content", body: "Themes, speakers, sessions and formats shaped by what the audience and the market are telling you.", href: "/pillars/content" },
  { name: "Audience & marketing", body: "Campaign strategy, segments and messaging grounded in your event data and how it is actually performing.", href: "/pillars/marketing" },
  { name: "Sponsorship & commercial", body: "Which partners to approach, when, and with what evidence in hand.", href: "/pillars/sponsorship" },
  { name: "Telesales", body: "Sharper lists, briefings and timing for the people on the phone.", href: "/pillars/telesales" },
  { name: "Event management", body: "The critical path, risks and dependencies — current, not last updated in May.", href: "/pillars/event-management" },
  { name: "Awards", body: "Entries, categories, judging and finalist momentum, from the call for entries to the night itself.", href: "/pillars/content" },
  { name: "Portfolio", body: "One view across every event: where the opportunity, the risk and the revenue really sit.", href: "/pillars/portfolio" },
];

export function SpecialistIntelligenceSection(): React.ReactElement {
  return (
    <Panel tone="stone" id="pillars" index="05" kicker="Specialist event intelligence">
      <Reveal className="max-w-3xl">
        <h2 className="text-balance display-section">Specialist intelligence for every discipline. One operating system underneath.</h2>
        <p className="mt-5 text-lg leading-relaxed text-slate">
          Each part of an event business gets intelligence built for its work, on the same context, the same memory
          and the same loop. What sponsorship learns, marketing knows. What the programme decides, operations sees.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-x-12 md:grid-cols-2">
        {DOMAINS.map((d, index) => (
          <Reveal key={d.name} delay={(index % 2) * 0.06}>
            <Link
              href={d.href}
              className="group flex items-start gap-5 border-t border-[rgba(15,23,42,0.12)] py-6 transition-colors hover:border-purple/50"
            >
              <span className="mt-1 font-mono text-sm text-purple">0{index + 1}</span>
              <span className="flex-1">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-serif text-2xl tracking-tight text-ink transition-colors group-hover:text-purple">
                    {d.name}
                  </span>
                  <span className="text-purple transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-slate">{d.body}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="mt-14 max-w-3xl text-balance font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
          Sharp on their own. Stronger together, across every event you run.
        </p>
      </Reveal>
    </Panel>
  );
}
