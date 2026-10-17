const fs = require('fs');
const path = require('path');

// 1. Fix industry-details.ts duplicate property by regex
const industryPath = path.join(__dirname, '..', 'src', 'lib', 'industry-details.ts');
let industryContent = fs.readFileSync(industryPath, 'utf8');
industryContent = industryContent.replace(
  /servicesBuiltForIndustry:\s*\{\s*title:\s*'Financial Sector Transformation Services',\s*description:\s*'Explore our comprehensive suite of services tailored to meet the evolving demands of your industry\.',\s*description:\s*'Explore our comprehensive suite of services tailored to meet the evolving demands of the financial sector\.',/,
  `servicesBuiltForIndustry: {
    title: 'Financial Sector Transformation Services',
    description: 'Explore our comprehensive suite of services tailored to meet the evolving demands of the financial sector.',`
);
fs.writeFileSync(industryPath, industryContent, 'utf8');
console.log('Fixed industry-details.ts duplicate description regex');

// 2. Fix ChromaGrid.tsx
const chromaPath = path.join(__dirname, '..', 'src', 'components', 'cauders', 'ChromaGrid.tsx');
let chromaContent = fs.readFileSync(chromaPath, 'utf8');
chromaContent = chromaContent.replace(/useRef<\(\(value: any\) => void\) \| null>\(null\)/g, 'useRef<any>(null)');
chromaContent = chromaContent.replace(/setX\.current\(pos\.current\.x\);/g, 'setX.current?.(pos.current.x);');
chromaContent = chromaContent.replace(/setY\.current\(pos\.current\.y\);/g, 'setY.current?.(pos.current.y);');
fs.writeFileSync(chromaPath, chromaContent, 'utf8');
console.log('Fixed ChromaGrid.tsx');
