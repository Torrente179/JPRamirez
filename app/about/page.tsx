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
  { label: "Mode", value: site.availability },
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
            Better when it needs{" "}
            <span className="text-brand italic">investigation</span>, not a
            script.
          </>
        }
      />

      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
        <div className="space-y-6 text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
          <Reveal>
            <p>
              I do technical support for websites and SaaS products: WordPress,
              hosting, DNS, the usual mess. I started answering tickets at a
              hosting company and slowly took on harder problems: broken sites,
              DNS, SSL, cache, plugins. Then I have to explain the fix without
              making the customer feel stupid.
            </p>
          </Reveal>
          <Reveal>
            <p>
              A lot of the job is switching. Talk to someone who's stressed,
              then try to reproduce what they saw. I ask questions, try things,
              write down what worked, and try to make the next time faster.
              I've gone from a live chat to tuning InnoDB in the same week.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I write code and use AI when it actually helps: small WordPress
              plugins, research, QA checklists, docs, internal workflows.
              Lately that part takes more of my time. I want to get good at
              building AI systems for support, not just pasting tickets into
              ChatGPT.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Fully remote for six years. 4,800+ customers at Hostinger, 450+
              hosting accounts as a TAM at DigitalOcean, and now I run WebOps
              and AI systems for WordPress membership sites at MemberDev. I
              live in Málaga. I work in English and Spanish, whichever the
              client needs, mostly with EU and Americas hours.
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
          <SectionHeading index="01" title="From people I've worked with" className="mb-8" />
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
