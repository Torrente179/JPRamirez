import type { Metadata } from "next";
import { Ambient } from "@/components/ambient";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { aiPractice, stackGroups } from "@/lib/data/stack";

export const metadata: Metadata = {
  title: "Stack",
  description: "The tools I use to build AI features and to keep sites running.",
};

export default function StackPage() {
  return (
    <>
      <PageHero
        title="Stack"
        lede="The tools I use to build AI features and to keep sites running."
        ambient="/images/ambient/clouds.webp"
      />

      <section aria-label="Tools" className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-8 lg:grid-cols-2">
        {stackGroups.map((group) => (
          <section
            key={group.id}
            data-reveal
            className="glass rounded-[26px] p-6 md:p-7"
            aria-labelledby={`stack-${group.id}`}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h2 id={`stack-${group.id}`} className="text-[22px] font-medium tracking-[-0.02em]">
                {group.title}
              </h2>
              <span className="meta nums">{String(group.items.length).padStart(2, "0")}</span>
            </div>
            <ul className="mt-4">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline justify-between gap-4 border-t border-white/8 py-3"
                >
                  <span className="text-base">{item.name}</span>
                  {item.note && <span className="meta text-right">{item.note}</span>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </section>

      <section className="relative isolate overflow-clip pt-32 pb-28 md:pt-44 md:pb-40">
        <div className="absolute inset-x-[10%] top-36 -z-10 h-[460px]">
          <Ambient src="/images/ambient/hero.webp" opacity={0.35} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionHeading
            title="How I use AI"
            aside={
              <p className="max-w-[400px] text-base leading-[1.7] text-muted-foreground">
                How I work with coding agents, and the AI I&apos;ve already shipped.
              </p>
            }
          />
          <div className="grid gap-4 md:grid-cols-3 md:[perspective:1800px]">
            {aiPractice.map((block, i) => (
              <div
                key={block.title}
                data-reveal
                className={
                  "glass-2 flex min-h-64 flex-col gap-4 rounded-[26px] p-7 md:p-8 " +
                  (i === 0
                    ? "md:[transform:rotateY(6deg)] md:origin-right"
                    : i === 2
                      ? "md:[transform:rotateY(-6deg)] md:origin-left"
                      : "")
                }
              >
                <span className="meta text-brand">0{i + 1}</span>
                <h3 className="text-2xl font-medium tracking-[-0.025em]">{block.title}</h3>
                <p className="text-[15px] leading-[1.75] text-muted-foreground">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
