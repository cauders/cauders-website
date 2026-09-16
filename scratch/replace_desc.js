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
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, '../../src'));

let changedFiles = 0;
let totalReplaced = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let replaced = false;

    // Replace text-foreground/XX with text-foreground in <p>, <span> (if it has leading-relaxed or is long), and <AccordionContent>
    // Actually, let's just replace text-foreground/XX with text-foreground in any <p> or <AccordionContent> tag
    const pRegex = /(<(?:p|AccordionContent)[^>]*className=["'][^"']*)text-foreground\/\d{2}([^"']*["'])/g;
    
    const newContent = content.replace(pRegex, (match, p1, p2) => {
        replaced = true;
        totalReplaced++;
        return p1 + 'text-foreground' + p2;
    });

    // Let's also do a second pass for spans that look like descriptions (have 'leading-relaxed' or 'max-w')
    const spanRegex = /(<span[^>]*className=["'][^"']*(?:leading-relaxed|max-w)[^"']*)text-foreground\/\d{2}([^"']*["'])/g;
    const finalContent = newContent.replace(spanRegex, (match, p1, p2) => {
        replaced = true;
        totalReplaced++;
        return p1 + 'text-foreground' + p2;
    });

    if (replaced) {
        fs.writeFileSync(file, finalContent, 'utf8');
        changedFiles++;
    }
});

console.log(`Replaced ${totalReplaced} occurrences in ${changedFiles} files.`);
