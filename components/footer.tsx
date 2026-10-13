import Link from "next/link";
import { site } from "@/lib/data/site";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/stack", label: "Stack" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-32 sm:px-8 md:pb-12">
      <div
        data-reveal
        className="glass flex flex-wrap items-end justify-between gap-8 rounded-[32px] p-7 sm:p-12"
      >
        <div className="min-w-0">
          <p className="label">Contact</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-3 block text-[clamp(1.5rem,3.6vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.035em] break-words transition-colors duration-300 hover:text-brand"
          >
            {site.email}
          </a>
          <p className="mt-3 text-[15px] text-muted-foreground">
            {site.availability} · {site.languages.join(" and ")}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            LinkedIn ↗
          </a>
          <a href={site.cv.href} download={site.cv.filename} className="btn btn-light">
            Download CV
          </a>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-between gap-3 px-1 meta">
        <span>
          {site.fullName} · {site.location}
        </span>
        <span className="flex flex-wrap gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  );
}
