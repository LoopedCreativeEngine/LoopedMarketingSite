import Link from "next/link";

import { Wordmark } from "@/components/brand/LoopMark";

export function SiteFooter(): React.ReactElement {
  return (
    <footer className="border-t border-hairline bg-stone text-slate">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="text-ink transition-opacity hover:opacity-80" aria-label="Looped, home">
              <Wordmark />
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              The AI operating system for conference &amp; awards businesses. The art of events is yours. The intelligence
              is Looped.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate">
            <Link href="/#what-it-does" className="transition-colors hover:text-ink">What it does</Link>
            <Link href="/how-it-works" className="transition-colors hover:text-ink">How it works</Link>
            <Link href="/#why-looped-exists" className="transition-colors hover:text-ink">Why Looped</Link>
            <Link href="/newsroom" className="transition-colors hover:text-ink">Newsroom</Link>
            <Link href="/#start" className="transition-colors hover:text-ink">Start</Link>
            <Link href="/privacy" className="transition-colors hover:text-ink">Privacy policy</Link>
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
