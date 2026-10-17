const fs = require('fs');
const path = require('path');

// 1. Update WhyChooseUs.tsx
const whyChooseUsPath = path.join(__dirname, '..', 'src', 'components', 'cauders', 'WhyChooseUs.tsx');
let whyContent = fs.readFileSync(whyChooseUsPath, 'utf8');

const oldWhyStatsRegex = /const stats = \[\s*\{[\s\S]*?\}\s*\];/;
const newWhyStats = `const stats = [
  {
    value: "61",
    label: "Reported reduction in consultation preparation time in a healthcare workflow",
    suffix: "%"
  },
  {
    value: "34",
    label: "Reported reduction in multi-cloud hosting costs",
    suffix: "%"
  },
  {
    value: "42",
    label: "Reported faster onboarding ramp-up in an HR software platform",
    suffix: "%"
  },
  {
    prefix: "< ",
    value: "50",
    label: "Reported API routing response time in a developer platform",
    suffix: "ms"
  }
];`;

whyContent = whyContent.replace(oldWhyStatsRegex, newWhyStats);

whyContent = whyContent.replace(
  /Measured across specific client implementations; not company-wide averages or guarantees\./,
  'Measured in specific project implementations documented in technical records; not company-wide averages or service guarantees.'
);

fs.writeFileSync(whyChooseUsPath, whyContent, 'utf8');
console.log('Updated WhyChooseUs.tsx with accurate dossier-backed phrasing');

// 2. Update Testimonials.tsx (Engineering Outcomes in Practice)
const testimonialsPath = path.join(__dirname, '..', 'src', 'components', 'cauders', 'Testimonials.tsx');
let testContent = fs.readFileSync(testimonialsPath, 'utf8');

const oldEvidenceRegex = /const evidenceData: EvidenceItem\[\] = \[\s*\{[\s\S]*?\}\s*\];/;
const newEvidenceData = `const evidenceData: EvidenceItem[] = [
  {
    domain: "Enterprise Systems Integration",
    title: "Multi-System Public Portal & Migration",
    problemAndSolution: "Integrated customer portal tier with legacy core backends and eKYC verification during major corporate infrastructure consolidation.",
    measuredOutcome: "Zero cutover downtime with continuous transaction availability",
    capabilityBadge: "Systems Integration",
    link: "/services/cloud-digital-transformation/business-applications"
  },
  {
    domain: "High-Scale Consumer Mobile",
    title: "Global Social & Language Platform",
    problemAndSolution: "Engineered cross-platform mobile client with real-time WebSockets and automated translation service integration for global audiences.",
    measuredOutcome: "Scaled to 1M+ downloads with 4.6/5 rating across 379K+ reviews",
    capabilityBadge: "Mobile Engineering",
    link: "/services/software-solutions/mobile-app-development"
  },
  {
    domain: "Connected Systems & PropTech",
    title: "Smart Facility Telemetry & Access Control",
    problemAndSolution: "Architected event-driven IoT communication layer with MQTT, Redis, and GraphQL to manage connected commercial hardware.",
    measuredOutcome: "Sub-second access response with 99.95% multi-environment uptime",
    capabilityBadge: "IoT & Cloud Systems",
    link: "/services/cloud-digital-transformation/cloud-transformation"
  },
  {
    domain: "Healthcare Workflow",
    title: "Telehealth Consultation Scheduling",
    problemAndSolution: "Integrated WebRTC consultations, automated appointment workflows, and transcription services for distributed medical practices.",
    measuredOutcome: "Patient wait times reduced from 24 days to under 3 days",
    capabilityBadge: "Workflow Automation",
    link: "/services/ai-product-engineering/automation-custom-applications"
  },
  {
    domain: "Mobile Architecture & Stability",
    title: "High-Engagement Consumer Application",
    problemAndSolution: "Built Flutter mobile application with resilient client-side state caching, optimized media feeds, and reliable backend synchronization.",
    measuredOutcome: "99.9% crash-free session rate across high-frequency usage",
    capabilityBadge: "Cross-Platform Mobile",
    link: "/services/software-solutions/mobile-app-development"
  }
];`;

