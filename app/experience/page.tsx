import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion";
import { CvDownload } from "@/components/cv-download";
import { roles } from "@/lib/data/experience";
import { SiteList } from "@/components/site-list";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Six years remote: MemberDev WebOps and AI systems, DigitalOcean TAM, Hostinger hosting support.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageHeader
        eyebrow="Experience"
        title={
          <>
            Six years remote, from hosting support to{" "}
            <span className="text-brand italic">WebOps</span>.
          </>
        }
        lede="All of these roles were remote. I started in high-volume support and later took on more of the infrastructure."
        action={
          <CvDownload
            label="Download CV ↓"
            className="text-[12px] uppercase tracking-[0.14em] text-foreground hover:text-brand"
          />
        }
      />

      <div>
        {roles.map((role, i) => (
          <Reveal key={role.slug} delay={i * 0.05}>
            <article
              id={role.slug}
              className="hairline grid scroll-mt-24 gap-6 py-12 lg:grid-cols-[240px_1fr] lg:gap-12"
            >
              <div>
                <p className="nums font-mono text-[12px] tracking-[0.08em] text-brand">
                  {role.period}
                </p>
                <p className="mt-2 font-mono text-[11px] leading-relaxed tracking-[0.06em] text-subtle">
                  {role.location}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {role.company}
                </h2>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground">
                  {role.title}
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-subtle italic">
                  {role.companyBlurb}
                </p>
                <ul className="mt-6 max-w-2xl space-y-3">
                  {role.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground"
                    >
                      <span aria-hidden className="mt-[9px] block h-px w-4 shrink-0 bg-brand/50" />
                      {point}
                    </li>
                  ))}
                </ul>
                {role.sites && role.sites.length > 0 && (
                  <SiteList sites={role.sites} />
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
