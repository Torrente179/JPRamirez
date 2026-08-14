import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { PhotoCarousel } from "@/components/photo-carousel";
import { site } from "@/lib/data/site";
import { education } from "@/lib/data/experience";
import { recommendations } from "@/lib/data/recommendations";
import { aboutPhotos } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Hey there, JP here. Self-taught tech guy in Málaga. Web, AI, and looking for partners who share the vision.",
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
            Hey there,{" "}
            <span className="text-brand italic">JP</span> here.
          </>
        }
      />

      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
        <div className="space-y-6 text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
          <Reveal>
            <p>
              I&apos;m a mostly self taught tech guy, that has gone headfirst
              into this web development world and more recently, the AI space,
              which is where most of my time and ideas go these days.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I live in Spain, in the beautiful city of Malaga. I started my
              tech journey 7 years ago and have never looked back. Right now
              I&apos;m looking to build my own partnerships with companies that
              share my ideas and vision.
            </p>
          </Reveal>
          <Reveal>
            <p>
              I love Jesus (my Lord and Saviour, of course), traveling,
              motorcycles, eating, combat sports, weights, cars, eating with
              friends... pretty much anything to do with eating and tech.
            </p>
          </Reveal>
          <Reveal>
            <p>
              If you vibe with me and want to work together,{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-foreground transition-colors hover:text-brand"
              >
                send me an email
              </a>{" "}
              and we&apos;ll definitely start something great.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-foreground">— JP</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div>
            <PhotoCarousel photos={aboutPhotos} />
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
                  <p className="text-sm font-medium">
                    <a
                      href={rec.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-brand"
                    >
                      {rec.name} ↗
                    </a>
                  </p>
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
