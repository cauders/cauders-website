import type { Metadata } from 'next';
import HomePage from '@/components/cauders/HomePage';
import { buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Cauders | AI, Automation & Software Solutions',
  isAbsoluteTitle: true,
  description:
    'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations engineered around your business operations.',
  path: '/',
  ogImage:
    'https://res.cloudinary.com/cauders/image/upload/f_auto,q_auto,w_1200,h_630,c_fill/v1792672841/cauders_dark_teal_hero_background_n7pfpw.png',
  ogAlt: 'Cauders — AI, Automation & Software Solutions',
});

export default function Home() {
  return <HomePage />;
}
