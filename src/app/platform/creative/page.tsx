import type { Metadata } from "next";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { PageClosing } from "@/components/ui/PageClosing";
import { PageIntro } from "@/components/ui/PageIntro";
import { AvailabilityNote, StatusPill, type Availability } from "@/components/ui/StatusPill";

export const metadata: Metadata = {
  title: "Event campaign creative for conferences and awards",
  description:
    "Speaker, sponsor, finalist and winner assets produced at the volume a real campaign consumes, with the event intelligence attached and one approval.",
  alternates: { canonical: "/platform/creative" },
  openGraph: {
    url: "/platform/creative",
    title: "Event campaign creative for conferences and awards",
    description:
      "The hard part of event creative is not making one asset. It is making the right two hundred, on brand, inside the window you actually have.",
  },
};

const BATCH = [
  { count: "47", label: "Finalists confirmed", detail: "Taken from the judging outcome, checked once by your team." },
  { count: "47", label: "Personalised cards", detail: "One per finalist, on brand, with the right category attached." },
  { count: "141", label: "Share variants", detail: "Sized for the platforms your finalists will actually post to." },
  { count: "1", label: "Campaign copy set", detail: "Announcement copy per channel, from the approved positioning." },
  { count: "1", label: "Approval", detail: "One review pass. Approve the set, send back the three that are wrong." },
];

const ASSETS: { name: string; body: string; status?: Availability }[] = [
  {
    name: "Speaker cards",
    body: "Announcement and reminder assets per speaker, generated from the confirmed programme rather than typed into a template forty times.",
  },
  {
    name: "Sponsor cards",
    body: "Partner announcement assets at the tier and treatment their contract actually specifies.",
  },
  {
    name: "Finalist cards",
    body: "The full shortlist, personalised, produced in the window between judging closing and the announcement going out.",
  },
  {
    name: "Winner assets",
    body: "Winner creative ready the moment the result is confirmed, so the news goes out while the room is still in it.",
  },
  {
    name: "Category and session graphics",
    body: "Award category and programme artwork built from the approved programme itself, updating when it changes.",
  },
  {
    name: "Share assets",
    body: "The assets that turn a speaker, finalist or delegate into a promoter, because they are genuinely worth posting.",
  },
  {
    name: "Campaign banners and email graphics",
    body: "Display and email creative across the sizes your channels need, in one pass rather than one at a time.",
  },
  {
    name: "Concept territories",
    body: "Creative directions with names, visual themes and headline angles, so a campaign has options to choose between rather than one execution to defend.",
  },
  {
    name: "Connected image generation",
    body: "Generation briefed by the approved event context and your brand rules, so what is produced is what was actually needed.",
    status: "pilot",
  },
  {
    name: "Short-form video",
    body: "Video generation for the few formats where it genuinely helps, kept deliberately narrow rather than promised everywhere.",
    status: "soon",
  },
];

const BOUNDARY = [
  {
    title: "Your brand rules come first",
    body: "Colours, typography, tone and the things you have told Looped never to say are applied before anything is produced, not corrected afterwards.",
  },
  {
    title: "One approval, not forty",
    body: "A batch is reviewed as a batch. Approve the set, reject the three that are wrong, and only those three are remade.",
  },
  {
    title: "The designer stays the designer",
    body: "Looped is not trying to replace Canva, Figma or Adobe, and it is certainly not trying to replace the person using them. It removes the volume work that was never craft in the first place.",
  },
  {
    title: "It leaves in a form they can use",
    body: "Assets and copy hand off to your design tools so the work can be taken further rather than trapped in a system your designers do not open.",
    status: "soon" as Availability,
  },
];

