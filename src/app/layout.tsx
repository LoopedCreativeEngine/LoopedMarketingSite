import type { Metadata } from "next";
import { DM_Mono, DM_Sans, Fraunces } from "next/font/google";

import { CustomCursor } from "@/components/effects/CustomCursor";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { SmoothScrollProvider } from "@/components/effects/SmoothScrollProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

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
  title: "Looped Event OS — Intelligence layer for B2B events",
  description:
    "Strategic intelligence for conferences and awards organisers. Human-approved AI cascade from research to revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col bg-looped-bg font-sans text-slate-50">
        <SmoothScrollProvider>
          <ScrollProgress />
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
