"use client";

import { Reveal } from "@/components/motion/Reveal";

const PARAS = [
  `Anyone who's run events knows the truth: the plan changes. A team builds a marketing plan around fixed points mapped from day one, speakers and a programme for a conference, or judges, categories and entry deadlines for an awards, and the moment that timeline slips, the plan goes in a folder and is never opened again. The best teams are deeply iterative and pivot well. But most are running several events at once, with no bandwidth to intentionally re-plan off live data, so the pivot that should happen doesn't.`,
  `Looped is built for exactly this, and it starts where the value really comes from: the mix. Set the right ratio of attendee personas, the blend of seniority, sectors and buyer-to-peer balance that makes a conference room work for delegates, partners and speakers, or the balance of entrants, finalists and table buyers that makes an awards night land for everyone in it. Looped then crafts the marketing strategy specifically for that target mix, with the budget allocations, comms plans and campaign calendars to deliver it.`,
  `Then it tracks your bookings against that mix in real time. As the campaign unfolds and the event nears, it tells you each week whether the mix is still achievable, and hands you the decision: double down on the persona campaigns driving volume, or iterate on the ones not yet converting a high-value segment. A different campaign per audience where the event calls for it, yes, but more importantly the right people, in the right balance, in the room.`,
  `The framework stays alive across the whole cycle. It produces the deliverables and the assets, and it pivots what you say, to whom and when, as signals, performance, competitor moves and the macro and micro shifts in your market come in.`,
  `This is hard to do well without the right technology, which is exactly why it's built into Looped. What matters isn't using AI for its own sake. It's adopting event technology that serves your event objectives. And for every event, that means bringing the right people together in person, to connect with like-minded peers and unlock real business and personal opportunity.`,
];

export function BuiltForHowEventsMoveSection(): React.ReactElement {
  return (
    <section className="bg-looped-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#171a24] to-[#101219] px-6 py-12 sm:px-12 sm:py-16">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl tracking-tight text-[#f8f9ff] sm:text-4xl">
              Built for how events actually move.
            </h2>
          </Reveal>
          <Reveal className="mx-auto mt-8 max-w-3xl space-y-5">
            {PARAS.map((para) => (
              <p key={para.slice(0, 24)} className="text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
                {para}
              </p>
            ))}
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl">
            <p className="border-l-2 border-looped-violet-700 pl-5 font-serif text-2xl italic text-[#f8f9ff] sm:text-3xl">
              It&apos;s no longer a question of return on investment. It&apos;s return on intention and effort.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
