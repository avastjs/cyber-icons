
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="accessories-character-map"><polygon class="cls-1" points="62 52 62 56 56 62 22 62 22 58 28 52 62 52"/><polygon class="cls-2" points="24 60 24 58.83 28.83 54 60 54 60 55.17 55.17 60 24 60"/><polygon class="cls-1" points="58 12 58 52 28 52 22 58 14 58 8 52 8 39 2 36 2 20 6 18 6 6 8 2 24 2 26 6 52 6 58 12"/><polygon class="cls-3" points="14.83 56 10 51.17 10 37.76 4 34.76 4 21.24 8 19.24 8 6.47 9.24 4 22.76 4 24.76 8 51.17 8 56 12.83 56 50 27.17 50 21.17 56 14.83 56"/><line class="cls-1" x1="6" y1="18" x2="6" y2="34"/><line class="cls-1" x1="6" y1="46" x2="2" y2="44"/><line class="cls-1" x1="6" y1="42" x2="2" y2="40"/><line class="cls-1" x1="6" y1="50" x2="2" y2="48"/><line class="cls-1" x1="26" y1="6" x2="12" y2="6"/><line class="cls-1" x1="28" y1="4" x2="27" y2="2"/><line class="cls-1" x1="31" y1="4" x2="30" y2="2"/><line class="cls-1" x1="34" y1="4" x2="33" y2="2"/><line class="cls-1" x1="37" y1="4" x2="36" y2="2"/><line class="cls-1" x1="40" y1="4" x2="39" y2="2"/><line class="cls-1" x1="43" y1="4" x2="42" y2="2"/><line class="cls-1" x1="46" y1="4" x2="45" y2="2"/><line class="cls-1" x1="49" y1="4" x2="48" y2="2"/><line class="cls-1" x1="52" y1="4" x2="51" y2="2"/><polygon class="cls-2" points="49 43 49 47 41.72 47 31.97 25.87 29.76 21.09 29.72 21 24 21 24 17 32.28 17 44.28 43 49 43"/><polygon class="cls-2" points="31.97 25.87 27.78 35 25.95 39 22.28 47 15 47 15 43 19.72 43 29.76 21.09 31.97 25.87"/><polygon class="cls-2" points="32 35 34 39 25.95 39 27.78 35 32 35"/><polygon class="cls-1" points="49 43 49 47 41.72 47 31.97 25.87 29.76 21.09 29.72 21 24 21 24 17 32.28 17 44.28 43 49 43"/><polygon class="cls-1" points="31.97 25.87 27.78 35 25.95 39 22.28 47 15 47 15 43 19.72 43 29.76 21.09 31.97 25.87"/><polygon class="cls-1" points="32 35 34 39 25.95 39 27.78 35 32 35"/></g></svg>
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

  