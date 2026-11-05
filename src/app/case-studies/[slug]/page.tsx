import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyDetailPage from '@/components/cauders/CaseStudyDetailPage';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/case-studies-data';
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  optimizeOgImageUrl,
  SITE_URL,
} from '@/lib/seo';

export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return {
      title: 'Case Study Not Found',
      robots: { index: false, follow: true },
    };
  }

  const conciseTitle =
    study.publicLabel && study.publicLabel.length <= 48
      ? `${study.publicLabel} Case Study`
      : study.title.length <= 54
      ? study.title
      : study.publicLabel || study.title.slice(0, 52).replace(/\s+\S*$/, '');

  return buildPageMetadata({
    title: conciseTitle,
    description: study.subtitle || study.overview,
    path: `/case-studies/${study.slug}`,
    ogImage: study.heroImage,
    ogAlt: study.title,
    type: 'article',
  });
}

export default function CaseStudyDetailRoute({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const canonicalPath = `/case-studies/${study.slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: study.publicLabel || study.title, path: canonicalPath },
      ]),
      {
        '@type': 'TechArticle',
        headline: study.title,
        description: study.subtitle || study.overview,
        image: optimizeOgImageUrl(study.heroImage),
        url: `${SITE_URL}${canonicalPath}`,
        about: study.industry,
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CaseStudyDetailPage study={study} />
    </>
  );
}
