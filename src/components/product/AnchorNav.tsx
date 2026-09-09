import { cn } from "@/lib/cn";

/**
 * The spine of a long page: every movement, addressable. Sticks under the site
 * header on desktop and scrolls horizontally on small screens rather than
 * wrapping into a block that eats the viewport.
 */
export function AnchorNav({
  items,
  label,
  className,
}: {
  items: { id: string; label: string }[];
  /** Accessible name for the nav landmark. */
  label: string;
  className?: string;
}): React.ReactElement {
  return (
    <nav
      aria-label={label}
      className={cn(
        "sticky top-16 z-30 border-y border-[rgba(23,19,31,0.08)] bg-bone/90 backdrop-blur-md",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <ul className="flex gap-1.5 overflow-x-auto py-2.5">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="inline-flex shrink-0 rounded-full border border-transparent px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-muted-ink transition-colors hover:border-[rgba(23,19,31,0.14)] hover:text-violet"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
