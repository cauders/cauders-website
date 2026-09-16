const { Project, SyntaxKind } = require('ts-morph');

const menuTitles = {
  'generative-ai-solutions': 'Generative AI Solutions',
  'data-modernization-analytics': 'Data Modernization & Analytics',
  'automation-custom-applications': 'Automation & Custom Applications',
  'web-development': 'Web Development',
  'mobile-app-development': 'Mobile App Development',
  'custom-software-development': 'Custom Software Development',
  'saas-development': 'SaaS Development',
  'ui-ux-design': 'UI/UX Design',
  'ecommerce-design-development': 'E-Commerce Design & Development',
  'cloud-transformation': 'Cloud & Infrastructure',
  'digital-consulting-strategy': 'Digital Consulting & Strategy',
  'business-applications': 'Business Applications',
  'quality-assurance-testing': 'Quality Assurance & Software Testing',
  'cybersecurity-compliance': 'Cybersecurity & Compliance',
  'staff-augmentation-offshoring': 'Staff Augmentation & Offshoring',
  'application-maintenance-support': 'Application Maintenance & Support',
  'ecommerce-maintenance-support': 'E-Commerce Maintenance & Support'
};

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/service-details.ts');

const detailedServicesDecl = sourceFile.getVariableDeclaration('detailedServices');
const initializer = detailedServicesDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const properties = initializer.getProperties();

for (const prop of properties) {
  if (prop.getKind() === SyntaxKind.PropertyAssignment) {
    const serviceKeyLiteral = prop.getNameNode();
    let serviceKey = prop.getName();
    
    if (serviceKeyLiteral.getKind() === SyntaxKind.StringLiteral) {
      serviceKey = serviceKeyLiteral.getLiteralValue();
    }

    const serviceObj = prop.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
    
    if (menuTitles[serviceKey]) {
      // Update root heroTitle
      const heroTitleProp = serviceObj.getProperty('heroTitle');
      if (heroTitleProp && heroTitleProp.getKind() === SyntaxKind.PropertyAssignment) {
        heroTitleProp.getInitializer().replaceWithText(`'${menuTitles[serviceKey]}'`);
      }

      // Update hero.title
      const heroProp = serviceObj.getProperty('hero');
      if (heroProp && heroProp.getKind() === SyntaxKind.PropertyAssignment) {
        const heroObj = heroProp.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
        const titleProp = heroObj.getProperty('title');
        if (titleProp && titleProp.getKind() === SyntaxKind.PropertyAssignment) {
          titleProp.getInitializer().replaceWithText(`'${menuTitles[serviceKey]}'`);
        }
      }
    }
  }
}

sourceFile.saveSync();
console.log('Successfully synced both heroTitle and hero.title.');
