import type { Metadata } from "next";
import Link from "next/link";

import { DemoRequestForm } from "@/components/forms/DemoRequestForm";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "See Looped on your event",
  description:
    "Not a generic software demo. A Looped walkthrough built around your event: your sector, your audience, your commercial model and the systems you already run. Tell us about your event and we will prepare yours.",
  alternates: { canonical: "/demo" },
  openGraph: {
    url: "/demo",
    title: "See Looped on your event",
    description:
      "A Looped walkthrough built around your own event rather than a fictional one. Tell us about your event and we will prepare yours.",
  },
};

/** What we do with what they tell us. Honest about the current pace. */
const NEXT = [
  {
    name: "We read your event, not a template",
    body: "The website you give us usually tells us more than a form ever could: your audience, your programme, your partners, how you sell.",
  },
  {
    name: "We build the walkthrough around it",
    body: "What Looped would see on your event, what it would recommend, what it would carry out once you approved it, and how it would check that it worked.",
  },
  {
    name: "Then we talk, if you want to",
    body: "No pitch deck and no discovery call to earn one. You will have seen Looped against your own world before anyone asks you for anything.",
  },
];

export default function DemoPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-purple">Personalised walkthrough</p>
          <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            See Looped on <span className="text-grad">your</span> event.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Most software demos ask you to imagine your event inside somebody else&rsquo;s. We would rather do the
            imagining. Tell us what you run, and we will build the walkthrough around your sector, your audience, your
            commercial model and the systems you already work in.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-2xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <DemoRequestForm />
        </Reveal>

        <Reveal className="mt-6 text-center">
          <p className="text-xs leading-relaxed text-muted">
            We are preparing these by hand for the organisations joining early access, so it is not an instant video.
            Give us your event and we will show you what Looped looks like in your world.
          </p>
        </Reveal>

        <Reveal className="mt-12 rounded-2xl border border-hairline bg-stone p-7 shadow-[var(--lift-light)] sm:p-8">
          <p className="kicker text-purple">What happens next</p>
          <ul className="mt-5 space-y-4">
            {NEXT.map((item, i) => (
              <li key={item.name} className="flex items-start gap-3 border-t border-hairline pt-4">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: ["#7c3aed", "#ec4899", "#fb923c"][i] }} aria-hidden />
                <div>
                  <p className="text-base font-semibold text-ink">{item.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <p className="text-sm leading-relaxed text-slate">
            Just want to be kept posted instead?{" "}
            <Link href="/waitlist" className="font-semibold text-purple underline-offset-4 hover:underline">
              Join the early access list
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </div>
  );
}
