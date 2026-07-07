import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { currentFocus, roadmapPhases, northStar } from "@/lib/data/now";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What I'm working on right now, the seven-phase roadmap I'm following, and where it's headed.",
};

const stateStyles = {
  done: { dot: "bg-ok", label: "text-ok", text: "done" },
  active: { dot: "bg-brand", label: "text-brand", text: "in progress" },
  next: { dot: "bg-subtle", label: "text-subtle", text: "queued" },
} as const;

export default function NowPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageHeader
        eyebrow={`Now — updated ${new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}`}
        title={
          <>
            Working in support.{" "}
            <span className="text-brand italic">Building</span> what comes
            after it.
          </>
        }
        lede="A living page: what has my attention right now, the roadmap behind it, and the role it's all pointing at."
      />

      {/* Current focus */}
      <section>
        <Reveal>
          <SectionHeading index="01" title="Current focus" className="mb-8" />
        </Reveal>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-3">
          {currentFocus.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="hairline pt-6">
                <h3 className="text-base font-medium">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="mt-28">
        <Reveal>
          <SectionHeading index="02" title="The roadmap" className="mb-4" />
          <p className="mb-12 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Seven phases toward AI support systems engineering — 8–10 hours a
            week, spaced review, mistake log. Shipped artifacts are the
            success signal; certificates are secondary.
          </p>
        </Reveal>
        <ol className="relative ml-[5px] border-l border-border">
          {roadmapPhases.map((phase, i) => {
            const style = stateStyles[phase.state];
            return (
              <li
                key={phase.phase}
                className="relative pb-12 pl-8 last:pb-2 sm:pl-12"
              >
                <span
                  className={cn(
                    "absolute top-[7px] -left-[5.5px] size-[10px] rounded-full border-2 border-background",
                    style.dot,
                  )}
                />
                <Reveal delay={i * 0.05}>
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <p className="nums font-mono text-[11px] tracking-[0.14em] text-subtle">
                      PHASE {phase.phase}
                    </p>
                    <p
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.14em]",
                        style.label,
                      )}
                    >
                      {style.text}
                    </p>
                  </div>
                  <h3 className="mt-2 text-lg font-medium tracking-tight sm:text-xl">
                    {phase.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {phase.summary}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </section>

      {/* North star */}
      <section className="mt-28">
        <Reveal>
          <SectionHeading index="03" title="Where this goes" className="mb-8" />
        </Reveal>
        <Reveal>
          <div className="hairline max-w-2xl pt-8">
            <h3 className="text-2xl font-medium tracking-tight sm:text-3xl">
              {northStar.title}
            </h3>
            <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground">
              {northStar.body}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {northStar.identities.map((identity) => (
                <span
                  key={identity}
                  className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] tracking-[0.04em] text-muted-foreground"
                >
                  {identity}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
