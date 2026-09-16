import { redirect } from 'next/navigation';
import { getIndustries } from '@/lib/data';

export default function IndustriesPage() {
 const industries = getIndustries();
 if (industries.length > 0) {
 redirect(`/industries/${industries[0].slug}`);
 }
 
 return null;
}
