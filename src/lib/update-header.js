const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/Header.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace activeMenu state type
content = content.replace(
  /useState<'services' \| 'industries' \| 'about' \| null>/,
  "useState<'services' | 'ai' | 'industries' | 'company' | null>"
);

// Replace handleMouseEnter signature
content = content.replace(
  /handleMouseEnter = \(menu: 'services' \| 'industries' \| 'about'\)/,
  "handleMouseEnter = (menu: 'services' | 'ai' | 'industries' | 'company')"
);

// Replace the Navigation Links section
const navLinksRegex = /<nav className="hidden md:flex flex-1 items-center justify-center gap-10 text-sm font-medium">[\s\S]*?<\/nav>/;
const newNavLinks = `<nav className="hidden md:flex flex-1 items-center justify-center gap-10 text-sm font-medium">
              <div 
                className="relative py-4"
                onMouseEnter={() => handleMouseEnter('services')}
              >
                <Link
                  href="/services"
                  className={cn("transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'services' ? "text-primary" : "text-foreground/80")}
                >
                  Services
                </Link>
              </div>
              <div 
                className="relative py-4"
                onMouseEnter={() => handleMouseEnter('ai')}
              >
                <Link
                  href="/ai"
                  className={cn("transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'ai' ? "text-primary" : "text-foreground/80")}
                >
                  Artificial Intelligence
                </Link>
              </div>
              <div 
                className="relative py-4"
                onMouseEnter={() => handleMouseEnter('industries')}
              >
                <Link
                  href="/industries"
                  className={cn("transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'industries' ? "text-primary" : "text-foreground/80")}
                >
                  Industries
                </Link>
              </div>
              <div 
                className="relative py-4"
                onMouseEnter={() => handleMouseEnter('company')}
              >
                <Link
                  href="/about"
                  className={cn("transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'company' ? "text-primary" : "text-foreground/80")}
                >
                  Company
                </Link>
              </div>
            </nav>`;
content = content.replace(navLinksRegex, newNavLinks);

fs.writeFileSync(path, content, 'utf8');
console.log('Updated Header.tsx');
