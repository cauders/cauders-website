import type { Metadata } from 'next';
import { getServiceCategories, getServiceCategoryBySlug } from '@/lib/data';
import { notFound, permanentRedirect } from 'next/navigation';
import ServiceCategoryPage from '@/components/cauders/ServiceCategoryPage';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export async function generateStaticParams() {
  const categories = getServiceCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = getServiceCategoryBySlug(params.category);
  if (!category) {
    return {
      title: 'Service Category Not Found',
      robots: { index: false, follow: true },
    };
  }

  return buildPageMetadata({
    title: `${category.title} Engineering Services`,
    description: category.heroDescription || category.description,
    path: `/services/${category.slug}`,
  });
}

export default function Page({ params }: { params: { category: string } }) {
  const category = getServiceCategoryBySlug(params.category);

  if (!category) {
    const allCategories = getServiceCategories();
    const parentCategory = allCategories.find((c) =>
      c.services.some((s) => s.slug === params.category)
    );
    if (parentCategory) {
      permanentRedirect(`/services/${parentCategory.slug}/${params.category}`);
    }
    notFound();
  }

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: category.title, path: `/services/${category.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceCategoryPage category={category} basePath="/services" />
    </>
  );
}
