import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isStaging =
    process.env.VERCEL_ENV === 'preview' ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
    process.env.APP_ENV === 'staging';

  // Disallow all crawlers in non-production preview/staging environments
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

  // Production crawl policy: allow /_next/ so Googlebot WRS renders CSS/JS & optimized images cleanly,
  // and allow /feedback + /careers/apply so crawlers read their <meta name="robots" content="noindex, follow">.
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://www.cauders.com/sitemap.xml',
  };
}
