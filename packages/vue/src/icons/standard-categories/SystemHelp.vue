
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1,.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{stroke-dasharray:4 4;}.cls-4{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="system-help"><circle class="cls-1" cx="32" cy="32" r="30"/><circle class="cls-2" cx="32" cy="32" r="28"/><circle class="cls-3" cx="32" cy="32" r="26"/><path class="cls-4" d="M35,41H29V30.5l3-3A4.5,4.5,0,1,0,27.5,23h-6A10.5,10.5,0,1,1,35,33.06Z"/><rect class="cls-4" x="29" y="45.5" width="6" height="6"/><path class="cls-1" d="M35,41H29V30.5l3-3A4.5,4.5,0,1,0,27.5,23h-6A10.5,10.5,0,1,1,35,33.06Z"/><rect class="cls-1" x="29" y="45.5" width="6" height="6"/></g></svg>
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

  