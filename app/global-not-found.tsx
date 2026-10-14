import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NotFoundPage } from "@/components/not-found-page";

// The root layout lives in app/[lang], so the 404 is its own document.
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: "404 — Juan Pablo Ramirez",
  robots: { index: false },
  other: { google: "notranslate" },
};

export const viewport: Viewport = {
  themeColor: "#05070c",
  viewportFit: "cover",
};

export default function GlobalNotFound() {
  return <NotFoundPage fonts={`${geist.variable} ${geistMono.variable}`} />;
}
