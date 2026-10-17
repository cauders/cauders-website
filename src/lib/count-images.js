const fs = require('fs');

const s = fs.readFileSync('src/lib/service-details.ts', 'utf-8');
const i = fs.readFileSync('src/lib/industry-details.ts', 'utf-8');

const sUrls = s.match(/imageUrl:\s*['"][^'"]+['"]/g) || [];
const iUrls = i.match(/imageUrl:\s*['"][^'"]+['"]/g) || [];

console.log('service-details.ts has', sUrls.length, 'imageUrl fields');
console.log('industry-details.ts has', iUrls.length, 'imageUrl fields');
console.log('Total:', sUrls.length + iUrls.length);
