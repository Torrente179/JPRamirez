import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n";
import { projects } from "@/lib/data/projects";

const contentDir = path.join(process.cwd(), "content", "projects");

/** The case study write-up: `<slug>.mdx` in English, `<slug>.es.mdx` in Spanish. */
export function getProjectBody(slug: string, lang: Locale): string | null {
  const file = path.join(contentDir, lang === "en" ? `${slug}.mdx` : `${slug}.${lang}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  return matter(raw).content;
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
