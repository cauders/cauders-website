const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/MegaMenu.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace static mb-16 with conditional mb-16/mb-6 based on category.services.length
// For services:
content = content.replace(
  /\{serviceCategories\.map\(\(category\) => \(\s*<div key=\{category\.slug\} className="flex flex-col space-y-6 break-inside-avoid mb-16 inline-block w-full">/,
  `{serviceCategories.map((category) => (
                        <div key={category.slug} className={cn("flex flex-col space-y-6 break-inside-avoid inline-block w-full", category.services.length === 1 ? "mb-6" : "mb-16")}>`
);

// For AI:
content = content.replace(
  /\{aiCategories\.map\(\(category\) => \(\s*<div key=\{category\.slug\} className="flex flex-col space-y-6 break-inside-avoid mb-16 inline-block w-full">/,
  `{aiCategories.map((category) => (
                        <div key={category.slug} className={cn("flex flex-col space-y-6 break-inside-avoid inline-block w-full", category.services.length === 1 ? "mb-6" : "mb-16")}>`
);

fs.writeFileSync(path, content, 'utf8');
console.log('Updated MegaMenu.tsx single item margin.');
