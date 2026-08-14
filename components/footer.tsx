import Link from "next/link";
import { CvDownload } from "@/components/cv-download";
import { site } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="hairline mt-28">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="eyebrow">Contact</p>
        <a
          href={`mailto:${site.email}`}
          className="link-quiet mt-4 inline-block text-3xl font-medium tracking-tight sm:text-5xl"
        >
          {site.email}
        </a>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          Open to technical support engineering, WebOps, and AI workflow roles —
          remote, EU/Americas overlap. English &amp; Spanish.
        </p>

        <div className="mt-12 flex flex-col justify-between gap-6 border-t border-border pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-6">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              linkedin ↗
            </a>
            <CvDownload className="hover:text-foreground" />
            <Link
              href="/now"
              className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              /now
            </Link>
          </div>
          <p className="font-mono text-[11px] tracking-[0.1em] text-subtle">
            {site.location} · CET — © {new Date().getFullYear()}{" "}
            {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
