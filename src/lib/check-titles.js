const fs = require('fs');
const dataContent = fs.readFileSync('src/lib/data.tsx', 'utf8');
const detailsContent = fs.readFileSync('src/lib/service-details.ts', 'utf8');

const servicesMatch = dataContent.match(/export const serviceCategories: ServiceCategory\[\] = \[([\s\S]*?)\];/);
const aiMatch = dataContent.match(/export const aiCategories: ServiceCategory\[\] = \[([\s\S]*?)\];/);

const checkMatches = (matchObj, name) => {
  console.log(`--- ${name} Mismatches ---`);
  const items = [...matchObj[1].matchAll(/slug:\s*'([^']+)',\s*title:\s*'([^']+)'/g)];
  items.forEach(m => {
    const slug = m[1];
    const menuTitle = m[2];
    
    // Find the corresponding block in service-details
    const index = detailsContent.indexOf(`'${slug}': {`);
    if (index !== -1) {
      const block = detailsContent.substring(index, index + 2000);
      const titleMatch = block.match(/hero:\s*{[\s\S]*?title:\s*'([^']+)'/);
      if (titleMatch) {
        const pageTitle = titleMatch[1];
        if (menuTitle !== pageTitle) {
          console.log(`${slug}: Menu='${menuTitle}' | Page='${pageTitle}'`);
        }
      }
    }
  });
};

if (servicesMatch) checkMatches(servicesMatch, 'Services');
if (aiMatch) checkMatches(aiMatch, 'AI');
