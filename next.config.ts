import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Оптимизация производительности
  compress: true,
  poweredByHeader: false,

  // Оптимизация изображений
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 85, 90, 100],
  },

  // Оптимизация компиляции
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Experimental features для улучшения производительности
  experimental: {
    optimizePackageImports: ['embla-carousel-react'],
  },
};

export default nextConfig;
