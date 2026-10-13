"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Pointer depth for the home hero. Children marked `data-depth="n"` drift up
 * to n px with the cursor (negative = against it). One rAF loop that sleeps
 * when settled; transform only. Off for touch and reduced motion.
 */
export function HeroDepth({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const layers = Array.from(root.querySelectorAll<HTMLElement>("[data-depth]")).map((el) => ({
      el,
      depth: Number(el.dataset.depth) || 0,
      tilt: Number(el.dataset.tilt) || 0,
    }));
    if (!layers.length) return;

    let tx = 0;
    let ty = 0;
    let x = 0;
    let y = 0;
    let frame = 0;

    const render = () => {
      x += (tx - x) * 0.075;
      y += (ty - y) * 0.075;
      for (const { el, depth, tilt } of layers) {
        const rot = tilt ? ` rotateY(${(x * tilt).toFixed(2)}deg) rotateX(${(-y * tilt * 0.5).toFixed(2)}deg)` : "";
        el.style.transform = `translate3d(${(x * depth).toFixed(2)}px, ${(y * depth * 0.6).toFixed(2)}px, 0)${rot}`;
      }
      if (Math.abs(tx - x) > 0.001 || Math.abs(ty - y) > 0.001) {
        frame = requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };
    const wake = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 2 - 1;
      ty = ((e.clientY - r.top) / r.height) * 2 - 1;
      wake();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      wake();
    };

    for (const { el } of layers) el.style.willChange = "transform";
    root.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
      for (const { el } of layers) {
        el.style.willChange = "";
        el.style.transform = "";
      }
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
