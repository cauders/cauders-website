/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  distDir: isDev && !process.env.VERCEL ? '.next-dev' : '.next',
  compress: true,
  poweredByHeader: false,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 2592000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'portfolio.cauders.com',
          },
        ],
        destination: 'https://www.cauders.com/case-studies',
        permanent: true,
      },
      {
        source: '/legal',
        destination: '/legal-information',
        permanent: true,
      },
      {
        source: '/cookie-policy',
        destination: '/cookies-policy',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/case-study',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/team',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/work',
        destination: '/case-studies',
        permanent: true,
      },
    ];
  },
  async headers() {
    const rules = [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];

    if (!isDev) {
      rules.push({
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      });
    } else {
      rules.push({
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      });
    }

    return rules;
  },
};

module.exports = nextConfig;
