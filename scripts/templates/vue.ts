import { colors, ICON_SIZE, STROKE_SIZE } from "../util";

const toSmallCamelCase = (name: string) => {
  const formatted = name.split('-').map((str) => str.charAt(0).toUpperCase() + str.substring(1)).join('')
  return formatted.charAt(0).toLowerCase() + formatted.substring(1);
}

function processStyle(svg: string) {

  // replace colors with props, soft is the original color to be replaced
  const svgColorsReplaced = svg
    .replaceAll(colors.soft.primary, "{{primary ? primary : colors[theme].primary}}")
    .replaceAll(colors.soft.secondary, "{{secondary ? secondary : colors[theme].secondary}}")
    .replaceAll(colors.soft.border, "{{border ? border : colors[theme].border}}")
    .replaceAll("stroke-width:1.5px", "stroke-width:{{stroke}}")
    .replace("<svg", `<svg :class="className" :height="size" :width="size"`)

  // replace stroke
  const svgStrokeReplaced = svgColorsReplaced.replaceAll(/strokeWidth:(.*px`)/g, function(a, b) {
    return 'stroke-width: `${stroke}`';
  })

  const svgStyleReplaced = svgStrokeReplaced.replace(/<style>(.*)<\/style>/g, function(a, b) {
    return `<svg:style type="text/css">${b}</svg:style> `;
  })

  return svgStyleReplaced;
}


export default (name: string, content: string): string => {
  const str = `
  <template>
		${processStyle(content)}
  </template>
  <script lang="ts" setup>
    import { colors } from '../../util';

    withDefaults(defineProps<{
        theme?: string;
        size?: number | string;
        primary?: string;
        secondary?: string;
        border?: string;
        stroke?: string;
        className?: string;
      }>(), {
       theme : 'default',
        size : '${ICON_SIZE}',
        stroke: "${STROKE_SIZE}",
        className: '',
    })
  </script>

  `;
  return str
}
