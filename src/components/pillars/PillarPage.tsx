import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";

type PillarPageProps = {
  title: string;
  seatLine: string;
  challenges: string[];
  howItWorks: string[];
  deliverables: string[];
  connects: string;
};

export function PillarPage({
  title,
  seatLine,
  challenges,
  howItWorks,
  deliverables,
  connects,
}: PillarPageProps): React.ReactElement {
  return (
    <div className="bg-looped-bg pb-20 pt-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-5xl tracking-tight text-[#f8f9ff]">{title}</h1>
          <p className="mt-4 text-lg text-[#c4c8d8]">{seatLine}</p>
        </Reveal>

        <Reveal className="mt-12">
          <h2 className="text-2xl italic text-[#f8f9ff]">What your team deals with</h2>
          {challenges.map((p) => (
            <p key={p} className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal className="mt-12">
          <h2 className="text-2xl italic text-[#f8f9ff]">How Looped works for you</h2>
          {howItWorks.map((p) => (
            <p key={p} className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal className="mt-12">
          <h2 className="text-2xl italic text-[#f8f9ff]">What you get</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-12">
          <h2 className="text-2xl italic text-[#f8f9ff]">How it connects</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#c4c8d8] sm:text-base">{connects}</p>
        </Reveal>

        <Reveal className="mt-12">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center rounded-lg bg-looped-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-[var(--looped-violet-glow)] transition-transform hover:scale-[1.02]"
          >
            See it in action
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
