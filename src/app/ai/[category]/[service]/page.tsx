import type { Metadata } from 'next';
import { getAiCategories, getAiCategoryBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/cauders/ServiceDetailPage';
import FallbackPage from '@/components/cauders/FallbackPage';
import { detailedServices } from '@/lib/service-details';
import { buildBreadcrumbJsonLd, buildPageMetadata, SITE_URL } from '@/lib/seo';

export async function generateStaticParams() {
  const categories = getAiCategories();
  const params: { category: string; service: string }[] = [];

  categories.forEach((category) => {
    category.services.forEach((service) => {
      params.push({
        category: category.slug,
        service: service.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; service: string };
}): Promise<Metadata> {
  const category = getAiCategoryBySlug(params.category);
  const service = category?.services.find((s) => s.slug === params.service);
  const serviceData = detailedServices[params.service];
  const canonicalPath = `/ai/${params.category}/${params.service}`;

  if (!category || !service || !serviceData) {
    return {
      title: 'AI Capability Not Found',
      robots: { index: false, follow: true },
    };
  }

  const heroDesc = serviceData.hero.description || '';
  const overviewFallback = serviceData.overview?.paragraphs?.[0] || '';
  const rawDescription =
    heroDesc.length >= 120
      ? heroDesc
      : `${heroDesc} ${overviewFallback}`.trim() ||
        'Applied AI, autonomous agents, and workflow automation solutions engineered by Cauders.';

  return buildPageMetadata({
    title: serviceData.hero.title,
    description: rawDescription,
    path: canonicalPath,
    ogImage: serviceData.hero.imageUrl,
    ogAlt: serviceData.hero.title,
  });
}

export default function Page({
  params,
}: {
  params: { category: string; service: string };
}) {
  const category = getAiCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const service = category.services.find((s) => s.slug === params.service);

  if (!service) {
    notFound();
  }

  const serviceData = detailedServices[service.slug];

  if (!serviceData) {
    return (
      <FallbackPage
        code="WIP"
        title="Content coming soon"
        description="We are currently migrating this service page to the new design. Please check back later."
      />
    );
  }

  const canonicalPath = `/ai/${category.slug}/${service.slug}`;
  const graphItems: Record<string, unknown>[] = [
    buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'AI & Automation', path: '/services' },
      { name: category.title, path: `/ai/${category.slug}` },
      { name: serviceData.hero.title, path: canonicalPath },
    ]),
    {
      '@type': 'Service',
      name: serviceData.hero.title,
      description: serviceData.hero.description,
      url: `${SITE_URL}${canonicalPath}`,
      serviceType: category.title,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'Worldwide',
    },
  ];

  if (serviceData.faqs && serviceData.faqs.length > 0) {
    graphItems.push({
      '@type': 'FAQPage',
      mainEntity: serviceData.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graphItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailPage data={serviceData} />
    </>
  );
}
