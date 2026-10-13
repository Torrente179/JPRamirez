import type { CSSProperties, ReactNode } from "react";
import { Ambient } from "@/components/ambient";

/** Subpage header: the page name, large, over light from one of JP's photos. */
export function PageHero({
  title,
  lede,
  ambient,
  children,
  below,
}: {
  title: ReactNode;
  lede?: string;
  ambient: string;
  /** actions under the lede */
  children?: ReactNode;
  /** full-width content inside the lit area (metrics, chips) */
  below?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-clip pt-32 pb-14 md:pt-44 md:pb-20">
      <div className="absolute inset-0 -z-10">
        <Ambient src={ambient} opacity={0.55} fade="bottom" className="enter-fade" />
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-x-10 gap-y-6 px-5 sm:px-8">
        <h1 className="display enter text-[clamp(4rem,11vw,10.5rem)]">{title}</h1>
        {(lede || children) && (
          <div
            className="enter max-w-[420px] pb-2 md:pb-4"
            style={{ "--d": "120ms" } as CSSProperties}
          >
            {lede && (
              <p className="text-[17px] leading-[1.6] text-muted-foreground md:text-lg">
                {lede}
              </p>
            )}
            {children && <div className="mt-5 flex flex-wrap gap-2.5">{children}</div>}
          </div>
        )}
      </div>
      {below && (
        <div
          className="enter mx-auto mt-12 max-w-7xl px-5 sm:px-8 md:mt-16"
          style={{ "--d": "220ms" } as CSSProperties}
        >
          {below}
        </div>
      )}
    </section>
  );
}
