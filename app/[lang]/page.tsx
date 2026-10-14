import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Ambient } from "@/components/ambient";
import { Hero } from "@/components/hero";
import { ProjectMedia } from "@/components/project-media";
import { SectionHeading } from "@/components/section-heading";
import { StatusLabel } from "@/components/status-chip";
import { projects as projectData } from "@/lib/data/projects";
import { highlights as highlightData, roles as roleData } from "@/lib/data/experience";
import { statusBoard as statusData } from "@/lib/data/now";
import { stackGroups as stackData } from "@/lib/data/stack";
import { site } from "@/lib/data/site";
import { getLang, localePath, localize, pageAlternates } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/** the row of four panels curves away from the centre */
const turns = ["12deg", "4deg", "-4deg", "-12deg"];
const origins = ["right center", "center", "center", "left center"];

const copy = {
  status: { en: "What I'm doing now", es: "Lo que hago ahora" },
  projects: { en: "Projects", es: "Proyectos" },
  projectsAside: {
    en: "All four are live. Each has its own page with the details.",
    es: "Los cuatro están en producción. Cada uno tiene su propia página con los detalles.",
  },
  allProjects: { en: "All projects", es: "Todos los proyectos" },
  experience: { en: "Experience", es: "Experiencia" },
  experienceBody: {
    en: "Since 2023 I've worked with MemberDev, where I look after WordPress membership sites and build the AI chat on them. Before that I was at Cloudways, part of DigitalOcean, and at Hostinger.",
    es: "Desde 2023 trabajo con MemberDev, donde me encargo de sitios de membresía en WordPress y desarrollo su chat de IA. Antes estuve en Cloudways, que es parte de DigitalOcean, y en Hostinger.",
  },
  fullExperience: { en: "Full experience", es: "Experiencia completa" },
  cv: { en: "Download CV", es: "Descargar CV" },
  present: { en: "Present", es: "Actual" },
  roles: { en: "Roles, most recent first", es: "Puestos, del más reciente al más antiguo" },
  stack: { en: "Stack", es: "Stack" },
  fullList: { en: "The full list", es: "La lista completa" },
};

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = await getLang(params);
  return { alternates: pageAlternates(lang, "/") };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = await getLang(params);
  const t = localize(copy, lang);
  const projects = localize(projectData, lang);
  const roles = localize(roleData, lang);
  const highlights = localize(highlightData, lang);
  const statusBoard = localize(statusData, lang);
  const stackGroups = localize(stackData, lang);
  const [current, ...earlier] = roles;

  return (
    <>
      <Hero lang={lang} />

      {/* status */}
      <section aria-label={t.status} className="mx-auto max-w-7xl px-4 pt-12 sm:px-8 md:pt-16">
        <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0">
          {statusBoard.map((card) => (
            <Link
              key={card.href}
              href={localePath(lang, card.href)}
              data-reveal
              className="glass lift group flex w-[78vw] max-w-[320px] flex-none snap-start flex-col gap-2.5 rounded-[22px] p-5 sm:w-auto sm:max-w-none sm:p-6"
            >
              <span className="label flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className={cn("dot", card.tone === "ok" ? "bg-ok" : "bg-brand")} />
                  {card.label}
                </span>
                <span>{card.meta}</span>
              </span>
              <span className="text-xl font-medium tracking-[-0.02em] transition-colors duration-300 group-hover:text-brand">
                {card.title}
              </span>
              <span className="text-[15px] leading-[1.6] text-muted-foreground">{card.body}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* projects */}
      <section className="relative isolate pt-28 pb-8 md:pt-40">
        <div className="absolute inset-x-0 top-40 -z-10 h-[620px]">
          <Ambient src="/images/ambient/clouds.webp" opacity={0.45} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <SectionHeading
            title={t.projects}
            aside={
              <>
                <p className="max-w-[340px] text-[15px] leading-[1.6] text-subtle">
                  {t.projectsAside}
                </p>
                <Link href={localePath(lang, "/projects")} className="btn btn-ghost group">
                  {t.allProjects} <span aria-hidden className="arrow">→</span>
                </Link>
              </>
            }
          />
        </div>
        <div className="panel-row mx-auto max-w-7xl">
          <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 [scrollbar-width:none] sm:px-8 lg:gap-5 lg:overflow-visible lg:pb-0">
            {projects.map((project, i) => (
              <li
                key={project.slug}
                data-reveal
                className="w-[82vw] max-w-[340px] flex-none snap-center lg:w-auto lg:max-w-none lg:flex-1"
              >
                <Link
                  href={localePath(lang, `/projects/${project.slug}`)}
                  className="panel glass group flex h-full flex-col rounded-[26px] p-3 pb-6"
                  style={{ "--t": turns[i], "--origin": origins[i] } as CSSProperties}
                >
                  <ProjectMedia project={project} variant="card" />
                  <span className="mx-3 mt-5 flex items-center justify-between meta">
                    <span>0{i + 1}</span>
                    <StatusLabel status={project.status} lang={lang} />
                  </span>
                  <span className="mx-3 mt-3 text-[26px] leading-[1.05] font-medium tracking-[-0.03em]">
                    {project.name}
                  </span>
                  <span className="mx-3 mt-2 text-[15px] leading-[1.55] text-muted-foreground">
                    {project.tagline}.
                  </span>
                  <span className="mx-3 mt-auto border-t border-white/10 pt-4 meta">
                    {project.stack.slice(0, 3).join(" · ")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* experience */}
      <section className="relative isolate overflow-clip pt-24 pb-28 md:pt-36 md:pb-40">
        <div className="absolute inset-x-0 top-20 -z-10 h-[620px]">
          <Ambient src="/images/ambient/motorcycle.webp" opacity={0.38} />
        </div>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-16 gap-y-14 px-4 sm:px-8">
          <div className="min-w-0 flex-[1_1_420px]" data-reveal>
            <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] leading-none font-medium tracking-[-0.045em]">
              {t.experience}
            </h2>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.75] text-muted-foreground">
              {t.experienceBody}
            </p>
            <dl className="mt-9 grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-6">
              {highlights.map((h) => (
                <div key={h.label} className="flex flex-col-reverse">
                  <dt className="mt-2 meta text-[11px] sm:text-xs">{h.label}</dt>
                  <dd className="nums text-[clamp(1.6rem,7.5vw,2.75rem)] leading-none font-medium tracking-[-0.035em]">
                    {h.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap gap-2.5">
              <Link href={localePath(lang, "/experience")} className="btn btn-light group">
                {t.fullExperience} <span aria-hidden className="arrow">→</span>
              </Link>
              <a href={site.cv.href} download={site.cv.filename} className="btn btn-ghost">
                {t.cv}
              </a>
            </div>
          </div>

          {/* phone: a plain list; the 3D stack needs room */}
          <ol className="flex w-full flex-col gap-2.5 md:hidden" data-reveal>
            {roles.map((role) => (
              <li
                key={role.slug}
                className={cn("rounded-[20px] px-5 py-4", role.current ? "glass-2" : "glass")}
              >
                <span className="flex justify-between gap-3 meta">
                  <span>{role.period}</span>
                  {role.current && (
                    <span className="flex items-center gap-2">
                      <span className="dot bg-ok" /> {t.present}
                    </span>
                  )}
                </span>
                <span className="mt-1.5 block text-xl font-medium">{role.company}</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{role.title}</span>
              </li>
            ))}
          </ol>

          <div
            aria-label={t.roles}
            role="list"
            className="relative hidden h-[440px] min-w-0 flex-[1_1_440px] [perspective:1600px] md:block"
            data-reveal
          >
            {[...earlier].reverse().map((role, i) => (
              <div
                key={role.slug}
                role="listitem"
                className="glass absolute rounded-[22px] px-6 py-5"
                style={{
                  left: `${(2 - i) * 32}px`,
                  right: `${i * 26}px`,
                  top: `${i * 100}px`,
                  transform: `translateZ(${-(2 - i) * 80}px) rotateY(-14deg)`,
                  opacity: i === 0 ? 0.72 : 0.9,
                }}
              >
                <span className="flex justify-between gap-3 meta">
                  <span>{role.period}</span>
                  <span>{role.location.split(" · ")[0]}</span>
                </span>
                <span className="mt-2.5 block text-2xl font-medium">{role.company}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{role.title}</span>
              </div>
            ))}
            <div
              role="listitem"
              className="glass-2 absolute right-12 left-0 top-[200px] rounded-[24px] px-7 py-6 md:right-14"
              style={{ transform: "rotateY(-14deg)" }}
            >
              <span className="flex justify-between gap-3 meta text-muted-foreground">
                <span>{current.period}</span>
                <span className="flex items-center gap-2">
                  <span className="dot bg-ok" /> {t.present}
                </span>
              </span>
              <span className="mt-2.5 block text-3xl font-medium tracking-[-0.02em]">
                {current.company}
              </span>
              <span className="mt-1.5 block text-[15px] text-muted-foreground">{current.title}</span>
            </div>
          </div>
        </div>
      </section>

      {/* stack */}
      <section className="mx-auto max-w-7xl px-4 pb-28 sm:px-8 md:pb-40">
        <SectionHeading
          title={t.stack}
          aside={
            <Link href={localePath(lang, "/stack")} className="btn btn-ghost group">
              {t.fullList} <span aria-hidden className="arrow">→</span>
            </Link>
          }
        />
        <div data-reveal className="glass rounded-[26px] px-6 py-2 sm:px-8">
          {stackGroups.map((group, i) => (
            <div
              key={group.id}
              className={cn(
                "flex flex-wrap gap-x-8 gap-y-2 py-5",
                i > 0 && "border-t border-white/10",
              )}
            >
              <span className="label flex-[0_0_220px] pt-1">{group.title}</span>
              <span className="flex-[1_1_420px] text-base leading-[1.6]">
                {group.items.map((item) => item.name).join(" · ")}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
