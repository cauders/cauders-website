import { redirect } from 'next/navigation';
import { getAiCategories } from '@/lib/data';

export default function ServicesPage() {
 const categories = getAiCategories();
 if (categories.length > 0) {
 redirect(`/ai/${categories[0].slug}`);
 }
 
 return null;
}
