"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "about" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/stack", label: "stack" },
  { href: "/now", label: "now" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/72 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-mono text-[13px] font-medium tracking-[0.08em] text-foreground transition-colors hover:text-brand"
        >
          jp<span className="text-brand">·</span>
          <span className="hidden md:inline">ramirez</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-7">
          {links.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-mono text-[10px] tracking-[0.08em] transition-colors duration-300 sm:text-[11px] sm:tracking-[0.14em]",
                  active
                    ? "text-brand"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
