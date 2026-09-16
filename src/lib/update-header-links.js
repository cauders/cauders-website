const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/Header.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add usePathname import
content = content.replace("import Link from 'next/link';", "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';");

// Add pathname hook
content = content.replace("const [isScrolled, setIsScrolled] = useState(false);", "const [isScrolled, setIsScrolled] = useState(false);\n  const pathname = usePathname();");

// Define active states
const activeStatesStr = `
  const isAiActive = pathname.startsWith('/ai');
  const isServicesActive = pathname.startsWith('/services');
  const isIndustriesActive = pathname.startsWith('/industries');
  const isCompanyActive = pathname.startsWith('/about') || pathname.startsWith('/company') || pathname.startsWith('/team') || pathname.startsWith('/contact') || pathname.startsWith('/careers');

  const renderUnderline = (isActive: boolean) => {
    if (isActive) {
      return <span className="absolute left-0 bottom-0 w-full h-[2px] bg-primary rounded-full"></span>;
    }
    return <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-1/2"></span>;
  };
`;
content = content.replace("const handleMouseEnter = (menu: 'services' | 'ai' | 'industries' | 'company') => {", activeStatesStr + "\n  const handleMouseEnter = (menu: 'services' | 'ai' | 'industries' | 'company') => {");

// Replace AI link
content = content.replace(/<Link\s+href="\/ai"\s+className=\{cn\("transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'ai' \? "text-primary" : "text-foreground\/80"\)\}\s+>\s+Artificial Intelligence\s+<\/Link>/g, 
  `<button
                  type="button"
                  className={cn("relative group pb-2 transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'ai' || isAiActive ? "text-primary" : "text-foreground/80")}
                >
                  Artificial Intelligence
                  {renderUnderline(isAiActive)}
                </button>`);

// Replace Services link
content = content.replace(/<Link\s+href="\/services"\s+className=\{cn\("transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'services' \? "text-primary" : "text-foreground\/80"\)\}\s+>\s+Services\s+<\/Link>/g,
  `<button
                  type="button"
                  className={cn("relative group pb-2 transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'services' || isServicesActive ? "text-primary" : "text-foreground/80")}
                >
                  Services
                  {renderUnderline(isServicesActive)}
                </button>`);

// Replace Industries link
content = content.replace(/<Link\s+href="\/industries"\s+className=\{cn\("transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'industries' \? "text-primary" : "text-foreground\/80"\)\}\s+>\s+Industries\s+<\/Link>/g,
  `<button
                  type="button"
                  className={cn("relative group pb-2 transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'industries' || isIndustriesActive ? "text-primary" : "text-foreground/80")}
                >
                  Industries
                  {renderUnderline(isIndustriesActive)}
                </button>`);

// Replace Company link
content = content.replace(/<Link\s+href="\/about"\s+className=\{cn\("transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'company' \? "text-primary" : "text-foreground\/80"\)\}\s+>\s+Company\s+<\/Link>/g,
  `<button
                  type="button"
                  className={cn("relative group pb-2 transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'company' || isCompanyActive ? "text-primary" : "text-foreground/80")}
                >
                  Company
                  {renderUnderline(isCompanyActive)}
                </button>`);

fs.writeFileSync(path, content, 'utf8');
console.log('Updated Header.tsx nav links.');
