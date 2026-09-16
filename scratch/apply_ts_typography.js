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

    // Body Base & Large unification: the user wants ALL subheadings to be exactly the same.
    // I will use typography.bodyLarge for all of them.
    let needsImport = false;
    
    // First, let's inject typography where we see standard classes
    // We are looking for things like: className="text-sm md:text-base leading-relaxed ..."
    // We want to replace it with: className={`${typography.bodyLarge} ...`}
    
    const replacements = [
        { regex: /\btext-3xl sm:text-4xl md:text-5xl !?leading-\[1\.4\] font-medium tracking-tight\b/g, replacement: '${typography.headingMain}' },
        { regex: /\btext-3xl sm:text-4xl md:text-5xl text-foreground !?leading-\[1\.4\] font-medium tracking-tight\b/g, replacement: '${typography.headingMain} text-foreground' },
        { regex: /\btext-base md:text-lg leading-relaxed\b/g, replacement: '${typography.bodyLarge}' },
        { regex: /\btext-sm md:text-base leading-relaxed\b/g, replacement: '${typography.bodyLarge}' }, // Unifying to bodyLarge
        { regex: /\btext-xl md:text-2xl font-semibold\b/g, replacement: '${typography.headingCard}' },
        { regex: /\btext-2xl md:text-3xl font-semibold\b/g, replacement: '${typography.headingSection}' },
    ];

    replacements.forEach(({ regex, replacement }) => {
        if (regex.test(content)) {
            needsImport = true;
            // Now we have to carefully turn className="..." into className={`...`}
            // This is complex via simple regex because of existing template literals or classnames.
            // Let's use a simpler string replace on the exact className string if we can.
        }
    });
});
