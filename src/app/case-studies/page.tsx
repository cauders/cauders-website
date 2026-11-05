import type { Metadata } from 'next';
import CaseStudiesListingPage from '@/components/cauders/CaseStudiesListingPage';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Case Studies & Production Outcomes',
  description:
    'Explore software engineering case studies covering headless commerce, telecom portals, smart-building SaaS, API gateways, and workflow automation.',
  path: '/case-studies',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Case Studies', path: '/case-studies' },
]);

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <CaseStudiesListingPage />
    </>
  );
}
