import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Ambient } from "@/components/ambient";
import { HeroDepth } from "@/components/hero-depth";
import { MalagaClock } from "@/components/malaga-clock";
import { site } from "@/lib/data/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const quickLinks = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About me" },
];

/**
 * Home hero. The surname sits behind the cut-out portrait; the intro card
 * floats over it on desktop and becomes a sheet under the cover on phones.
 */
export function Hero() {
  return (
    <HeroDepth className="relative">
      <section
        aria-label="Introduction"
        className="hero h-[78svh] min-h-[560px] max-h-[760px] md:h-[100svh] md:max-h-[1100px] md:min-h-[760px]"
      >
        <div className="hero-scroll-light absolute inset-0 -z-10">
          <Ambient src="/images/ambient/hero.webp" opacity={0.34} fade="bottom" className="enter-fade" />
        </div>

        <div className="hero-scroll-name absolute inset-x-0 top-[84px] flex justify-center md:top-[12svh]">
          <div data-depth="-14">
            <p aria-hidden className="hero-name enter" style={d(60)}>
              Ramirez
            </p>
          </div>
        </div>

        <div className="hero-scroll-portrait absolute inset-0 flex items-end justify-center">
          <div data-depth="16" className="flex h-full items-end justify-center md:mr-[18%]">
            <Image
              src={site.heroCutout.src}
              width={site.heroCutout.width}
              height={site.heroCutout.height}
              alt=""
              aria-hidden
              preload
              quality={85}
              sizes="(min-width: 768px) 40vw, 92vw"
              className="hero-portrait enter-settle"
              style={d(140)}
            />
          </div>
        </div>

        <div
          className="absolute right-[5vw] bottom-14 z-20 hidden w-[290px] flex-col gap-3 lg:flex"
          data-depth="-8"
          data-tilt="3"
        >
          <div className="glass glass-blur enter rounded-[20px] p-5" style={d(560)}>
            <span className="label flex justify-between">
              <span>Málaga, Spain</span>
              <MalagaClock />
            </span>
            <span className="mt-2.5 block text-[15px]">Remote, EU and Americas hours</span>
            <span className="block text-sm text-muted-foreground">English and Spanish</span>
          </div>
          <p className="label enter-fade flex items-center gap-2.5 self-end" style={d(1000)}>
            Scroll
            <span aria-hidden className="block h-7 w-px bg-white/45" />
          </p>
        </div>
      </section>

      <div className="relative z-20 -mt-28 px-3 md:absolute md:bottom-14 md:left-[5vw] md:mt-0 md:w-[480px] md:px-0">
        <div data-depth="9" data-tilt="2.5">
          <div className="glass-2 glass-blur enter rounded-[28px] p-6 md:p-8" style={d(380)}>
            <h1 className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
              <span className="dot bg-brand" />
              {site.name} · AI engineer
            </h1>
            <p className="mt-4 text-[clamp(1.6rem,2.4vw,2.15rem)] leading-[1.14] font-medium tracking-[-0.03em]">
              Hi, I&apos;m Juan Pablo. I build AI tools and look after the infrastructure
              under them.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
              Right now that means AI chat for WordPress membership sites at MemberDev,
              a few apps of my own, and a lot of time with coding agents.
            </p>

            <nav aria-label="Quick links" className="mt-5 md:hidden">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex min-h-[52px] items-center justify-between border-t border-white/12 text-base font-medium active:opacity-70"
                >
                  {link.label}
                  <span aria-hidden className="arrow text-brand transition-[translate] duration-300">
                    →
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex flex-wrap gap-2.5 max-md:mt-2">
              <Link href="/projects" className="btn btn-brand max-md:hidden">
                See my projects <span aria-hidden className="arrow">→</span>
              </Link>
              <a
                href={site.cv.href}
                download={site.cv.filename}
                className="btn btn-ghost max-md:w-full max-md:border-transparent max-md:bg-brand max-md:text-background"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </HeroDepth>
  );
}
