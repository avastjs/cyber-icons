
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="view-sort-descending"><polygon class="cls-1" points="27 46 20 46 20 2 12 8 12 46 5 46 16 62 27 46"/><polygon class="cls-2" points="14 9 14 48 8.8 48 16 58.47 23.2 48 18 48 18 6 14 9"/><polygon class="cls-1" points="37 30 27 30 27 40 37 30"/><polygon class="cls-3" points="29 32 29 35.17 32.17 32 29 32"/><polygon class="cls-1" points="48 16 27 16 27 26 38 26 48 16"/><polygon class="cls-3" points="29 18 29 24 37.17 24 43.17 18 29 18"/><polygon class="cls-1" points="59 2 27 2 27 12 49 12 59 2"/><polygon class="cls-3" points="29 4 29 10 48.17 10 54.17 4 29 4"/></g></svg>
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

  