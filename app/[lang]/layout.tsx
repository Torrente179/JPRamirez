import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Nav } from "@/components/nav";
import { TabBar } from "@/components/tab-bar";
import { Footer } from "@/components/footer";
import { site } from "@/lib/data/site";
import { getLang, localeInfo, localePath, locales, localize } from "@/lib/i18n";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Both languages are built ahead of time; any other first segment is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = await getLang(params);
  const s = localize(site, lang);
  const title = `${s.name} — ${s.role}`;
  const image = {
    url: s.og.src,
    width: s.og.width,
    height: s.og.height,
    alt: s.og.alt,
    type: "image/jpeg",
  };

  return {
    metadataBase: new URL(site.url),
    title: {
      default: title,
      template: `%s — ${s.name}`,
    },
    description: s.headline,
    openGraph: {
      title,
      description: s.headline,
      url: localePath(lang, "/"),
      siteName: s.name,
      locale: localeInfo[lang].og,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeInfo[l].og),
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: s.headline,
      images: [image],
    },
    // Each language is written by hand, so browsers shouldn't offer to translate it.
    other: { google: "notranslate" },
  };
}

export const viewport: Viewport = {
  themeColor: "#05070c",
  viewportFit: "cover",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = await getLang(params);
  const s = localize(site, lang);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: s.fullName,
    alternateName: s.name,
    jobTitle: lang === "es" ? "Ingeniero de IA" : "AI Engineer",
    description: s.headline,
    email: `mailto:${s.email}`,
    url: `${site.url}${localePath(lang, "/")}`.replace(/\/$/, ""),
    image: `${site.url}${s.portrait}`,
    sameAs: [s.linkedin, s.instagram.href],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Málaga",
      addressCountry: "ES",
    },
    knowsLanguage: ["en", "es"],
    knowsAbout: [
      "AI Engineering",
      "Agentic Coding",
      "RAG",
      "AI Systems",
      "DevOps",
      "WebOps",
      "WordPress",
      "Cloudflare",
    ],
  };

  return (
    <html
      lang={localeInfo[lang].tag}
      translate="no"
      className={`notranslate ${geist.variable} ${geistMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav lang={lang} />
        <ViewTransition default="page">
          <main className="overflow-x-clip">{children}</main>
        </ViewTransition>
        <Footer lang={lang} />
        <TabBar lang={lang} />
      </body>
    </html>
  );
}
