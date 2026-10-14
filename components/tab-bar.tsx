"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity, Briefcase, House, LayoutGrid, User } from "lucide-react";
import { type Locale, localePath, stripLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const tabs = [
  { href: "/", label: { en: "Home", es: "Inicio" }, icon: House },
  { href: "/projects", label: { en: "Projects", es: "Proyectos" }, icon: LayoutGrid },
  { href: "/experience", label: { en: "Work", es: "Trabajo" }, icon: Briefcase },
  { href: "/now", label: { en: "Now", es: "Ahora" }, icon: Activity },
  { href: "/about", label: { en: "About", es: "Sobre mí" }, icon: User },
];

const primary = { en: "Primary", es: "Principal" };

/** Phone only. A floating glass bar; Stack is reached from Home and the footer. */
export function TabBar({ lang }: { lang: Locale }) {
  const path = stripLocale(usePathname());

  return (
    <nav
      aria-label={primary[lang]}
      className="fixed inset-x-3 z-50 mx-auto max-w-[440px] md:hidden"
      style={{ bottom: "max(12px, env(safe-area-inset-bottom))" }}
    >
      {/* Named on the glass, not the nav: a named element is a backdrop root,
          so the blur would only see the empty nav behind it. */}
      <div
        style={{ viewTransitionName: "site-tabs" }}
        className="glass-blur grid grid-cols-5 gap-0.5 rounded-[26px] [@media(max-height:500px)]:rounded-[22px] [@media(max-height:500px)]:p-1 border border-white/16 bg-[rgba(14,17,26,0.88)] p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)]"
      >
        {tabs.map((tab) => {
          const active =
            tab.href === "/"
              ? path === "/"
              : path === tab.href || path.startsWith(tab.href + "/");
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={localePath(lang, tab.href)}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-[52px] flex-col items-center justify-center gap-[3px] rounded-[20px] text-[10px] font-medium transition-[background-color,color,transform] duration-300 active:scale-95 [@media(max-height:500px)]:min-h-11 [@media(max-height:500px)]:rounded-[18px]",
                active ? "bg-white/10 text-brand" : "text-subtle",
              )}
            >
              <Icon size={20} strokeWidth={1.8} aria-hidden />
              <span className="[@media(max-height:500px)]:sr-only">{tab.label[lang]}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
