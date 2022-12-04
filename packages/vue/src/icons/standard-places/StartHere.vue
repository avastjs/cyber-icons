
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="start-here"><polygon class="cls-1" points="62 55.72 49.49 62 44.09 56.36 35.24 52 34.81 51.79 36.07 47.99 43.32 49.72 36.93 36.97 40.51 35.18 44.54 43.22 48.12 41.43 48.56 42.32 48.57 42.32 52.14 40.53 52.59 41.42 56.16 39.63 58 43.29 58.41 44.1 62 55.72"/><polygon class="cls-2" points="58 12 58 43.29 56.16 39.63 52.59 41.42 52.14 40.53 48.57 42.32 48.56 42.32 48.12 41.43 44.54 43.22 40.51 35.18 36.93 36.97 43.32 49.72 36.07 47.99 34.81 51.79 35.24 52 28 52 22 58 14 58 8 52 8 45 2 42 2 26 6 24 6 6 8 2 24 2 26 6 52 6 58 12"/><polygon class="cls-3" points="14.83 56 10 51.17 10 43.76 4 40.76 4 27.24 8 25.24 8 6.47 9.24 4 22.76 4 24.76 8 51.17 8 56 12.83 56 37.47 53.48 38.74 53.03 37.85 49.46 39.63 49.02 38.74 45.43 40.54 41.4 32.5 34.24 36.08 39.61 46.78 34.75 45.62 33.3 50 27.17 50 21.17 56 14.83 56"/><polygon class="cls-1" points="40.5 28 23.5 18.18 23.5 37.81 40.5 28"/><polygon class="cls-2" points="40.5 28 23.5 18.18 23.5 37.81 40.5 28"/><polygon class="cls-2" points="51.26 47.69 48.12 41.43 44.54 43.22 47.68 49.48 44.54 43.22 40.51 35.18 36.93 36.97 43.33 49.72 36.07 47.99 34.81 51.79 44.09 56.36 49.49 62 62 55.72 58.41 44.1 56.16 39.63 52.59 41.42 54.83 45.89 52.14 40.53 48.56 42.32 51.26 47.69"/><polygon class="cls-2" points="62 55.72 49.49 62 44.09 56.36 35.24 52 34.81 51.79 36.07 47.99 43.32 49.72 36.93 36.97 40.51 35.18 44.54 43.22 48.12 41.43 48.56 42.32 48.57 42.32 52.14 40.53 52.59 41.42 56.16 39.63 58 43.29 58.41 44.1 62 55.72"/></g></svg>
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

  