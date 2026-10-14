"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { AboutPhoto } from "@/lib/data/about";
import type { Locale } from "@/lib/i18n";

const HOLD_MS = 3400;

const copy = {
  carousel: { en: "carousel", es: "carrusel" },
  previous: { en: "Previous photo", es: "Foto anterior" },
  next: { en: "Next photo", es: "Foto siguiente" },
};

/** Where each card sits, by its distance from the front. */
function place(slot: number, total: number) {
  if (slot === 0) return { transform: "translate3d(0,32px,0) rotateY(-10deg)", opacity: 1 };
  if (slot === 1) return { transform: "translate3d(22px,16px,-60px) rotateY(-10deg)", opacity: 0.8 };
  if (slot === 2) return { transform: "translate3d(44px,0,-120px) rotateY(-10deg)", opacity: 0.5 };
  if (slot === total - 1)
    // the card that just left: it lifts toward the viewer and fades
    return { transform: "translate3d(-36px,64px,70px) rotateY(-10deg)", opacity: 0 };
  return { transform: "translate3d(60px,-12px,-180px) rotateY(-10deg)", opacity: 0 };
}

/**
 * About photos as a stack of glass frames. The front card steps away and the
 * next one comes forward. Transform and opacity only. Advances on its own,
 * and pauses on hover, focus, hidden tabs and reduced motion.
 */
export function PhotoStack({ photos, lang }: { photos: AboutPhoto[]; lang: Locale }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = photos.length;

  const go = useCallback((step: number) => setIndex((i) => (i + step + n) % n), [n]);

  useEffect(() => {
    if (paused || n < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let id: number | undefined;
    const start = () => {
      stop();
      id = window.setInterval(() => go(1), HOLD_MS);
    };
    const stop = () => {
      if (id !== undefined) window.clearInterval(id);
      id = undefined;
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    if (!document.hidden) start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [paused, n, go]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false);
      }}
    >
      <div className="relative h-[440px] [perspective:1400px] md:h-[540px]" aria-roledescription={copy.carousel[lang]}>
        {photos.map((photo, i) => {
          const slot = (i - index + n) % n;
          const { transform, opacity } = place(slot, n);
          return (
            <figure
              key={photo.src}
              aria-hidden={slot !== 0}
              className="glass-2 absolute inset-x-0 top-0 m-0 h-[400px] rounded-[26px] p-2 transition-[transform,opacity] duration-[900ms] ease-[var(--ease)] md:right-6 md:h-[480px]"
              style={{ transform, opacity, zIndex: n - slot }}
            >
              <div className="relative h-full overflow-hidden rounded-[19px] bg-[#0d1018]">
                <Image
                  src={photo.src}
                  alt={slot === 0 ? photo.alt : ""}
                  fill
                  sizes="(min-width: 1024px) 440px, 92vw"
                  loading={i < 3 ? "eager" : "lazy"}
                  className="object-cover"
                  style={{ objectPosition: photo.position ?? "center" }}
                />
              </div>
            </figure>
          );
        })}
      </div>
      <div className="mt-2 flex items-center justify-between gap-4">
        <p className="meta nums" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={copy.previous[lang]}
            onClick={() => go(-1)}
            className="flex size-11 items-center justify-center rounded-full border border-white/18 bg-white/6 transition-colors duration-300 hover:bg-white/12 active:scale-95"
          >
            <ChevronLeft size={18} aria-hidden />
          </button>
          <button
            type="button"
            aria-label={copy.next[lang]}
            onClick={() => go(1)}
            className="flex size-11 items-center justify-center rounded-full border border-white/18 bg-white/6 transition-colors duration-300 hover:bg-white/12 active:scale-95"
          >
            <ChevronRight size={18} aria-hidden />
          </button>
        </div>
      </div>
    </div>
  );
}
