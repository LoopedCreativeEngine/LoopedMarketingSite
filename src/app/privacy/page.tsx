import { Reveal } from "@/components/motion/Reveal";

import { site } from "@/styles/design-system";

export default function PrivacyPage(): React.ReactElement {
  return (
    <div className="bg-looped-bg pb-20 pt-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-3xl font-semibold tracking-tight text-[#f8f9ff]">Privacy policy</h1>
          <p className="mt-6 text-sm leading-relaxed text-[#c4c8d8]">
            This page is a placeholder for the public marketing site. {site.name} is operated by {site.company}. A full
            privacy policy will be published before campaigns drive paid traffic — covering analytics on this site,
            demo scheduling data, and how enquiry information is processed.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8]">
            For product privacy commitments (data residency, subprocessors, and customer content handling), request the
            enterprise data processing pack during your demo.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
