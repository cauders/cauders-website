import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isStaging =
    process.env.VERCEL_ENV === 'preview' ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
    process.env.APP_ENV === 'staging';

  // If in a non-production staging/preview environment, disallow all crawlers
  if (isStaging) {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }

  // Production crawl policy
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/feedback',
          '/careers/apply',
        ],
      },
    ],
    sitemap: 'https://www.cauders.com/sitemap.xml',
    host: 'https://www.cauders.com',
  };
}
