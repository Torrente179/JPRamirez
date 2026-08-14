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
    "AI engineer in Málaga. I build agentic systems, RAG assistants, and the DevOps and WebOps they run on. English and Spanish.",
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
            I build AI{" "}
            <span className="text-brand italic">systems</span>. DevOps and
            WebOps underneath.
          </>
        }
      />

      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
        <div className="space-y-6 text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
          <Reveal>
            <p>
              I build AI systems. At MemberDev I put custom chat on WordPress
              membership sites, and I keep those sites running. I also work a
              lot with coding agents: Claude Code, Codex, Cursor.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I'm going deep on AI systems engineering: structured outputs,
              retrieval with citations, evals, traces, cost, model routing. I
              want systems that hold up in production, the same way a DNS
              cutover or a MySQL migration has to.
            </p>
          </Reveal>
          <Reveal>
            <p>
              DevOps and WebOps are the floor. I already run WordPress
              membership sites, DNS, Cloudflare, databases. That is why I care
              whether an agent is useful or just talking.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I've been fully remote for six years. Hostinger, DigitalOcean,
              MemberDev. At MemberDev I ship AI systems onto WordPress
              membership platforms, and I still run the WebOps. I live in
              Málaga. English and Spanish, mostly EU and Americas hours.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div>
            <Image
              src="/images/jp-about.jpg"
              alt="Juan Pablo Ramirez"
              width={683}
              height={1024}
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
