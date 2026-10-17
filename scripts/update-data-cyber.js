const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/data.tsx');
let s = fs.readFileSync(filePath, 'utf8');

const target = `      {
        slug: 'cybersecurity-compliance',
        title: 'Cybersecurity & Compliance',
        description: 'We protect applications, data, infrastructure, and user accounts through practical security controls and testing services. From vulnerability assessments and penetration testing to identity management, encryption, and compliance readiness across GDPR, CCPA, HIPAA, and PCI-DSS.',
        capabilities: ['Vulnerability Assessments', 'Web & Network Security Testing', 'Identity & Access Management', 'Data Encryption', 'Firewall & Network Protection', 'Security Audits', 'Compliance Readiness (GDPR, HIPAA, PCI-DSS)', 'Vulnerability Remediation'],
        icon: Lock,
        ctaText: 'Secure Your Business',
      },`;

const replacement = `      {
        slug: 'cybersecurity-compliance',
        title: 'Application Security & Controls',
        description: 'We help engineering teams protect software applications, user data, and APIs through code-level vulnerability assessments, OWASP-aligned security reviews, identity boundaries, and privacy-conscious architectures.',
        capabilities: ['Application Vulnerability Reviews', 'API Security Testing', 'Identity & Access Architecture', 'Data Encryption at Rest & Transit', 'Dependency & Patch Audits', 'Secure Coding Standards', 'Privacy-Minded Engineering', 'Remediation Roadmaps'],
        icon: Lock,
        ctaText: 'Review Security Controls',
      },`;

s = s.replace(target, replacement);
fs.writeFileSync(filePath, s, 'utf8');
console.log('Updated cybersecurity-compliance in src/lib/data.tsx');
