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
    <div className="bg-looped-bg pb-20 pt-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-violet-200/80">Newsroom</p>
          <h1 className="mt-4 text-balance text-4xl tracking-tight text-[#f8f9ff] sm:text-5xl">
            Notes from the team building Looped.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#c4c8d8] sm:text-lg">
            Announcements, thinking and the occasional note from the founder. Written the way we build the product:
            grounded, honest and in plain English.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 max-w-3xl px-4 sm:px-6 lg:px-8">
        <ul className="space-y-4">
          {articles.map((article) => (
            <li key={article.slug}>
              <Reveal>
                <Link
                  href={`/newsroom/${article.slug}`}
                  className="group block rounded-2xl border border-white/10 bg-looped-card p-6 transition-all duration-300 hover:border-looped-violet-700/70 hover:shadow-[var(--looped-violet-glow)] sm:p-8"
                >
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-violet-200/80">
                    <span>{article.kicker}</span>
                    <span aria-hidden className="text-white/20">
                      /
                    </span>
                    <time dateTime={article.date} className="text-[#c4c8d8]/70">
                      {article.dateLabel}
                    </time>
                  </div>
                  <h2 className="mt-4 text-2xl italic tracking-tight text-[#f8f9ff] sm:text-3xl">{article.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">{article.standfirst}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-violet-300 transition-colors group-hover:text-violet-200">
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
