import { colors, ICON_SIZE, STROKE_SIZE } from "../util";

const toSmallCamelCase = (name: string) => {
  const formatted = name.split('-').map((str) => str.charAt(0).toUpperCase() + str.substring(1)).join('')
  return formatted.charAt(0).toLowerCase() + formatted.substring(1);
}

function processStyle(svg: string, rx = /\.cls-\d\{(.[^\}]*)\}/gm) {
  const classesName: any = {}

  let match = rx.exec(svg);
  let svgProccessed = svg

  while (match != null) {
    const className = /\.(cls-\d)/gm.exec(match[0])

    if (className) {
      let rxValues = /([^:]*):([^:]*);/gm;
      let matchValues = rxValues.exec(match[1]);
      let style = ''
      while (matchValues != null) {
        style += `${toSmallCamelCase(matchValues[1])}:\`${matchValues[2]}\`,`
        matchValues = rxValues.exec(match[1]);
      }

      console.log('style:', className[1], match[1])

      style = style.substring(0, style.length - 1)

      if (classesName[className[1]]) {
        classesName[className[1]] = [...classesName[className[1]], style]
      } else {
        classesName[className[1]] = [style]
      }
 

      match = rx.exec(svg);
    }
  }

  // multiple classes
  const rxExtra = /\.cls-\d,.[^\}]*\{(.[^\}]*)\}/gm
  let matchExtra = rxExtra.exec(svgProccessed);

  while (matchExtra != null) {
    console.log('test:', matchExtra[0])
    const className = /\.(cls-\d)/gm.exec(matchExtra[0])

    if (className) {
      let rxValues = /([^:]*):([^:]*);/gm;
      let matchValues = rxValues.exec(matchExtra[1]);

      let style = ''
      while (matchValues != null) {
        style += `${toSmallCamelCase(matchValues[1])}:\`${matchValues[2]}\`,`
        matchValues = rxValues.exec(matchExtra[1]);
      }
      style = style.substring(0, style.length - 1)

      if (classesName[className[1]]) {
        classesName[className[1]] = [...classesName[className[1]], style]
      } else {
        classesName[className[1]] = [style]
      }
    }
    matchExtra = rxExtra.exec(svgProccessed);
  }

  // inject class style

  console.log('classNa', classesName)
  Object.keys(classesName).forEach(key => {
    const styles = classesName[key].join(',')
    svgProccessed = svgProccessed.replaceAll(`class="${key}"`, `style={{${styles}}}`)
  })
  //
  //console.log('css process', svgProccessed)

  // replace style
  const svgStyleReplaced = svgProccessed.replace(/<style>(.*)<\/style>/g, function(a, b) {
    return '';
  })

  // replace colors with props, soft is the original color to be replaced
  const svgColorsReplaced = svgStyleReplaced
    .replaceAll(colors.soft.primary, "${primary ? primary : colors[theme].primary}")
    .replaceAll(colors.soft.secondary, "${secondary ? secondary : colors[theme].secondary}")
    .replaceAll(colors.soft.border, "${border ? border : colors[theme].border}")
    .replaceAll("class", "className")
    .replaceAll("strokeWidth:`1.5px`", "strokeWidth:`${stroke}`")
    .replace("<svg", "<svg onClick={onClick} className={className} height={size} width={size}")

  // replace stroke
  const svgStrokeReplaced = svgColorsReplaced.replaceAll(/strokeWidth:(.*px`)/g, function(a, b) {
    return 'strokeWidth: `${stroke}`';
  })
  //console.log('result:', svgColorsReplaced)

  return svgColorsReplaced;
}


export default (name: string, content: string): string => {

  const str = `
  import React from 'react';

  import { colors, IconProps } from '../../util';

  export default ({
    theme = 'default',
		size = '${ICON_SIZE}',
    primary,
    secondary,
    border,
    stroke = "${STROKE_SIZE}",
    className = "",
    onClick,
	}: IconProps) => (
		${processStyle(content)}
	);
  `;
  return str
}
