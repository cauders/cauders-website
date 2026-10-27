import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CaseStudyDetailPage from '@/components/cauders/CaseStudyDetailPage';
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/case-studies-data';

export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | Cauders',
    };
  }

  return {
    title: `${study.title} | Cauders Case Study`,
    description: study.subtitle || study.overview,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} | Cauders Case Study`,
      description: study.subtitle || study.overview,
      url: `https://www.cauders.com/case-studies/${study.slug}`,
      siteName: 'Cauders',
      locale: 'en_US',
      type: 'article',
      images: [
        {
          url: study.heroImage,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.title} | Cauders Case Study`,
      description: study.subtitle || study.overview,
      images: [study.heroImage],
    },
  };
}

export default function CaseStudyDetailRoute({
  params,
}: {
  params: { slug: string };
}) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetailPage study={study} />;
}
