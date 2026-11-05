import type { Metadata } from 'next';
import AboutPageContent from '@/components/cauders/AboutPageContent';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'About Us — Senior Software & AI Engineering Team',
  description:
    'Meet the engineering-first team at Cauders building custom software, SaaS platforms, applied AI workflows, and resilient digital systems worldwide.',
  path: '/about',
  ogImage:
    'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1792827587/Gemini_Generated_Image_4u4g1b4u4g1b4u4g_cihgix.jpg',
  ogAlt: 'About Cauders — Software & AI Engineering Team',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
]);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <AboutPageContent />
    </>
  );
}
