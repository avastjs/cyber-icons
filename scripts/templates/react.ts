import { colors, ICON_SIZE, STROKE_SIZE } from "../util";

const toSmallCamelCase = (name: string) => {
  const formatted = name.split('-').map((str) => str.charAt(0).toUpperCase() + str.substring(1)).join('')
  return formatted.charAt(0).toLowerCase() + formatted.substring(1);
}

function processStyle(svg: string) {
  let rx = /\.cls-\d\{(.[^\}]*)\}/gm;
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
      style = style.substring(0, style.length - 1)

      svgProccessed = svgProccessed.replaceAll(`class="${className[1]}"`, `style={{${style}}}`)

      match = rx.exec(svg);
    }
  }


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
