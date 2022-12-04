
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="window-close"><path class="cls-1" d="M53,12V44a9,9,0,0,0-9,9H12L2,43V2H43Z"/><path class="cls-2" d="M12.83,51,4,42.17V4H42.17L51,12.83V42.18A11,11,0,0,0,42.18,51Z"/><circle class="cls-1" cx="53" cy="53" r="9"/><circle class="cls-3" cx="53" cy="53" r="7"/><line class="cls-1" x1="56.54" y1="49.46" x2="49.46" y2="56.54"/><line class="cls-1" x1="56.54" y1="56.54" x2="49.46" y2="49.46"/><rect class="cls-1" x="11" y="14" width="33" height="27"/><rect class="cls-1" x="11" y="14" width="33" height="7"/><rect class="cls-3" x="26" y="3" width="3" height="29" transform="translate(45 -10) rotate(90)"/><line class="cls-1" x1="14" y1="17.5" x2="16" y2="17.5"/><line class="cls-1" x1="18" y1="17.5" x2="20" y2="17.5"/><line class="cls-1" x1="22" y1="17.5" x2="24" y2="17.5"/></g></svg>
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
        size : '24px',
        stroke: "1px",
        className: '',
    })
  </script>

  