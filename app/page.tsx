import Link from "next/link";
import { Stagger, Reveal } from "@/components/motion";
import { StatusLine } from "@/components/status-line";
import { SectionHeading } from "@/components/section-heading";
import { ProjectRow } from "@/components/project-row";
import { site } from "@/lib/data/site";
import { projects } from "@/lib/data/projects";
import { currentFocus } from "@/lib/data/now";
import { stackGroups } from "@/lib/data/stack";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      {/* Hero */}
      <Stagger className="flex min-h-[82svh] flex-col justify-center py-24">
        <div data-stagger>
          <StatusLine />
        </div>
        <h1
          data-stagger
          className="mt-8 max-w-4xl text-[2.6rem] leading-[1.04] font-medium tracking-[-0.02em] sm:text-6xl md:text-7xl"
        >
          Juan Pablo Ramirez keeps web platforms{" "}
          <span className="text-brand italic">calm</span>.
        </h1>
        <p
          data-stagger
          className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Technical support engineer across hosting, DNS, WordPress, and SaaS
          operations — building AI-assisted systems that make support work
          better.
        </p>
        <div data-stagger className="mt-10 flex items-center gap-7">
          <Link
            href="/projects"
            className="group flex items-center gap-2 font-mono text-[12px] tracking-[0.14em] text-foreground uppercase"
          >
            <span className="link-quiet">View projects</span>
            <span
              aria-hidden
              className="text-brand transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <Link
            href="/about"
            className="font-mono text-[12px] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            About me
          </Link>
        </div>
      </Stagger>

      {/* Metrics */}
      <Reveal>
        <div className="hairline grid grid-cols-2 gap-y-10 py-12 sm:grid-cols-4">
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

      {/* Currently */}
      <section className="mt-28">
        <Reveal>
          <div className="mb-8 flex items-baseline justify-between">
            <SectionHeading index="02" title="Currently" />
            <Link
              href="/now"
              className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground transition-colors hover:text-brand"
            >
              the /now page →
            </Link>
          </div>
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
