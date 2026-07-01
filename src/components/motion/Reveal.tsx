"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type ReactNode } from "react";

function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Reduced motion: show immediately, never animate.
    if (prefersReducedMotion()) {
      gsap.set(el, { opacity: 1, y: 0, clearProps: "transform" });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power2.out",
        delay,
        scrollTrigger: { trigger: el, start: "top 88%", once },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [delay, once]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0, transform: "translate3d(0, 16px, 0)" }}>
      {children}
    </div>
  );
}

export function RevealStagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}): React.ReactElement {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-reveal-item]");
    if (prefersReducedMotion()) {
      gsap.set(items, { opacity: 1, y: 0, clearProps: "transform" });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.fromTo(
      items,
      { opacity: 0, y: 16 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger,
        scrollTrigger: { trigger: el, start: "top 84%", once: true },
      },
    );
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}): React.ReactElement {
  return (
    <div data-reveal-item className={className} style={{ opacity: 0, transform: "translate3d(0, 16px, 0)" }}>
      {children}
    </div>
  );
}
