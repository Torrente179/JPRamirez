import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SiteList } from "@/components/site-list";
import { highlights, remoteSince, roles } from "@/lib/data/experience";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Remote since 2020: hosting support at Hostinger, account management at Cloudways by DigitalOcean, and WordPress operations and AI work at MemberDev.",
};

export default function ExperiencePage() {
  const metrics = [{ value: remoteSince.year, label: remoteSince.label }, ...highlights];

  return (
    <>
      <PageHero
        title="Experience"
        lede="I've worked remotely since 2020, first in hosting support and account management, and now on WordPress operations and AI."
        ambient="/images/ambient/motorcycle.webp"
        below={
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="glass glass-blur flex flex-col-reverse justify-end rounded-[22px] px-5 py-5 md:px-6"
              >
                <dt className="mt-2 meta">{m.label}</dt>
                <dd className="nums text-[clamp(1.9rem,3vw,2.5rem)] leading-none font-medium tracking-[-0.035em]">
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
        }
      >
        <a href={site.cv.href} download={site.cv.filename} className="btn btn-brand">
          Download CV ↓
        </a>
      </PageHero>

      <section aria-label="Roles" className="mx-auto max-w-7xl px-4 pb-28 sm:px-8 md:pb-40">
        <div className="relative">
        <span aria-hidden className="absolute top-8 bottom-8 left-[7px] hidden w-px bg-white/14 md:block" />
        <ol className="flex flex-col gap-4 md:gap-7 md:pl-10">
          {roles.map((role) => (
            <li key={role.slug} id={role.slug} className="relative scroll-mt-28" data-reveal>
              <span
                aria-hidden
                className={cn(
                  "absolute top-8 -left-10 hidden size-[15px] rounded-full md:block",
                  role.current
                    ? "bg-brand shadow-[0_0_0_6px_rgba(165,184,255,0.15)]"
                    : "border-[1.5px] border-subtle bg-background",
                )}
              />
              <article
                className={cn(
                  "flex flex-wrap gap-x-14 gap-y-5 rounded-[26px] p-5 md:rounded-[28px] md:p-9",
                  role.current ? "glass-2" : "glass",
                )}
              >
                <div className="min-w-0 flex-[0_1_240px]">
                  <p className={cn("meta text-[13px]", role.current && "text-brand")}>
                    {role.period}
                  </p>
                  <p className="mt-2 meta leading-[1.6]">{role.location}</p>
                  {role.current && (
                    <p className="chip mt-4 border-ok/25 bg-ok/10 text-[#a7f3d0]">
                      <span className="dot bg-ok" /> Present
                    </p>
                  )}
                </div>
                <div className="min-w-0 flex-[1_1_520px]">
                  <h2 className="text-[clamp(2rem,3vw,2.75rem)] leading-none font-medium tracking-[-0.04em]">
                    {role.company}
                  </h2>
                  <p className="mt-2 font-medium text-muted-foreground">{role.title}</p>
                  <p className="mt-3 max-w-[620px] text-[15px] leading-[1.65] text-subtle">
                    {role.companyBlurb}
                  </p>
                  <ul className="mt-6 flex max-w-[680px] flex-col gap-3">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3.5 text-base leading-[1.7] text-muted-foreground"
                      >
                        <span
                          aria-hidden
                          className={cn(
                            "mt-[13px] h-px w-4 flex-none",
                            role.current ? "bg-brand" : "bg-subtle",
                          )}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {role.sites && <SiteList sites={role.sites} />}
                </div>
              </article>
            </li>
          ))}
        </ol>
        </div>
      </section>
    </>
  );
}
