import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Otimizações de Compilação
  compiler: {
    styledComponents: true,
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Configuração Turbopack (Next.js 16+)
  turbopack: {
    resolveAlias: {
      "@/*": "./*",
    },
  },

  // Otimizações de Imagens
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 80],
    deviceSizes: [480, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    unoptimized: false,
    minimumCacheTTL: 31536000,
  },

  // Otimizações de Performance
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Otimizações de Build
  productionBrowserSourceMaps: false,
  compress: true,
  poweredByHeader: false,

  // Headers de Cache
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
