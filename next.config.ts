import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The former domain (with or without www) sends every address to the same
  // page on the current one. 308 is permanent, so search engines move the
  // ranking across. The destination is written out here rather than read from
  // SITE_URL (src/lib/site.ts): keep the two in step.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?evergreen-ecosorb\\.com" }],
        destination: "https://www.green-solutions-group.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
