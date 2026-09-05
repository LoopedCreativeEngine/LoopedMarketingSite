"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/cn";

/**
 * Nodes on a thread that draws itself as it scrolls into view. RECOVERED —
 * the CascadeDiagram device from 5ca71de, generalised to take its nodes and
 * to sit on ink as well as paper. Same timing: nodes rise 28px over 0.55s at
 * 0.09s stagger from 78%; the thread draws over 1.3s, linear, from 74%.
 */
export type ThreadNode = { id: string; label: string; body?: string };

export function ThreadDiagram({
  nodes,
  tone = "light",
  className,
}: {
  nodes: readonly ThreadNode[];
  tone?: "light" | "ink";
  className?: string;
}): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const ink = tone === "ink";

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".thread-node",
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

  const n = nodes.length;
  // Tailwind needs the literal class; the thread carries five or seven nodes on this site.
  const COLS: Record<number, string> = { 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5", 6: "md:grid-cols-6", 7: "md:grid-cols-7" };
  // One straight thread through the node centres (900 units wide, like the recovered diagram).
  const step = 900 / n;
  const xs = nodes.map((_, i) => step * i + step / 2);
  const d = `M ${xs[0]} 50 ${xs.slice(1).map((x) => `L ${x} 50`).join(" ")}`;

  return (
    <div ref={ref} className={cn("w-full pb-2", className)}>
      <div className="relative">
        <svg viewBox="0 0 900 100" className="pointer-events-none absolute left-0 top-9 hidden h-12 w-full md:block" aria-hidden>
          <path
            ref={pathRef}
            d={d}
            fill="none"
            stroke={ink ? "var(--iris)" : "var(--violet)"}
            strokeWidth="1.5"
            opacity="0.85"
          />
        </svg>
        <div className="grid grid-cols-1 gap-4 md:gap-3">
          <div className={cn("grid grid-cols-1 gap-4 md:gap-3", COLS[n] ?? "md:grid-cols-6")}>
            {nodes.map((node, i) => (
              <div
                key={node.id}
                className={cn(
                  "thread-node relative rounded-xl border p-4",
                  ink ? "border-white/10 bg-ink-raised shadow-[var(--lift-ink)]" : "border-[rgba(23,19,31,0.12)] bg-paper shadow-[var(--lift-light)]",
                )}
              >
                <span className={cn("font-mono text-xs", ink ? "text-iris" : "text-violet")}>0{i + 1}</span>
                <p className={cn("mt-2 text-sm font-medium", ink ? "text-bone-text" : "text-ink-text")}>{node.label}</p>
                {node.body ? (
                  <p className={cn("mt-2 text-xs leading-relaxed", ink ? "text-bone-dim" : "text-graphite")}>{node.body}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
