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

    // We want to target classes inside <p>, <h4>, <h3>, <h5>, <span> that have text-foreground/XX or text-muted-foreground.
    // However, a simple regex targeting text-foreground/XX and font-light might be easier and capture most descriptions.
    // Let's replace text-foreground/\d+ with text-foreground in <p> tags.
    // Actually, we can just replace `text-foreground/80`, `text-foreground/70`, `text-foreground/60`, `text-foreground/90` with `text-foreground` globally where they appear in className strings for paragraphs or headings.
    
    // Instead of complex AST, let's use a regex that matches `className="..."` and replaces `text-foreground/\d+` inside it, 
    // EXCEPT for specific files where it's used for interactive state (like ScrollSpyChallenges.tsx, Header.tsx, MegaMenu.tsx, etc).
    
    const ignoredFiles = [
        'ScrollSpyChallenges.tsx',
        'Header.tsx',
        'MegaMenu.tsx',
        'update-partition', // any script files
        'ScrollSpyItem.tsx'
    ];

    if (ignoredFiles.some(ignored => file.includes(ignored))) {
        return;
    }

    // Replace text-foreground/XX with text-foreground
    content = content.replace(/text-foreground\/(60|70|80|90|50)/g, 'text-foreground');
    
    // Replace text-white/XX with text-white if it's used in a similar way for dark sections
    content = content.replace(/text-white\/(60|70|80|90|50)/g, 'text-white');

    // Also remove font-light if requested. Many places use font-light to make it look "faded".
    // Let's remove font-light globally in these components, changing it to font-normal or just removing it.
    // We will just remove `font-light ` or ` font-light`
    content = content.replace(/\bfont-light\b/g, 'font-normal');
    
    // Clean up multiple spaces that might have been created
    content = content.replace(/ +/g, ' ');

    if (content !== original) {
        fs.writeFileSync(file, content);
        changedFiles++;
        console.log(`Updated ${path.basename(file)}`);
    }
});

console.log(`\nSuccessfully updated ${changedFiles} files.`);
