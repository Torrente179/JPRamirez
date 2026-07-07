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
    "Who I am: a technical support engineer who grew from front-line hosting support into WebOps and AI-assisted systems.",
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
            Useful when a problem needs{" "}
            <span className="text-brand italic">investigation</span>, not a
            script.
          </>
        }
      />

      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
        <div className="space-y-6 text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
          <Reveal>
            <p>
              I work in technical support across web platforms, SaaS-style
              environments, WordPress, managed hosting, and customer
              operations. My background started in front-line support and web
              hosting, then grew into a more technical role: troubleshooting
              websites, reproducing bugs, checking DNS, SSL, cache, plugins,
              forms, permissions, and hosting behavior — and explaining the fix
              in plain language.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I can move between the customer conversation and the technical
              details: ask better questions, isolate what changed, test
              assumptions, document the answer, and help the team make repeat
              issues easier to handle next time. That range — from a live chat
              with a stressed customer to an InnoDB tuning session — is the
              job as I understand it.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I also use code and AI tools when they help the work: targeted
              fixes, custom WordPress plugins, technical research, QA
              checklists, documentation, and internal workflow improvements.
              Increasingly, that second part is becoming the first part — I'm
              building toward AI support systems engineering, one shipped
              artifact at a time.
            </p>
          </Reveal>
          <Reveal>
            <p>
              Six-plus years fully remote, from Fortnite player support in 2019
              to managing 450+ hosting accounts as a TAM, to owning WebOps for
              WordPress membership platforms today. Based in Málaga, Spain;
              working in English and Spanish across EU and Americas time
              zones.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div>
            <Image
              src="/images/jp-about.jpg"
              alt="Juan Pablo Ramirez"
              width={1200}
              height={1797}
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
          <SectionHeading index="01" title="What colleagues say" className="mb-8" />
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
