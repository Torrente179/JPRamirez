import type { NextConfig } from "next";

/** Every page, unprefixed. English is served here; Spanish is the same path under /es. */
const pages = ["/", "/projects", "/projects/:slug", "/experience", "/now", "/stack", "/about"];
const inSpanish = (path: string) => (path === "/" ? "/es" : `/es${path}`);

const nextConfig: NextConfig = {
  experimental: {
    // Route changes run through the browser View Transitions API
    // (shared project media morphs into the case-study hero).
    viewTransition: true,
    // The root layout is app/[lang]/layout.tsx, so the 404 is app/global-not-found.tsx.
    globalNotFound: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "jpramirez.vercel.app" }],
        destination: "https://jpramirez.dev/:path*",
        permanent: true,
      },
      // English has no prefix.
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      // Someone who picked Spanish with the toggle (the cookie remembers it).
      ...pages.map((path) => ({
        source: path,
        has: [{ type: "cookie" as const, key: "lang", value: "es" }],
        destination: inSpanish(path),
        permanent: false,
      })),
      // A first visit from a browser whose first language is Spanish, before
      // it can offer to machine-translate the English.
      ...pages.map((path) => ({
        source: path,
        missing: [{ type: "cookie" as const, key: "lang" }],
        has: [
          {
            type: "header" as const,
            key: "accept-language",
            value: "es(?:-[A-Za-z0-9]+)?(?:[,;].*)?",
          },
        ],
        destination: inSpanish(path),
        permanent: false,
      })),
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [],
      // English pages live in app/[lang] with lang "en".
      afterFiles: [
        { source: "/", destination: "/en" },
        { source: "/:first((?!es(?:/|$))[^/]+)/:rest*", destination: "/en/:first/:rest*" },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