export default function CreativePage(): React.ReactElement {
  return (
    <div className="bg-paper pb-8 pt-28 sm:pt-32">
      <PageIntro
        kicker="Creative"
        title="Creative produced with the event intelligence already attached."
        lede="Announcement week is not a design problem. It is a volume problem with a deadline: forty-seven finalists, three platforms each, copy per channel, all on brand, all correct, all by Thursday."
        support="Looped produces the batch from the approved programme and hands your team one approval, so the craft goes where craft is worth spending."
      />

      {/* the batch */}
      <Panel tone="stone" kicker="A real announcement">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance display-section">One finalist announcement, start to finish.</h2>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            This is the work that quietly eats a marketing team every awards cycle. It is not difficult. It is
            enormous, repetitive, and impossible to do carefully at four in the afternoon.
          </p>
        </Reveal>

        <Reveal className="mt-12 overflow-hidden rounded-[20px] border border-hairline bg-paper shadow-[var(--lift-light)]">
          <div className="p-5 sm:p-7">
            <p className="flex items-center gap-2.5 kicker text-muted">
              <span className="h-2 w-2 rounded-full bg-grad-dot" aria-hidden />
              Finalist announcement, one batch
            </p>
            <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
              {Array.from({ length: 15 }, (_, i) => (
                <div key={i} className="rounded-lg border border-hairline bg-stone p-2.5" aria-hidden>
                  <div
                    className={
                      i % 5 === 2
                        ? "mb-2 h-6 w-6 rounded-full bg-grad-dot opacity-70"
                        : "mb-2 h-6 w-6 rounded-full bg-stone-deep"
                    }
                  />
                  <div className="h-1 w-full rounded-full bg-stone-deep" />
                  <div className="mt-1 h-1 w-2/3 rounded-full bg-stone-deep" />
                </div>
              ))}
              <div
                className="flex items-center justify-center rounded-lg border border-hairline bg-stone font-mono text-[0.62rem] text-purple"
                aria-hidden
              >
                +32
              </div>
            </div>
          </div>
          <div className="grid divide-hairline border-t border-hairline sm:grid-cols-2 lg:grid-cols-5 lg:divide-x">
            {BATCH.map((b) => (
              <div key={b.label} className="border-t border-hairline p-5 first:border-t-0 sm:border-t-0 lg:border-t-0">
                <p className="font-mono text-lg text-purple">{b.count}</p>
                <p className="mt-1 text-sm font-semibold leading-snug text-ink">{b.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate">{b.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-6">
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            Card shapes above are placeholders. Real assets are produced against your brand rules and the confirmed
            finalist list, and nothing is published until your team has approved the batch.
          </p>
        </Reveal>
      </Panel>

      {/* what it makes */}
      <Panel tone="paper" kicker="What it makes">
        <Reveal className="max-w-3xl">
          <h2 className="text-balance display-section">The assets an event actually consumes.</h2>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            Not one hero image. The hundreds of small, personalised, correctly branded assets a conference or awards
            campaign gets through between launch and event day.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ASSETS.map((a) => (
            <Reveal key={a.name} className="rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)]">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                <h3 className="font-serif text-lg text-ink">{a.name}</h3>
                {a.status ? <StatusPill status={a.status} /> : null}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate">{a.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <AvailabilityNote className="max-w-3xl" />
        </Reveal>
      </Panel>

      {/* where it stops */}
      <Panel tone="night" kicker="Where Looped stops">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">Deliberately not a design tool.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              Professional design tools are extraordinary and your designers are good at them. Looped is not trying to
              win that argument. It is trying to make sure nobody spends a Tuesday resizing forty-seven cards again.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-x-10 md:grid-cols-2">
          {BOUNDARY.map((b) => (
            <Reveal key={b.title}>
              <div className="border-t border-white/10 py-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
                  <h3 className="font-serif text-xl text-snow">{b.title}</h3>
                  {b.status ? <StatusPill status={b.status} tone="night" /> : null}
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="max-w-3xl font-serif text-2xl italic leading-snug text-snow sm:text-3xl">
            The advantage is not that Looped can make an image. It is that Looped knows which image needs making.
          </p>
        </Reveal>
      </Panel>

      <PageClosing
        line="Give announcement week back to the people who were supposed to be running the campaign."
        continueLinks={[
          {
            href: "/platform/communications",
            label: "Communications",
            blurb: "Where this creative goes, and the journey it belongs to.",
          },
          {
            href: "/pillars/event-management",
            label: "Event Management",
            blurb: "The awards year that produces the finalist and winner moments.",
          },
        ]}
      />
    </div>
  );
}
