const { Project, SyntaxKind } = require('ts-morph');

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/service-details.ts');

const detailedServicesDecl = sourceFile.getVariableDeclaration('detailedServices');
const initializer = detailedServicesDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

// Find an existing item to use as a template
const baseProp = initializer.getProperties().find(p => p.getName().replace(/['"]/g, '') === 'web-development');
if (!baseProp) {
  console.error("Could not find web-development to use as template!");
  process.exit(1);
}
const templateText = baseProp.getInitializer().getText();

function createNewService(newKeyStr, patchObj) {
  let newObjText = templateText;
  
  // Replace id
  newObjText = newObjText.replace(/id: (['"\`])[^'"]+\1/, `id: '${newKeyStr}'`);
  
  // Apply patches
  for (const [keyPath, value] of Object.entries(patchObj)) {
    if (keyPath === 'heroTitle') {
       newObjText = newObjText.replace(/heroTitle:\s*(['"\`])[\\s\\S]*?\1/, `heroTitle: '${value.replace(/'/g, "\\'")}'`);
    } else if (keyPath === 'hero.title') {
       newObjText = newObjText.replace(/title:\s*(['"\`])[\\s\\S]*?\1/, `title: '${value.replace(/'/g, "\\'")}'`);
    } else if (keyPath === 'hero.description') {
       newObjText = newObjText.replace(/description:\s*(['"\`])[\\s\\S]*?\1/, `description: '${value.replace(/'/g, "\\'")}'`);
    } else if (keyPath === 'overview.content') {
       // Just replace the first content occurrence inside overview block. It's rough but works.
       newObjText = newObjText.replace(/content:\s*(['"\`])[\\s\\S]*?\1/, `content: '${value.replace(/'/g, "\\'")}'`);
    }
  }
  
  initializer.addPropertyAssignment({
    name: `'${newKeyStr}'`,
    initializer: newObjText
  });
}

// 1. Create ecommerce-development
createNewService('ecommerce-development', {
  'heroTitle': 'E-Commerce Development',
  'hero.title': 'E-Commerce Development',
  'hero.description': 'We build scalable e-commerce backends, payment integrations, custom checkout flows, and complex product catalogs. We specialize in headless storefronts and API-driven commerce platforms built to scale.',
  'overview.content': 'Our e-commerce development team creates robust, secure, and highly performant backends that handle massive traffic and complex integrations seamlessly.'
});

// 2. Create ecommerce-design
createNewService('ecommerce-design', {
  'heroTitle': 'E-Commerce Design',
  'hero.title': 'E-Commerce Design',
  'hero.description': 'We design intuitive, high-converting e-commerce experiences that simplify purchasing and build brand loyalty. We focus on buyer journeys, product discovery, and visual identity.',
  'overview.content': 'Great e-commerce starts with great design. We craft engaging buyer journeys that optimize for conversions while delivering a premium brand experience.'
});

// 3. Create quality-assurance
createNewService('quality-assurance', {
  'heroTitle': 'Quality Assurance',
  'hero.title': 'Quality Assurance',
  'hero.description': 'We define QA strategies, ensure compliance with industry standards, and establish processes that bake quality into your software lifecycle from day one.',
  'overview.content': 'Quality Assurance goes beyond finding bugs; it is about establishing a culture of quality. We implement comprehensive testing strategies to mitigate risk and ensure compliance.'
});

// 4. Create software-testing
createNewService('software-testing', {
  'heroTitle': 'Software Testing',
  'hero.title': 'Software Testing',
  'hero.description': 'We identify defects and validate that applications meet performance requirements before they reach users through rigorous manual and automated testing.',
  'overview.content': 'Our dedicated software testing teams leverage the latest automation tools alongside expert exploratory testing to guarantee your software functions flawlessly under any condition.'
});

// 5. Create maintenance-support
createNewService('maintenance-support', {
  'heroTitle': 'Maintenance & Support',
  'hero.title': 'Maintenance & Support',
  'hero.description': 'We take ownership of your application health, providing continuous monitoring, security patching, bug fixes, and performance optimization for web, mobile, and e-commerce platforms.',
  'overview.content': 'Post-launch support is critical. We provide 24/7 monitoring, rapid issue resolution, and continuous optimization to ensure your digital assets remain secure, compliant, and performant.'
});

sourceFile.saveSync();
console.log('Successfully recreated missing services in service-details.ts');
