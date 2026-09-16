const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/MegaMenu.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Remove min-h-[300px]
content = content.replace(/min-h-\[300px\]/g, '');

// 2. Reduce padding py-16 pb-20 to py-10 pb-12
content = content.replace(/py-16 pb-20/g, 'py-10 pb-12');

// 3. Change Industries layout from columns to grid
content = content.replace(/displayedMenu === 'industries'[\s\S]*?<div className="columns-1 sm:columns-2 lg:columns-3 gap-x-8">/m, (match) => {
  return match.replace('columns-1 sm:columns-2 lg:columns-3 gap-x-8', 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6');
});

// Since I used grid-cols-4 for industries, let me also remove the mb-6 from its inner divs
content = content.replace(/displayedMenu === 'industries'[\s\S]*?\{industries\.map\(\(industry\) => \([\s\S]*?<div key=\{industry\.slug\} className="flex flex-col space-y-6 break-inside-avoid mb-6 inline-block w-full">/m, (match) => {
  return match.replace('flex flex-col space-y-6 break-inside-avoid mb-6 inline-block w-full', 'flex flex-col space-y-6 w-full');
});

fs.writeFileSync(path, content, 'utf8');
console.log('Updated MegaMenu.tsx to reduce empty spaces.');
