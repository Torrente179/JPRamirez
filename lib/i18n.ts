import { notFound } from "next/navigation";

/**
 * Two languages. English lives at the unprefixed URLs (/projects), Spanish
 * under /es (/es/projects). next.config.ts rewrites the unprefixed URLs to
 * app/[lang] with lang "en", and sends first-time visitors whose browser
 * prefers Spanish to /es. The toggle in the nav stores the choice in a cookie.
 */
export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** cookie the language toggle writes; next.config.ts reads it */
export const localeCookie = "lang";

export const localeInfo = {
  en: { tag: "en", og: "en_US", name: "English", short: "EN" },
  // Latin American Spanish. hreflang stays plain "es" so Spain is included.
  es: { tag: "es-419", og: "es_LA", name: "Español", short: "ES" },
} as const satisfies Record<Locale, { tag: string; og: string; name: string; short: string }>;

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** The `lang` route param, or a 404. */
export async function getLang(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

/** "/projects" for English is "/es/projects" for Spanish. */
export function localePath(lang: Locale, path: string) {
  if (lang === defaultLocale) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/**
 * The path without its language prefix. During prerender the pathname is the
 * rewritten one (/en/projects); in the browser it is /projects or /es/projects.
 */
export function stripLocale(pathname: string) {
  const stripped = pathname.replace(/^\/(en|es)(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

/** canonical and hreflang links for a page, by its unprefixed path */
export function pageAlternates(lang: Locale, path: string) {
  return {
    canonical: localePath(lang, path),
    languages: {
      en: path,
      es: localePath("es", path),
      "x-default": path,
    },
  };
}

/** A string in both languages. */
export type Text = Record<Locale, string>;

/** `T` with every Text replaced by a string. */
export type Localized<T> = T extends Text
  ? string
  : T extends readonly (infer U)[]
    ? Localized<U>[]
    : T extends object
      ? { [K in keyof T]: Localized<T[K]> }
      : T;

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && Object.getPrototypeOf(value) === Object.prototype;

const isText = (value: Record<string, unknown>): value is Text => {
  const keys = Object.keys(value);
  return keys.length === 2 && typeof value.en === "string" && typeof value.es === "string";
};

/** Picks one language out of data that holds both. Only walks plain objects and arrays. */
export function localize<T>(value: T, lang: Locale): Localized<T> {
  if (Array.isArray(value)) return value.map((item) => localize(item, lang)) as Localized<T>;
  if (isPlainObject(value)) {
    if (isText(value)) return value[lang] as Localized<T>;
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize(item, lang)]),
    ) as Localized<T>;
  }
  return value as Localized<T>;
}

/** Fills {name} slots: fill("{n} live", { n: 4 }) is "4 live". */
export function fill(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (slot, key: string) =>
    key in values ? String(values[key]) : slot,
  );
}
