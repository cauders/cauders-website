import type { Metadata } from 'next';

export const SITE_URL = 'https://www.cauders.com';
export const DEFAULT_OG_IMAGE = '/images/og-default.jpg';

/**
 * Injects Cloudinary automatic format/quality and optional width cap
 * into raw res.cloudinary.com/cauders/image/upload/v... URLs.
 */
export function optimizeCloudinaryUrl(url: string, width?: number): string {
  if (!url || !url.includes('res.cloudinary.com/cauders/image/upload/')) {
    return url;
  }
  if (url.endsWith('.svg')) {
    return url;
  }
  const marker = '/image/upload/';
  const idx = url.indexOf(marker);
  if (idx === -1) return url;

  const after = url.slice(idx + marker.length);
  // Already has transformations before /v1234/
  if (!/^v\d+\//.test(after)) {
    return url;
  }

  const transforms = width ? `f_auto,q_auto:best,c_limit,w_${width}` : 'f_auto,q_auto:best';
  return `${url.slice(0, idx + marker.length)}${transforms}/${after}`;
}

/**
 * Ensures OpenGraph / Twitter social preview images are fast 1200x630 JPEGs (< 200 KB)
 * so WhatsApp, Slack, LinkedIn, and X never time out unfurling multi-MB 4K PNGs.
 */
export function optimizeOgImageUrl(url?: string): string {
  if (!url) return DEFAULT_OG_IMAGE;
  if (url.includes('res.cloudinary.com/cauders/image/upload/')) {
    const marker = '/image/upload/';
    const idx = url.indexOf(marker);
    if (idx !== -1) {
      const after = url.slice(idx + marker.length);
      const versionedPath = /^v\d+\//.test(after)
        ? after
        : after.replace(/^[^/]+\//, '');
      return `${url.slice(0, idx + marker.length)}c_fill,w_1200,h_630,f_jpg,q_auto:good/${versionedPath}`;
    }
  }
  return url;
}

/**
 * Clamps meta descriptions cleanly to SERP-optimal length (<= 158 chars) at a word boundary.
 */
export function clampMetaDescription(description: string, maxLen = 158): string {
  const clean = description.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  const sliced = clean.slice(0, maxLen - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  const trimmed = (lastSpace > 100 ? sliced.slice(0, lastSpace) : sliced).replace(/[,;:\s-]+$/, '');
  return `${trimmed}.`;
}

interface BuildPageMetadataOptions {
  /** Page title WITHOUT trailing '| Cauders' (unless isAbsoluteTitle is true) */
  title: string;
  description: string;
  /** Leading-slash canonical path, e.g. '/about' or '/' */
  path: string;
  ogImage?: string;
  ogAlt?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  isAbsoluteTitle?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage,
  ogAlt,
  type = 'website',
  noIndex = false,
  isAbsoluteTitle = false,
}: BuildPageMetadataOptions): Metadata {
  const cleanDesc = clampMetaDescription(description);
  const fullTitle = isAbsoluteTitle || title.endsWith('| Cauders') ? title : `${title} | Cauders`;
  const canonicalUrl = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const resolvedOgImage = optimizeOgImageUrl(ogImage);

  return {
    title: isAbsoluteTitle ? { absolute: title } : title,
    description: cleanDesc,
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {
          alternates: {
            canonical: canonicalUrl,
          },
        }),
    openGraph: {
      title: fullTitle,
      description: cleanDesc,
      url: canonicalUrl,
      siteName: 'Cauders',
      locale: 'en_US',
      type,
      images: [
        {
          url: resolvedOgImage,
          width: 1200,
          height: 630,
          alt: ogAlt || fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: cleanDesc,
      images: [resolvedOgImage],
    },
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.path === '/' ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  };
}
