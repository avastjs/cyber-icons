
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1,.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{stroke-dasharray:3.73 3.73;}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}.cls-4{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="object-flip-vertical"><line class="cls-1" x1="62" y1="32" x2="60" y2="32"/><line class="cls-2" x1="56.27" y1="32" x2="5.87" y2="32"/><line class="cls-1" x1="4" y1="32" x2="2" y2="32"/><polygon class="cls-1" points="46 28 12 28 12 8 18 2 52 22 46 28"/><polygon class="cls-3" points="14 8.83 18.32 4.51 48.76 22.41 45.17 26 14 26 14 8.83"/><polygon class="cls-1" points="46 36 12 36 12 56 18 62 52 42 46 36"/><polygon class="cls-4" points="14 38 45.17 38 48.76 41.59 18.32 59.49 14 55.17 14 38"/></g></svg>
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

  