import type { Metadata } from 'next';
import FAQPageContent from '@/components/cauders/FAQPageContent';
import { coreFaqs, type FaqItem } from '@/lib/faq-data';
import { industryDetails } from '@/lib/industry-details';
import { detailedServices } from '@/lib/service-details';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Frequently Asked Questions (FAQ)',
  description:
    'Find answers to common questions about Cauders custom software development, AI solutions, workflow automation, engagement models, and tech stack.',
  path: '/faq',
});

function getAggregatedFaqs(): FaqItem[] {
  const allFaqs: FaqItem[] = [...coreFaqs];
  Object.values(industryDetails).forEach((industry) => {
    if (industry.faqs) {
      allFaqs.push(...industry.faqs);
    }
  });
  Object.values(detailedServices).forEach((service) => {
    if (service.faqs) {
      allFaqs.push(...service.faqs);
    }
  });
  return Array.from(new Map(allFaqs.map((item) => [item.question, item])).values());
}

export default function FAQPage() {
  const allFaqs = getAggregatedFaqs();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'FAQ', path: '/faq' },
      ]),
      {
        '@type': 'FAQPage',
        mainEntity: coreFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQPageContent allFaqs={allFaqs} />
    </>
  );
}
