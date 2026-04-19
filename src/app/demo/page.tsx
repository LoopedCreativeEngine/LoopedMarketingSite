import { Reveal } from "@/components/motion/Reveal";

export default function DemoPage(): React.ReactElement {
  return (
    <div className="bg-white pb-20 pt-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Book a demo</h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            45 minutes. We&apos;ll configure a live demo using an event in your sector and walk you through the full cascade
            from brief to campaign-ready.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="flex min-h-[520px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center"
            data-calendly-placeholder
          >
            <p className="font-mono text-xs font-semibold leading-relaxed text-indigo-900 sm:text-sm">
              [CALENDLY_EMBED — replace src/app/demo/page.tsx placeholder with real Calendly URL]
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <h2 className="text-lg font-semibold text-slate-900">What to expect</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-slate-600">
            <li>We&apos;ll use a real event type from your portfolio — not a generic demo.</li>
            <li>
              You&apos;ll see the full intelligence cascade running: market mapping, competitor analysis, persona building,
              messaging architecture, campaign planning.
            </li>
            <li>
              We&apos;ll show you what the platform produces for your team&apos;s specific disciplines — marketing, content,
              commercial, telesales, event management.
            </li>
            <li>We&apos;ll discuss deployment pricing based on your portfolio size and event mix.</li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
