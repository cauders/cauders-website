const fs = require('fs');

const dataPath = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/data.tsx';
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Update sorting logic to put single items at the end again.
const oldServiceSort = `export const getServiceCategories = () => [...serviceCategories].sort((a, b) => a.title.localeCompare(b.title));`;
const newServiceSort = `export const getServiceCategories = () => [...serviceCategories].sort((a, b) => {
  const aIsSingle = a.services.length === 1;
  const bIsSingle = b.services.length === 1;
  if (aIsSingle && !bIsSingle) return 1;
  if (!aIsSingle && bIsSingle) return -1;
  return a.title.localeCompare(b.title);
});`;

const oldAiSort = `export const getAiCategories = () => [...aiCategories].sort((a, b) => a.title.localeCompare(b.title));`;
const newAiSort = `export const getAiCategories = () => [...aiCategories].sort((a, b) => {
  const aIsSingle = a.services.length === 1;
  const bIsSingle = b.services.length === 1;
  if (aIsSingle && !bIsSingle) return 1;
  if (!aIsSingle && bIsSingle) return -1;
  return a.title.localeCompare(b.title);
});`;

dataContent = dataContent.replace(oldServiceSort, newServiceSort);
dataContent = dataContent.replace(oldAiSort, newAiSort);

fs.writeFileSync(dataPath, dataContent, 'utf8');
console.log('Reverted data sorting to push single items to the end.');
