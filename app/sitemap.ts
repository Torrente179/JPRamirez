import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { projects } from "@/lib/data/projects";
import { type Locale, localePath, locales } from "@/lib/i18n";

/** Every page in both languages, each pointing at its other version. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...["/", "/about", "/experience", "/projects", "/stack", "/now"].map((path) => ({
      path,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...projects.map((project) => ({ path: `/projects/${project.slug}`, priority: 0.6 })),
  ];
  const url = (lang: Locale, path: string) => {
    const localized = localePath(lang, path);
    return localized === "/" ? site.url : `${site.url}${localized}`;
  };

  return pages.flatMap(({ path, priority }) =>
    locales.map((lang) => ({
      url: url(lang, path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, url(l, path)])),
      },
    })),
  );
}
