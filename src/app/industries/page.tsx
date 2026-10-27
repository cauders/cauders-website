import type { Metadata } from 'next';
import AllIndustriesPage from '@/components/cauders/AllIndustriesPage';

export const metadata: Metadata = {
  title: 'Industry Solutions | Software for the Way Your Industry Operates',
  description:
    'Discover our custom software development, AI solutions, and engineering expertise tailored across Banking & Fintech, Healthcare, E-commerce, Logistics, SaaS, and more.',
  alternates: {
    canonical: '/industries',
  },
  openGraph: {
    title: 'Industry Solutions & Operational Engineering | Cauders',
    description:
      'Purpose-built technology solutions for Banking & Finance, Healthcare, Retail & E-Commerce, Software & Technology, Real Estate, and Logistics.',
    url: 'https://www.cauders.com/industries',
    siteName: 'Cauders',
    images: [
      {
        url: 'https://res.cloudinary.com/cauders/image/upload/v1792742641/Group_4654_t9qwca.png',
        width: 1200,
        height: 630,
        alt: 'Cauders Industry Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry Solutions & Operational Engineering | Cauders',
    description:
      'Purpose-built technology solutions for Banking & Finance, Healthcare, Retail & E-Commerce, Software & Technology, Real Estate, and Logistics.',
    images: ['https://res.cloudinary.com/cauders/image/upload/v1792742641/Group_4654_t9qwca.png'],
  },
};

export default function IndustriesPage() {
  return <AllIndustriesPage />;
}
