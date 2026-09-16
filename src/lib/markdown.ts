import fs from 'fs';
import path from 'path';

export function getServiceMarkdownContent(slug: string): string | null {
 const fullPath = path.join(process.cwd(), 'src', 'content', 'services', `${slug}.md`);
 try {
 if (fs.existsSync(fullPath)) {
 const fileContents = fs.readFileSync(fullPath, 'utf8');
 return fileContents;
 }
 } catch (error) {
 console.error(`Error reading markdown for ${slug}:`, error);
 }
 return null;
}
