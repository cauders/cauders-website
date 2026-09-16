const fs = require('fs');
const path = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/components/cauders/Header.tsx';
let content = fs.readFileSync(path, 'utf8');

// 1. Change the underline color from bg-primary to bg-zinc-800 dark:bg-zinc-200
content = content.replace(/bg-primary rounded-full/g, 'bg-zinc-800 dark:bg-zinc-200 rounded-full');

// 2. Remove text-primary highlighting on the buttons
// We replace the cn(...) block for the buttons to keep the text color normal (text-foreground/80) and maybe text-foreground on hover/active.
// Current pattern: className={cn("relative group pb-2 transition-colors duration-300 ease-in-out hover:text-primary font-medium", activeMenu === 'X' || isXActive ? "text-primary" : "text-foreground/80")}

content = content.replace(/className=\{cn\("relative group pb-2 transition-colors duration-300 ease-in-out hover:text-primary font-medium", [^}]+\)\}/g, (match) => {
  // Extract which variable it uses, e.g. activeMenu === 'ai' || isAiActive
  const activeConditionMatch = match.match(/activeMenu === '[^']+' \|\| is[a-zA-Z]+Active/);
  if (activeConditionMatch) {
    const activeCondition = activeConditionMatch[0];
    return `className={cn("relative group pb-2 transition-colors duration-300 ease-in-out hover:text-foreground font-medium", ${activeCondition} ? "text-foreground" : "text-foreground/80")}`;
  }
  return match;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Updated Header.tsx text highlighting and underline color.');
