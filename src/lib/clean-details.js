const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/service-details.ts';
let content = fs.readFileSync(path, 'utf8');

// Remove subcategories from industries
content = content.replace(/,\s*subcategories:\s*\[.*?\]/g, '');

// Fix broken unsplash image
content = content.replace(/photo-1507925922837-326f1e29ad27/g, 'photo-1519389950473-47ba0277781c');

fs.writeFileSync(path, content, 'utf8');
console.log('Removed subcategories and fixed broken images.');
