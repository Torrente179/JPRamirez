import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
