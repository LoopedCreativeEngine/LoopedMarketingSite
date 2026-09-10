import type { Metadata } from "next";

import { CreativeFlowFigure } from "@/components/brand/CreativeFlowFigure";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";
import { PageClosing } from "@/components/ui/PageClosing";
import { PageIntro } from "@/components/ui/PageIntro";

export const metadata: Metadata = {
  title: "Event campaign creative for conferences and awards",
  description:
    "Speaker, sponsor, finalist and winner creative at the volume a real campaign needs, from your confirmed list and your brand rules, released when you say so.",
  alternates: { canonical: "/platform/creative" },
  openGraph: {
    url: "/platform/creative",
    title: "Event campaign creative for conferences and awards",
    description:
      "The hard part of event creative is not making one asset. It is making the right two hundred, on brand, inside the window you have.",
  },
};

const SCALE = [
  { count: "47", label: "Finalists on your confirmed list" },
  { count: "47", label: "Personalised cards, one each" },
  { count: "141", label: "Sized for the places they will post" },
  { count: "1", label: "Set of announcement copy" },
  { count: "1", label: "Review, before anything goes out" },
];

const ASSETS = [
  {
    name: "Personalised finalist and winner assets",
    body: "One card per name, with their category and your branding, made across the whole list rather than one at a time.",
  },
  {
    name: "The collective announcement",
    body: "The full shortlist as one piece, for the reveal moment that carries the whole programme rather than a single name.",
  },
  {
    name: "Social carousels and copy",
    body: "Multi-slide posts and the words to go with them, written from the positioning your team already approved.",
  },
  {
    name: "Webpage content",
    body: "The finalist and winner content your event site needs, prepared with the rest of the announcement instead of chased afterwards.",
  },
  {
    name: "Short announcement video",
    body: "A short piece for the moments that deserve one, such as a finalist reveal or a winners round-up, built from the same approved material as everything else.",
  },
  {
    name: "Speaker and sponsor cards",
    body: "Announcement and reminder assets per speaker and per partner, at the tier their agreement actually specifies.",
  },
  {
    name: "Session and category graphics",
    body: "Programme and category artwork built from the agenda as it stands, updating when the agenda does.",
  },
  {
    name: "Banners and email graphics",
    body: "Display and email creative across every size your channels need, in one pass.",
  },
  {
    name: "Concept directions",
    body: "Named creative territories with visual themes and headline angles, so a campaign has options to choose between rather than one execution to defend.",
  },
];

const CONTROL = [
  {
    title: "It follows your brand",
    body: "Colours, typography, tone and anything you have told Looped never to say are applied while the work is being made, not corrected after it.",
  },
  {
    title: "Your team reviews the set",
    body: "A batch is reviewed as a batch. Approve the set, send back the three that are wrong, and only those three are remade.",
  },
  {
    title: "Nothing goes out until you release it",
    body: "No asset is published and no announcement is sent before someone on your team authorises it. The reveal happens on your schedule.",
  },
  {
    title: "Your designers can pick it up",
    body: "Assets and copy come out in the formats your design team already works in, so they can take something further rather than rebuild it.",
  },
];

export default function CreativePage(): React.ReactElement {
  return (
    <div className="bg-paper pb-8 pt-28 sm:pt-32">
      <PageIntro
        kicker="Creative"
        title="Creative that already knows the event."
        lead="Announcement week is not a design problem. It is a volume problem with a deadline: forty-seven finalists, three places each, copy per channel, all on brand, all correct, all by Thursday."
        support="Looped makes the whole set from your confirmed list and your brand rules, then hands your team one review."
      />

      {/* the flow */}
      <Panel tone="stone" kicker="From what you know to what goes out">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">One approved moment. The whole set.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              This is the work that quietly eats a marketing team every awards cycle. It is not difficult. It is
              enormous, repetitive, and impossible to do carefully at four in the afternoon.
            </p>
          </Reveal>
        </div>
        <Reveal className="mt-12 rounded-[20px] border border-hairline bg-paper p-5 shadow-[var(--lift-light)] sm:p-8">
          <CreativeFlowFigure />
        </Reveal>
        <Reveal className="mt-8">
          <dl className="grid gap-x-8 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-3 lg:grid-cols-5">
            {SCALE.map((s, i) => (
              <div key={s.label}>
                <dt
                  className="font-serif text-3xl text-ink"
                  style={{ color: ["#7c3aed", "#ec4899", "#fb923c", "#a78bdb", "#0f172a"][i] }}
                >
                  {s.count}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-slate">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Panel>

      {/* what it makes */}
      <Panel tone="paper" kicker="What it makes">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">Everything an announcement actually needs.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              Not one hero image. The personalised assets, the collective piece, the social, the page content and the
              short film that a real reveal gets through in a week.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ASSETS.map((a) => (
            <Reveal key={a.name} className="rounded-2xl border border-hairline bg-stone p-6 shadow-[var(--lift-light)]">
              <h3 className="font-serif text-xl leading-snug text-ink">{a.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{a.body}</p>
            </Reveal>
          ))}
        </div>
      </Panel>

      {/* control, on the night plate */}
      <Panel tone="night" kicker="Your control">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">On brand, reviewed, and released when you say.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-mist sm:text-lg">
              Volume is only useful if you still trust what goes out with your name on it. Every asset is made against
              your brand, checked by your team and held until someone releases it.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-x-10 md:grid-cols-2">
          {CONTROL.map((c) => (
            <Reveal key={c.title}>
              <div className="border-t border-white/10 py-6">
                <h3 className="font-serif text-xl text-snow">{c.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-mist">{c.body}</p>
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

      {/* where it stops */}
      <Panel tone="paper" kicker="Where Looped stops">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <h2 className="text-balance display-section">Deliberately not a design tool.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:pt-2">
            <p className="text-base leading-relaxed text-slate sm:text-lg">
              Professional design tools are extraordinary and your designers are good at them. Looped is not trying to
              win that argument.{" "}
              <span className="font-semibold text-ink">
                It is trying to make sure nobody spends another Tuesday resizing forty-seven cards.
              </span>
            </p>
          </Reveal>
        </div>
      </Panel>

      <PageClosing
        line="Give announcement week back to the people who were meant to be running the campaign."
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
