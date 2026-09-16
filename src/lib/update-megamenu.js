const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/MegaMenu.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update imports
content = content.replace(
  /getServiceCategories, getIndustries, getServiceCategoryBySlug/,
  "getServiceCategories, getIndustries, getServiceCategoryBySlug, getAiCategories"
);

// Update MegaMenuProps
content = content.replace(
  /activeMenu: 'services' \| 'industries' \| 'about' \| null;/g,
  "activeMenu: 'services' | 'ai' | 'industries' | 'company' | null;"
);
content = content.replace(
  /setActiveMenu: \(menu: 'services' \| 'industries' \| 'about' \| null\) => void;/g,
  "setActiveMenu: (menu: 'services' | 'ai' | 'industries' | 'company' | null) => void;"
);

// Update displayedMenu state
content = content.replace(
  /useState<'services' \| 'industries' \| 'about' \| null>/g,
  "useState<'services' | 'ai' | 'industries' | 'company' | null>"
);

// Fetch aiCategories inside MegaMenu
content = content.replace(
  /const serviceCategories = getServiceCategories\(\);/,
  "const serviceCategories = getServiceCategories();\n  const aiCategories = getAiCategories();"
);

// Update 'about' check to 'company'
content = content.replace(/displayedMenu === 'about'/g, "displayedMenu === 'company'");

// Now add the AI menu section right before the industries section
const aiMenuBlock = `
                {displayedMenu === 'ai' && (
                  <motion.div
                    key="ai"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="w-full py-16 pb-20 px-4 sm:px-6 lg:px-12"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-12">
                      {aiCategories.map((category) => (
                        <div key={category.slug} className="flex flex-col space-y-6">
                          <span className="text-[17px] font-bold font-headline text-foreground leading-snug block">
                            {category.title}
                          </span>
                          <ul className="flex flex-col space-y-4">
                            {category.services.map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={\`/ai/\${category.slug}/\${service.slug}\`}
                                  onClick={() => setActiveMenu(null)}
                                  className="text-[14px] text-foreground/70 hover:text-primary transition-colors flex items-center group/link"
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
                    </div>
                  </motion.div>
                )}
`;

content = content.replace(/{displayedMenu === 'industries'/g, aiMenuBlock.trim() + '\n\n                {displayedMenu === \'industries\'');

fs.writeFileSync(path, content, 'utf8');
console.log('Updated MegaMenu.tsx');
