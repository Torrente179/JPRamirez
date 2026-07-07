import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { projects, type Project } from "@/lib/data/projects";

const contentDir = path.join(process.cwd(), "content", "projects");

export function getProjectBody(slug: string): string | null {
  const file = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  return matter(raw).content;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
