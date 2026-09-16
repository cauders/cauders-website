const fs = require('fs');

// 1. Revert data.tsx sorting
const dataPath = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/data.tsx';
let dataContent = fs.readFileSync(dataPath, 'utf8');

const oldServiceSort = `export const getServiceCategories = () => [...serviceCategories].sort((a, b) => {
  const aIsSingle = a.services.length === 1;
  const bIsSingle = b.services.length === 1;
  if (aIsSingle && !bIsSingle) return 1;
  if (!aIsSingle && bIsSingle) return -1;
  return a.title.localeCompare(b.title);
});`;

const newServiceSort = `export const getServiceCategories = () => [...serviceCategories].sort((a, b) => a.title.localeCompare(b.title));`;

const oldAiSort = `export const getAiCategories = () => [...aiCategories].sort((a, b) => {
  const aIsSingle = a.services.length === 1;
  const bIsSingle = b.services.length === 1;
  if (aIsSingle && !bIsSingle) return 1;
  if (!aIsSingle && bIsSingle) return -1;
  return a.title.localeCompare(b.title);
});`;

const newAiSort = `export const getAiCategories = () => [...aiCategories].sort((a, b) => a.title.localeCompare(b.title));`;

dataContent = dataContent.replace(oldServiceSort, newServiceSort);
dataContent = dataContent.replace(oldAiSort, newAiSort);
fs.writeFileSync(dataPath, dataContent, 'utf8');


// 2. Revert MegaMenu.tsx grid back to columns, and use mb-10 for consistent gap
const megaMenuPath = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/MegaMenu.tsx';
let megaMenuContent = fs.readFileSync(megaMenuPath, 'utf8');

megaMenuContent = megaMenuContent.replace(/<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">/g, '<div className="columns-1 sm:columns-2 lg:columns-3 gap-x-16">');

megaMenuContent = megaMenuContent.replace(/className="flex flex-col space-y-6 w-full"/g, 'className="flex flex-col space-y-6 break-inside-avoid mb-10 inline-block w-full"');

fs.writeFileSync(megaMenuPath, megaMenuContent, 'utf8');

console.log('Reverted to masonry layout and fixed gaps.');
