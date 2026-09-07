import type { Metadata } from "next";

import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";

/**
 * 404, in the approved editorial style: paper, ink, the purple kicker, and the
 * two routes back into the journey. Never indexed.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound(): React.ReactElement {
  return (
    <div className="bg-paper pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-purple">404</p>
          <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink sm:text-5xl">
            That page is not here.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            The link may be old, or the page may have moved. The rest of Looped is where you left it.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/">Back to the homepage</CtaButton>
            <CtaButton href="/newsroom" variant="secondary">
              Read the newsroom
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