testContent = testContent.replace(oldEvidenceRegex, newEvidenceData);
fs.writeFileSync(testimonialsPath, testContent, 'utf8');
console.log('Updated Testimonials.tsx with 5 distinct dossier projects');

// 3. Update industry-details.ts
const industryPath = path.join(__dirname, '..', 'src', 'lib', 'industry-details.ts');
let indContent = fs.readFileSync(industryPath, 'utf8');

// Line 217
indContent = indContent.replace(
  "description: 'Ensure your financial systems are resilient, secure, and fully compliant with eIDV (Electronic Identity Verification) and AISP requirements.',",
  "description: 'Implement identity verification workflows (including eIDV) and account information integrations aligned with agreed security requirements.',"
);

// Line 281
indContent = indContent.replace(
  "Our development practices align with industry security and compliance standards, including frameworks like PCI DSS.",
  "We implement security controls based on agreed project scope: device binding, tokenization, multi-factor authentication, and segregated API gateways designed to protect sensitive financial data."
);

// Line 285
indContent = indContent.replace(
  "Yes, we have deep experience integrating with legacy core banking platforms (such as Temenos, Fiserv, and Jack Henry) using secure API layers and middleware, ensuring seamless data flow without compromising the stability of your core systems.",
  "Yes. We build secure integration layers and API middleware to connect modern user-facing applications with core financial backends and legacy enterprise systems."
);

// Line 317
indContent = indContent.replace(
  "Delivering scalable systems that improve clinical outcomes and operational efficiency. We focus on creating highly scalable systems that drive measurable business value, enhance user engagement, and maintain strict compliance standards globally.",
  "Delivering scalable systems that improve clinical outcomes and operational efficiency. We focus on creating reliable systems that support clinical workflows, protect patient privacy, and align with client-defined security architectures."
);

// Lines 452-453
indContent = indContent.replace(
  "question: 'Are your healthcare software solutions HIPAA compliant?',",
  "question: 'How do you address healthcare data privacy and security requirements?',"
);
indContent = indContent.replace(
  "answer: 'Yes. All healthcare applications we develop are designed from the ground up to meet HIPAA, HITECH, and (if applicable) GDPR compliance standards. We implement end-to-end encryption, strict access controls, and comprehensive audit logging.'",
  "answer: 'We develop healthcare software in alignment with client-specified data protection and confidentiality requirements. Our delivery capabilities include role-based access controls, encrypted data transport and storage, audit trail logging, and isolated database architectures defined during technical discovery.'"
);

fs.writeFileSync(industryPath, indContent, 'utf8');
console.log('Updated industry-details.ts compliance claims');

// 4. Update service-details.ts
const servicePath = path.join(__dirname, '..', 'src', 'lib', 'service-details.ts');
let srvContent = fs.readFileSync(servicePath, 'utf8');

// Line 832
srvContent = srvContent.replace(
  "{ title: 'Security & Compliance', description: 'Implementing robust security protocols (GDPR, SOC2).',",
  "{ title: 'Security Architecture', description: 'Implementing tenant data isolation, secure authentication, and access control policies.',"
);

// Line 1293
srvContent = srvContent.replace(
  "'Beyond defense, we help organizations navigate complex regulatory environments, ensuring their software and infrastructure comply with stringent industry standards like GDPR, HIPAA, and PCI-DSS.'",
  "'We assist engineering and security teams in identifying software vulnerabilities, establishing access boundaries, and structuring systems to support their governance and regulatory obligations.'"
);

// Line 1327
srvContent = srvContent.replace(
  "description: 'We help implement controls and practices designed to support regulatory requirements including GDPR, CCPA, HIPAA, and PCI-DSS.',",
  "description: 'We assist with implementing technical security controls—such as role-based permissions, data encryption, and audit logs—tailored to client governance requirements.',"
);

