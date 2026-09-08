import type { Metadata } from "next";

import { Reveal } from "@/components/motion/Reveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Looped early access list",
  description:
    "See what Looped would surface across your own event, and how it would carry that into governed action across the systems around it. Early access opens to a small number of selected event organisations following our founding pilot.",
  alternates: { canonical: "/waitlist" },
  openGraph: {
    url: "/waitlist",
    title: "Join the Looped early access list",
    description:
      "See what Looped would surface across your own event, and how it would carry that into governed action across the systems around it. Early access opens to a small number of selected event organisations following our founding pilot.",
  },
};

export default function WaitlistPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-purple">Early access</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">Join the early access list.</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            See not just what Looped would recommend for your event, but how it would turn that intelligence into
            governed action across the systems around it. Early access will open to a small number of selected event
            organisations following our founding pilot.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-2xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <WaitlistForm />
        </Reveal>

        <Reveal className="mt-6 text-center">
          <p className="text-xs leading-relaxed text-muted">No sales spam. Just Looped updates, event intelligence and early-access news.</p>
        </Reveal>

        <Reveal className="mt-12 rounded-2xl border border-hairline bg-stone p-7 shadow-[var(--lift-light)] sm:p-8">
          <p className="kicker text-purple">What you&rsquo;ll get</p>
          <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
            Join the waitlist and we&rsquo;ll keep you close to what is happening with Looped.
          </p>
          <ul className="mt-5 space-y-3">
            {[
              "Early access as places open following the founding pilot.",
              "Product updates and new Looped intelligence.",
              "Practical thinking on where event businesses can find more value.",
              "A first look at what Looped would surface across your own event business, and how it would carry that into action across your systems, when the time is right.",
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-3 border-t border-hairline pt-3 text-sm leading-relaxed text-ink sm:text-base">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: ["#7c3aed", "#ec4899", "#fb923c", "#a78bdb"][i] }} aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
