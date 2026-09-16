const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/MegaMenu.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Change columns layout to grid layout for services and AI
content = content.replace(
  /<div className="columns-1 sm:columns-2 lg:columns-3 gap-x-16">/g,
  '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">'
);

// 2. Remove the masonry hacks (break-inside-avoid inline-block) and margin hacks from the items
// For services:
content = content.replace(
  /className=\{cn\("flex flex-col space-y-6 break-inside-avoid inline-block w-full", category\.services\.length === 1 \? "mb-6" : "mb-16"\)\}/g,
  'className="flex flex-col space-y-6 w-full"'
);

// For AI (it uses the same pattern, so the global /g regex above should catch both, but let's be sure it did)

fs.writeFileSync(path, content, 'utf8');
console.log('Updated MegaMenu.tsx layouts to CSS Grid for better visual balancing.');
