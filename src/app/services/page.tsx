import type { Metadata } from 'next';
import AllServicesPage from '@/components/cauders/AllServicesPage';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Custom Software, Cloud & AI Engineering Services',
  description:
    'Explore Cauders custom software development, SaaS engineering, applied AI, workflow automation, platform modernization, and dedicated engineering teams.',
  path: '/services',
  ogImage:
    'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1792742641/Group_4654_t9qwca.png',
  ogAlt: 'Cauders Services & AI Capabilities',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
]);

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AllServicesPage />
    </>
  );
}
