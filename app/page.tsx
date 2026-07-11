import Image from "next/image";
import Link from "next/link";
import { Stagger, Reveal } from "@/components/motion";
import { StatusLine } from "@/components/status-line";
import { SectionHeading } from "@/components/section-heading";
import { ProjectRow } from "@/components/project-row";
import { RotatingText } from "@/components/rotating-text";
import { StatusBoard } from "@/components/status-board";
import { site } from "@/lib/data/site";
import { projects } from "@/lib/data/projects";
import { stackGroups } from "@/lib/data/stack";

const heroPhrases = [
  "web platforms calm.",
  "DNS boring.",
  "databases fast.",
  "support human.",
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      {/* Hero */}
      <Stagger className="relative flex min-h-[88svh] flex-col overflow-visible pt-14 pb-10 sm:pt-20">
        <div data-stagger className="relative z-20 hidden sm:block">
          <StatusLine />
        </div>

        {/* capped spacer: extra viewport height goes below the content, not here */}
        <div aria-hidden className="max-h-14 min-h-6 flex-[0.35] sm:max-h-36" />

        {/*
          name + portrait anchor: the portrait is positioned from the name's
          box, so the letters sink behind the foliage at every viewport height
        */}
        <div className="relative flex flex-1 flex-col">
          <div
            data-stagger
            aria-hidden
            className="pointer-events-none absolute top-20 right-[-16%] z-10 w-[96vw] max-w-[540px] select-none sm:top-14 sm:right-[-4%] sm:w-[56vw] sm:max-w-[780px]"
          >
            <Image
              src="/images/jp-hero-alpha.webp"
              alt=""
              width={1600}
              height={1600}
              priority
              className="w-full contrast-[1.04] brightness-[0.8] saturate-[1.05] sm:brightness-[1]"
            />
          </div>

          {/* the power move */}
          <h1
            data-stagger
            className="pointer-events-none relative z-0 my-6 text-center text-[clamp(4.2rem,19.5vw,17rem)] leading-[0.92] font-medium tracking-[-0.035em] whitespace-nowrap text-foreground sm:my-0 sm:-ml-2 sm:text-left"
          >
            Ramirez
          </h1>

          {/* growing spacer: absorbs the remaining height */}
          <div aria-hidden className="min-h-8 flex-1" />

          <div className="relative z-20 max-w-xl">
          <p
            data-stagger
            className="text-2xl leading-snug font-medium tracking-tight sm:text-3xl"
          >
            I&apos;m Juan Pablo. I keep{" "}
            <RotatingText
              phrases={heroPhrases}
              className="inline-block text-brand italic"
            />
          </p>
          <p
            data-stagger
            className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            Technical support engineer across hosting, DNS, WordPress, and SaaS
            operations — building AI-assisted systems that make support work
            better.
          </p>
          <div data-stagger className="mt-8 flex items-center gap-7">
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
        </div>
        </div>
      </Stagger>

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

      {/* Stack snapshot */}
      <section className="mt-28">
        <Reveal>
          <div className="mb-8 flex items-baseline justify-between">
            <SectionHeading index="02" title="Stack" />
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
