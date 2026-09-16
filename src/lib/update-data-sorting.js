const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/data.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Sort the arrays in data.tsx directly in the exports
// We already have getters: getServiceCategories, getAiCategories, getIndustries
// We'll just modify the getters to return sorted arrays.

content = content.replace(
  /export const getServiceCategories = \(\) => serviceCategories;/,
  "export const getServiceCategories = () => [...serviceCategories].sort((a, b) => a.title.localeCompare(b.title));"
);

content = content.replace(
  /export const getAiCategories = \(\) => aiCategories;/,
  "export const getAiCategories = () => [...aiCategories].sort((a, b) => a.title.localeCompare(b.title));"
);

content = content.replace(
  /export const getIndustries = \(\) => industries;/,
  "export const getIndustries = () => [...industries].sort((a, b) => a.title.localeCompare(b.title));"
);

// 2. Simplify the industry titles
// Replace specific titles with simplified versions
content = content.replace(/title: 'Banking & Financial Services',/g, "title: 'Finance',");
content = content.replace(/title: 'Retail & E-Commerce',/g, "title: 'Retail',");
content = content.replace(/title: 'Technology & Software',/g, "title: 'Technology',");
content = content.replace(/title: 'Startups & High-Growth Businesses',/g, "title: 'Startups',");
content = content.replace(/title: 'Logistics & Supply Chain',/g, "title: 'Logistics',");
content = content.replace(/title: 'Education & E-Learning',/g, "title: 'Education',");
content = content.replace(/title: 'Real Estate & PropTech',/g, "title: 'Real Estate',");

fs.writeFileSync(path, content, 'utf8');
console.log('Updated data.tsx sorting and industry titles.');
