import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Route changes run through the browser View Transitions API
    // (shared project media morphs into the case-study hero).
    viewTransition: true,
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
    ];
  },
};

export default nextConfig;
