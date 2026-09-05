"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const NODES: { id: string; label: string }[] = [
  { id: "n1", label: "Event brief" },
  { id: "n2", label: "Industry intelligence" },
  { id: "n3", label: "Market mapping" },
  { id: "n4", label: "Audience personas" },
  { id: "n5", label: "Messaging strategy" },
  { id: "n6", label: "Campaign plan" },
];

export function CascadeDiagram({ expanded = false }: { expanded?: boolean }): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const nodes = expanded ? NODES : NODES;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cascade-node",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.09,
          scrollTrigger: { trigger: ref.current, start: "top 78%" },
        },
      );

      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          duration: 1.3,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 74%" },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="w-full overflow-x-auto pb-2">
      <div className="relative min-w-[900px] md:min-w-0">
        <svg
          viewBox="0 0 900 100"
          className="pointer-events-none absolute left-0 top-9 hidden h-12 w-full md:block"
          aria-hidden
        >
          <path
            ref={pathRef}
            d="M 50 50 C 180 50, 210 50, 330 50 S 480 50, 610 50 S 760 50, 850 50"
            fill="none"
            stroke="var(--purple)"
            strokeWidth="1.5"
            opacity="0.85"
          />
        </svg>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-3">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="cascade-node rounded-xl border border-[rgba(15,23,42,0.12)] bg-stone p-4 shadow-[var(--lift-light)]"
            >
              <p className="text-sm font-medium text-ink">{node.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
