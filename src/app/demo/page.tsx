import { Reveal } from "@/components/motion/Reveal";

export default function DemoPage(): React.ReactElement {
  return (
    <div className="bg-white pb-20 pt-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">See Looped running on a real event</h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            We&apos;ll configure a demo using an event in your sector and show you the full intelligence cascade from brief
            to campaign-ready.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div
            className="flex min-h-[520px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center"
            data-calendly-placeholder
          >
            <p className="text-sm font-semibold text-slate-800">Calendly embed</p>
            <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-600">
              Paste your Calendly inline widget or booking URL here. Until then, email your team to schedule the
              walkthrough.
            </p>
            <p className="mt-4 font-mono text-[11px] text-indigo-800">https://calendly.com/your-team/looped-demo</p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <h2 className="text-lg font-semibold text-slate-900">What to expect</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-slate-600">
            <li>45-minute walkthrough of the full platform</li>
            <li>Live demo on an event in your sector</li>
            <li>Pricing discussion based on your portfolio size</li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
