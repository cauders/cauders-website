const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'service-details.ts');
let fileContent = fs.readFileSync(filePath, 'utf-8');

const missingSlugs = [
  'intelligent-process-automation',
  'predictive-analytics',
  'data-engineering',
  'computer-vision'
];

const whyUsBlock = `
    whyUsTitle: 'Why Partner With Cauders for AI?',
    whyUsDescription: 'We help enterprises navigate AI adoption through strategies that reduce risk and maximize ROI.',
    whyUsCtaText: 'Let\\'s Discuss AI',
    whyUsCtaLink: '/contact',
    whyUsCards: [
      {
        title: 'Outcome-Driven Strategy',
        description: 'Every engagement is anchored to a business KPI your leadership tracks, not usage metrics.',
        stat: { value: 'ROI', label: 'Focused' }
      },
      {
        title: 'Executable Roadmaps',
        description: 'Roadmaps are sequenced by value, effort, and risk so you lead with quick wins.',
        stat: { value: '3x', label: 'Faster to Production' }
      },
      {
        title: 'Governance & Security',
        description: 'Compliance and security are designed in from the first sprint to meet global standards.',
        stat: { value: 'Zero', label: 'Compromises' }
      }
    ],`;

for (const slug of missingSlugs) {
  const slugRegex = new RegExp(`('${slug}'|"${slug}")\\s*:\\s*{`);
  const match = fileContent.match(slugRegex);
  
  if (!match) {
    console.log(`❌ Could not find slug ${slug}`);
    continue;
  }
  
  const startIndex = match.index;
  const portfolioMatch = fileContent.substring(startIndex).match(/techStackTitle\s*:/);
  
  if (portfolioMatch) {
    const injectIndex = startIndex + portfolioMatch.index;
    fileContent = fileContent.substring(0, injectIndex) + whyUsBlock + '\n    ' + fileContent.substring(injectIndex);
    console.log(`✅ Injected whyUs into ${slug}`);
  } else {
    console.log(`⚠️ Could not find techStackTitle for ${slug}`);
  }
}

fs.writeFileSync(filePath, fileContent);
console.log('Update complete.');
