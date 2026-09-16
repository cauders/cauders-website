import { getServiceCategories, getServiceCategoryBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/cauders/ServiceDetailPage';
import FallbackPage from '@/components/cauders/FallbackPage';
import { detailedServices } from '@/lib/service-details';

export async function generateStaticParams() {
 const categories = getServiceCategories();
 
 // We need to return all possible combinations of category and service slugs
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

export default function Page({ params }: { params: { category: string; service: string } }) {
 const category = getServiceCategoryBySlug(params.category);
 
 if (!category) {
 notFound();
 }

 const service = category.services.find((s) => s.slug === params.service);

 if (!service) {
 notFound();
 }

 // Fetch the detailed structured data for this service, fallback to a 404 or generic if not found
 // For now, if we don't have detailed data for it, we'll return a 404.
 // In reality you might want to create a generic fallback or require all to be populated.
 const serviceData = detailedServices[service.slug];

 if (!serviceData) {
 // If the data is missing (not yet migrated from markdown), we can show a placeholder 
 // or just let it 404. Let's do a notFound for strictness right now.
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
