"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryShot } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

/**
 * Full-screen viewer for a project's screenshots, with the walkthrough notes.
 * Any element with data-shot="<index>" opens it at that shot, so the
 * triggers stay server-rendered. Native <dialog> handles focus and Esc;
 * native scroll-snap handles swiping; arrows and the keyboard move too.
 * Nothing (images included) renders until it opens.
 */
export function ShotViewer({ shots, title }: { shots: GalleryShot[]; title: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const start = useRef(0);
  const current = useRef(0);
  // where the track is headed, so quick repeated presses each move one screen
  const aim = useRef(0);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as Element | null)?.closest<HTMLElement>("[data-shot]");
      if (!trigger) return;
      e.preventDefault();
      start.current = current.current = aim.current = Number(trigger.dataset.shot) || 0;
      setIndex(start.current);
      setActive(null);
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // after the slides render: show the dialog at the chosen shot
  useEffect(() => {
    const d = dialog.current;
    const t = track.current;
    if (!open || !d || !t) return;
    if (!d.open) d.showModal();
    t.scrollTo({ left: start.current * t.clientWidth, behavior: "instant" });
    const keep = () => t.scrollTo({ left: current.current * t.clientWidth, behavior: "instant" });
    window.addEventListener("resize", keep);
    return () => window.removeEventListener("resize", keep);
  }, [open]);

  const go = (i: number) => {
    const t = track.current;
    if (!t) return;
    const n = Math.max(0, Math.min(shots.length - 1, i));
    aim.current = n;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollTo({ left: n * t.clientWidth, behavior: still ? "instant" : "smooth" });
  };

  const onScroll = () => {
    const t = track.current;
    if (!t) return;
    const i = Math.round(t.scrollLeft / t.clientWidth);
    if (Math.abs(t.scrollLeft - i * t.clientWidth) < 2) aim.current = i;
    if (i === current.current) return;
    current.current = i;
    setIndex(i);
    setActive(null);
  };

  const onKey = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "ArrowRight") go(aim.current + 1);
    else if (e.key === "ArrowLeft") go(aim.current - 1);
    else return;
    e.preventDefault();
  };

  const groups = shots.reduce<{ name: string; first: number; count: number }[]>((acc, s, i) => {
    const name = s.group ?? "";
    const last = acc[acc.length - 1];
    if (last && last.name === name) last.count += 1;
    else acc.push({ name, first: i, count: 1 });
    return acc;
  }, []);
  const shot = shots[index];

  return (
    <dialog
      ref={dialog}
      onClose={() => setOpen(false)}
      onKeyDown={onKey}
      aria-label={`${title} screenshots`}
      className="shot-viewer fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-background p-0 text-foreground backdrop:bg-transparent"
    >
      {open && shot && (
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between gap-4 px-4 pt-[max(14px,env(safe-area-inset-top))] pb-2 sm:px-8">
            <p className="meta nums truncate" aria-live="polite">
              {index + 1} / {shots.length}
              {shot.group && <span className="text-subtle"> · {shot.group}</span>}
            </p>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label="Close"
              className="btn btn-ghost size-11 shrink-0 p-0"
            >
              <X size={18} strokeWidth={1.75} aria-hidden />
            </button>
          </header>

          <div
            ref={track}
            onScroll={onScroll}
            className="flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {shots.map((s, i) => (
              <div
                key={s.src}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${shots.length}: ${s.caption}`}
                inert={i !== index}
                className="flex w-full shrink-0 snap-center snap-always overflow-y-auto overscroll-y-contain px-4 py-3 sm:px-8 lg:items-center"
              >
                <div className="mx-auto grid w-full max-w-[1640px] content-start items-center gap-5 lg:grid-cols-[minmax(0,1fr)_340px] lg:content-center lg:gap-8">
                  <div
                    className="relative mx-auto w-full"
                    style={{
                      aspectRatio: `${s.width} / ${s.height}`,
                      maxWidth: `calc((100dvh - 200px) * ${(s.width / s.height).toFixed(4)})`,
                    }}
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-[16px] bg-[#0a0b10] ring-1 ring-white/10">
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 1024px) 75vw, 100vw"
                        quality={85}
                        loading={Math.abs(i - index) <= 1 ? "eager" : "lazy"}
                        className="object-contain"
                      />
                    </div>
                    {s.notes?.map((n, k) => (
                      <span
                        key={k}
                        aria-hidden
                        onMouseEnter={() => setActive(k)}
                        onMouseLeave={() => setActive(null)}
                        className={cn(
                          "absolute rounded-[10px] border-2 border-brand transition-[opacity,background-color,box-shadow] duration-300 ease-[var(--ease)]",
                          i === index && active === k && "bg-brand/15 shadow-[0_0_0_5px_rgba(165,184,255,0.2)]",
                          i === index && active !== null && active !== k && "opacity-25",
                        )}
                        style={{ left: `${n.x}%`, top: `${n.y}%`, width: `${n.w}%`, height: `${n.h}%` }}
                      >
                        <span className="absolute -top-3 -left-3 flex size-6 items-center justify-center rounded-full bg-brand font-mono text-[11px] font-semibold text-background shadow-[0_4px_12px_rgba(0,0,0,0.45)]">
                          {k + 1}
                        </span>
                      </span>
                    ))}
                  </div>

                  <div className="glass rounded-[22px] p-5 lg:max-h-[calc(100dvh-200px)] lg:overflow-y-auto">
                    <h2 className="text-xl font-medium tracking-[-0.03em]">{s.caption}</h2>
                    {s.notes && (
                      <ol className="mt-3 -mx-2 flex flex-col">
                        {s.notes.map((n, k) => (
                          <li key={k}>
                            <button
                              type="button"
                              aria-pressed={i === index && active === k}
                              onClick={() => setActive(active === k ? null : k)}
                              onMouseEnter={() => setActive(k)}
                              onMouseLeave={() => setActive(null)}
                              onFocus={() => setActive(k)}
                              onBlur={() => setActive(null)}
                              className={cn(
                                "flex w-full gap-3 rounded-[14px] px-2 py-2.5 text-left text-[15px] leading-[1.55] text-muted-foreground transition-colors duration-300",
                                i === index && active === k && "bg-white/6 text-foreground",
                              )}
                            >
                              <span className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-brand font-mono text-[11px] font-semibold text-background">
                                {k + 1}
                              </span>
                              <span>{n.text}</span>
                            </button>
                          </li>
                        ))}
                      </ol>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <footer className="flex items-center justify-between gap-3 px-4 pt-2 pb-[max(14px,env(safe-area-inset-bottom))] sm:px-8">
            {groups.length > 1 ? (
              <nav aria-label="Sections" className="flex min-w-0 gap-1.5 overflow-x-auto [scrollbar-width:none]">
                {groups.map((g) => {
                  const here = index >= g.first && index < g.first + g.count;
                  return (
                    <button
                      key={g.name}
                      type="button"
                      onClick={() => go(g.first)}
                      aria-current={here || undefined}
                      className={cn(
                        "chip min-h-11 shrink-0 px-4 transition-colors duration-300",
                        here && "border-brand/60 text-foreground",
                      )}
                    >
                      {g.name} <span className="text-subtle">{g.count}</span>
                    </button>
                  );
                })}
              </nav>
            ) : (
              <span />
            )}
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => go(aim.current - 1)}
                disabled={index === 0}
                aria-label="Previous screen"
                className="btn btn-ghost size-11 p-0 disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronLeft size={18} strokeWidth={1.75} aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => go(aim.current + 1)}
                disabled={index === shots.length - 1}
                aria-label="Next screen"
                className="btn btn-ghost size-11 p-0 disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronRight size={18} strokeWidth={1.75} aria-hidden />
              </button>
            </div>
          </footer>
        </div>
      )}
    </dialog>
  );
}
