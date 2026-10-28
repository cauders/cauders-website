import type { Metadata } from 'next';
import HomePage from '@/components/cauders/HomePage';

export const metadata: Metadata = {
  title: {
    absolute: 'Cauders | AI, Automation & Software Solutions',
  },
  description:
    'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations engineered around your business operations.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cauders | AI, Automation & Software Solutions',
    description:
      'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations engineered around your business operations.',
    url: 'https://www.cauders.com',
    siteName: 'Cauders',
    images: [
      {
        url: 'https://res.cloudinary.com/cauders/image/upload/v1792672841/cauders_dark_teal_hero_background_n7pfpw.png',
        width: 1200,
        height: 630,
        alt: 'Cauders | AI, Automation & Software Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cauders | AI, Automation & Software Solutions',
    description:
      'Cauders designs, builds, and modernizes custom software, SaaS products, applied AI, and workflow automations engineered around your business operations.',
    creator: '@cauders',
    images: ['https://res.cloudinary.com/cauders/image/upload/v1792672841/cauders_dark_teal_hero_background_n7pfpw.png'],
  },
};

export default function Home() {
  return <HomePage />;
}
