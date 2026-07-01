import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import { getArticles } from "@/lib/newsroom";

export const metadata: Metadata = {
  title: "Newsroom: notes and announcements from Looped",
  description:
    "Notes, announcements and thinking from the team building Looped, the intelligence layer for event teams.",
};

export default function NewsroomPage(): React.ReactElement {
  const articles = getArticles();

  return (
    <div className="bg-bone pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-violet">Newsroom</p>
          <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-ink-text sm:text-5xl">
            Notes from the team building Looped.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">
            Announcements, thinking and the occasional note from the founder. Written the way we build the product:
            grounded, honest and in plain English.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-5 sm:px-6 lg:px-8">
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article.slug}>
              <Reveal>
                <Link
                  href={`/newsroom/${article.slug}`}
                  className="group block rounded-2xl border border-[rgba(23,19,31,0.12)] bg-paper p-6 shadow-[var(--lift-light)] transition-colors duration-300 hover:border-violet sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3 kicker text-muted-ink">
                    <span className="text-violet">{article.kicker}</span>
                    <span aria-hidden className="text-[rgba(23,19,31,0.2)]">
                      /
                    </span>
                    <time dateTime={article.date}>{article.dateLabel}</time>
                  </div>
                  <h2 className="mt-4 font-serif text-2xl tracking-tight text-ink-text sm:text-3xl">{article.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-graphite sm:text-base">{article.standfirst}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet transition-colors group-hover:text-ink-text">
                    Read the piece
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
