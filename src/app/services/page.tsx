import { redirect } from 'next/navigation';
import { getServiceCategories } from '@/lib/data';

export default function ServicesPage() {
 const categories = getServiceCategories();
 if (categories.length > 0) {
 redirect(`/services/${categories[0].slug}`);
 }
 
 return null;
}
