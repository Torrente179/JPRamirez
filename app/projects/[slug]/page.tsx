import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Stagger, Reveal } from "@/components/motion";
import { projects } from "@/lib/data/projects";
import { getProject, getProjectBody } from "@/lib/content";
import { cn } from "@/lib/utils";

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
  return {
    title: project.name,
    description: project.summary,
  };
}

const statusColor: Record<string, string> = {
  Production: "bg-ok",
  "In development": "bg-brand-dim",
  "Private beta": "bg-subtle",
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
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <Stagger className="pt-24 pb-14 sm:pt-32">
        <p data-stagger className="eyebrow">
          <Link href="/projects" className="transition-colors hover:text-brand">
            Projects
          </Link>
          <span className="mx-2 text-border">/</span>
          {String(index + 1).padStart(2, "0")}
        </p>
        <h1
          data-stagger
          className="mt-5 text-4xl font-medium tracking-[-0.02em] sm:text-6xl"
        >
          {project.name}
        </h1>
        <p
          data-stagger
          className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {project.tagline}.
        </p>
        <div
          data-stagger
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span
              className={cn(
                "inline-block size-[6px] rounded-full",
                statusColor[project.status],
              )}
            />
            {project.status}
          </span>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.14em] text-brand transition-colors hover:text-foreground"
            >
              visit live ↗
            </a>
          )}
        </div>
        <p data-stagger className="mt-4 font-mono text-[11px] tracking-[0.06em] text-subtle">
          {project.stack.join(" · ")}
        </p>
      </Stagger>

      <Reveal>
        <article
          className="prose prose-invert hairline max-w-2xl pt-12
            prose-headings:font-medium prose-headings:tracking-tight
            prose-h2:mt-12 prose-h2:text-xl
            prose-p:leading-[1.8] prose-p:text-muted-foreground
            prose-li:text-muted-foreground prose-li:leading-relaxed
            prose-strong:text-foreground prose-strong:font-medium
            prose-a:text-brand prose-a:no-underline hover:prose-a:underline
            prose-code:font-mono prose-code:text-[0.85em] prose-code:text-brand"
        >
          <MDXRemote source={body} />
        </article>
      </Reveal>

      <Reveal>
        <nav className="hairline mt-20 grid gap-6 py-10 sm:grid-cols-2">
          <Link href={`/projects/${prev.slug}`} className="group">
            <p className="eyebrow">← Previous</p>
            <p className="mt-2 text-lg font-medium transition-colors group-hover:text-brand">
              {prev.name}
            </p>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group sm:text-right"
          >
            <p className="eyebrow">Next →</p>
            <p className="mt-2 text-lg font-medium transition-colors group-hover:text-brand">
              {next.name}
            </p>
          </Link>
        </nav>
      </Reveal>
    </div>
  );
}
