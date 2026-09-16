const fs = require('fs');

const megaMenuPath = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/MegaMenu.tsx';
let content = fs.readFileSync(megaMenuPath, 'utf8');

const oldLink = `<Link
                href={\`/\${displayedMenu === 'ai' ? 'ai' : 'services'}/\${category.slug}/\${service.slug}\`}
                onClick={() => setActiveMenu(null)}
                className="text-[15px] text-foreground/70 hover:text-primary transition-colors flex items-center group/link"
              >
                <span className="group-hover/link:translate-x-1 transition-transform">
                  {service.title}
                </span>
              </Link>`;

const newLink = `<Link
                href={\`/\${displayedMenu === 'ai' ? 'ai' : 'services'}/\${category.slug}/\${service.slug}\`}
                onClick={() => setActiveMenu(null)}
                className="text-[15px] text-foreground/70 hover:text-zinc transition-colors flex items-center group/link"
              >
                <span className="group-hover/link:translate-x-1 transition-transform">
                  {service.title}
                </span>
              </Link>`;

content = content.replace(oldLink, newLink);

fs.writeFileSync(megaMenuPath, content, 'utf8');
console.log('Updated link hover styles to text-zinc.');
