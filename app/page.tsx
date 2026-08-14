import Link from "next/link";
import { Reveal } from "@/components/motion";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { ProjectRow } from "@/components/project-row";
import { ExperienceRow } from "@/components/experience-row";
import { CvDownload } from "@/components/cv-download";
import { StatusBoard } from "@/components/status-board";
import { site } from "@/lib/data/site";
import { projects } from "@/lib/data/projects";
import { roles } from "@/lib/data/experience";
import { stackGroups } from "@/lib/data/stack";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <Hero />

      {/* Status board */}
      <Reveal>
        <div className="mt-6">
          <StatusBoard />
        </div>
      </Reveal>

      {/* Metrics */}
      <Reveal>
        <div className="hairline mt-16 grid grid-cols-2 gap-y-10 py-12 sm:grid-cols-4">
          {site.metrics.map((m) => (
            <div key={m.label}>
              <p className="nums text-3xl font-medium tracking-tight sm:text-4xl">
                {m.value}
              </p>
              <p className="eyebrow mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Featured projects */}
      <section className="mt-24">
        <Reveal>
          <div className="mb-8 flex items-baseline justify-between">
            <SectionHeading index="01" title="Selected projects" />
            <Link
              href="/projects"
              className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground transition-colors hover:text-brand"
            >
              all projects →
            </Link>
          </div>
        </Reveal>
        <div>
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectRow project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work experience */}
      <section className="mt-24">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
            <SectionHeading index="02" title="Work experience" />
            <div className="flex items-center gap-5">
              <CvDownload />
              <Link
                href="/experience"
                className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground transition-colors hover:text-brand"
              >
                all experience →
              </Link>
            </div>
          </div>
        </Reveal>
        <div>
          {roles.map((role, i) => (
            <Reveal key={role.slug} delay={i * 0.06}>
              <ExperienceRow role={role} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stack snapshot */}
      <section className="mt-28">
        <Reveal>
          <div className="mb-8 flex items-baseline justify-between">
            <SectionHeading index="03" title="Stack" />
            <Link
              href="/stack"
              className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground transition-colors hover:text-brand"
            >
              full stack &amp; AI practice →
            </Link>
          </div>
        </Reveal>
        <div className="space-y-0">
          {stackGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.04}>
              <div className="hairline grid gap-2 py-5 sm:grid-cols-[220px_1fr] sm:gap-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-subtle sm:pt-1">
                  {group.title}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {group.items.map((item) => item.name).join(" · ")}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
