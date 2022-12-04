
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1,.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{stroke-dasharray:3.73 3.73;}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}.cls-4{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="object-flip-horizontal"><line class="cls-1" x1="32" y1="2" x2="32" y2="4"/><line class="cls-2" x1="32" y1="7.73" x2="32" y2="58.13"/><line class="cls-1" x1="32" y1="60" x2="32" y2="62"/><polygon class="cls-1" points="28 18 28 52 8 52 2 46 22 12 28 18"/><polygon class="cls-3" points="8.83 50 4.51 45.68 22.41 15.24 26 18.83 26 50 8.83 50"/><polygon class="cls-1" points="36 18 36 52 56 52 62 46 42 12 36 18"/><polygon class="cls-4" points="38 50 38 18.83 41.59 15.24 59.49 45.68 55.17 50 38 50"/></g></svg>
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

  