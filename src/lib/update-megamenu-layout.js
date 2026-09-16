const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/MegaMenu.tsx';
let content = fs.readFileSync(path, 'utf8');

// The layout right now uses: <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">
// We want to change it to: <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-16">
// And add break-inside-avoid and mb-16 to the items.

// 1. Replace the grids with columns
content = content.replace(/<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">/g, '<div className="columns-1 sm:columns-2 lg:columns-3 gap-x-16">');

// 2. Add break-inside-avoid and margin-bottom to the category items
// For services and AI, the div is: <div key={category.slug} className="flex flex-col space-y-6">
content = content.replace(/<div key={category\.slug} className="flex flex-col space-y-6">/g, '<div key={category.slug} className="flex flex-col space-y-6 break-inside-avoid mb-16 inline-block w-full">');

// For industries, the div is: <div key={industry.slug} className="flex flex-col space-y-6">
content = content.replace(/<div key={industry\.slug} className="flex flex-col space-y-6">/g, '<div key={industry.slug} className="flex flex-col space-y-6 break-inside-avoid mb-16 inline-block w-full">');

// For company, it uses a custom grid: <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16 max-w-4xl mx-auto">
// Let's leave company as grid, it only has 2 items of similar height.

fs.writeFileSync(path, content, 'utf8');
console.log('Updated MegaMenu.tsx for masonry layout.');
