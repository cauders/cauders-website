const { Project, SyntaxKind } = require('ts-morph');

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/service-details.ts');

const detailedServicesDecl = sourceFile.getVariableDeclaration('detailedServices');
const initializer = detailedServicesDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const properties = initializer.getProperties();

for (const prop of properties) {
  if (prop.getKind() === SyntaxKind.PropertyAssignment) {
    const serviceObj = prop.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
    const serviceKey = prop.getName();

    // Check for industriesDescription
    const descProp = serviceObj.getProperty('industriesDescription');
    if (!descProp) {
      const defaultDesc = `Our expertise in ${serviceKey.replace(/-/g, ' ')} serves a diverse range of sectors, providing tailored solutions that address unique business challenges.`;
      serviceObj.addPropertyAssignment({ name: 'industriesDescription', initializer: `'${defaultDesc}'` });
    }

    // Check for industriesCtaText
    const ctaTextProp = serviceObj.getProperty('industriesCtaText');
    if (!ctaTextProp) {
      serviceObj.addPropertyAssignment({ name: 'industriesCtaText', initializer: `'View All Industries'` });
    }

    // Check for industriesCtaLink
    const ctaLinkProp = serviceObj.getProperty('industriesCtaLink');
    if (!ctaLinkProp) {
      serviceObj.addPropertyAssignment({ name: 'industriesCtaLink', initializer: `'/industries'` });
    }
  }
}

sourceFile.saveSync();
console.log('Successfully added industry descriptions and CTAs to all services.');
