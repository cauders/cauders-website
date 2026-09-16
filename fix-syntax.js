const fs = require('fs');
let content = fs.readFileSync('src/lib/service-details.ts', 'utf8');

// The script added nested single quotes: 'Our expertise in 'mobile app development' serves...'
// We'll replace it with double quotes around the outer string or just remove the inner single quotes.
content = content.replace(/industriesDescription: 'Our expertise in '([^']+)' serves/g, (match, p1) => {
  return `industriesDescription: "Our expertise in ${p1} serves`;
});

// For any stragglers, we replace the trailing single quote that closed the outer string, since we started it with a double quote.
content = content.replace(/unique business challenges.'/g, 'unique business challenges."');

fs.writeFileSync('src/lib/service-details.ts', content);
console.log('Syntax errors fixed.');
