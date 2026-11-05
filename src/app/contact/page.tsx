import type { Metadata } from 'next';
import ContactPageContent from '@/components/cauders/ContactPageContent';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact Us — Start Your Software or AI Project',
  description:
    'Discuss your custom software, SaaS, cloud modernization, or applied AI project with our engineering team and map out a clear delivery plan.',
  path: '/contact',
  ogImage:
    'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1792742641/Group_4651_2_n0ql3c.png',
  ogAlt: 'Contact Cauders Engineering',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'Contact Us', path: '/contact' },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactPageContent />
    </>
  );
}
