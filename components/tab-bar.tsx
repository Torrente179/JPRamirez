"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderOpen,
  Briefcase,
  Map,
  CircleUser,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: "home", icon: Home },
  { href: "/projects", label: "projects", icon: FolderOpen },
  { href: "/experience", label: "work", icon: Briefcase },
  { href: "/now", label: "now", icon: Map },
  { href: "/about", label: "about", icon: CircleUser },
];

export function TabBar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/85 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid h-16 grid-cols-5">
        {tabs.map((tab) => {
          const active =
            tab.href === "/"
              ? pathname === "/"
              : pathname === tab.href || pathname.startsWith(tab.href + "/");
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-colors duration-200 active:scale-95",
                active ? "text-brand" : "text-subtle",
              )}
            >
              <Icon
                size={20}
                strokeWidth={active ? 2.2 : 1.8}
                aria-hidden
              />
              <span className="font-mono text-[9px] uppercase tracking-[0.12em]">
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
