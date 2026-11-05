import type { Metadata } from 'next';
import PartnersPageContent from '@/components/cauders/PartnersPageContent';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Strategic Agency & Referral Partner Program',
  description:
    'Collaborate with Cauders through white-label software engineering, referral partnerships, and complementary AI and cloud delivery capabilities.',
  path: '/partners',
  ogImage:
    'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1786803239/partnership_hero_k4d2xn.png',
  ogAlt: 'Cauders Partner Program',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Partners', path: '/partners' },
]);

export default function PartnersPage() {
  return (
    <div className="min-h-screen text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PartnersPageContent />
    </div>
  );
}
