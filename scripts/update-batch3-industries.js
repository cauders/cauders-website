const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/industry-details.ts');
let s = fs.readFileSync(filePath, 'utf8');

// 1. Fix line 70: "for decades"
s = s.replace(
  "Cauders has been assisting fintechs with their software needs for decades. Our experience and proven development approach make us a trusted digital partner.",
  "Cauders engineers secure, performant software systems and workflow automations for fintech and digital financial services."
);

// 2. Fix lines 224-225: duplicate description property
const dupBlock = `      title: 'Financial Sector Transformation Services',
      description: 'Explore our comprehensive suite of services tailored to meet the evolving demands of your industry.',
      description: 'Explore our comprehensive suite of services tailored to meet the evolving demands of the financial sector.',`;

const fixedBlock = `      title: 'Financial Sector Engineering Services',
      description: 'Explore our suite of software development and workflow automation services tailored to financial operations.',`;

s = s.replace(dupBlock, fixedBlock);

// 3. Fix Healthcare compliance claims
s = s.replace(
  "Cauders delivers secure, HIPAA-compliant, and user-focused healthcare software that empowers providers and patients alike.",
  "Cauders delivers secure, patient-focused healthcare software and workflow automations for clinics and digital health platforms."
);

s = s.replace(
  "'HIPAA-compliant data architecture and management',",
  "'Encrypted data architecture and role-based access controls',",
);

s = s.replace(
  "From HIPAA and GDPR to SOC2, we ensure strict regulatory adherence and PHI security from the initial architectural design phases.",
  "We engineer systems with end-to-end encryption, strict role-based access boundaries, and audit logging to safeguard sensitive patient data."
);

s = s.replace(
  "Our expertise ensures seamless compliance with HIPAA, enhanced patient experiences, and optimized clinical operations.",
  "Our engineering delivers secure patient experiences, reliable EHR integrations, and automated clinical intake workflows."
);

s = s.replace(
  "Ensure your clinical systems are resilient, encrypted, and fully compliant with HIPAA, HITECH, and GDPR requirements.",
  "Ensure your clinical platforms are resilient, encrypted at rest and in transit, and engineered with granular access boundaries."
);

s = s.replace(
  "question: 'Are your healthcare software solutions HIPAA compliant?',\n          answer: 'Yes. All healthcare applications we develop are designed from the ground up to meet HIPAA, HITECH, and (if applicable) GDPR compliance standards. We implement end-to-end encryption, strict access controls, and comprehensive audit logging.'",
  "question: 'How do you handle patient data privacy and security in healthcare applications?',\n          answer: 'We implement layered security controls including AES-256 encryption at rest, TLS 1.3 in transit, role-based access boundaries, session timeout policies, and immutable audit logging to protect sensitive healthcare information.'"
);

// 4. Fix Education uptime guarantee
s = s.replace(
  "to guarantee 99.99% uptime during peak educational hours.",
  "to maintain high availability and reliability during peak student concurrent loads."
);

// 5. Replace other blanket guarantees and "decades"
s = s.replace(/decades of experience/gi, "deep engineering experience");
s = s.replace(/guarantee\s+99\.\d+%/gi, "target high availability");

fs.writeFileSync(filePath, s, 'utf8');
console.log('Successfully updated industry-details.ts');
