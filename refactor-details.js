const { Project, SyntaxKind } = require('ts-morph');

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/service-details.ts');

const detailedServicesDecl = sourceFile.getVariableDeclaration('detailedServices');
const initializer = detailedServicesDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

function duplicateAndModify(oldKeyStr, newKeyStr, patchObj) {
  const properties = initializer.getProperties();
  const oldProp = properties.find(p => p.getName().replace(/['"]/g, '') === oldKeyStr.replace(/['"]/g, ''));
  
  if (!oldProp) {
    console.log(`Could not find ${oldKeyStr}`);
    return;
  }
  let newObjText = oldProp.getInitializer().getText();
  
  // Apply patches
  for (const [key, value] of Object.entries(patchObj)) {
    const regex = new RegExp(`${key}:\\s*(['"\`])[\\s\\S]*?\\1`, 'g');
    newObjText = newObjText.replace(regex, `${key}: '${value.replace(/'/g, "\\'")}'`);
  }
  
  // replace id
  newObjText = newObjText.replace(/id: (['"\`])[^'"]+\1/, `id: '${newKeyStr}'`);
  
  initializer.addPropertyAssignment({
    name: `'${newKeyStr}'`,
    initializer: newObjText
  });
}

// 1. Create ecommerce-development
duplicateAndModify('ecommerce-design-development', 'ecommerce-development', {
  heroTitle: 'E-Commerce Development',
  industriesTitle: 'E-Commerce Development Across Industries',
  whyUsTitle: 'Why Choose Cauders for E-Commerce Development?',
  techStackTitle: 'Our E-Commerce Tech Stack',
  processTitle: 'Our Development Process',
});

// 2. Create ecommerce-design
duplicateAndModify('ecommerce-design-development', 'ecommerce-design', {
  heroTitle: 'E-Commerce Design',
  industriesTitle: 'E-Commerce Design Across Industries',
  whyUsTitle: 'Why Choose Cauders for E-Commerce Design?',
  techStackTitle: 'Our Design Tech Stack',
  processTitle: 'Our Design Process',
});

// 3. Create quality-assurance
duplicateAndModify('quality-assurance-testing', 'quality-assurance', {
  heroTitle: 'Quality Assurance',
  industriesTitle: 'QA Across Industries',
  whyUsTitle: 'Why Choose Cauders for QA?',
  techStackTitle: 'Our QA Toolkit',
  processTitle: 'Our QA Process',
});

// 4. Create software-testing
duplicateAndModify('quality-assurance-testing', 'software-testing', {
  heroTitle: 'Software Testing',
  industriesTitle: 'Software Testing Across Industries',
  whyUsTitle: 'Why Choose Cauders for Software Testing?',
  techStackTitle: 'Our Testing Tech Stack',
  processTitle: 'Our Testing Process',
});

// 5. Create maintenance-support
duplicateAndModify('application-maintenance-support', 'maintenance-support', {
  heroTitle: 'Maintenance & Support',
  industriesTitle: 'Support Across Industries',
  whyUsTitle: 'Why Choose Cauders for Maintenance & Support?',
  techStackTitle: 'Our Support Tech Stack',
  processTitle: 'Our Support Process',
});

// Remove old ones
const keysToRemove = [
  "ecommerce-design-development",
  "quality-assurance-testing",
  "application-maintenance-support",
  "ecommerce-maintenance-support"
];

for (const key of keysToRemove) {
  const prop = initializer.getProperties().find(p => p.getName().replace(/['"]/g, '') === key);
  if (prop) {
    prop.remove();
  }
}

sourceFile.saveSync();
console.log('Successfully updated service-details.ts');
