import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The former domain (with or without www) sends every address to the same
  // page on the current one. 308 is permanent, so search engines move the
  // ranking across. The destination is written out here rather than read from
  // SITE_URL (src/lib/site.ts): keep the two in step.
  //
  // One rule per host, each an exact name, the form the Next.js documentation
  // shows for a host condition.
  async redirects() {
    const destination = "https://www.green-solutions-group.com/:path*";
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.evergreen-ecosorb.com" }],
        destination,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "evergreen-ecosorb.com" }],
        destination,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
