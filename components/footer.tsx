import Link from "next/link";
import { site } from "@/lib/data/site";
import { type Locale, localePath, localize } from "@/lib/i18n";

const copy = {
  contact: { en: "Contact", es: "Contacto" },
  cv: { en: "Download CV", es: "Descargar CV" },
  links: [
    { href: "/projects", label: { en: "Projects", es: "Proyectos" } },
    { href: "/experience", label: { en: "Experience", es: "Experiencia" } },
    { href: "/stack", label: { en: "Stack", es: "Stack" } },
    { href: "/about", label: { en: "About", es: "Sobre mí" } },
  ],
};

export function Footer({ lang }: { lang: Locale }) {
  const t = localize(copy, lang);
  const s = localize(site, lang);

  return (
    <footer className="mx-auto max-w-7xl px-4 pb-32 sm:px-8 md:pb-12">
      <div
        data-reveal
        className="glass flex flex-wrap items-end justify-between gap-8 rounded-[32px] p-7 sm:p-12"
      >
        <div className="min-w-0">
          <p className="label">{t.contact}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-0.5 block py-2.5 text-[clamp(1.5rem,3.6vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.035em] break-words transition-colors duration-300 hover:text-brand"
          >
            {site.email}
          </a>
          <p className="mt-0.5 text-[15px] text-muted-foreground">
            {s.availability} · {s.languages}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn ↗
          </a>
          <a href={site.cv.href} download={site.cv.filename} className="btn btn-light">
            {t.cv}
          </a>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-between gap-3 px-1 meta">
        <span>
          {site.fullName} · {s.location}
        </span>
        <span className="flex flex-wrap gap-5">
          {t.links.map((link) => (
            <Link
              key={link.href}
              href={localePath(lang, link.href)}
              className="-my-[13px] py-[13px] transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  );
}
