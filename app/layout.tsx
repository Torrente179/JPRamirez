import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { TabBar } from "@/components/tab-bar";
import { Footer } from "@/components/footer";
import { site } from "@/lib/data/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.headline,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.headline,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.headline,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070c",
  viewportFit: "cover",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  jobTitle: "AI Engineer",
  description: site.headline,
  email: `mailto:${site.email}`,
  url: site.url,
  image: `${site.url}${site.portrait}`,
  sameAs: [site.linkedin, site.instagram.href],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Nav />
        <ViewTransition default="page">
          <main className="overflow-x-clip">{children}</main>
        </ViewTransition>
        <Footer />
        <TabBar />
      </body>
    </html>
  );
}
