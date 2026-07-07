"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const HOLD_MS = 3000;

/**
 * Cycles through phrases with a blur-morph transition. Falls back to the
 * first phrase, static, under prefers-reduced-motion.
 */
export function RotatingText({
  phrases,
  className,
}: {
  phrases: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timeout: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const cycle = () => {
      timeout = setTimeout(() => {
        const el = ref.current;
        if (!el || cancelled) return;
        gsap.to(el, {
          autoAlpha: 0,
          y: -12,
          filter: "blur(9px)",
          duration: 0.38,
          ease: "power2.in",
          onComplete: () => {
            if (cancelled) return;
            setIndex((i) => (i + 1) % phrases.length);
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: 16, filter: "blur(9px)" },
              {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                duration: 0.65,
                ease: "power3.out",
                onComplete: cycle,
              },
            );
          },
        });
      }, HOLD_MS);
    };

    cycle();
    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [phrases.length]);

  return (
    <span ref={ref} className={className}>
      {phrases[index]}
    </span>
  );
}
