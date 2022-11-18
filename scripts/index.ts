import fs from 'fs';
import path from 'path';
import convertCode from './templates/react';

export const toCamelCase = (name: string) => {
  return name.split('-').map((str: string) => str.charAt(0).toUpperCase() + str.substring(1)).join('');
}


const svgSourcePath = path.resolve(__dirname, '../svg');


const allIconMap: Record<string, string> = {};

const traverseFiles = (dirPath: string) => {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });
  files.forEach(file => {
    if (file.isFile()) {
      if (path.extname(file.name) === '.svg') {
        allIconMap[file.name] = path.join(dirPath, file.name);
      }
    }
  })
};

const compile = (type: string) => {
  const iconsDir = path.resolve(__dirname, `../packages/${type}/src/icons`);
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  const generateCode = (svgFilePath: string) => {
    const content = fs.readFileSync(svgFilePath, { encoding: "utf8" });
    const fileName = path.basename(svgFilePath, '.svg');
    const extname = type === 'svg' ? '.ts' : '.tsx';
    fs.writeFileSync(path.join(iconsDir, `${toCamelCase(fileName)}${extname}`), convertCode(fileName, content), { encoding: "utf8" });
  };

  const exportCodeIntoMapFile = () => {
    const fileNames = fs.readdirSync(iconsDir);
    let fileContent = `
    /**
     * @file Export All Icons
     */
    `;
    fileNames.forEach(fileName => {
      const name = path.basename(fileName, path.extname(fileName));
      fileContent += `export {default as ${name}} from './icons/${name}';\n`
    });
    fs.writeFileSync(path.resolve(iconsDir, '../map.ts'), fileContent, { encoding: "utf8" });
  };

  Object.values(allIconMap).forEach((filePath) => generateCode(filePath))

  exportCodeIntoMapFile();
};



traverseFiles(svgSourcePath);


compile('react');

