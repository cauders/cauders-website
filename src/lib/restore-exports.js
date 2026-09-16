const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/data.tsx';
let content = fs.readFileSync(path, 'utf8');

const restoredExports = `
// ─── EXPORTS ───────────────────────────────────────────────────────────────────

export const getProjects = (): Project[] => projects.map(p => ({ ...p }));
export const getProjectBySlug = (slug: string): Project | undefined => projects.find(p => p.slug === slug);

export const getServiceCategories = () => serviceCategories;
export const getServiceCategoryBySlug = (slug: string) => serviceCategories.find(c => c.slug === slug);

export const getAiCategories = () => aiCategories;
export const getAiCategoryBySlug = (slug: string) => aiCategories.find(c => c.slug === slug);

export const getServices = () => allServices;
export const getServiceBySlug = (slug: string) => allServices.find(s => s.slug === slug);

export const getIndustries = () => industries;
export const getIndustryBySlug = (slug: string) => industries.find(i => i.slug === slug);

export const getProjectCategories = (): ProjectCategory[] => {`;

content = content.replace(/export const getProjectCategories = \(\): ProjectCategory\[\] => \{/, restoredExports);

fs.writeFileSync(path, content, 'utf8');
console.log('Restored exports in data.tsx');
