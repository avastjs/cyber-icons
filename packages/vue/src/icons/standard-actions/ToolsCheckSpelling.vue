
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="tools-check-spelling"><polygon class="cls-1" points="57 12 57 62 17 62 7 52 7 2 47 2 57 12"/><polygon class="cls-2" points="17.83 60 9 51.17 9 4 46.17 4 55 12.83 55 60 17.83 60"/><polygon class="cls-1" points="47 42 39.32 42 35.32 30 28.68 30 24.68 42 17 42 27 12 37 12 47 42"/><polygon class="cls-3" points="40.76 40 36.76 28 27.24 28 23.24 40 19.77 40 28.44 14 35.56 14 44.23 40 40.76 40"/><polygon class="cls-1" points="34.92 26 29.08 26 31.68 17 32.32 17 34.92 26"/><polyline class="cls-1" points="12 48 17 52 22 48 26.99 52 31.99 48 36.99 52 41.99 48 47 52 52 48"/></g></svg>
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

  