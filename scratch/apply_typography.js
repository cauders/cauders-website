const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, '../src'));
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content.replace(/\btext-base\s+md:text-lg\b/g, 'text-body-large');
    content = content.replace(/\btext-lg\s+md:text-xl\b/g, 'text-body-large'); 
    
    content = content.replace(/\btext-sm\s+md:text-base\b/g, 'text-body-base');
    content = content.replace(/\btext-xs\s+md:text-sm\b/g, 'text-body-base'); 

    content = content.replace(/\btext-xl\s+md:text-2xl\b/g, 'text-heading-card');
    content = content.replace(/\btext-2xl\s+md:text-3xl\b/g, 'text-heading-section');

    if (content.includes('text-body-large') || content.includes('text-body-base') || content.includes('text-heading-section') || content.includes('text-heading-card')) {
        content = content.replace(/\bleading-relaxed\b/g, ''); 
        content = content.replace(/\bfont-semibold\b/g, ''); 
    }

    // Clean up multiple spaces that might have been created
    content = content.replace(/ +/g, ' ');

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
        console.log(`Updated ${path.basename(file)}`);
    }
});

console.log(`\nSuccessfully updated ${changedFiles} files with semantic typography classes.`);
