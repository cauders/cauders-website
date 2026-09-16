const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/industry-details.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Update servicesBuiltForIndustry titles and descriptions
content = content.replace(
    /servicesBuiltForIndustry:\s*\{\s*title:\s*'([^']+)',/g,
    (match, title) => {
        let newTitle = title;
        if (!newTitle.includes('Services')) {
            newTitle = newTitle.replace('Built for', '').trim();
            if (newTitle.startsWith('Transforming')) {
                newTitle = newTitle.replace('Transforming', '').trim() + ' Transformation Services';
            } else if (!newTitle.includes('Services')) {
                newTitle = newTitle + ' Services';
            }
        }
        return `servicesBuiltForIndustry: {\n      title: '${newTitle}',\n      description: 'Explore our comprehensive suite of services tailored to meet the evolving demands of your industry.',`;
    }
);

// 2. Remove "innovative" from whyChooseUs.title
content = content.replace(
    /whyChooseUs:\s*\{\s*title:\s*'([^']+)',/g,
    (match, title) => {
        const newTitle = title.replace(/innovative /gi, '');
        return `whyChooseUs: {\n      title: '${newTitle}',`;
    }
);

// 3. Remove em-dashes from overview.description and expand slightly
content = content.replace(
    /overview:\s*\{[\s\S]*?description:\s*'([^']+)',/g,
    (match, description) => {
        // Only modify if it has em-dashes
        if (description.includes('—')) {
            let newDesc = description.replace(/—/g, '. ');
            // Ensure first letter after dot is capitalized (simple regex)
            newDesc = newDesc.replace(/\.\s+([a-z])/g, (m, p1) => '. ' + p1.toUpperCase());
            newDesc += ' We focus on creating highly scalable systems that drive measurable business value, enhance user engagement, and maintain strict compliance standards globally. By bridging the gap between innovative technology and deep industry expertise, we empower you to modernize your operations and stay ahead of the curve.';
            return match.replace(description, newDesc);
        }
        return match;
    }
);

fs.writeFileSync(filePath, content);
console.log('Successfully updated industry-details.ts');
