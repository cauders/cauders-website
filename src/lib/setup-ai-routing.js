const fs = require('fs');
const path = require('path');

const srcDir = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/app/services';
const destDir = 'm:/Cauders/Website/cauders-website-main-1.1/cauders-website/src/app/ai';

function copyAndTransformDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyAndTransformDir(srcPath, destPath);
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      let content = fs.readFileSync(srcPath, 'utf8');
      
      // Transform logic:
      // getServiceCategories -> getAiCategories
      // getServiceCategoryBySlug -> getAiCategoryBySlug
      content = content.replace(/getServiceCategories/g, 'getAiCategories');
      content = content.replace(/getServiceCategoryBySlug/g, 'getAiCategoryBySlug');
      
      // If there are specific strings referencing "Services", change to "AI"
      // Let's be careful not to break component imports like ServiceDetailPage
      
      fs.writeFileSync(destPath, content, 'utf8');
      console.log(`Copied and transformed ${destPath}`);
    }
  }
}

copyAndTransformDir(srcDir, destDir);
console.log('Successfully created AI routing structure.');
