
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="applications-graphics"><polyline class="cls-1" points="32 2 56 2 62 8 62 32"/><polyline class="cls-1" points="32 62 8 62 2 56 2 32"/><polygon class="cls-2" points="27.62 30.71 32.77 35.87 30.07 38.8 24.67 33.42 27.62 30.71"/><polygon class="cls-1" points="27.62 30.71 32.77 35.87 30.07 38.8 24.67 33.42 27.62 30.71"/><path class="cls-2" d="M49,18.23l-11.06,12-4.7-4.69,12-11.08A2.65,2.65,0,0,1,49,18.23Z"/><path class="cls-2" d="M13,39.7a7.6,7.6,0,0,1,6.91-2.07l5.6,5.6c.51,2.87-.66,5.86-3.53,5.45-6.28-.9-9,1.8-9,1.8S10,42.68,13,39.7Z"/><polygon class="cls-2" points="52.32 50.03 44.25 47.33 49.62 41.95 49.63 41.95 52.32 50.03"/><path class="cls-2" d="M24.48,16.81l-5.39,5.38L16.41,19.5a3.81,3.81,0,0,1,5.38-5.39Z"/><path class="cls-1" d="M49,18.23l-11.06,12-4.7-4.69,12-11.08A2.65,2.65,0,0,1,49,18.23Z"/><path class="cls-3" d="M20.19,34.32l2.69-2.7,9,9-2.69,2.69a2.54,2.54,0,0,1-3.6,0l-5.38-5.38A2.52,2.52,0,0,1,20.19,34.32Z"/><path class="cls-1" d="M20.19,34.32l2.69-2.7,9,9-2.69,2.69a2.54,2.54,0,0,1-3.6,0l-5.38-5.38A2.52,2.52,0,0,1,20.19,34.32Z"/><path class="cls-1" d="M13,39.7a7.6,7.6,0,0,1,6.91-2.07l5.6,5.6c.51,2.87-.66,5.86-3.53,5.45-6.28-.9-9,1.8-9,1.8S10,42.68,13,39.7Z"/><polygon class="cls-1" points="52.32 50.03 44.25 47.33 49.62 41.95 49.63 41.95 52.32 50.03"/><polygon class="cls-3" points="49.62 41.95 44.25 47.33 44.24 47.33 32.77 35.87 19.09 22.19 24.48 16.81 33.23 25.56 37.93 30.25 49.62 41.95"/><polygon class="cls-1" points="49.62 41.95 44.25 47.33 44.24 47.33 32.77 35.87 19.09 22.19 24.48 16.81 33.23 25.56 37.93 30.25 49.62 41.95"/><path class="cls-1" d="M24.48,16.81l-5.39,5.38L16.41,19.5a3.81,3.81,0,0,1,5.38-5.39Z"/><line class="cls-1" x1="44.24" y1="47.34" x2="44.24" y2="47.33"/></g></svg>
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

  