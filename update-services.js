const { Project, SyntaxKind } = require('ts-morph');

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/service-details.ts');

const detailedServicesDecl = sourceFile.getVariableDeclaration('detailedServices');
const initializer = detailedServicesDecl.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

const properties = initializer.getProperties();

for (const prop of properties) {
  if (prop.getKind() === SyntaxKind.PropertyAssignment) {
    const serviceKey = prop.getName();
    const serviceObj = prop.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

    // Helper to get or add a property
    const getOrAddProp = (obj, name, defaultValue) => {
      let p = obj.getProperty(name);
      if (!p) {
        p = obj.addPropertyAssignment({ name, initializer: defaultValue });
      }
      return p;
    };

    // 1. CTA Heading
    const titleProp = serviceObj.getProperty('hero')?.getInitializerIfKind(SyntaxKind.ObjectLiteralExpression)?.getProperty('title')?.getInitializerIfKind(SyntaxKind.StringLiteral);
    const titleVal = titleProp ? titleProp.getLiteralValue() : serviceKey;
    getOrAddProp(serviceObj, 'ctaHeading', `'Ready to build your ${titleVal.replace(/'/g, "\\'")}? <br class="hidden sm:block"/> Let\\'s Get to Work'`);

    // 2. Process Steps
    let processStepsProp = serviceObj.getProperty('processSteps');
    if (processStepsProp) {
      const processArray = processStepsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
      if (processArray) {
        const elements = processArray.getElements();
        
        // Make sure there are 6 elements
        const defaultSteps = [
          { title: 'Discovery & Strategy', desc: 'We analyze your requirements and goals.' },
          { title: 'Architecture & Design', desc: 'We wireframe interfaces and architect robust systems.' },
          { title: 'Development & Build', desc: 'Our engineers build the solution.' },
          { title: 'Integration & Testing', desc: 'Rigorous testing is conducted.' },
          { title: 'Deployment & Launch', desc: 'We execute a smooth launch.' },
          { title: 'Maintenance & Support', desc: 'Continuous monitoring and updates.' }
        ];

        const unsplashLinks = [
          'https://images.unsplash.com/photo-1507925922837-326f1e29ad27?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
        ];

        // Ensure each existing element has an imageUrl
        elements.forEach((el, idx) => {
          if (el.getKind() === SyntaxKind.ObjectLiteralExpression) {
            let imgProp = el.getProperty('imageUrl');
            if (imgProp) {
                // User asked to replace specific process images with generic unsplash ones.
                const val = imgProp.getInitializer();
                if (val && val.getText().includes('res.cloudinary.com')) {
                    val.replaceWithText(`'${unsplashLinks[idx % 6]}'`);
                }
            } else {
                el.addPropertyAssignment({ name: 'imageUrl', initializer: `'${unsplashLinks[idx % 6]}'` });
            }
          }
        });

        // Add missing elements up to 6
        for (let i = elements.length; i < 6; i++) {
          processArray.addElement(`{ title: '${defaultSteps[i].title}', description: '${defaultSteps[i].desc}', imageUrl: '${unsplashLinks[i]}' }`);
        }
      }
    }

    // 3. Why Us Section
    getOrAddProp(serviceObj, 'whyUsTitle', `'Why Choose Cauders for ${titleVal.replace(/'/g, "\\'")}?'`);
    getOrAddProp(serviceObj, 'whyUsDescription', `'We combine technical excellence with business acumen to deliver solutions that drive real results.'`);
    getOrAddProp(serviceObj, 'whyUsCtaText', `'Let\\'s Discuss Your Project'`);
    getOrAddProp(serviceObj, 'whyUsCtaLink', `'/contact'`);

    let whyUsCardsProp = serviceObj.getProperty('whyUsCards');
    if (!whyUsCardsProp) {
      serviceObj.addPropertyAssignment({
        name: 'whyUsCards',
        initializer: `[
          { title: 'Proven Track Record', description: 'Successfully delivered complex projects across multiple industries.', icon: 'CheckCircle2' },
          { title: 'Expert Team', description: 'A dedicated team of senior developers, architects, and designers.', icon: 'Users' },
          { title: 'Focus on Quality', description: 'Rigorous testing and QA processes ensure flawless performance.', icon: 'Award' }
        ]`
      });
    } else {
        const cardsArray = whyUsCardsProp.getInitializerIfKind(SyntaxKind.ArrayLiteralExpression);
        if (cardsArray) {
            const icons = ['CheckCircle2', 'Users', 'Award', 'Shield'];
            cardsArray.getElements().forEach((el, idx) => {
                if (el.getKind() === SyntaxKind.ObjectLiteralExpression) {
                    if (!el.getProperty('icon') && !el.getProperty('stat')) {
                        el.addPropertyAssignment({ name: 'icon', initializer: `'${icons[idx % icons.length]}'` });
                    }
                }
            });
        }
    }
  }
}

sourceFile.saveSync();
console.log('Update complete.');
