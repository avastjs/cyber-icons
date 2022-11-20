import fs from 'fs';
import path from 'path';
import convertCode from './templates/react';
import { categories } from './util';

export const toCamelCase = (name: string) => {
  return name.split('-').map((str: string) => str.charAt(0).toUpperCase() + str.substring(1)).join('');
}


const svgSourcePath = path.resolve(__dirname, '../svg');


const allIconMap: Record<string, any> = {};

const traverseFiles = (dirPath: string) => {
  categories.forEach(category => {
    const iconsDir = path.resolve(dirPath, category);
    const files = fs.readdirSync(iconsDir, { withFileTypes: true });
    files.forEach(file => {
      if (file.isFile()) {
        if (path.extname(file.name) === '.svg') {
          allIconMap[file.name] = {
            file: path.join(dirPath, category, file.name),
            category
          }
        }
      }
    })
  })
};

const compile = (type: string) => {
  const iconsDir = path.resolve(__dirname, `../packages/${type}/src/icons`);
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  fs.copyFileSync(path.resolve(__dirname, `./util.ts`), path.resolve(__dirname, `../packages/${type}/src/util.ts`));


  const generateCode = (svgFilePath: string, category: string) => {
    const content = fs.readFileSync(svgFilePath, { encoding: "utf8" });
    const fileName = path.basename(svgFilePath, '.svg');
    const extname = type === 'svg' ? '.ts' : '.tsx';

    const iconsDirCategory = path.resolve(__dirname, `../packages/${type}/src/icons`, category);
    if (!fs.existsSync(iconsDirCategory)) {
      fs.mkdirSync(iconsDirCategory);
    }
    fs.writeFileSync(path.join(iconsDirCategory, `${toCamelCase(fileName)}${extname}`), convertCode(fileName, content), { encoding: "utf8" });
  };

  const exportCodeIntoMapFile = () => {
    let fileContent = `
    /**
     * @file Export All Icons
     */
    `;
    let filesByCategoryContent: any = {}
    categories.forEach(category => {
      let fileLocalContent = ''
      const iconsDirCategory = path.resolve(iconsDir, category);
      const files = fs.readdirSync(iconsDirCategory, { withFileTypes: true });
      files.forEach(file => {
        const name = path.basename(file.name, path.extname(file.name));
        if (name !== 'index') {
          fileContent += `export {default as ${name}} from './icons/${category}/${name}';\n`
          fileLocalContent += `export {default as ${name}} from './${name}';\n`

          if (!filesByCategoryContent[category]) {
            filesByCategoryContent[category] = []
          }
          filesByCategoryContent[category].push(name)
        }
      });
      fs.writeFileSync(path.resolve(iconsDirCategory, './index.ts'), fileLocalContent, { encoding: "utf8" });
    })

    fileContent += `export const iconsByCategory: Record<string, string[]> = ${JSON.stringify(filesByCategoryContent)};\n`

    fs.writeFileSync(path.resolve(iconsDir, '../map.ts'), fileContent, { encoding: "utf8" });
  };

  Object.values(allIconMap).forEach(({ file, category }) => generateCode(file, category))

  exportCodeIntoMapFile();
};



traverseFiles(svgSourcePath);


compile('react');

