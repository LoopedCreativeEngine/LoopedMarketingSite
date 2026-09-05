"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/cn";

/**
 * The Loop — the animated gradient ribbon. RECOVERED verbatim from the
 * founder's "Looped ribbon hero animation" artefact (4 Aug 2026): a wobbling
 * loop of 220 segments whose stroke cycles purple → pink → orange → pink,
 * drawn once blurred (the glow) and once sharp, with a warm light pulse
 * travelling the loop every 13 s. One wobble cycle is 22 s. Frames are
 * capped at ~30/s; the canvas paints only while on screen; under reduced
 * motion a single frame is drawn.
 *
 * `cxf` is the loop's horizontal centre as a fraction of the canvas width
 * (0.72 in the deck's hero; the right-hand, partially cropped placement is
 * done by the parent's sizing); `weight` scales the stroke.
 */
type Vec = { x: number; y: number; u: number; f: number };
type Orbit = { cx: number; cy: number; rx: number; ry: number; ax: number; ay: number; bx: number; by: number; ph: number };

const STOPS: ReadonlyArray<readonly [number, number, number]> = [
  [124, 58, 237],
  [236, 72, 153],
  [251, 146, 60],
  [236, 72, 153],
];
const PERIOD = 22;
const PULSE_PERIOD = 13;

function color(phase: number): string {
  const p = ((phase % 1) + 1) % 1;
  const sc = p * 4;
  const i = Math.floor(sc) % 4;
  const f = sc - Math.floor(sc);
  const a = STOPS[i];
  const b = STOPS[(i + 1) % 4];
  return `${(a[0] + (b[0] - a[0]) * f) | 0},${(a[1] + (b[1] - a[1]) * f) | 0},${(a[2] + (b[2] - a[2]) * f) | 0}`;
}

function buildPoints(t: number, o: Orbit): Vec[] {
  const N = 220;
  const pts: Vec[] = [];
  for (let i = 0; i <= N; i++) {
    const u = (i / N) * Math.PI * 2;
    pts.push({
      x: o.cx + o.rx * Math.cos(u) + o.ax * Math.sin(2 * u + t + o.ph) + o.bx * Math.cos(3 * u - 0.6 * t),
      y: o.cy + o.ry * Math.sin(u) + o.ay * Math.sin(3 * u - t + o.ph) + o.by * Math.cos(2 * u + 0.7 * t),
      u,
      f: i / N,
    });
  }
  return pts;
}

function strokeRibbon(ctx: CanvasRenderingContext2D, pts: Vec[], baseW: number, colorRot: number, t: number): void {
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (let i = 0; i < pts.length - 1; i++) {
    const p = pts[i];
    const q = pts[i + 1];
    ctx.strokeStyle = `rgba(${color(p.f - colorRot)},1)`;
    ctx.lineWidth = baseW * (0.78 + 0.3 * Math.sin(p.u + t));
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(q.x, q.y);
    ctx.stroke();
  }
}

export function Ribbon({
  className,
  cxf = 0.72,
  weight = 1,
}: {
  className?: string;
  cxf?: number;
  weight?: number;
}): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const off = document.createElement("canvas");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const drawOne = (seconds: number): void => {
      const r = c.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const w = Math.round(r.width);
      const h = Math.round(r.height);
      if (c.width !== w || c.height !== h) {
        c.width = w;
        c.height = h;
      }
      if (off.width !== w || off.height !== h) {
        off.width = w;
        off.height = h;
      }
      const ctx = c.getContext("2d");
      const octx = off.getContext("2d");
      if (!ctx || !octx) return;

      const t = (seconds / PERIOD) * Math.PI * 2;
      const colorRot = seconds / PERIOD;
      const baseW = Math.max(9, w * 0.0135) * weight;
      const cx = w * cxf;
      const cy = h * 0.5;
      const primary: Orbit = { cx, cy, rx: w * 0.185, ry: h * 0.3, ax: w * 0.042, ay: h * 0.052, bx: w * 0.022, by: h * 0.044, ph: 0 };

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, c.width, c.height);
      octx.setTransform(1, 0, 0, 1, 0, 0);
      octx.clearRect(0, 0, off.width, off.height);

      const pts = buildPoints(t, primary);
      strokeRibbon(octx, pts, baseW, colorRot, t);
      const composite = (blur: number, alpha: number): void => {
        ctx.save();
        ctx.filter = `blur(${blur}px)`;
        ctx.globalAlpha = alpha;
        ctx.drawImage(off, 0, 0, w, h);
        ctx.restore();
      };
      composite(26, 0.42);
      composite(0, 0.9);

      if (!reduced) {
        const fp = (seconds / PULSE_PERIOD) % 1;
        if (fp < 0.55) {
          const pos = fp / 0.55;
          const intensity = Math.sin(pos * Math.PI);
          ctx.save();
          ctx.filter = "blur(7px)";
          ctx.globalCompositeOperation = "lighter";
          ctx.lineCap = "round";
          for (let i = 0; i < pts.length - 1; i++) {
            const p = pts[i];
            let d = Math.abs(p.f - pos);
            d = Math.min(d, 1 - d);
            if (d < 0.035) {
              ctx.strokeStyle = `rgba(255,244,232,${(1 - d / 0.035) * intensity * 0.55})`;
              ctx.lineWidth = baseW * 1.25;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(pts[i + 1].x, pts[i + 1].y);
              ctx.stroke();
            }
          }
          ctx.restore();
        }
      }
    };

    const visible = (): boolean => {
      const r = c.getBoundingClientRect();
      return r.width > 40 && r.height > 40 && r.bottom > -80 && r.top < window.innerHeight + 80;
    };

    let raf = 0;
    let t0: number | null = null;
    let prev = 0;
    let last = PERIOD * 0.14;
    let resizeTimer = 0;
    const onResize = (): void => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => drawOne(last), 60);
    };
    window.addEventListener("resize", onResize);

    if (reduced) {
      drawOne(last);
      return () => window.removeEventListener("resize", onResize);
    }
    const loop = (now: number): void => {
      if (t0 === null) t0 = now;
      if (now - prev >= 32) {
        prev = now;
        last = (now - t0) / 1000;
        if (visible()) drawOne(last);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [cxf, weight]);

  return <canvas ref={canvasRef} aria-hidden className={cn("block h-full w-full", className)} />;
}
