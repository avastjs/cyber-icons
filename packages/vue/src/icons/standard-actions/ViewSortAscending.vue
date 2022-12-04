
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="view-sort-ascending"><polygon class="cls-1" points="27 18 20 18 20 62 12 56 12 18 5 18 16 2 27 18"/><polygon class="cls-2" points="14 55 14 16 8.8 16 16 5.53 23.2 16 18 16 18 58 14 55"/><polygon class="cls-1" points="37 34 27 34 27 24 37 34"/><polygon class="cls-3" points="29 32 29 28.83 32.17 32 29 32"/><polygon class="cls-1" points="48 48 27 48 27 38 38 38 48 48"/><polygon class="cls-3" points="29 46 29 40 37.17 40 43.17 46 29 46"/><polygon class="cls-1" points="59 62 27 62 27 52 49 52 59 62"/><polygon class="cls-3" points="29 60 29 54 48.17 54 54.17 60 29 60"/></g></svg>
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

  