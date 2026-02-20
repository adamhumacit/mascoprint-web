/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // 301 redirects from old WordPress URLs to new Next.js routes
  async redirects() {
    return [
      // Slug change: R&D case study
      {
        source: '/case-studies/rd',
        destination: '/case-studies/r-and-d',
        permanent: true,
      },
      // Pages removed in migration
      {
        source: '/news',
        destination: '/',
        permanent: true,
      },
      {
        source: '/consultancy',
        destination: '/services',
        permanent: true,
      },
      // Old blog posts
      {
        source: '/used-cp12-machines-for-sale',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/for-sale/used-cp12-mahines-for-sale',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/for-sale/:slug',
        destination: '/products',
        permanent: true,
      },
      {
        source: '/opening-hours',
        destination: '/contact',
        permanent: true,
      },
      // WordPress upload paths
      {
        source: '/wp-content/uploads/:path*',
        destination: '/',
        permanent: true,
      },
      // WordPress admin/login paths (prevent 404s from bots)
      {
        source: '/wp-admin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/',
        permanent: true,
      },
    ]
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // Cache images for 1 year
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  output: 'standalone', // For Docker deployment
  compress: true, // Enable gzip compression
  poweredByHeader: false, // Remove X-Powered-By header for security

  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true, // Optimize CSS in production
    scrollRestoration: true,
  },
}

module.exports = nextConfig
