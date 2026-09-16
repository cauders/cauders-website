const fs = require('fs');

const megaMenuPath = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/MegaMenu.tsx';
let content = fs.readFileSync(megaMenuPath, 'utf8');

// The original link code
const oldLink = `<Link
                href={\`/\${displayedMenu === 'ai' ? 'ai' : 'services'}/\${category.slug}/\${service.slug}\`}
                onClick={() => setActiveMenu(null)}
                className="text-[15px] text-foreground/70 hover:text-primary transition-colors flex items-center group/link"
              >
                <span className="group-hover/link:translate-x-1 transition-transform">
                  {service.title}
                </span>
              </Link>`;

// The new link code
const newLink = `<Link
                href={\`/\${displayedMenu === 'ai' ? 'ai' : 'services'}/\${category.slug}/\${service.slug}\`}
                onClick={() => setActiveMenu(null)}
                className="text-[15px] text-foreground/70 hover:text-foreground transition-colors flex items-center group/link"
              >
                <span className="relative pb-0.5">
                  <span className="relative z-10 group-hover/link:translate-x-1 transition-transform inline-block">
                    {service.title}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover/link:w-full"></span>
                </span>
              </Link>`;

content = content.replace(oldLink, newLink);

fs.writeFileSync(megaMenuPath, content, 'utf8');
console.log('Updated link hover styles.');
