import Image from "next/image";
import Link from "next/link";
import { Stagger } from "@/components/motion";
import { StatusLine } from "@/components/status-line";
import { RotatingText } from "@/components/rotating-text";

const heroPhrases = [
  "agents in production.",
  "web platforms calm.",
  "context grounded.",
  "DNS boring.",
];

function HeroCopy({ app = false }: { app?: boolean }) {
  return (
    <>
      <p
        data-stagger
        className={
          app
            ? "text-[1.35rem] leading-snug font-medium tracking-tight"
            : "text-2xl leading-snug font-medium tracking-tight md:text-3xl"
        }
      >
        I&apos;m Juan Pablo. I keep{" "}
        <RotatingText
          phrases={heroPhrases}
          className="inline-block text-brand italic"
        />
      </p>
      <p
        data-stagger
        className={
          app
            ? "mt-3 text-[15px] leading-relaxed text-muted-foreground"
            : "mt-5 max-w-lg text-base leading-relaxed text-muted-foreground"
        }
      >
        AI engineer. DevOps and WebOps. Agentic coding, RAG in production,
        and the infrastructure it all runs on.
      </p>
      {app ? (
        <div data-stagger className="mt-5">
          <Link
            href="/experience"
            className="hairline flex items-center justify-between py-4 font-mono text-[12px] tracking-[0.14em] text-foreground uppercase active:scale-[0.99]"
          >
            <span>Work history</span>
            <span aria-hidden className="text-brand">
              →
            </span>
          </Link>
          <Link
            href="/projects"
            className="hairline flex items-center justify-between py-4 font-mono text-[12px] tracking-[0.14em] text-muted-foreground uppercase active:scale-[0.99]"
          >
            <span>View projects</span>
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/about"
            className="hairline flex items-center justify-between py-4 font-mono text-[12px] tracking-[0.14em] text-muted-foreground uppercase active:scale-[0.99]"
          >
            <span>About me</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      ) : (
        <div data-stagger className="mt-8 flex items-center gap-7">
          <Link
            href="/projects"
            className="group flex items-center gap-2 font-mono text-[12px] tracking-[0.14em] text-foreground uppercase"
          >
            <span className="link-quiet">View projects</span>
            <span
              aria-hidden
              className="text-brand transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <Link
            href="/about"
            className="font-mono text-[12px] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            About me
          </Link>
        </div>
      )}
    </>
  );
}

function DesktopHero() {
  return (
    <Stagger className="relative hidden min-h-[88svh] flex-col overflow-visible pt-20 md:flex">
      <div data-stagger className="relative z-20">
        <StatusLine />
      </div>

      <div aria-hidden className="max-h-12 min-h-6 flex-[0.35]" />

      <div className="hero-anchor relative flex flex-1 flex-col">
        <div data-stagger className="hero-lockup">
          <div aria-hidden className="hero-portrait">
            <Image
              src="/images/jp-hero-alpha.webp"
              alt=""
              width={1600}
              height={1600}
              priority
              className="w-full contrast-[1.04] saturate-[1.05]"
            />
          </div>
          <h1 className="hero-name pointer-events-none -ml-2">
            <span className="sr-only">Juan Pablo Ramirez</span>
            <span className="hero-name-visual" aria-hidden>
              Ramirez
            </span>
          </h1>
        </div>

        <div aria-hidden className="min-h-8 flex-1" />

        <div className="relative z-20 max-w-xl">
          <HeroCopy />
        </div>
      </div>
    </Stagger>
  );
}

function AppHero() {
  return (
    <Stagger className="md:hidden">
        <div data-stagger className="hero-app-cover -mx-5 sm:-mx-8">
        <div className="hero-app-photo-wrap">
          <Image
            src="/images/jp-hero-alpha.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-app-photo"
          />
        </div>
        <h1 className="hero-app-name pointer-events-none">
          <span className="sr-only">Juan Pablo Ramirez</span>
          <span className="hero-name-visual" aria-hidden>
            Ramirez
          </span>
        </h1>
      </div>
      <div className="pt-5">
        <HeroCopy app />
      </div>
    </Stagger>
  );
}

export function Hero() {
  return (
    <>
      <AppHero />
      <DesktopHero />
    </>
  );
}
