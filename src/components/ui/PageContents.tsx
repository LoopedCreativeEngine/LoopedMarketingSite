/**
 * A page's own run of show.
 *
 * Long pages on this site are a sequence of numbered movements, the same way
 * the homepage is. This puts that sequence in the hero so a buyer can go
 * straight to the part they came for, and so the hero reads as a spread rather
 * than a column with an empty half.
 */
export type ContentsItem = { id: string; label: string };

export function PageContents({
  items,
  label,
}: {
  items: ContentsItem[];
  /** Accessible name, e.g. "Platform page contents". */
  label: string;
}): React.ReactElement {
  return (
    <nav
      aria-label={label}
      className="rounded-2xl border border-[rgba(23,19,31,0.12)] bg-paper p-5 shadow-[var(--lift-light)] sm:p-6"
    >
      <p className="kicker text-muted-ink">On this page</p>
      <ul className="mt-4 divide-y divide-[rgba(23,19,31,0.08)]">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="group flex items-baseline gap-4 py-2.5 transition-colors hover:text-violet"
            >
              <span className="font-mono text-[0.68rem] text-violet">{String(index + 1).padStart(2, "0")}</span>
              <span className="flex-1 text-sm text-graphite transition-colors group-hover:text-violet">
                {item.label}
              </span>
              <span className="text-violet opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                &darr;
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
