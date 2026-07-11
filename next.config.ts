import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

// Initialize Serwist with the paths for your Service Worker
const withSerwist = withSerwistInit({
  swSrc: "app/sw.ts",
  swDest: "public/sw.js",
  // Disable in development so it doesn't aggressively cache while you build
  disable: process.env.NODE_ENV === "development",
  register: true,
  reloadOnOnline: true,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  productionBrowserSourceMaps: false,

  images: {
    formats: ["image/avif", "image/webp"],

    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    minimumCacheTTL: 31536000,

    dangerouslyAllowSVG: false,

    contentDispositionType: "attachment",

    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",

    remotePatterns: [
    {
      protocol: "https",
      hostname:
        "fcrxcnyllstpfnbwviep.supabase.co",
      pathname:
        "/storage/v1/object/public/**",
    },
  ],
  },

  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "@radix-ui/react-icons",
      "@tabler/icons-react",
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value:
              "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },

      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=31536000, immutable",
          },
        ],
      },

      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

// Wrap your perfectly optimized config with Serwist
export default withSerwist(nextConfig);

