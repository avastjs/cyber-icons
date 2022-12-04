
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="process-stop"><path class="cls-1" d="M53,12V44a9,9,0,0,0-9,9H12L2,43V2H43Z"/><path class="cls-2" d="M12.83,51,4,42.17V4H42.17L51,12.83V42.18A11,11,0,0,0,42.18,51Z"/><circle class="cls-1" cx="53" cy="53" r="9"/><circle class="cls-3" cx="53" cy="53" r="7"/><polyline class="cls-1" points="56 53 53 53 53 48"/><rect class="cls-1" x="11" y="11" width="33" height="33"/><rect class="cls-3" x="13" y="13" width="29" height="29" transform="translate(55) rotate(90)"/></g></svg>
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

  