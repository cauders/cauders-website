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
        url: '/images/hero/intro-1.png',
        width: 1200,
        height: 630,
        alt: 'Cauders Digital Innovation',
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
    images: ['/images/hero/intro-1.png'],
  },
};

export default function Home() {
  return <HomePage />;
}
