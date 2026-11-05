import { MetadataRoute } from 'next';
import { getAiCategories, getServiceCategories } from '@/lib/data';
import { caseStudiesData } from '@/lib/case-studies-data';
import { SITE_URL } from '@/lib/seo';

const LAST_MODIFIED = '2026-11-05';

export default function sitemap(): MetadataRoute.Sitemap {
  // 1. Core indexable landing & legal pages (excludes redirected and noindex routes)
  const coreRoutes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/case-studies', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/industries', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/careers', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/partners', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/privacy-policy', priority: 0.4, changeFrequency: 'monthly' },
    { path: '/terms-of-service', priority: 0.4, changeFrequency: 'monthly' },
    { path: '/cookies-policy', priority: 0.4, changeFrequency: 'monthly' },
    { path: '/legal-information', priority: 0.4, changeFrequency: 'monthly' },
  ];

  // 2. All Service categories & Service detail routes
  const serviceCategories = getServiceCategories();
  const serviceCategoryUrls: MetadataRoute.Sitemap = [];
  const serviceDetailUrls: MetadataRoute.Sitemap = [];

  for (const category of serviceCategories) {
    serviceCategoryUrls.push({
      url: `${SITE_URL}/services/${category.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.75,
    });
    for (const service of category.services) {
      serviceDetailUrls.push({
        url: `${SITE_URL}/services/${category.slug}/${service.slug}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    }
  }

  // 3. All AI categories & AI detail routes
  const aiCategories = getAiCategories();
  const aiCategoryUrls: MetadataRoute.Sitemap = [];
  const aiDetailUrls: MetadataRoute.Sitemap = [];

  for (const category of aiCategories) {
    aiCategoryUrls.push({
      url: `${SITE_URL}/ai/${category.slug}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.75,
    });
    for (const service of category.services) {
      aiDetailUrls.push({
        url: `${SITE_URL}/ai/${category.slug}/${service.slug}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    }
  }

  // 4. All verified Case Study detail routes
  const caseStudyUrls: MetadataRoute.Sitemap = caseStudiesData.map((study) => ({
    url: `${SITE_URL}/case-studies/${study.slug}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [
    ...coreRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...serviceDetailUrls,
    ...aiDetailUrls,
    ...serviceCategoryUrls,
    ...aiCategoryUrls,
    ...caseStudyUrls,
  ];
}
