import { Reveal } from "@/components/motion/Reveal";

export default function DemoPage(): React.ReactElement {
  return (
    <div className="bg-bone pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-violet">Get started</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink-text sm:text-5xl">Book a demo</h1>
          <p className="mt-6 text-lg leading-relaxed text-graphite">
            45 minutes. We&apos;ll configure a live demo using an event in your sector and walk you through the full
            cascade from brief to campaign-ready.
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

        <Reveal className="mt-12">
          <h2 className="text-lg font-semibold text-ink-text">What to expect</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-graphite">
            <li>We&apos;ll use a real event type from your portfolio — not a generic demo.</li>
            <li>
              You&apos;ll see the full intelligence cascade running: market mapping, competitor analysis, persona
              building, messaging architecture, campaign planning.
            </li>
            <li>
              We&apos;ll show you what the platform produces for your team&apos;s specific disciplines — marketing,
              content, commercial, telesales, event management.
            </li>
            <li>We&apos;ll discuss deployment pricing based on your portfolio size and event mix.</li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
