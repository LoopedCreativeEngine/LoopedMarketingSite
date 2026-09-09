import Link from "next/link";

import { Wordmark } from "@/components/brand/LoopMark";

/**
 * The footer carries the discoverability the navigation deliberately does not.
 * The nav stays five quiet links; the six working areas and the platform
 * chapters live here, where a reader who wants the full map can find it.
 */
const COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Platform",
    links: [
      { href: "/platform", label: "Overview" },
      { href: "/platform/conversations", label: "Conversations" },
      { href: "/platform/communications", label: "Communications" },
      { href: "/platform/creative", label: "Creative" },
      { href: "/platform/data", label: "Data & systems" },
      { href: "/capabilities", label: "Capabilities" },
    ],
  },
  {
    heading: "Working areas",
    links: [
      { href: "/pillars/marketing", label: "Marketing & Audience" },
      { href: "/pillars/content", label: "Content & Programme" },
      { href: "/pillars/commercial", label: "Commercial" },
      { href: "/pillars/telesales", label: "Telesales" },
      { href: "/pillars/event-management", label: "Event Management" },
      { href: "/pillars/portfolio", label: "Portfolio" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/#what-it-does", label: "What it does" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/#why-looped-exists", label: "Why Looped" },
      { href: "/newsroom", label: "Newsroom" },
      { href: "/#start", label: "Start" },
      { href: "/privacy", label: "Privacy policy" },
    ],
  },
];

export function SiteFooter(): React.ReactElement {
  return (
    <footer className="border-t border-hairline bg-stone text-slate">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="text-ink transition-opacity hover:opacity-80" aria-label="Looped, home">
              <Wordmark />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              The AI operating system for conference &amp; awards businesses. The art of events is yours. The
              intelligence is Looped.
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-8 sm:grid-cols-3 md:col-span-8">
            {COLUMNS.map((column) => (
              <div key={column.heading}>
                <h2 className="kicker text-muted">{column.heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <Link href={link.href} className="text-sm text-slate transition-colors hover:text-ink">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="mt-12 border-t border-hairline pt-8 text-xs leading-relaxed text-muted">
          © 2026 Entwistle Digital Group Ltd. Looped is a product of Entwistle Digital Group Ltd, registered in England
          and Wales. Registered with the Information Commissioner&rsquo;s Office, registration number ZB123456.
        </p>
      </div>
    </footer>
  );
}
