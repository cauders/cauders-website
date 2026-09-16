const fs = require('fs');

// 1. Update data.tsx to put singles first
const dataPath = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/lib/data.tsx';
let dataContent = fs.readFileSync(dataPath, 'utf8');

const oldSort = `if (aIsSingle && !bIsSingle) return 1;
  if (!aIsSingle && bIsSingle) return -1;`;
const newSort = `if (aIsSingle && !bIsSingle) return -1;
  if (!aIsSingle && bIsSingle) return 1;`;

dataContent = dataContent.replace(new RegExp(oldSort.replace(/[.*+?^$\{key\}()|[\\]\\\\]/g, '\\\\$&'), 'g'), newSort);
fs.writeFileSync(dataPath, dataContent, 'utf8');

// 2. Update MegaMenu.tsx
const megaMenuPath = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/MegaMenu.tsx';
let megaMenuContent = fs.readFileSync(megaMenuPath, 'utf8');

// A. Reduce vertical space for singles
megaMenuContent = megaMenuContent.replace(/className="flex flex-col space-y-6 break-inside-avoid mb-10 inline-block w-full"/g, 'className={cn("flex flex-col space-y-6 break-inside-avoid inline-block w-full", category.services.length === 1 ? "mb-5" : "mb-10")}');

// B. Congest Industries like a list
megaMenuContent = megaMenuContent.replace(
  /<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">[\s\S]*?\{industries\.map\(\(industry\) => \([\s\S]*?<div key=\{industry\.slug\} className="flex flex-col space-y-6 w-full">/,
  `<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 max-w-3xl">
                      {industries.map((industry) => (
                        <div key={industry.slug} className="w-full">`
);

fs.writeFileSync(megaMenuPath, megaMenuContent, 'utf8');
console.log('Updated sorting to put singles on left, reduced their vertical gap, and congested industries.');
