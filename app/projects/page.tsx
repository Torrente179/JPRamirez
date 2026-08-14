import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ProjectRow } from "@/components/project-row";
import { projects, clientWork } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Four things I've built — GiseUGC, Budget & Expense, JPTracker, Trainer Cloud — plus client work from MemberDev.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageHeader
        eyebrow="Projects"
        title={
          <>
            Things I've <span className="text-brand italic">shipped</span>.
            I still work on them.
          </>
        }
        lede="Four of my own: a couple of sites in production, a couple of tools I use myself. I designed them, wrote the code, and I still deploy them."
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
          <SectionHeading index="01" title="Client work" className="mb-4" />
          <p className="mb-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Client work from MemberDev. DNS, databases, uploads, support. The
            production stuff.
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
