import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Fraunces } from "next/font/google";

import { CustomCursor } from "@/components/effects/CustomCursor";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { LoopRail } from "@/components/effects/LoopRail";
import { SmoothScrollProvider } from "@/components/effects/SmoothScrollProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Looped: the intelligence layer for event teams",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Looped turns the work your event teams already do into one connected intelligence engine. Built by event professionals for conferences and awards.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Looped: the intelligence layer for event teams",
    description:
      "One intelligence layer for conference and awards organisers: market and audience intelligence, planning, working hubs, creative, AI conversations, communications and governed execution.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Looped: the intelligence layer for event teams",
    description:
      "One intelligence layer for conference and awards organisers, from market intelligence to governed execution.",
  },
  icons: {
    icon: [{ url: "/loop-mark.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-bone font-sans text-graphite">
        <SmoothScrollProvider>
          <LoopRail />
          <CustomCursor />
          <GrainOverlay />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
