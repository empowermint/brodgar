import fs from 'fs';

export default function getSlugs(dir) {
  const fileNames = fs.readdirSync(dir);
  
  return fileNames.map(fileName => {
    fileName = fileName.replace(/\.md$/, '');
    
    return {
      params: {
        pageSlug: fileName
      }
    }
  })
}
