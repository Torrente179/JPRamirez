import type { Metadata } from "next";
import Link from "next/link";
import { Ambient } from "@/components/ambient";
import { PageHero } from "@/components/page-hero";
import { ProjectMedia } from "@/components/project-media";
import { SectionHeading } from "@/components/section-heading";
import { StatusLabel } from "@/components/status-chip";
import {
  clientWork as clientWorkData,
  projectHost,
  projects as projectData,
} from "@/lib/data/projects";
import { fill, getLang, localePath, localize, pageAlternates } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const copy = {
  title: { en: "Projects", es: "Proyectos" },
  description: {
    en: "Four apps I built and still look after, QBank, GiseUGC, Budget & Expense and JPTracker, plus client work from MemberDev.",
    es: "Cuatro apps que desarrollé y sigo manteniendo (QBank, GiseUGC, Budget & Expense y JPTracker), además de trabajos para clientes de MemberDev.",
  },
  lede: {
    en: "Four apps I built and still look after, and some of my client work at MemberDev.",
    es: "Cuatro apps que desarrollé y sigo manteniendo, y parte de mi trabajo para clientes en MemberDev.",
  },
  live: { en: "{n} live", es: "{n} en producción" },
  beta: { en: "{n} private beta", es: "{n} en beta privada" },
  list: { en: "My projects", es: "Mis proyectos" },
  caseStudyOf: { en: "{name} case study", es: "Caso de estudio de {name}" },
  caseStudy: { en: "Case study", es: "Caso de estudio" },
  clientWork: { en: "Client work", es: "Trabajo para clientes" },
  clientWorkAside: {
    en: "Jobs I've done for MemberDev clients.",
    es: "Trabajos que hice para clientes de MemberDev.",
  },
};

export async function generateMetadata({ params }: PageProps<"/[lang]/projects">): Promise<Metadata> {
  const lang = await getLang(params);
  return {
    title: copy.title[lang],
    description: copy.description[lang],
    alternates: pageAlternates(lang, "/projects"),
  };
}

export default async function ProjectsPage({ params }: PageProps<"/[lang]/projects">) {
  const lang = await getLang(params);
  const t = localize(copy, lang);
  const projects = localize(projectData, lang);
  const clientWork = localize(clientWorkData, lang);
  const live = projects.filter((p) => p.status === "Production").length;
  const beta = projects.length - live;

  return (
    <>
      <PageHero
        title={t.title}
        lede={t.lede}
        ambient="/images/ambient/clouds.webp"
      >
        <span className="chip">
          <span className="dot bg-ok" /> {fill(t.live, { n: live })}
        </span>
        {beta > 0 && (
          <span className="chip">
            <span className="dot bg-brand" /> {fill(t.beta, { n: beta })}
          </span>
        )}
      </PageHero>

      <section aria-label={t.list} className="mx-auto flex max-w-7xl flex-col gap-24 px-4 pt-6 sm:px-8 md:gap-32">
        {projects.map((project, i) => (
          <article
            key={project.slug}
            className={cn(
              "flex flex-wrap items-center gap-x-16 gap-y-8 [perspective:1800px]",
              i % 2 === 1 && "lg:flex-row-reverse",
            )}
          >
            <Link
              href={localePath(lang, `/projects/${project.slug}`)}
              aria-label={fill(t.caseStudyOf, { name: project.name })}
              data-reveal
              className={cn(
                "glass-2 block min-w-0 flex-[1_1_560px] rounded-[26px] p-2.5 transition-transform duration-700 ease-[var(--ease)] lg:hover:[transform:rotateY(0deg)]",
                i % 2 === 0
                  ? "lg:[transform:rotateY(7deg)] lg:origin-right"
                  : "lg:[transform:rotateY(-7deg)] lg:origin-left",
              )}
            >
              <ProjectMedia project={project} variant="frame" preload={i === 0} />
            </Link>

            <div data-reveal className="min-w-0 flex-[1_1_380px]">
              <p className="flex items-center gap-4 meta">
                <span>0{i + 1}</span>
                <StatusLabel status={project.status} lang={lang} />
              </p>
              <h2 className="mt-4 text-[clamp(2.4rem,4vw,3.5rem)] leading-none font-medium tracking-[-0.04em]">
                {project.name}
              </h2>
              <p className="mt-3 text-[19px] leading-[1.45]">{project.tagline}.</p>
              <p className="mt-3 text-base leading-[1.7] text-muted-foreground">{project.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 6).map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <Link
                  href={localePath(lang, `/projects/${project.slug}`)}
                  className="btn btn-brand group"
                >
                  {t.caseStudy} <span aria-hidden className="arrow">→</span>
                </Link>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                  >
                    {project.linkLabel ?? projectHost(project.link)} ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="relative isolate overflow-clip pt-36 pb-28 md:pt-48 md:pb-40">
        <div className="absolute inset-x-[15%] top-40 -z-10 h-[420px]">
          <Ambient src="/images/ambient/motorcycle.webp" opacity={0.35} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionHeading
            title={t.clientWork}
            size="md"
            aside={
              <p className="max-w-[420px] text-base leading-[1.7] text-muted-foreground">
                {t.clientWorkAside}
              </p>
            }
          />
          <ul className="grid gap-4 md:grid-cols-3">
            {clientWork.map((work) => (
              <li
                key={work.name}
                data-reveal
                className="glass flex min-h-52 flex-col gap-3 rounded-[24px] p-7"
              >
                <span className="label">{work.context}</span>
                <h3 className="text-[22px] font-medium tracking-[-0.02em]">{work.name}</h3>
                <p className="text-[15px] leading-[1.65] text-muted-foreground">
                  {work.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
