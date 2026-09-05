import { Reveal } from "@/components/motion/Reveal";

import { site } from "@/styles/design-system";

export default function PrivacyPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-purple">Legal</p>
          <h1 className="mt-4 font-serif text-3xl tracking-tight text-ink sm:text-4xl">Privacy policy</h1>
          <p className="mt-6 text-sm leading-relaxed text-slate">
            This page is a placeholder for the public marketing site. {site.name} is operated by {site.company}. A full
            privacy policy will be published before campaigns drive paid traffic — covering analytics on this site, demo
            scheduling data, and how enquiry information is processed.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate">
            For product privacy commitments (data residency, subprocessors, and customer content handling), request the
            enterprise data processing pack during your demo.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
