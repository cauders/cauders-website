import type { Metadata } from 'next';
import { getAiCategories, getAiCategoryBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/cauders/ServiceDetailPage';
import FallbackPage from '@/components/cauders/FallbackPage';
import { detailedServices } from '@/lib/service-details';

export async function generateStaticParams() {
  const categories = getAiCategories();
  
  const params: { category: string; service: string }[] = [];
  
  categories.forEach((category) => {
    category.services.forEach((service) => {
      params.push({
        category: category.slug,
        service: service.slug,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { category: string; service: string };
}): Promise<Metadata> {
  const serviceData = detailedServices[params.service];
  const canonicalPath = `/ai/${params.category}/${params.service}`;
  const fullCanonical = `https://www.cauders.com${canonicalPath}`;

  if (!serviceData) {
    return {
      title: 'AI & Automation | Cauders',
      description: 'Applied artificial intelligence, autonomous agents, and workflow automations by Cauders.',
      alternates: { canonical: canonicalPath },
    };
  }

  const title = `${serviceData.hero.title} | Applied AI & Automation | Cauders`;
  const description = serviceData.hero.description || serviceData.overview?.paragraphs?.[0] || 'Enterprise AI and workflow automation solutions engineered by Cauders.';
  const ogImage = serviceData.hero.imageUrl || 'https://res.cloudinary.com/cauders/image/upload/v1792742641/Group_4654_t9qwca.png';

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url: fullCanonical,
      siteName: 'Cauders',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: serviceData.hero.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Page({ params }: { params: { category: string; service: string } }) {
  const category = getAiCategoryBySlug(params.category);
  
  if (!category) {
    notFound();
  }

  const service = category.services.find((s) => s.slug === params.service);

  if (!service) {
    notFound();
  }

  const serviceData = detailedServices[service.slug];

  if (!serviceData) {
    return (
      <FallbackPage 
        code="WIP"
        title="Content coming soon"
        description="We are currently migrating this service page to the new design. Please check back later."
      />
    );
  }

  return <ServiceDetailPage data={serviceData} />;
}
