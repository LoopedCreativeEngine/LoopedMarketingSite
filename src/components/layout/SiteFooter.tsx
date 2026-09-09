import Link from "next/link";

import { Wordmark } from "@/components/brand/LoopMark";

const COLUMNS: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Platform",
    links: [
      { href: "/platform", label: "Overview" },
      { href: "/how-it-works", label: "How Looped works" },
      { href: "/agents-and-conversations", label: "AI conversations" },
      { href: "/communications", label: "Communications" },
      { href: "/creative", label: "Creative" },
      { href: "/data-and-integrations", label: "Data & integrations" },
      { href: "/capabilities", label: "Capabilities" },
    ],
  },
  {
    heading: "Teams",
    links: [
      { href: "/pillars/marketing", label: "Marketing" },
      { href: "/pillars/content", label: "Content" },
      { href: "/pillars/sponsorship", label: "Commercial" },
      { href: "/pillars/telesales", label: "Telesales" },
      { href: "/pillars/event-management", label: "Event Management" },
      { href: "/pillars/portfolio", label: "Portfolio" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/newsroom", label: "Newsroom" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/demo", label: "Apply to pilot" },
      { href: "/demo", label: "Join the waitlist" },
      { href: "/privacy", label: "Privacy policy" },
    ],
  },
];

export function SiteFooter(): React.ReactElement {
  return (
    <footer className="on-ink border-t border-white/10 bg-ink text-bone-dim">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Link href="/" className="text-bone-text transition-opacity hover:opacity-80" aria-label="Looped, home">
              <Wordmark />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone-dim">
              The intelligence layer for the teams who build B2B conferences and awards.
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-8 sm:grid-cols-3 md:col-span-8">
            {COLUMNS.map((column) => (
              <div key={column.heading}>
                <h2 className="kicker text-bone-dim/70">{column.heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={`${column.heading}-${link.label}`}>
                      <Link href={link.href} className="text-sm text-bone-dim transition-colors hover:text-iris">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed text-bone-dim/70">
          © 2026 Entwistle Digital Group Ltd. Looped is a product of Entwistle Digital Group Ltd, registered in England
          and Wales. Registered with the Information Commissioner&rsquo;s Office, registration number ZB123456.
        </p>
      </div>
    </footer>
  );
}
