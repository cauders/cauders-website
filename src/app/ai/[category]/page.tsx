import type { Metadata } from 'next';
import { getAiCategories, getAiCategoryBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServiceCategoryPage from '@/components/cauders/ServiceCategoryPage';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  const categories = getAiCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = getAiCategoryBySlug(params.category);
  if (!category) {
    return {
      title: 'AI Category Not Found',
      robots: { index: false, follow: true },
    };
  }

  return buildPageMetadata({
    title: `${category.title} Solutions`,
    description: category.heroDescription || category.description,
    path: `/ai/${category.slug}`,
  });
}

export default function Page({ params }: { params: { category: string } }) {
  const category = getAiCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'AI & Automation', path: '/services' },
    { name: category.title, path: `/ai/${category.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceCategoryPage category={category} basePath="/ai" />
    </>
  );
}
