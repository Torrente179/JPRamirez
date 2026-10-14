"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangToggle } from "@/components/lang-toggle";
import { MalagaClock } from "@/components/malaga-clock";
import { site } from "@/lib/data/site";
import { type Locale, localePath, localize, stripLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const copy = {
  primary: { en: "Primary", es: "Principal" },
  home: { en: "Juan Pablo Ramirez, home", es: "Juan Pablo Ramirez, inicio" },
  contact: { en: "Contact me", es: "Escríbeme" },
  links: [
    { href: "/projects", label: { en: "Projects", es: "Proyectos" } },
    { href: "/experience", label: { en: "Experience", es: "Experiencia" } },
    { href: "/now", label: { en: "Now", es: "Ahora" } },
    { href: "/stack", label: { en: "Stack", es: "Stack" } },
    { href: "/about", label: { en: "About", es: "Sobre mí" } },
  ],
};

const isActive = (path: string, href: string) => path === href || path.startsWith(href + "/");

/**
 * Desktop: a centred glass pill. Phone: an app bar with the logo, the language
 * and the clock. `path` stands in for the address on the 404, which is
 * prerendered once and can't know it.
 */
export function Nav({ lang, path: fixedPath }: { lang: Locale; path?: string }) {
  const address = stripLocale(usePathname());
  const path = fixedPath ?? address;
  const t = localize(copy, lang);

  return (
    <>
      <header
        className="pointer-events-none fixed inset-x-0 top-5 z-50 hidden justify-center px-5 md:flex"
      >
        {/* The transition name sits on the glass itself: a named element is a
            backdrop root, so a name on a wrapper would leave the blur nothing to blur. */}
        <nav
          aria-label={t.primary}
          style={{ viewTransitionName: "site-nav" }}
          className="glass-blur pointer-events-auto flex items-center gap-1 rounded-full border border-white/14 bg-[rgba(12,15,23,0.84)] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_50px_-20px_rgba(0,0,0,0.6)]"
        >
          <Link
            href={localePath(lang, "/")}
            aria-label={t.home}
            aria-current={path === "/" ? "page" : undefined}
            className={cn(
              "flex min-h-10 items-center rounded-full px-4 font-semibold tracking-[-0.02em] transition-colors duration-300 pointer-coarse:min-h-11",
              path === "/" ? "bg-white/12" : "hover:bg-white/6",
            )}
          >
            jp<span className="text-brand">·</span>
          </Link>
          {t.links.map((link) => {
            const active = isActive(path, link.href);
            return (
              <Link
                key={link.href}
                href={localePath(lang, link.href)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-10 items-center rounded-full px-3.5 text-sm whitespace-nowrap transition-colors duration-300 pointer-coarse:min-h-11",
                  active
                    ? "bg-white/12 text-white"
                    : "text-muted-foreground hover:bg-white/6 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <LangToggle
            lang={lang}
            path={path}
            className="mx-1 h-10 border border-white/10 bg-black/25 pointer-coarse:h-11"
          />
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light min-h-10 px-4.5 text-sm pointer-coarse:min-h-11"
          >
            {t.contact}
          </a>
        </nav>
      </header>

      <header
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-2 px-4 pt-[max(12px,env(safe-area-inset-top))] md:hidden"
      >
        <Link
          href={localePath(lang, "/")}
          aria-label={t.home}
          style={{ viewTransitionName: "site-appbar" }}
          className="glass-blur pointer-events-auto flex min-h-11 items-center rounded-full border border-white/16 bg-[rgba(12,15,23,0.86)] px-4 font-semibold tracking-[-0.02em]"
        >
          jp<span className="text-brand">·</span>
        </Link>
        <span className="flex items-center gap-2">
          <LangToggle
            lang={lang}
            path={path}
            className="glass-blur pointer-events-auto h-11 border border-white/16 bg-[rgba(12,15,23,0.86)] [view-transition-name:site-lang]"
          />
          <span
            style={{ viewTransitionName: "site-clock" }}
            className="glass-blur pointer-events-auto flex min-h-11 items-center gap-2 rounded-full border border-white/16 bg-[rgba(12,15,23,0.86)] px-3.5 font-mono text-xs text-muted-foreground"
          >
            Málaga <MalagaClock />
          </span>
        </span>
      </header>
    </>
  );
}
