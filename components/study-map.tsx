"use client";

import { useState } from "react";
import type { StudyTopic } from "@/lib/data/now";
import { cn } from "@/lib/utils";

/** Seven equal stops. Selecting one shows its summary; there is no progress state. */
export function StudyMap({ topics }: { topics: StudyTopic[] }) {
  const [selected, setSelected] = useState(topics[0].id);
  const current = topics.find((t) => t.id === selected) ?? topics[0];

  return (
    <div className="glass-2 relative rounded-[30px] px-4 pt-6 pb-4 md:px-7 md:pt-10 md:pb-7">
      <span
        aria-hidden
        className="absolute top-[52px] right-[8%] left-[8%] hidden h-px bg-white/16 md:block"
      />
      <div className="relative">
      <span
        aria-hidden
        className="absolute top-7 bottom-7 left-[31px] w-px bg-white/14 md:hidden"
      />
      <ol className="relative grid gap-1 md:grid-cols-7 md:gap-2">
        {topics.map((topic) => {
          const active = topic.id === selected;
          return (
            <li key={topic.id}>
              <button
                type="button"
                onClick={() => setSelected(topic.id)}
                aria-pressed={active}
                className="group flex w-full items-center gap-4 rounded-2xl px-2 py-1.5 text-left md:flex-col md:gap-3.5 md:p-0 md:text-center"
              >
                <span
                  className={cn(
                    "flex size-12 flex-none items-center justify-center rounded-full border font-mono text-[13px] transition-[background-color,border-color,color,box-shadow] duration-500 md:size-14",
                    active
                      ? "border-brand bg-[rgba(165,184,255,0.2)] text-white shadow-[0_0_0_6px_rgba(165,184,255,0.08)]"
                      : "border-white/18 bg-[#0d1018] text-muted-foreground group-hover:border-white/35",
                  )}
                >
                  0{topic.id}
                </span>
                <span
                  className={cn(
                    "text-[15px] font-medium leading-[1.3] transition-colors duration-300",
                    active ? "text-foreground" : "text-muted-foreground group-hover:text-foreground",
                  )}
                >
                  {topic.short}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      </div>

      <div
        aria-live="polite"
        className="mt-6 flex flex-wrap items-baseline gap-x-10 gap-y-3 rounded-[22px] border border-white/12 bg-black/35 p-6 md:mt-10 md:p-7"
      >
        <span className="meta text-[13px] text-brand">0{current.id} / 0{topics.length}</span>
        <span
          key={current.id}
          className="flex-[0_1_320px] text-[clamp(1.5rem,2.4vw,2.1rem)] leading-[1.1] font-medium tracking-[-0.03em] motion-safe:animate-[rise_0.6s_var(--ease)_both]"
        >
          {current.title}
        </span>
        <span
          key={`s-${current.id}`}
          className="flex-[1_1_360px] text-[17px] leading-[1.7] text-muted-foreground motion-safe:animate-[rise_0.7s_var(--ease)_60ms_both]"
        >
          {current.summary}
        </span>
      </div>
    </div>
  );
}