// Line 1361
srvContent = srvContent.replace(
  "{ title: 'Healthcare HIPAA Compliance Audit', imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173ff94031d?auto=format&fit=crop&q=80&w=800' },",
  "{ title: 'Clinical Data Access Control Review', imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173ff94031d?auto=format&fit=crop&q=80&w=800' },"
);

// Line 1771-1773
srvContent = srvContent.replace(
  "title: 'Industry Compliance',\n            description: 'Deep knowledge of HIPAA, GDPR, and WCAG standards.',\n            stat: { value: 'Zero', label: 'Compromises' }",
  "title: 'Accessibility & Standards',\n            description: 'Verification against WCAG accessibility criteria and project-defined interface standards.',\n            stat: { value: 'Structured', label: 'QA Protocols' }"
);
// Also CRLF variant
srvContent = srvContent.replace(
  "title: 'Industry Compliance',\r\n            description: 'Deep knowledge of HIPAA, GDPR, and WCAG standards.',\r\n            stat: { value: 'Zero', label: 'Compromises' }",
  "title: 'Accessibility & Standards',\r\n            description: 'Verification against WCAG accessibility criteria and project-defined interface standards.',\r\n            stat: { value: 'Structured', label: 'QA Protocols' }"
);

// Line 2264-2265
srvContent = srvContent.replace(
  'question: "How is data security evaluated during the assessment?",\n          answer: "We perform a thorough audit of your data access controls, encryption standards, and compliance frameworks (such as SOC2 or HIPAA) to ensure any future AI implementation will be secure."',
  'question: "How is data security evaluated during an AI readiness assessment?",\n          answer: "We review existing data boundaries, API access permissions, and storage policies to determine how sensitive data can be protected before introducing AI workflows."'
);
srvContent = srvContent.replace(
  'question: "How is data security evaluated during the assessment?",\r\n          answer: "We perform a thorough audit of your data access controls, encryption standards, and compliance frameworks (such as SOC2 or HIPAA) to ensure any future AI implementation will be secure."',
  'question: "How is data security evaluated during an AI readiness assessment?",\r\n          answer: "We review existing data boundaries, API access permissions, and storage policies to determine how sensitive data can be protected before introducing AI workflows."'
);

// Line 2285
srvContent = srvContent.replace(
  "description: 'We review your data governance policies to ensure future AI initiatives comply with regulations like GDPR and HIPAA.'",
  "description: 'We review existing data classification and access boundaries to ensure proprietary information is protected before AI integration.'"
);

// Line 3030
srvContent = srvContent.replace(
  "'We implement comprehensive AI security architectures. We ensure your LLMs respect role-based access controls (RBAC), prevent sensitive data from leaking into model training, and comply with strict industry regulations like HIPAA, GDPR, and SOC2.'",
  "'We architect AI applications with strict data boundaries, ensuring models do not retain or expose confidential data, and integrating access controls aligned with your enterprise policies.'"
);

// Line 3045-3046
srvContent = srvContent.replace(
  'question: "Are your AI solutions HIPAA, GDPR, or SOC2 compliant?",\n          answer: "Yes. We architect our solutions to meet rigorous compliance standards, utilizing secure enclaves, dynamic data masking, and enterprise-grade cloud environments to ensure regulatory adherence."',
  'question: "How do you ensure AI solutions meet regulatory and data privacy requirements?",\n          answer: "We configure zero-data-retention API contracts, isolate vector databases within your private cloud environment, and implement token scrubbing so sensitive data is never used for external model training."'
);
srvContent = srvContent.replace(
  'question: "Are your AI solutions HIPAA, GDPR, or SOC2 compliant?",\r\n          answer: "Yes. We architect our solutions to meet rigorous compliance standards, utilizing secure enclaves, dynamic data masking, and enterprise-grade cloud environments to ensure regulatory adherence."',
  'question: "How do you ensure AI solutions meet regulatory and data privacy requirements?",\r\n          answer: "We configure zero-data-retention API contracts, isolate vector databases within your private cloud environment, and implement token scrubbing so sensitive data is never used for external model training."'
);

