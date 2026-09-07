import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/motion/Reveal";
import { CtaButton } from "@/components/ui/CtaButton";
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
    // Absolute: this title already names the brand, so the "%s | Looped"
    // template would say it twice.
    title: { absolute: `${article.title} · Looped Newsroom` },
    description: article.standfirst,
    alternates: { canonical: `/newsroom/${slug}` },
    openGraph: {
      type: "article",
      url: `/newsroom/${slug}`,
      title: article.title,
      description: article.standfirst,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: ArticleParams): Promise<React.ReactElement> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    notFound();
  }

  return (
    <div className="bg-paper pb-24 pt-28 sm:pt-32">
      <article className="mx-auto max-w-2xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <Link
            href="/newsroom"
            className="inline-flex items-center gap-1.5 kicker text-purple transition-colors hover:text-ink"
          >
            <span aria-hidden>←</span>
            Newsroom
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 kicker text-muted">
            <span className="text-purple">{article.kicker}</span>
            <span aria-hidden className="text-[rgba(15,23,42,0.2)]">
              /
            </span>
            <time dateTime={article.date}>{article.dateLabel}</time>
          </div>

          <h1 className="mt-5 text-balance font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-purple sm:text-2xl">{article.standfirst}</p>
          <p className="mt-6 border-t border-[rgba(15,23,42,0.12)] pt-5 text-sm text-muted">{article.byline}</p>
        </Reveal>

        <Reveal className="mt-10 space-y-6">
          {article.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-[1.85] text-slate sm:text-lg">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className="mt-14 border-t border-[rgba(15,23,42,0.12)] pt-10 text-center">
          <p className="font-serif text-2xl italic text-ink sm:text-3xl">
            Looped is built today. Early access will open to a small number of selected event organisations following our founding pilot.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CtaButton href="/demo" event="newsroom_signup_click">Join the waitlist</CtaButton>
            <CtaButton href="/newsroom" variant="secondary">
              Back to the newsroom
            </CtaButton>
          </div>
        </Reveal>
      </article>
    </div>
  );
}
