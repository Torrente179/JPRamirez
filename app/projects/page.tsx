import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ProjectRow } from "@/components/project-row";
import { projects, clientWork } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Four products I've built — GiseUGC, Budget & Expense, JPTracker, Trainer Cloud — plus shipped client and platform work.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Things I've <span className="text-brand italic">shipped</span> —
            and keep shipping.
          </>
        }
        lede="Four products of my own, from production marketing sites to private tools I use every day. Built AI-assisted, owned end to end: design, code, data, deployment."
      />

      <section>
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectRow project={project} index={i} />
          </Reveal>
        ))}
      </section>

      <section className="mt-28">
        <Reveal>
          <SectionHeading index="01" title="Client & platform work" className="mb-4" />
          <p className="mb-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Selected work shipped for clients at MemberDev — the operational
            kind of engineering that rarely gets a landing page.
          </p>
        </Reveal>
        <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {clientWork.map((work, i) => (
            <Reveal key={work.name} delay={i * 0.06}>
              <div className="hairline pt-6">
                <h3 className="font-mono text-[13px] font-medium tracking-[0.02em] text-foreground">
                  {work.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {work.description}
                </p>
                <p className="eyebrow mt-4">{work.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
