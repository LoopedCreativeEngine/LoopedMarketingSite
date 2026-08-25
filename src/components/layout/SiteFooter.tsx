import Link from "next/link";

import { Wordmark } from "@/components/brand/LoopMark";

export function SiteFooter(): React.ReactElement {
  return (
    <footer className="on-ink border-t border-white/10 bg-ink text-bone-dim">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="text-bone-text transition-opacity hover:opacity-80" aria-label="Looped, home">
              <Wordmark />
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-bone-dim">
              The intelligence layer for the teams who build B2B conferences and awards.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-bone-dim">
            <Link href="/platform" className="transition-colors hover:text-iris">
              Platform
            </Link>
            <Link href="/how-it-works" className="transition-colors hover:text-iris">
              How it works
            </Link>
            <Link href="/#pillars" className="transition-colors hover:text-iris">
              Pillars
            </Link>
            <Link href="/newsroom" className="transition-colors hover:text-iris">
              Newsroom
            </Link>
            <Link href="/#pricing" className="transition-colors hover:text-iris">
              Pricing
            </Link>
            <Link href="/demo" className="transition-colors hover:text-iris">
              Apply to pilot
            </Link>
            <Link href="/demo" className="transition-colors hover:text-iris">
              Join the waitlist
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-iris">
              Privacy policy
            </Link>
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
