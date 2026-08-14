import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/data/site";
import { education } from "@/lib/data/experience";
import { recommendations } from "@/lib/data/recommendations";

export const metadata: Metadata = {
  title: "About",
  description:
    "Technical support engineer in Málaga. I started in hosting support and now I do WebOps and AI systems for WordPress sites. English and Spanish.",
};

const facts = [
  { label: "Location", value: site.location },
  { label: "Availability", value: site.availability },
  { label: "Languages", value: site.languages.join(" · ") },
  { label: "LinkedIn", value: "juan-pablo-ramirez-romero", href: site.linkedin },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <PageHeader
        eyebrow="About"
        title={
          <>
            Technical{" "}
            <span className="text-brand italic">support</span> for websites
            and hosting.
          </>
        }
      />

      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
        <div className="space-y-6 text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
          <Reveal>
            <p>
              I do technical support for websites and SaaS products: WordPress,
              hosting, and DNS. I started answering tickets at a hosting
              company, then took on harder problems: broken sites, SSL, cache,
              plugins. I explain the fix in plain language.
            </p>
          </Reveal>
          <Reveal>
            <p>
              A lot of the job is switching between the customer and the
              technical side. I ask questions, try to reproduce the issue,
              write down what worked, and try to make the next time faster.
              Some weeks that means a live chat in the morning and an InnoDB
              session later the same day.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I write code and use AI when it helps: small WordPress plugins,
              research, QA checklists, docs, and internal workflows. That part
              of the work is growing. I want to get better at building AI
              systems for support teams.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I've been fully remote for six years. 4,800+ customers at
              Hostinger, 450+ hosting accounts as a TAM at DigitalOcean, and
              now I run WebOps and AI systems for WordPress membership sites at
              MemberDev. I live in Málaga and work in English and Spanish,
              mostly with EU and Americas hours.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div>
            <Image
              src="/images/jp-about.jpg"
              alt="Juan Pablo Ramirez"
              width={637}
              height={773}
              priority
              className="rounded-xl border border-border"
            />
            <dl className="mt-8 space-y-0">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="hairline flex items-baseline justify-between gap-4 py-3"
                >
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className="text-right font-mono text-[12px] text-muted-foreground">
                    {fact.href ? (
                      <a
                        href={fact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-brand"
                      >
                        {fact.value} ↗
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      {/* Recommendations */}
      <section className="mt-28">
        <Reveal>
          <SectionHeading index="01" title="Recommendations" className="mb-8" />
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2">
          {recommendations.map((rec, i) => (
            <Reveal key={rec.name} delay={i * 0.08}>
              <figure className="hairline pt-7">
                <blockquote className="text-[15px] leading-[1.75] text-muted-foreground">
                  “{rec.quote}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="text-sm font-medium">{rec.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] tracking-[0.06em] text-subtle">
                    {rec.title} · {rec.relationship}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-28">
        <Reveal>
          <SectionHeading index="02" title="Education & training" className="mb-8" />
        </Reveal>
        <div>
          {education.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="hairline flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5">
                <p className="text-base font-medium">{item.title}</p>
                <p className="font-mono text-[12px] text-subtle">
                  {item.org}
                  {item.year && ` · ${item.year}`}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
