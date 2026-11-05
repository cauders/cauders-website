import type { Metadata } from 'next';
import AllIndustriesPage from '@/components/cauders/AllIndustriesPage';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Industry Software & AI Solutions',
  description:
    'Custom software, AI, and workflow automation engineered for Banking & Finance, Healthcare, Retail & E-Commerce, SaaS, Real Estate, and Logistics.',
  path: '/industries',
  ogImage:
    'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1792719663/Rectangle_219_rvczyb.png',
  ogAlt: 'Cauders Industry Solutions',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Industries', path: '/industries' },
]);

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AllIndustriesPage />
    </>
  );
}
