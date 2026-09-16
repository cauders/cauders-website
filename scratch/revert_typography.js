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

const files = walk(path.join(__dirname, '../src/components'));
let changedFiles = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    content = content.replace(/\btext-body-large\b/g, 'text-base md:text-lg leading-relaxed');
    content = content.replace(/\btext-body-base\b/g, 'text-sm md:text-base leading-relaxed');
    content = content.replace(/\btext-heading-card\b/g, 'text-xl md:text-2xl font-semibold');
    content = content.replace(/\btext-heading-section\b/g, 'text-2xl md:text-3xl font-semibold');

    // Clean up multiple spaces that might have been created
    content = content.replace(/ +/g, ' ');

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
        console.log(`Updated ${path.basename(file)}`);
    }
});

console.log(`\nSuccessfully reverted ${changedFiles} files back to Tailwind utility classes.`);
