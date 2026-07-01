import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/Reveal";
import { getArticle, getArticleSlugs } from "@/lib/newsroom";

type ArticleParams = { params: Promise<{ slug: string }> };

// Only the slugs we know about are served; anything else 404s.
export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticleParams): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return { title: "Newsroom" };
  }
  return {
    title: `${article.title} · Looped Newsroom`,
    description: article.standfirst,
  };
}

export default async function ArticlePage({ params }: ArticleParams): Promise<React.ReactElement> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    notFound();
  }

  return (
    <div className="bg-looped-bg pb-20 pt-28">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Link
            href="/newsroom"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-[0.16em] text-violet-200/80 transition-colors hover:text-violet-200"
          >
            <span aria-hidden>←</span>
            Newsroom
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-violet-200/80">
            <span>{article.kicker}</span>
            <span aria-hidden className="text-white/20">
              /
            </span>
            <time dateTime={article.date} className="text-[#c4c8d8]/70">
              {article.dateLabel}
            </time>
          </div>

          <h1 className="mt-5 text-balance text-4xl leading-tight tracking-tight text-[#f8f9ff] sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-violet-200 sm:text-2xl">
            {article.standfirst}
          </p>
          <p className="mt-6 border-t border-white/10 pt-5 text-sm text-[#c4c8d8]/80">{article.byline}</p>
        </Reveal>

        <Reveal className="mt-10 space-y-6">
          {article.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-[1.85] text-[#d4d8e6] sm:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className="mt-14 border-t border-white/10 pt-10 text-center">
          <p className="font-serif text-2xl italic text-[#f8f9ff] sm:text-3xl">The platform is built. Come and shape what it becomes.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/demo"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-looped-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02]"
            >
              Apply to pilot
            </Link>
            <Link
              href="/newsroom"
              className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Back to the newsroom
            </Link>
          </div>
        </Reveal>
      </article>
    </div>
  );
}
