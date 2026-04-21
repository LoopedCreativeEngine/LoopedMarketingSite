import Link from "next/link";

export function SiteFooter(): React.ReactElement {
  return (
    <footer className="border-t border-white/10 bg-[#0f1117]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-base font-semibold text-white">Looped Event OS</p>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              The intelligence operating system for B2B conference and awards teams.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-400">
            <Link href="/how-it-works" className="hover:text-violet-300">
              How it works
            </Link>
            <Link href="/pillars/marketing" className="hover:text-violet-300">
              Pillars
            </Link>
            <Link href="/#pricing" className="hover:text-violet-300">
              Pricing
            </Link>
            <Link href="/demo" className="hover:text-violet-300">
              Book a demo
            </Link>
            <Link href="/privacy" className="hover:text-violet-300">
              Privacy policy
            </Link>
          </nav>
        </div>
        <p className="mt-10 text-xs leading-relaxed text-slate-500">
          © 2026 Entwistle Digital Group Ltd. Looped Event OS is a product of Entwistle Digital Group Ltd, registered in
          England and Wales.
        </p>
      </div>
    </footer>
  );
}
