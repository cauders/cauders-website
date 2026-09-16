const { Project, SyntaxKind } = require('ts-morph');

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/service-details.ts');

const detailedServicesDecl = sourceFile.getVariableDeclaration('detailedServices');
const initializer = detailedServicesDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const properties = initializer.getProperties();

const techIconMap = {
  'react': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  'nextjs': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  'nodejs': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  'typescript': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  'python': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  'aws': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  'shopify': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg', // generic placeholder
  'magento': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg',
  'woocommerce': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-original.svg',
  'figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
  'xd': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg',
};

const deviconPlaceholder = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/devicon/devicon-original.svg';

for (const prop of properties) {
  if (prop.getKind() === SyntaxKind.PropertyAssignment) {
    const serviceObj = prop.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

    const techStackProp = serviceObj.getProperty('techStack');
    if (techStackProp) {
      const techArray = techStackProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
      if (techArray) {
        techArray.getElements().forEach(el => {
          if (el.getKind() === SyntaxKind.ObjectLiteralExpression) {
            const logoUrlProp = el.getProperty('logoUrl');
            if (logoUrlProp) {
              const val = logoUrlProp.getInitializerIfKind(SyntaxKind.StringLiteral);
              if (val) {
                const url = val.getLiteralValue();
                if (url.startsWith('/images/tech/')) {
                  const techName = url.replace('/images/tech/', '').replace('.svg', '');
                  const newUrl = techIconMap[techName] || deviconPlaceholder;
                  val.replaceWithText(`'${newUrl}'`);
                }
              }
            }
          }
        });
      }
    }
  }
}

sourceFile.saveSync();
console.log('Icons updated successfully.');
