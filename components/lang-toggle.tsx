"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  type Locale,
  localeCookie,
  localeInfo,
  localePath,
  locales,
  stripLocale,
} from "@/lib/i18n";
import { cn } from "@/lib/utils";

const groupLabel = { en: "Language", es: "Idioma" };

/** Remembered for a year; next.config.ts sends `/` to `/es` while it says "es". */
function remember(lang: Locale) {
  document.cookie = `${localeCookie}=${lang}; path=/; max-age=31536000; samesite=lax`;
}

/**
 * EN | ES. Two links to the same page in each language, with a thumb that
 * slides to the one you picked as soon as you pick it. Not prefetched: a
 * prefetch made before the cookie changes could follow the language redirect.
 */
export function LangToggle({
  lang,
  path: fixedPath,
  className,
}: {
  lang: Locale;
  /** the page's unprefixed path, when the address can't be trusted (the 404) */
  path?: string;
  className?: string;
}) {
  const address = stripLocale(usePathname());
  const path = fixedPath ?? address;
  const [picked, setPicked] = useState<Locale | null>(null);
  const [shownFor, setShownFor] = useState(lang);
  if (shownFor !== lang) {
    // the page changed language (or Back undid it): follow the page
    setShownFor(lang);
    setPicked(null);
  }
  const at = picked ?? lang;

  return (
    <div
      role="group"
      aria-label={groupLabel[lang]}
      className={cn("relative flex rounded-full", className)}
    >
      <span
        aria-hidden
        className="absolute inset-y-[3px] left-[3px] w-[calc(50%-3px)] rounded-full bg-white/14 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform duration-500 ease-[var(--ease)]"
        style={{ transform: `translateX(${locales.indexOf(at) * 100}%)` }}
      />
      {locales.map((l) => {
        const current = l === lang;
        return (
          <Link
            key={l}
            href={localePath(l, path)}
            hrefLang={l}
            lang={l}
            prefetch={false}
            scroll={false}
            aria-label={localeInfo[l].name}
            aria-current={current ? "true" : undefined}
            onClick={(e) => {
              if (current) {
                e.preventDefault();
                return;
              }
              remember(l);
              setPicked(l);
            }}
            className={cn(
              "relative flex h-full w-11 items-center justify-center rounded-full font-mono text-xs tracking-[0.08em] transition-colors duration-300",
              l === at ? "text-white" : "text-subtle hover:text-foreground",
            )}
          >
            {localeInfo[l].short}
          </Link>
        );
      })}
    </div>
  );
}
