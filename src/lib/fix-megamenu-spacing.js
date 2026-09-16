const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/MegaMenu.tsx';
let content = fs.readFileSync(path, 'utf8');

// The file currently uses 'gap-x-8' everywhere and 'mb-6' everywhere because of my previous global replace.
// I need to change services and ai back to 'gap-x-16' and 'mb-16'.

// 1. Services section
// Find: {displayedMenu === 'services' && ( ... <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-8">
// Change to: gap-x-16
const servicesRegex = /({displayedMenu === 'services' && \([\s\S]*?<div className="columns-1 sm:columns-2 lg:columns-3 )gap-x-8(">\s*\{serviceCategories\.map\(\(category\) => \(\s*<div key=\{category\.slug\} className="flex flex-col space-y-6 break-inside-avoid )mb-6( inline-block w-full">)/g;
content = content.replace(servicesRegex, '$1gap-x-16$2mb-16$3');

// 2. AI section
// Find: {displayedMenu === 'ai' && ( ... <div className="columns-1 sm:columns-2 lg:columns-3 gap-x-8">
const aiRegex = /({displayedMenu === 'ai' && \([\s\S]*?<div className="columns-1 sm:columns-2 lg:columns-3 )gap-x-8(">\s*\{aiCategories\.map\(\(category\) => \(\s*<div key=\{category\.slug\} className="flex flex-col space-y-6 break-inside-avoid )mb-6( inline-block w-full">)/g;
content = content.replace(aiRegex, '$1gap-x-16$2mb-16$3');

// We leave industries with gap-x-8 and mb-6.
// Also, wait, let's verify if `gap-x-8` for industries is tight enough, yes.

// What about company? It was untouched for mb-16/mb-6 because it uses standard grid spacing without masonry, but the global replace of gap-x-16 might have affected it.
// Let's check company section.
// {displayedMenu === 'company' && ... <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 max-w-4xl mx-auto">
// Let's change company back to gap-x-16.
const companyRegex = /({displayedMenu === 'company' && \([\s\S]*?<div className="grid grid-cols-1 sm:grid-cols-2 )gap-x-8( gap-y-16 max-w-4xl mx-auto">)/g;
content = content.replace(companyRegex, '$1gap-x-16$2');

fs.writeFileSync(path, content, 'utf8');
console.log('Reverted Services, AI, and Company back to original spacing. Industries remains congested.');
