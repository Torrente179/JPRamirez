"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { AboutPhoto } from "@/lib/data/about";

const HOLD_MS = 5000;

export function PhotoCarousel({ photos }: { photos: AboutPhoto[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (photos.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let id: number | undefined;
    const stop = () => {
      if (id !== undefined) window.clearInterval(id);
      id = undefined;
    };
    const start = () => {
      stop();
      id = window.setInterval(
        () => setIndex((i) => (i + 1) % photos.length),
        HOLD_MS,
      );
    };
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [paused, photos.length]);

  const total = String(photos.length).padStart(2, "0");
  const current = String(index + 1).padStart(2, "0");

  return (
    <div
      className="about-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="about-carousel-frame rounded-xl border border-border">
        {photos.map((photo, i) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={i === index ? photo.alt : ""}
            fill
            sizes="(min-width: 1024px) 340px, 100vw"
            priority={i === 0}
            aria-hidden={i !== index}
            className={cn(
              "about-carousel-slide object-cover",
              i === index && "is-current",
            )}
            style={{ objectPosition: photo.position ?? "center" }}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="nums font-mono text-[11px] tracking-[0.14em] text-subtle">
          {current} / {total}
        </p>
        <div className="flex items-center">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className="flex size-7 items-center justify-center"
              onClick={() => setIndex(i)}
            >
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  i === index ? "bg-brand" : "bg-subtle/50",
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
