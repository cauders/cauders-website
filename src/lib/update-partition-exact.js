const fs = require('fs');

const megaMenuPath = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/MegaMenu.tsx';
let content = fs.readFileSync(megaMenuPath, 'utf8');

// 1. Add partition helper
const partitionHelper = `
  const partitionedServices = [
    serviceCategories.filter(c => c.services.length === 1 || c.slug.includes('cloud')),
    serviceCategories.filter(c => c.slug.includes('software-solutions')),
    serviceCategories.filter(c => c.slug.includes('quality-assurance'))
  ];

  const partitionedAi = [
    aiCategories.filter(c => c.slug.includes('product-engineering') || c.slug.includes('data-intelligent')),
    aiCategories.filter(c => c.slug.includes('strategy-advisory') || c.slug.includes('enterprise-ai')),
    aiCategories.filter(c => c.slug.includes('generative-ai'))
  ];

  const renderCategory = (category: any) => (
    <div key={category.slug} className={cn("flex flex-col space-y-6 w-full", category.services.length === 1 ? "mb-5" : "mb-10")}>
      {category.services.length === 1 ? (
        <Link 
          href={\`/services/\${category.slug}/\${category.services[0].slug}\`}
          onClick={() => setActiveMenu(null)}
          className="group inline-block"
        >
          <span className="text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors leading-snug block">
            {category.title}
          </span>
        </Link>
      ) : (
        <span className="text-xl font-bold font-headline text-foreground leading-snug block">
          {category.title}
        </span>
      )}
      
      {category.services.length > 1 && (
        <ul className="flex flex-col space-y-4">
          {category.services.map((service: any) => (
            <li key={service.slug}>
              <Link
                href={\`/\${displayedMenu === 'ai' ? 'ai' : 'services'}/\${category.slug}/\${service.slug}\`}
                onClick={() => setActiveMenu(null)}
                className="text-[15px] text-foreground/70 hover:text-primary transition-colors flex items-center group/link"
              >
                <span className="group-hover/link:translate-x-1 transition-transform">
                  {service.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
`;

if (!content.includes('partitionedServices')) {
  content = content.replace('return (', partitionHelper + '\\n  return (');
}

// 2. Replace Services
const oldServicesBlock = `<div className="columns-1 sm:columns-2 lg:columns-3 gap-x-16">
                      {serviceCategories.map((category) => (
                        <div key={category.slug} className={cn("flex flex-col space-y-6 break-inside-avoid inline-block w-full", category.services.length === 1 ? "mb-5" : "mb-10")}>
                          {category.services.length === 1 ? (
                            <Link 
                              href={\`/services/\${category.slug}/\${category.services[0].slug}\`}
                              onClick={() => setActiveMenu(null)}
                              className="group inline-block"
                            >
                              <span className="text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors leading-snug block">
                                {category.title}
                              </span>
                            </Link>
                          ) : (
                            <span className="text-xl font-bold font-headline text-foreground leading-snug block">
                              {category.title}
                            </span>
                          )}
                          
                          {category.services.length > 1 && (
                            <ul className="flex flex-col space-y-4">
                              {category.services.map((service) => (
                                <li key={service.slug}>
                                  <Link
                                    href={\`/services/\${category.slug}/\${service.slug}\`}
                                    onClick={() => setActiveMenu(null)}
                                    className="text-[15px] text-foreground/70 hover:text-primary transition-colors flex items-center group/link"
                                  >
                                    <span className="group-hover/link:translate-x-1 transition-transform">
                                      {service.title}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>`;

const newServicesBlock = `<div className="flex flex-col lg:flex-row gap-x-16">
                      <div className="flex-1 flex flex-col">
                        {partitionedServices[0].map(renderCategory)}
                      </div>
                      <div className="flex-1 flex flex-col">
                        {partitionedServices[1].map(renderCategory)}
                      </div>
                      <div className="flex-1 flex flex-col">
                        {partitionedServices[2].map(renderCategory)}
                      </div>
                    </div>`;

if (content.includes(oldServicesBlock)) {
  content = content.replace(oldServicesBlock, newServicesBlock);
} else {
  console.log("oldServicesBlock NOT FOUND");
}

// 3. Replace AI
const oldAiBlock = `<div className="columns-1 sm:columns-2 lg:columns-3 gap-x-16">
                      {aiCategories.map((category) => (
                        <div key={category.slug} className={cn("flex flex-col space-y-6 break-inside-avoid inline-block w-full", category.services.length === 1 ? "mb-5" : "mb-10")}>
                          <span className="text-xl font-bold font-headline text-foreground leading-snug block">
                            {category.title}
                          </span>
                          <ul className="flex flex-col space-y-4">
                            {category.services.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={\`/ai/\${category.slug}/\${service.slug}\`}
                                  onClick={() => setActiveMenu(null)}
                                  className="text-[15px] text-foreground/70 hover:text-primary transition-colors flex items-center group/link"
                                >
                                  <span className="group-hover/link:translate-x-1 transition-transform">
                                    {service.title}
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>`;

const newAiBlock = `<div className="flex flex-col lg:flex-row gap-x-16">
                      <div className="flex-1 flex flex-col">
                        {partitionedAi[0].map(renderCategory)}
                      </div>
                      <div className="flex-1 flex flex-col">
                        {partitionedAi[1].map(renderCategory)}
                      </div>
                      <div className="flex-1 flex flex-col">
                        {partitionedAi[2].map(renderCategory)}
                      </div>
                    </div>`;

if (content.includes(oldAiBlock)) {
  content = content.replace(oldAiBlock, newAiBlock);
} else {
  console.log("oldAiBlock NOT FOUND");
}

fs.writeFileSync(megaMenuPath, content, 'utf8');
console.log('Successfully replaced MegaMenu blocks via raw string matching.');
