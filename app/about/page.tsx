import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Ambient } from "@/components/ambient";
import { PhotoStack } from "@/components/photo-stack";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/lib/data/site";
import { education } from "@/lib/data/experience";
import { recommendations } from "@/lib/data/recommendations";
import { aboutPhotos } from "@/lib/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "I'm JP, a mostly self-taught tech guy living in Málaga. Most of my time goes into web development and AI, and I'm looking for partners who share the same ideas.",
};

const facts = [
  { label: "Location", value: site.location },
  { label: "Availability", value: site.availability },
  { label: "Languages", value: site.languages.join(" · ") },
];

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-clip pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-[1000px]">
          <Ambient src="/images/ambient/sunset.webp" opacity={0.45} fade="bottom" className="enter-fade" />
        </div>
        <div className="mx-auto flex max-w-7xl flex-wrap items-start gap-x-20 gap-y-16 px-4 sm:px-8">
          {/* JP's own letter. Keep his wording. */}
          <div className="min-w-0 max-w-[640px] flex-[1_1_520px]">
            <h1 className="display enter text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.92]">
              Hey there, <span className="text-brand">JP</span> here.
            </h1>
            <div
              className="enter mt-12 flex flex-col gap-6 text-lg leading-[1.8] text-muted-foreground"
              style={d(140)}
            >
              <p>
                I&apos;m a mostly self taught tech guy, that has gone headfirst into this web
                development world and more recently, the AI space, which is where most of my
                time and ideas go these days.
              </p>
              <p>
                I live in Spain, in the beautiful city of Malaga. I started my tech journey 7
                years ago and have never looked back. Right now I&apos;m looking to build my own
                partnerships with companies that share my ideas and vision.
              </p>
              <p>
                I love Jesus (my Lord and Saviour, of course), traveling, motorcycles, eating,
                combat sports, weights, cars, eating with friends... pretty much anything to do
                with eating and tech.
              </p>
              <p>
                If you vibe with me and want to work together,{" "}
                <a href={`mailto:${site.email}`} className="link">
                  send me an email
                </a>{" "}
                and we&apos;ll definitely start something great.
              </p>
              <p className="text-foreground">— JP</p>
            </div>
          </div>

          <div className="enter w-full min-w-0 flex-[1_1_380px] lg:max-w-[460px]" style={d(240)}>
            <PhotoStack photos={aboutPhotos} />
            <dl className="glass mt-7 rounded-[22px] px-6 py-1.5">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={
                    "flex justify-between gap-4 py-3.5 " + (i > 0 ? "border-t border-white/9" : "")
                  }
                >
                  <dt className="label pt-0.5">{fact.label}</dt>
                  <dd className="text-right text-sm">{fact.value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 border-t border-white/9 py-3.5">
                <dt className="label pt-0.5">LinkedIn</dt>
                <dd className="text-right text-sm">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-brand"
                  >
                    juan-pablo-ramirez-romero ↗
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-white/9 py-3.5">
                <dt className="label pt-0.5">Instagram</dt>
                <dd className="text-right text-sm">
                  <a
                    href={site.instagram.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-brand"
                  >
                    {site.instagram.handle} ↗
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          title="Recommendations"
          aside={<p className="meta">{recommendations.length} on LinkedIn</p>}
        />
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3">
          {recommendations.map((rec) => (
            <figure
              key={rec.name}
              data-reveal
              className="glass mb-4 break-inside-avoid rounded-[24px] p-6 md:p-7"
            >
              <blockquote className="text-[15px] leading-[1.75] text-muted-foreground">
                “{rec.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-white/10 pt-4">
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors duration-300 hover:text-brand"
                >
                  {rec.name} ↗
                </a>
                <span className="mt-1 block meta text-[11px] leading-[1.6]">
                  {rec.title} · {rec.relationship}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-24 pb-28 sm:px-8 md:pt-32 md:pb-40">
        <SectionHeading title="Education and training" size="md" />
        <ul data-reveal className="glass rounded-[24px] px-6 md:px-7">
          {education.map((item, i) => (
            <li
              key={item.title}
              className={
                "flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 " +
                (i > 0 ? "border-t border-white/9" : "")
              }
            >
              <span className="text-[17px] font-medium">{item.title}</span>
              <span className="meta">
                {item.org}
                {item.year && ` · ${item.year}`}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