// Line 3077-3078
srvContent = srvContent.replace(
  "title: 'Compliance Mapping',\n            description: 'Architecting AI solutions to meet the strict data handling requirements of GDPR and HIPAA.'",
  "title: 'Data Governance Mapping',\n            description: 'Architecting AI solutions with zero-retention policies, role-based access boundaries, and audit trails.'"
);
srvContent = srvContent.replace(
  "title: 'Compliance Mapping',\r\n            description: 'Architecting AI solutions to meet the strict data handling requirements of GDPR and HIPAA.'",
  "title: 'Data Governance Mapping',\r\n            description: 'Architecting AI solutions with zero-retention policies, role-based access boundaries, and audit trails.'"
);

fs.writeFileSync(servicePath, srvContent, 'utf8');
console.log('Updated service-details.ts compliance claims');

// 5. Update data.tsx
const dataPath = path.join(__dirname, '..', 'src', 'lib', 'data.tsx');
let dContent = fs.readFileSync(dataPath, 'utf8');

dContent = dContent.replace(
  "capabilities: ['Data Privacy Controls', 'LLM Vulnerability Testing', 'Bias & Fairness Audits', 'Compliance Mapping (GDPR/HIPAA)', 'Red Teaming'],",
  "capabilities: ['Data Privacy Controls', 'LLM Vulnerability Testing', 'Bias & Fairness Audits', 'Data Governance Mapping', 'Red Teaming'],"
);

dContent = dContent.replace(
  "slug: 'cybersecurity-compliance',\n        title: 'Cybersecurity & Compliance',\n        description: 'We protect applications, data, infrastructure, and user accounts through practical security controls and testing services. From vulnerability assessments and penetration testing to identity management, encryption, and compliance readiness across GDPR, CCPA, HIPAA, and PCI-DSS.',\n        capabilities: ['Vulnerability Assessments', 'Web & Network Security Testing', 'Identity & Access Management', 'Data Encryption', 'Firewall & Network Protection', 'Security Audits', 'Compliance Readiness (GDPR, HIPAA, PCI-DSS)', 'Vulnerability Remediation'],",
  "slug: 'cybersecurity-compliance',\n        title: 'Application Security & Access Controls',\n        description: 'We assist clients in implementing application-level security controls, vulnerability identification, and access boundaries tailored to agreed architectural requirements.',\n        capabilities: ['Vulnerability Scanning', 'Web & API Security Testing', 'Identity & Access Management', 'Data Encryption Standards', 'Network Boundary Configuration', 'Security Architecture Reviews', 'Governance Readiness Support', 'Vulnerability Remediation'],"
);
dContent = dContent.replace(
  "slug: 'cybersecurity-compliance',\r\n        title: 'Cybersecurity & Compliance',\r\n        description: 'We protect applications, data, infrastructure, and user accounts through practical security controls and testing services. From vulnerability assessments and penetration testing to identity management, encryption, and compliance readiness across GDPR, CCPA, HIPAA, and PCI-DSS.',\r\n        capabilities: ['Vulnerability Assessments', 'Web & Network Security Testing', 'Identity & Access Management', 'Data Encryption', 'Firewall & Network Protection', 'Security Audits', 'Compliance Readiness (GDPR, HIPAA, PCI-DSS)', 'Vulnerability Remediation'],",
  "slug: 'cybersecurity-compliance',\r\n        title: 'Application Security & Access Controls',\r\n        description: 'We assist clients in implementing application-level security controls, vulnerability identification, and access boundaries tailored to agreed architectural requirements.',\r\n        capabilities: ['Vulnerability Scanning', 'Web & API Security Testing', 'Identity & Access Management', 'Data Encryption Standards', 'Network Boundary Configuration', 'Security Architecture Reviews', 'Governance Readiness Support', 'Vulnerability Remediation'],"
);

dContent = dContent.replace(
  "'Patient data privacy and HIPAA compliance',",
  "'Patient data confidentiality and secure access controls',"
);

fs.writeFileSync(dataPath, dContent, 'utf8');
console.log('Updated data.tsx compliance claims');
