"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor(): React.ReactElement | null {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let x = tx;
    let y = ty;
    let raf = 0;

    const onMove = (event: MouseEvent): void => {
      tx = event.clientX;
      ty = event.clientY;
    };

    const animate = (): void => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[85] h-2 w-2 -translate-x-1 -translate-y-1 rounded-full bg-looped-violet-700 shadow-[0_0_16px_rgba(67,56,202,0.8)]"
      aria-hidden
    />
  );
}
