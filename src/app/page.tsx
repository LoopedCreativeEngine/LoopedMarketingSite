import type { Metadata } from "next";

import { ClosingSection } from "@/components/home/ClosingSection";
import { CompoundingSection } from "@/components/home/CompoundingSection";
import { ConnectivitySection } from "@/components/home/ConnectivitySection";
import { EvidenceSection } from "@/components/home/EvidenceSection";
import { FaqSection } from "@/components/home/FaqSection";
import { FounderSection } from "@/components/home/FounderSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HumanJudgementSection } from "@/components/home/HumanJudgementSection";
import { KeepInLoopSection } from "@/components/home/KeepInLoopSection";
import { OutcomesSection } from "@/components/home/OutcomesSection";
import { ProductExperienceSection } from "@/components/home/ProductExperienceSection";
import { StartAnywhereSection } from "@/components/home/StartAnywhereSection";
import { StartSection } from "@/components/home/StartSection";
import { ValueSection } from "@/components/home/ValueSection";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/site";

/** A benefit-led buyer journey: what you get -> what it does -> start anywhere -> connectivity -> it compounds -> people and judgement -> proof -> working with it -> questions -> early access. */

export const metadata: Metadata = {
  // The homepage carries the site's default title, so it sets `absolute` to
  // avoid the "%s | Looped" template appending the brand to a title that
  // already ends in it.
  title: { absolute: DEFAULT_TITLE },
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { url: "/", title: DEFAULT_TITLE, description: DEFAULT_DESCRIPTION },
};

export default function HomePage(): React.ReactElement {
  return (
    <>
      <HomeHero />
      <ValueSection />
      <OutcomesSection />
      <StartAnywhereSection />
      <ConnectivitySection />
      <CompoundingSection />
      <HumanJudgementSection />
      <EvidenceSection />
      <ProductExperienceSection />
      <FaqSection />
      <StartSection />
      <KeepInLoopSection />
      <FounderSection />
      <ClosingSection />
    </>
  );
}
