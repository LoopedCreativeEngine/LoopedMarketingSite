import Link from "next/link";

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The internal exploration route every page owes the reader. Two to four
 * onward links, each with the reason to follow it — so the site is navigable
 * without the header, and related platform and team pages stay linked.
 */
export type ExploreLink = { href: string; label: string; blurb: string };

export function ExploreNext({
  links,
  title = "Where to go next",
  tone = "bone",
}: {
  links: ExploreLink[];
  title?: string;
  tone?: "bone" | "paper";
}): React.ReactElement {
  return (
    <Panel tone={tone} kicker="Keep exploring">
      <Reveal>
        <h2 className="text-balance font-serif text-3xl tracking-tight text-ink-text sm:text-4xl">{title}</h2>
      </Reveal>
      <div className="mt-10 grid gap-x-12 md:grid-cols-2">
        {links.map((link, index) => (
          <Reveal key={link.href} delay={(index % 2) * 0.06}>
            <Link
              href={link.href}
              className="group flex items-start gap-5 border-t border-[rgba(23,19,31,0.12)] py-6 transition-colors hover:border-violet/40"
            >
              <span className="mt-1.5 font-mono text-sm text-violet">{String(index + 1).padStart(2, "0")}</span>
              <span className="flex-1">
                <span className="flex items-center justify-between gap-3">
                  <span className="font-serif text-2xl tracking-tight text-ink-text transition-colors group-hover:text-violet">
                    {link.label}
                  </span>
                  <span className="text-violet transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                    &rarr;
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-graphite">{link.blurb}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
