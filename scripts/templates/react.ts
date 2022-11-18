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

  // replace colors with props
  const svgColorsReplaced = svgStyleReplaced
    .replaceAll(colors.primary, "${primary}")
    .replaceAll(colors.secondary, "${secondary}")
    .replaceAll(colors.border, "${border}")
    .replaceAll("class", "className")
    .replaceAll("strokeWidth:`1.5px`", "strokeWidth:`${stroke}`")
    .replace("<svg", "<svg className={className} height={size} width={size}")

  // replace stroke
  const svgStrokeReplaced = svgColorsReplaced.replaceAll(/strokeWidth:(.*px`)/g, function(a, b) {
    return 'strokeWidth: `${stroke}`';
  })

  return svgColorsReplaced;
}


export default (name: string, content: string): string => {

  const str = `
  import React from 'react';

  import { IconProps } from '../util';

  export default ({
		size = '${ICON_SIZE}',
    primary = "${colors.primary}",
    secondary = "${colors.secondary}",
    border = "${colors.border}",
    stroke = "${STROKE_SIZE}",
    className = "",
	}: IconProps) => (
		${processStyle(content)}
	);
  `;
  return str
}
