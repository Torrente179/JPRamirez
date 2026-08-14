import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { stackGroups, aiPractice } from "@/lib/data/stack";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "Agents, TypeScript, hosting, WordPress. The stack behind the AI systems I build.",
};

export default function StackPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageHeader
        eyebrow="Stack"
        title={
          <>
            Agents, code, and{" "}
            <span className="text-brand italic">infrastructure</span>.
          </>
        }
        lede="Claude Code, Codex, Cursor. TypeScript. The hosting and WordPress layer I already run in production."
      />

      <div>
        {stackGroups.map((group, gi) => (
          <Reveal key={group.id} delay={gi * 0.04}>
            <section className="hairline grid gap-6 py-10 lg:grid-cols-[240px_1fr] lg:gap-12">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-brand">
                {group.title}
              </h2>
              <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-border/50 pb-2.5"
                  >
                    <span className="text-[15px] font-medium">{item.name}</span>
                    {item.note && (
                      <span className="text-right font-mono text-[11px] tracking-[0.04em] text-subtle">
                        {item.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>

      <section className="mt-28">
        <Reveal>
          <SectionHeading index="01" title="How I use AI" className="mb-4" />
          <p className="mb-12 max-w-xl text-sm leading-relaxed text-muted-foreground">
            How I work with agents, and what I have already put in production.
          </p>
        </Reveal>
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-3">
          {aiPractice.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.08}>
              <div className="hairline pt-6">
                <h3 className="text-base font-medium">{block.title}</h3>
                <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">
                  {block.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
