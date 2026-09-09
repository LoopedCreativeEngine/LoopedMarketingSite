import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Apply to pilot Looped, or join the waitlist",
  description:
    "Book 45 minutes. We configure a live session around an event in your sector and show what Looped understands, produces and can execute.",
  path: "/demo",
});

const EXPECT = [
  "We use a real event type from your portfolio, not a generic demo account.",
  "You see the intelligence a real brief produces: market and competitor context, audience segmentation, messaging and a campaign plan.",
  "We show the working hub for your team's discipline, and the outputs it produces, so you can judge the quality rather than the pitch.",
  "We are honest about what is live today, what is in pilot and what is still rolling out.",
  "We discuss pricing based on your portfolio size and event mix.",
];

const BRING = [
  "One event you are planning, ideally with last edition's data",
  "The two or three capabilities that would genuinely decide it for your team",
  "Whoever will have to live with the decision",
];

export default function DemoPage(): React.ReactElement {
  return (
    <div className="bg-bone pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-violet">Get started</p>
          <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink-text sm:text-5xl">
            Apply to pilot Looped
          </h1>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-graphite">
            45 minutes. We configure a live session around an event in your sector and walk your team through what
            Looped understands, what it produces and what it can execute, using work that looks like yours.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="flex min-h-[520px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[rgba(23,19,31,0.20)] bg-paper p-8 text-center"
            data-calendly-placeholder
          >
            <p className="font-mono text-xs font-semibold leading-relaxed text-violet sm:text-sm">
              [CALENDLY_EMBED — replace src/app/demo/page.tsx placeholder with real Calendly URL]
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 sm:gap-10">
          <Reveal>
            <h2 className="font-serif text-2xl tracking-tight text-ink-text">What to expect</h2>
            <ul className="mt-5 space-y-3">
              {EXPECT.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/60" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-serif text-2xl tracking-tight text-ink-text">What to bring</h2>
            <ul className="mt-5 space-y-3">
              {BRING.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-graphite">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet/60" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div className="rounded-2xl border border-[rgba(23,19,31,0.12)] bg-paper p-6 shadow-[var(--lift-light)]">
            <h2 className="font-serif text-xl tracking-tight text-ink-text">Not ready to talk yet?</h2>
            <p className="mt-3 text-sm leading-relaxed text-graphite">
              Read the{" "}
              <Link href="/capabilities" className="font-medium text-violet underline underline-offset-4">
                full capability index
              </Link>{" "}
              first. It is the diligence page, and it labels honestly what is live today, what is in pilot and what is
              still rolling out. If your deciding capability is not there, that is worth an email rather than a demo.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
