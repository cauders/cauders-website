const fs = require('fs');
let content = fs.readFileSync('src/lib/service-details.ts', 'utf8');

const replacements = {
  "web-development": "Modern Web Engineering",
  "mobile-app-development": "Native & Cross-Platform Mobile",
  "custom-software-development": "Comprehensive Custom Software",
  "ui-ux-design": "Intuitive User Experiences",
  "automation-custom-applications": "Intelligent Process Automation",
  "generative-ai-solutions": "Innovative AI Solutions",
  "saas-development": "Scalable SaaS Platforms",
  "cloud-transformation": "Seamless Cloud Modernization",
  "digital-consulting-strategy": "Strategic Digital Transformation",
  "business-applications": "Robust Enterprise Systems",
  "data-modernization-analytics": "Advanced Data Analytics",
  "cybersecurity-compliance": "Robust Cyber Defense",
  "staff-augmentation-offshoring": "Dedicated Engineering Teams",
  "ecommerce-development": "High-Performance Digital Commerce",
  "ecommerce-design": "Engaging Commerce Experiences",
  "quality-assurance": "Rigorous Quality Assurance",
  "software-testing": "End-to-End Software Testing",
  "application-maintenance-support": "Proactive Application Support",
  "ecommerce-maintenance-support": "Continuous Store Optimization",
  "ai-roadmapping-consulting": "Strategic AI Roadmapping",
  "ai-readiness-assessments": "Comprehensive Readiness Assessments",
  "custom-ai-development": "Tailored AI Engineering",
  "machine-learning-solutions": "Advanced Machine Learning",
  "ai-integration-apis": "Seamless AI Integrations",
  "autonomous-ai-agents": "Autonomous Agentic Systems",
  "rapid-ai-prototyping": "Agile AI Prototyping",
  "corporate-ai-automation": "Enterprise Workflow Automation",
  "ai-security-compliance": "Secure AI Governance",
  "intelligent-process-automation": "Cognitive Process Automation",
  "predictive-analytics": "Data-Driven Predictive Insights",
  "data-engineering": "Resilient Data Architectures",
  "computer-vision": "Advanced Computer Vision"
};

for (const [slug, newTitle] of Object.entries(replacements)) {
  const regex = new RegExp(`('${slug}':\\s*{[\\s\\S]*?capabilitiesTitle:\\s*)'[^']+'`, 'g');
  content = content.replace(regex, `$1'${newTitle}'`);
}

fs.writeFileSync('src/lib/service-details.ts', content);
console.log('Capabilities titles updated!');
