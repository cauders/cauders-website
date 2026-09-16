const fs = require('fs');
const dataContent = fs.readFileSync('src/lib/data.tsx', 'utf8');
const detailsContent = fs.readFileSync('src/lib/service-details.ts', 'utf8');

const servicesMatch = dataContent.match(/export const serviceCategories: ServiceCategory\[\] = \[([\s\S]*?)\];\n/);
const aiMatch = dataContent.match(/export const aiCategories: ServiceCategory\[\] = \[([\s\S]*?)\];\n/);

const checkMatches = (matchObj, name) => {
  console.log(`--- ${name} Mismatches ---`);
  if (!matchObj) return;
  const items = [...matchObj[1].matchAll(/slug:\s*'([^']+)',\s*title:\s*'([^']+)'/g)];
  items.forEach(m => {
    const slug = m[1];
    const menuTitle = m[2];
    
    const index = detailsContent.indexOf(`'${slug}':`);
    if (index !== -1) {
      const block = detailsContent.substring(index, index + 3000);
      const titleMatch = block.match(/title:\s*'([^']+)'/);
      if (titleMatch) {
        const pageTitle = titleMatch[1];
        if (menuTitle !== pageTitle) {
          console.log(`[MISMATCH] ${slug}: Menu='${menuTitle}' | Page='${pageTitle}'`);
        } else {
          console.log(`[OK] ${slug}`);
        }
      } else {
        console.log(`[NO TITLE] ${slug}`);
      }
    } else {
      console.log(`[NOT FOUND IN DETAILS] ${slug}`);
    }
  });
};

if (servicesMatch) checkMatches(servicesMatch, 'Services');
if (aiMatch) checkMatches(aiMatch, 'AI');
