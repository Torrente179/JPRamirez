"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MalagaClock } from "@/components/malaga-clock";
import { site } from "@/lib/data/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/now", label: "Now" },
  { href: "/stack", label: "Stack" },
  { href: "/about", label: "About" },
];

const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(href + "/");

/** Desktop: a centred glass pill. Phone: an app bar with the logo and the clock. */
export function Nav() {
  const pathname = usePathname();

  return (
    <>
      <header
        className="pointer-events-none fixed inset-x-0 top-5 z-50 hidden justify-center px-5 md:flex"
      >
        {/* The transition name sits on the glass itself: a named element is a
            backdrop root, so a name on a wrapper would leave the blur nothing to blur. */}
        <nav
          aria-label="Primary"
          style={{ viewTransitionName: "site-nav" }}
          className="glass-blur pointer-events-auto flex items-center gap-1 rounded-full border border-white/14 bg-[rgba(12,15,23,0.84)] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_50px_-20px_rgba(0,0,0,0.6)]"
        >
          <Link
            href="/"
            aria-label="Juan Pablo Ramirez, home"
            aria-current={pathname === "/" ? "page" : undefined}
            className={cn(
              "flex min-h-10 items-center rounded-full px-4 font-semibold tracking-[-0.02em] transition-colors duration-300 pointer-coarse:min-h-11",
              pathname === "/" ? "bg-white/12" : "hover:bg-white/6",
            )}
          >
            jp<span className="text-brand">·</span>
          </Link>
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-10 items-center rounded-full px-3.5 text-sm transition-colors duration-300 pointer-coarse:min-h-11",
                  active
                    ? "bg-white/12 text-white"
                    : "text-muted-foreground hover:bg-white/6 hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light ml-1 min-h-10 px-4.5 text-sm pointer-coarse:min-h-11"
          >
            Contact me
          </a>
        </nav>
      </header>

      <header
        className="pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 pt-[max(12px,env(safe-area-inset-top))] md:hidden"
      >
        <Link
          href="/"
          aria-label="Juan Pablo Ramirez, home"
          style={{ viewTransitionName: "site-appbar" }}
          className="glass-blur pointer-events-auto flex min-h-11 items-center rounded-full border border-white/16 bg-[rgba(12,15,23,0.86)] px-4 font-semibold tracking-[-0.02em]"
        >
          jp<span className="text-brand">·</span>
        </Link>
        <span
          style={{ viewTransitionName: "site-clock" }}
          className="glass-blur pointer-events-auto flex min-h-11 items-center gap-2 rounded-full border border-white/16 bg-[rgba(12,15,23,0.86)] px-3.5 font-mono text-xs text-muted-foreground">
          Málaga <MalagaClock />
        </span>
      </header>
    </>
  );
}
