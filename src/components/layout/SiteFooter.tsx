import Link from "next/link";

import { site } from "@/styles/design-system";

export function SiteFooter(): React.ReactElement {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-base font-semibold text-slate-900">{site.name}</p>
            <p className="mt-2 max-w-sm text-sm text-slate-600">Built for B2B conference and awards organisers.</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-indigo-700">
              Home
            </Link>
            <Link href="/how-it-works" className="hover:text-indigo-700">
              How it works
            </Link>
            <Link href="/#pricing" className="hover:text-indigo-700">
              Pricing
            </Link>
            <Link href="/demo" className="hover:text-indigo-700">
              Book a demo
            </Link>
            <Link href="/privacy" className="hover:text-indigo-700">
              Privacy policy
            </Link>
          </nav>
        </div>
        <p className="mt-10 text-xs text-slate-500">
          © {site.year} {site.company}
        </p>
      </div>
    </footer>
  );
}
