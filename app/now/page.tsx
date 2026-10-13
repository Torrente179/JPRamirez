import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StatusLabel } from "@/components/status-chip";
import { StudyMap } from "@/components/study-map";
import { studyTopics } from "@/lib/data/now";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Now",
  description: "What I'm learning right now, and the apps I'm building alongside it.",
};

export default function NowPage() {
  return (
    <>
      <PageHero
        title="Now"
        lede="What I'm learning right now, and the apps I'm building alongside it."
        ambient="/images/ambient/sunset.webp"
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          title="Study map"
          size="md"
          aside={<p className="meta">Seven topics. Pick one to read more.</p>}
        />
        <div data-reveal>
          <StudyMap topics={studyTopics} />
        </div>
        <ul className="mt-4 hidden gap-3 md:grid md:grid-cols-2 lg:grid-cols-3">
          {studyTopics.map((topic) => (
            <li
              key={topic.id}
              data-reveal
              className="glass flex gap-4 rounded-[20px] px-5 py-5 md:px-6"
            >
              <span className="meta pt-0.5">0{topic.id}</span>
              <span>
                <span className="block font-medium">{topic.title}</span>
                <span className="mt-1 block text-sm leading-[1.6] text-subtle">
                  {topic.summary}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-28 pb-28 sm:px-8 md:pt-40 md:pb-40">
        <SectionHeading
          title="Building"
          size="md"
          aside={
            <Link href="/projects" className="btn btn-ghost group">
              All projects <span aria-hidden className="arrow">→</span>
            </Link>
          }
        />
        <ul data-reveal className="glass overflow-hidden rounded-[26px]">
          {projects.map((project, i) => (
            <li key={project.slug} className={cn(i > 0 && "border-t border-white/10")}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex flex-wrap items-center gap-x-7 gap-y-1.5 px-6 py-5 transition-colors duration-300 hover:bg-white/[0.04] md:px-8 md:py-6"
              >
                <span className="meta w-7">0{i + 1}</span>
                <span className="flex-[1_1_220px] text-xl font-medium tracking-[-0.02em] transition-colors duration-300 group-hover:text-brand">
                  {project.name}
                </span>
                <span className="flex-[2_1_300px] text-[15px] text-muted-foreground max-md:pl-14">
                  {project.tagline}
                </span>
                <StatusLabel status={project.status} className="w-32 max-md:pl-14" />
                <span aria-hidden className="arrow text-brand max-md:hidden">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
