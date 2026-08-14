import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ProjectRow } from "@/components/project-row";
import { studyTopics } from "@/lib/data/now";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What I'm studying for myself, and the apps I'm building.",
};

export default function NowPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageHeader
        eyebrow="Now"
        title={
          <>
            What I'm{" "}
            <span className="text-brand italic">studying</span> and
            building.
          </>
        }
        lede="A map of topics I'm learning for myself, and the apps I'm making."
      />

      <section>
        <Reveal>
          <SectionHeading index="01" title="Study map" className="mb-12" />
        </Reveal>

        <Reveal>
          <ol className="study-map" aria-label="Study topics">
            {studyTopics.map((topic) => (
              <li key={topic.id} className="study-map-node">
                <span className="study-map-index nums font-mono text-[10px] tracking-[0.14em] text-brand">
                  {String(topic.id).padStart(2, "0")}
                </span>
                <span className="study-map-dot" aria-hidden />
                <p className="study-map-label">{topic.short}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-16">
          {studyTopics.map((topic, i) => (
            <Reveal key={topic.id} delay={i * 0.04}>
              <div className="hairline grid gap-2 py-6 sm:grid-cols-[4.5rem_minmax(0,14rem)_1fr] sm:items-baseline sm:gap-8">
                <p className="nums font-mono text-[11px] tracking-[0.14em] text-subtle">
                  {String(topic.id).padStart(2, "0")}
                </p>
                <h3 className="text-base font-medium">{topic.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {topic.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-28">
        <Reveal>
          <SectionHeading index="02" title="Building" className="mb-8" />
        </Reveal>
        <div>
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectRow project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
