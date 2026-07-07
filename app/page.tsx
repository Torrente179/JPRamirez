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
      <Stagger className="relative flex min-h-[88svh] flex-col justify-between overflow-visible pt-14 pb-10 sm:pt-20">
        {/* portrait — blended into the field, behind nothing, above the giant name */}
        <div
          data-stagger
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-[-14%] z-10 w-[86vw] max-w-[460px] -translate-y-[76%] select-none sm:right-[-3%] sm:w-[48vw] sm:max-w-[640px] sm:-translate-y-[54%]"
          style={{
            maskImage:
              "radial-gradient(58% 54% at 47% 40%, black 34%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(58% 54% at 47% 40%, black 34%, transparent 72%)",
          }}
        >
          <Image
            src="/images/jp-hero.jpg"
            alt=""
            width={1600}
            height={1600}
            priority
            className="w-full grayscale contrast-[1.08] brightness-[0.78] sm:brightness-[0.95]"
          />
        </div>

        <div data-stagger className="relative z-20">
          <StatusLine />
        </div>

        {/* the power move */}
        <h1
          data-stagger
          className="pointer-events-none relative z-0 my-6 text-center text-[clamp(4.2rem,19.5vw,17rem)] leading-[0.92] font-medium tracking-[-0.035em] whitespace-nowrap text-foreground sm:my-0 sm:-ml-2 sm:text-left"
        >
          Ramirez
        </h1>

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
