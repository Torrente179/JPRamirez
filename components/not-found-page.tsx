"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Ambient } from "@/components/ambient";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { TabBar } from "@/components/tab-bar";
import { type Locale, localeInfo, localePath, localize } from "@/lib/i18n";

const copy = {
  title: { en: "This page doesn't exist.", es: "Esta página no existe." },
  body: {
    en: "The link might be old, or the address has a typo.",
    es: "Puede que el enlace sea viejo o que la dirección tenga un error.",
  },
  home: { en: "Go home", es: "Ir al inicio" },
  projects: { en: "See my projects", es: "Ver mis proyectos" },
};

const fromAddress = (): Locale => (/^\/es(\/|$)/.test(window.location.pathname) ? "es" : "en");
const never = () => () => {};

/**
 * The whole 404 document. It's prerendered once, outside app/[lang], so it
 * renders in English and switches to Spanish after hydration when the
 * address starts with /es. The entrance animations cover the swap.
 */
export function NotFoundPage({ fonts }: { fonts: string }) {
  const lang = useSyncExternalStore(never, fromAddress, () => "en" as const);
  const t = localize(copy, lang);

  return (
    <html lang={localeInfo[lang].tag} translate="no" className={`notranslate ${fonts}`}>
      <body>
        <Nav lang={lang} path="/404" />
        <main className="overflow-x-clip">
          <section className="relative isolate flex min-h-[80svh] items-center overflow-clip pt-32 pb-20">
            <div className="absolute inset-0 -z-10">
              <Ambient src="/images/ambient/hero.webp" opacity={0.3} fade="bottom" />
            </div>
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
              <p className="label enter">404</p>
              <h1 className="display enter mt-5 text-[clamp(3rem,8vw,7rem)]">{t.title}</h1>
              <p className="enter mt-6 max-w-[460px] text-lg leading-[1.6] text-muted-foreground">
                {t.body}
              </p>
              <div className="enter mt-8 flex flex-wrap gap-2.5">
                <Link href={localePath(lang, "/")} className="btn btn-brand">
                  {t.home}
                </Link>
                <Link href={localePath(lang, "/projects")} className="btn btn-ghost">
                  {t.projects}
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer lang={lang} />
        <TabBar lang={lang} />
      </body>
    </html>
  );
}
