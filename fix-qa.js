const fs = require('fs');
let content = fs.readFileSync('src/lib/data.tsx', 'utf8');

// Fix the Quality Assurance & Cybersecurity category that got corrupted
const corruptedBlockRegex = /\/\/ ── 5\. QUALITY ASSURANCE & CYBERSECURITY ──\s*title: 'Cybersecurity & Compliance',/g;

const fixedBlock = `  {
    slug: 'quality-assurance-cybersecurity',
    title: 'Quality Assurance & Cybersecurity',
    description: 'Ship with confidence. Protect what matters.',
    icon: ShieldCheck,
    heroDescription: 'We help ensure that software is functional, secure, reliable, scalable, accessible, and ready for real-world use. Our QA services cover the complete software development lifecycle, and our security practices protect applications, data, infrastructure, and user accounts through practical, layered controls.',
    services: [
      {
        slug: 'quality-assurance',
        title: 'Quality Assurance',
        description: 'We define QA strategies, ensure compliance with industry standards, and establish processes that bake quality into your software lifecycle from day one. We focus on risk mitigation, accessibility, and governance.',
        capabilities: ['Test Strategy & Planning', 'Accessibility Testing (WCAG)', 'Compliance Audits', 'QA Process Consulting', 'Risk Mitigation', 'Quality Governance'],
        icon: ShieldCheck,
        ctaText: 'Establish QA Processes',
      },
      {
        slug: 'software-testing',
        title: 'Software Testing',
        description: 'We identify defects and validate that applications meet performance requirements before they reach users. We implement robust automated testing, exploratory manual testing, load testing, and seamless CI/CD pipeline integration.',
        capabilities: ['Automated Testing (Web & Mobile)', 'Manual Exploratory Testing', 'API & Integration Testing', 'Performance & Load Testing', 'CI/CD Pipeline Integration', 'Regression Testing'],
        icon: CheckCircle2,
        ctaText: 'Test Your Software',
      },
      {
        slug: 'cybersecurity-compliance',
        title: 'Cybersecurity & Compliance',`;

content = content.replace(
  /\/\/ ── 5\. QUALITY ASSURANCE & CYBERSECURITY ──\s*title: 'Cybersecurity & Compliance',/,
  "// ── 5. QUALITY ASSURANCE & CYBERSECURITY ──\n" + fixedBlock
);

fs.writeFileSync('src/lib/data.tsx', content);
console.log('Fixed data.tsx');
