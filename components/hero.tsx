import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Ambient } from "@/components/ambient";
import { HeroDepth } from "@/components/hero-depth";
import { MalagaClock } from "@/components/malaga-clock";
import { site } from "@/lib/data/site";
import { type Locale, localePath, localize } from "@/lib/i18n";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const copy = {
  intro: { en: "Introduction", es: "Presentación" },
  hours: { en: "Remote, EU and Americas hours", es: "Remoto, en horario de Europa y América" },
  scroll: { en: "Scroll", es: "Desliza" },
  // kept on one line when the header wraps on a narrow phone
  role: { en: "AI engineer", es: "ingeniero de IA" },
  line: {
    en: "Hi, I'm Juan Pablo. I build AI tools and look after the infrastructure under them.",
    es: "Hola, soy Juan Pablo. Construyo herramientas de IA y cuido la infraestructura que las sostiene.",
  },
  now: {
    en: "Right now that means AI chat for WordPress membership sites at MemberDev, a few apps of my own, and a lot of time with coding agents.",
    es: "Ahora mismo eso significa chats de IA para los sitios de membresía en WordPress de MemberDev, algunas apps propias y muchas horas con agentes de programación.",
  },
  quickLinks: { en: "Quick links", es: "Accesos rápidos" },
  projects: { en: "See my projects", es: "Ver mis proyectos" },
  cv: { en: "Download CV", es: "Descargar CV" },
  links: [
    { href: "/experience", label: { en: "Experience", es: "Experiencia" } },
    { href: "/projects", label: { en: "Projects", es: "Proyectos" } },
    { href: "/about", label: { en: "About me", es: "Sobre mí" } },
  ],
};

/**
 * Home hero. The surname sits behind the cut-out portrait; the intro card
 * floats over it on desktop and becomes a sheet under the cover on phones.
 */
export function Hero({ lang }: { lang: Locale }) {
  const t = localize(copy, lang);
  const s = localize(site, lang);

  return (
    <HeroDepth className="relative">
      <section
        aria-label={t.intro}
        className="hero h-[78svh] min-h-[560px] max-h-[760px] md:h-[100svh] md:max-h-[1100px] md:min-h-[760px]"
      >
        <div className="hero-scroll-light absolute inset-0 -z-10">
          <Ambient src="/images/ambient/hero.webp" opacity={0.34} fade="bottom" className="enter-fade" />
        </div>

        <div className="hero-scroll-name absolute inset-x-0 top-[84px] flex justify-center md:top-[12svh]">
          <div data-depth="-14">
            <p aria-hidden className="hero-name enter" style={d(60)}>
              Ramirez
            </p>
          </div>
        </div>

        <div className="hero-scroll-portrait absolute inset-0 flex items-end justify-center">
          <div data-depth="16" className="flex h-full items-end justify-center md:mr-[18%]">
            <Image
              src={site.heroCutout.src}
              width={site.heroCutout.width}
              height={site.heroCutout.height}
              alt=""
              aria-hidden
              preload
              quality={85}
              sizes="(min-width: 768px) 40vw, 92vw"
              className="hero-portrait enter-settle"
              style={d(140)}
            />
          </div>
        </div>

        <div
          className="absolute right-[5vw] bottom-14 z-20 hidden w-[290px] flex-col gap-3 lg:flex"
          data-depth="-8"
          data-tilt="3"
        >
          <div className="glass glass-blur enter rounded-[20px] p-5" style={d(560)}>
            <span className="label flex justify-between">
              <span>{s.location}</span>
              <MalagaClock />
            </span>
            <span className="mt-2.5 block text-[15px]">{t.hours}</span>
            <span className="block text-sm text-muted-foreground">{s.languages}</span>
          </div>
          <p className="label enter-fade flex items-center gap-2.5 self-end" style={d(1000)}>
            {t.scroll}
            <span aria-hidden className="block h-7 w-px bg-white/45" />
          </p>
        </div>
      </section>

      <div className="relative z-20 -mt-28 px-3 md:absolute md:bottom-14 md:left-[5vw] md:mt-0 md:w-[480px] md:px-0">
        <div data-depth="9" data-tilt="2.5">
          <div className="glass-2 glass-blur enter rounded-[28px] p-6 md:p-8" style={d(380)}>
            <h1 className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
              <span className="dot bg-brand" />
              {site.name} · {t.role}
            </h1>
            <p className="mt-4 text-[clamp(1.6rem,2.4vw,2.15rem)] leading-[1.14] font-medium tracking-[-0.03em]">
              {t.line}
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
              {t.now}
            </p>

            <nav aria-label={t.quickLinks} className="mt-5 md:hidden">
              {t.links.map((link) => (
                <Link
                  key={link.href}
                  href={localePath(lang, link.href)}
                  className="group flex min-h-[52px] items-center justify-between border-t border-white/12 text-base font-medium active:opacity-70"
                >
                  {link.label}
                  <span aria-hidden className="arrow text-brand transition-[translate] duration-300">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-wrap gap-2.5 max-md:mt-2">
              <Link href={localePath(lang, "/projects")} className="btn btn-brand max-md:hidden">
                {t.projects} <span aria-hidden className="arrow">→</span>
              </Link>
              <a
                href={site.cv.href}
                download={site.cv.filename}
                className="btn btn-ghost max-md:w-full max-md:border-transparent max-md:bg-brand max-md:text-background"
              >
                {t.cv}
              </a>
            </div>
          </div>
        </div>
      </div>
    </HeroDepth>
  );
}
