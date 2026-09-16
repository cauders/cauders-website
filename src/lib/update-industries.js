const fs = require('fs');
let content = fs.readFileSync('src/lib/service-details.ts', 'utf8');

const replacements = {
  "web-development": "Industries Elevated by Web Solutions",
  "mobile-app-development": "Sectors Transformed by Mobile",
  "custom-software-development": "Industries Powered by Custom Software",
  "ui-ux-design": "Experiences Crafted for Every Sector",
  "automation-custom-applications": "Workflows Automated Across Industries",
  "generative-ai-solutions": "Industries Transformed by Generative AI",
  "saas-development": "SaaS Solutions for Modern Markets",
  "cloud-transformation": "Cloud Modernization Across Sectors",
  "digital-consulting-strategy": "Strategic Guidance for Leading Industries",
  "business-applications": "Enterprise Apps Empowering Industries",
  "data-modernization-analytics": "Data-Driven Industries",
  "cybersecurity-compliance": "Securing Critical Sectors",
  "staff-augmentation-offshoring": "Dedicated Teams for Global Industries",
  "ecommerce-development": "Scaling Digital Commerce Sectors",
  "ecommerce-design": "Commerce Experiences by Industry",
  "quality-assurance": "Quality Assurance Across Sectors",
  "software-testing": "Testing Standards by Industry",
  "application-maintenance-support": "Reliable Support for Every Sector",
  "ecommerce-maintenance-support": "Continuous Optimization for Commerce",
  "ai-roadmapping-consulting": "AI Strategy Across Industries",
  "ai-readiness-assessments": "AI Readiness by Sector",
  "custom-ai-development": "Custom AI Engineering by Industry",
  "machine-learning-solutions": "Machine Learning Across Sectors",
  "ai-integration-apis": "Cross-Industry AI Integrations",
  "autonomous-ai-agents": "Autonomous Agents for Complex Industries",
  "rapid-ai-prototyping": "Agile Prototyping by Sector",
  "corporate-ai-automation": "Enterprise Automation by Industry",
  "ai-security-compliance": "Securing Critical AI Sectors",
  "intelligent-process-automation": "Streamlining Core Sectors",
  "predictive-analytics": "Predictive Insights by Industry",
  "data-engineering": "Resilient Data Architectures by Sector",
  "computer-vision": "Computer Vision Applications"
};

for (const [slug, newTitle] of Object.entries(replacements)) {
  const regex = new RegExp(`('${slug}':\\s*{[\\s\\S]*?industriesTitle:\\s*)'[^']+'`, 'g');
  content = content.replace(regex, `$1'${newTitle}'`);
}

fs.writeFileSync('src/lib/service-details.ts', content);
console.log('Industries titles updated!');
