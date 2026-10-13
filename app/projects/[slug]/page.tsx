import type { Metadata } from "next";
import type { ComponentProps, CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Ambient } from "@/components/ambient";
import { ProjectMedia } from "@/components/project-media";
import { StatusLabel } from "@/components/status-chip";
import { projectHost, projects } from "@/lib/data/projects";
import { getProject, getProjectBody } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

/** MDX elements, styled for the case study body. */
const mdx = {
  h2: (props: ComponentProps<"h2">) => (
    <h2
      className="mt-16 text-[26px] font-medium tracking-[-0.03em] md:text-[28px]"
      {...props}
    />
  ),
  p: (props: ComponentProps<"p">) => (
    <p className="mt-4 text-[17px] leading-[1.8] text-muted-foreground" {...props} />
  ),
  ul: (props: ComponentProps<"ul">) => (
    <ul className="mt-5 flex flex-col gap-2.5" {...props} />
  ),
  li: ({ children, ...props }: ComponentProps<"li">) => (
    <li
      className="glass flex gap-3.5 rounded-[18px] px-5 py-4 text-base leading-[1.7] text-muted-foreground"
      {...props}
    >
      <span aria-hidden className="dot mt-[10px] bg-brand" />
      <span>{children}</span>
    </li>
  ),
  strong: (props: ComponentProps<"strong">) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  code: (props: ComponentProps<"code">) => (
    <code
      className="rounded-md bg-white/8 px-1.5 py-0.5 font-mono text-[0.88em] text-foreground"
      {...props}
    />
  ),
  a: (props: ComponentProps<"a">) => (
    <a className="link" target="_blank" rel="noopener noreferrer" {...props} />
  ),
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  const body = getProjectBody(slug);
  if (!project || !body) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="relative isolate overflow-clip pt-32 md:pt-40">
        <div className="absolute inset-x-0 top-0 -z-10 h-[900px]">
          <Ambient src={project.ambient} opacity={0.5} fade="bottom" className="enter-fade" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <p className="enter flex items-center gap-2.5 meta">
            <Link href="/projects" className="transition-colors duration-300 hover:text-foreground">
              Projects
            </Link>
            <span aria-hidden>/</span>
            <span>0{index + 1}</span>
          </p>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <div className="min-w-0">
              <h1 className="display enter text-[clamp(3.5rem,9vw,8.5rem)]">{project.name}</h1>
              <p
                className="enter mt-5 max-w-[560px] text-lg leading-[1.5] text-muted-foreground md:text-xl"
                style={{ "--d": "100ms" } as CSSProperties}
              >
                {project.tagline}.
              </p>
            </div>
            <div
              className="enter flex flex-wrap items-center gap-2.5 pb-2"
              style={{ "--d": "160ms" } as CSSProperties}
            >
              <span className="chip min-h-11 px-4">
                <StatusLabel status={project.status} className="text-muted-foreground" />
              </span>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-brand"
                >
                  {project.linkLabel ?? projectHost(project.link)} ↗
                </a>
              )}
            </div>
          </div>

          <div className="mt-12 [perspective:2000px] md:mt-16">
            <div className="glass-2 rounded-[30px] p-2 md:p-3 md:[transform:rotateX(7deg)] md:origin-top">
              <ProjectMedia project={project} variant="hero" preload />
            </div>
          </div>

          {project.gallery && (
            <div className="mt-6 grid gap-5 md:grid-cols-2 [perspective:1800px]">
              {project.gallery.map((shot, i) => (
                <figure
                  key={shot.src}
                  data-reveal
                  className={
                    "glass rounded-[26px] p-2.5 " +
                    (i === 0
                      ? "md:[transform:rotateY(6deg)] md:origin-right"
                      : "md:[transform:rotateY(-6deg)] md:origin-left")
                  }
                >
                  <div className="relative overflow-hidden rounded-[18px]" style={{ aspectRatio: `${shot.width} / ${shot.height}` }}>
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(min-width: 768px) 620px, 92vw"
                      className="object-cover object-left-top"
                    />
                  </div>
                  <figcaption className="px-2 pt-3 pb-1 meta">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-wrap items-start gap-x-18 gap-y-12 px-4 pt-24 sm:px-8 md:pt-32">
        <aside
          aria-label="At a glance"
          data-reveal
          className="glass min-w-0 flex-[1_1_320px] rounded-[26px] p-7 lg:sticky lg:top-28 lg:max-w-[400px]"
        >
          <h2 className="label">At a glance</h2>
          <dl className="mt-4">
            {project.glance.map((row) => (
              <div
                key={row.label}
                className="flex justify-between gap-4 border-t border-white/10 py-3.5"
              >
                <dt className="text-sm text-subtle">{row.label}</dt>
                <dd className="text-right text-sm">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="label mt-5 mb-3">Stack</p>
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </ul>
        </aside>

        <article className="min-w-0 max-w-[720px] flex-[2_1_560px] [&>p:first-child]:mt-0 [&>p:first-child]:text-[clamp(1.35rem,2vw,1.75rem)] [&>p:first-child]:leading-[1.45] [&>p:first-child]:font-medium [&>p:first-child]:tracking-[-0.02em] [&>p:first-child]:text-foreground">
          <MDXRemote source={body} components={mdx} />
        </article>
      </section>

      <nav
        aria-label="More projects"
        className="mx-auto grid max-w-7xl gap-4 px-4 pt-32 pb-28 sm:px-8 md:grid-cols-2 md:pb-36"
      >
        <Link
          href={`/projects/${prev.slug}`}
          data-reveal
          className="glass lift group flex flex-col gap-2.5 rounded-[26px] p-7"
        >
          <span className="meta">← Previous · 0{projects.indexOf(prev) + 1}</span>
          <span className="text-3xl font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-brand">
            {prev.name}
          </span>
          <span className="text-[15px] text-muted-foreground">{prev.tagline}.</span>
        </Link>
        <Link
          href={`/projects/${next.slug}`}
          data-reveal
          className="glass lift group flex flex-col items-end gap-2.5 rounded-[26px] p-7 text-right"
        >
          <span className="meta">Next · 0{projects.indexOf(next) + 1} →</span>
          <span className="text-3xl font-medium tracking-[-0.03em] transition-colors duration-300 group-hover:text-brand">
            {next.name}
          </span>
          <span className="text-[15px] text-muted-foreground">{next.tagline}.</span>
        </Link>
      </nav>
    </>
  );
}
