import type { Metadata } from "next";

/**
 * The How it works page is a client component, which cannot export `metadata`.
 * Its metadata lives here instead, in a layout that adds no markup around the
 * page and exists only to carry it.
 */
export const metadata: Metadata = {
  title: "How Looped works: the loop from signal to decision to action",
  description:
    "The chapters of a Looped cycle: it notices what changed across your events, brings the evidence, proposes the strongest move, and carries the decision into action so the next edition starts ahead of the last.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    url: "/how-it-works",
    title: "How Looped works: the loop from signal to decision to action",
    description:
      "The chapters of a Looped cycle: it notices what changed across your events, brings the evidence, proposes the strongest move, and carries the decision into action.",
  },
};

export default function HowItWorksLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return <>{children}</>;
}
