import { getServiceCategories, getServiceCategoryBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServiceCategoryPage from '@/components/cauders/ServiceCategoryPage';

export async function generateStaticParams() {
 const categories = getServiceCategories();
 return categories.map((category) => ({
 category: category.slug,
 }));
}

export default function Page({ params }: { params: { category: string } }) {
 const category = getServiceCategoryBySlug(params.category);
 
 if (!category) {
 notFound();
 }

 return <ServiceCategoryPage category={category} />;
}
