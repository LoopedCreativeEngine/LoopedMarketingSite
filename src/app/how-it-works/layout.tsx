import type { Metadata } from "next";

/**
 * The How it works page is a client component, which cannot export `metadata`.
 * Its metadata lives here instead, in a layout that adds no markup around the
 * page and exists only to carry it.
 */
export const metadata: Metadata = {
  title: "How Looped works: understand, recommend, decide, act, verify, learn",
  description:
    "The chapters of a Looped cycle: it builds the picture across your events and connected systems, brings the evidence with the recommendation, waits for your decision, carries the approved work through the tools your teams already use and verifies what actually happened.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    url: "/how-it-works",
    title: "How Looped works: understand, recommend, decide, act, verify, learn",
    description:
      "Looped builds the picture across your events, recommends with the evidence, waits for your decision, carries the approved work through your existing systems and verifies the outcome.",
  },
};

export default function HowItWorksLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return <>{children}</>;
}
