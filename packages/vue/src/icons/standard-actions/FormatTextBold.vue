
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="format-text-bold"><polygon class="cls-1" points="57 12 57 62 17 62 7 52 7 2 47 2 57 12"/><polygon class="cls-2" points="17.83 60 9 51.17 9 4 46.17 4 55 12.83 55 60 17.83 60"/><polygon class="cls-1" points="42 18 42 26 36 32 22 32 22 12 36 12 42 18"/><polygon class="cls-1" points="26 28 26 16 34.34 16 38 19.66 38 24.34 34.34 28 26 28"/><polygon class="cls-3" points="28 26 28 18 33.52 18 36 20.48 36 23.52 33.52 26 28 26"/><polygon class="cls-1" points="42 38 42 46 36 52 22 52 22 32 36 32 42 38"/><polygon class="cls-1" points="26 48 26 36 34.34 36 38 39.66 38 44.34 34.34 48 26 48"/><polygon class="cls-3" points="28 46 28 38 33.52 38 36 40.48 36 43.52 33.52 46 28 46"/></g></svg>
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

  