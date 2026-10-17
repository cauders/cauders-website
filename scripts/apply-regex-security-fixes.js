const fs = require('fs');
const path = require('path');

// 1. service-details.ts
const servicePath = path.join(__dirname, '..', 'src', 'lib', 'service-details.ts');
let srvContent = fs.readFileSync(servicePath, 'utf8');

srvContent = srvContent.replace(
  /title:\s*'Industry Compliance',\s*description:\s*'Deep knowledge of HIPAA, GDPR, and WCAG standards\.',\s*stat:\s*\{\s*value:\s*'Zero',\s*label:\s*'Compromises'\s*\}/,
  `title: 'Accessibility & Standards',
            description: 'Verification against WCAG accessibility criteria and project-defined interface standards.',
            stat: { value: 'Structured', label: 'QA Protocols' }`
);

srvContent = srvContent.replace(
  /question:\s*"How is data security evaluated during the assessment\?",\s*answer:\s*"We perform a thorough audit of your data access controls, encryption standards, and compliance frameworks \(such as SOC2 or HIPAA\) to ensure any future AI implementation will be secure\."/,
  `question: "How is data security evaluated during an AI readiness assessment?",
          answer: "We review existing data boundaries, API access permissions, and storage policies to determine how sensitive data can be protected before introducing AI workflows."`
);

srvContent = srvContent.replace(
  /title:\s*'Security & Compliance',\s*description:\s*'We review your data governance policies to ensure future AI initiatives comply with regulations like GDPR and HIPAA\.'/,
  `title: 'Data Governance Review',
          description: 'We review existing data classification and access boundaries to ensure proprietary information is protected before AI integration.'`
);

srvContent = srvContent.replace(
  /question:\s*"Are your AI solutions HIPAA, GDPR, or SOC2 compliant\?",\s*answer:\s*"Yes\. We architect our solutions to meet rigorous compliance standards, utilizing secure enclaves, dynamic data masking, and enterprise-grade cloud environments to ensure regulatory adherence\."/,
  `question: "How do you ensure AI solutions meet regulatory and data privacy requirements?",
          answer: "We configure zero-data-retention API contracts, isolate vector databases within your private cloud environment, and implement token scrubbing so sensitive data is never used for external model training."`
);

srvContent = srvContent.replace(
  /title:\s*'Compliance Mapping',\s*description:\s*'Architecting AI solutions to meet the strict data handling requirements of GDPR and HIPAA\.'/,
  `title: 'Data Governance Mapping',
          description: 'Architecting AI solutions with zero-retention policies, role-based access boundaries, and audit trails.'`
);

fs.writeFileSync(servicePath, srvContent, 'utf8');
console.log('Successfully updated service-details.ts with regex');

// 2. data.tsx
const dataPath = path.join(__dirname, '..', 'src', 'lib', 'data.tsx');
let dContent = fs.readFileSync(dataPath, 'utf8');

dContent = dContent.replace(
  /slug:\s*'cybersecurity-compliance'[\s\S]*?ctaText:\s*'Secure Your Business'/,
  `slug: 'cybersecurity-compliance',
        title: 'Application Security & Access Controls',
        description: 'We assist clients in implementing application-level security controls, vulnerability identification, and access boundaries tailored to agreed architectural requirements.',
        capabilities: ['Vulnerability Scanning', 'Web & API Security Testing', 'Identity & Access Management', 'Data Encryption Standards', 'Network Boundary Configuration', 'Security Architecture Reviews', 'Governance Readiness Support', 'Vulnerability Remediation'],
        icon: Lock,
        ctaText: 'Secure Your Business'`
);

fs.writeFileSync(dataPath, dContent, 'utf8');
console.log('Successfully updated data.tsx with regex');
