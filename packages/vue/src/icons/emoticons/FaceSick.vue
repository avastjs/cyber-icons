
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-4{fill:{{border ? border : colors[theme].border}};}</svg:style> </defs><g id="face-sick"><polygon class="cls-1" points="60 26.36 60 37.64 58.12 38.58 58.12 50.93 42 59.08 42 56.3 32 62 22 56.3 22 59.08 5.88 50.93 5.88 38.58 4 37.64 4 26.36 5.88 25.42 5.88 13.07 22 4.92 22 7.7 32 2 42 7.7 42 4.92 58.12 13.07 58.12 25.42 60 26.36"/><polygon class="cls-2" points="18 49.42 18 52.58 9.88 48.47 9.88 36.11 8 35.17 8 28.83 9.88 27.89 9.88 15.53 18 11.42 18 14.58 32 6.6 46 14.58 46 11.42 54.12 15.53 54.12 27.89 56 28.83 56 35.17 54.12 36.11 54.12 48.47 46 52.58 46 49.42 32 57.4 18 49.42"/><polygon class="cls-3" points="60 26.36 60 37.64 58.12 38.58 58.12 50.93 42 59.08 42 56.3 32 62 22 56.3 22 59.08 5.88 50.93 5.88 38.58 4 37.64 4 26.36 5.88 25.42 5.88 13.07 22 4.92 22 7.7 32 2 42 7.7 42 4.92 58.12 13.07 58.12 25.42 60 26.36"/><polygon class="cls-3" points="18 49.42 18 52.58 9.88 48.47 9.88 36.11 8 35.17 8 28.83 9.88 27.89 9.88 15.53 18 11.42 18 14.58 32 6.6 46 14.58 46 11.42 54.12 15.53 54.12 27.89 56 28.83 56 35.17 54.12 36.11 54.12 48.47 46 52.58 46 49.42 32 57.4 18 49.42"/><path class="cls-4" d="M44,24h0a2,2,0,0,1,2,2v0a8,8,0,0,1-8,8h0a2,2,0,0,1-2-2v0a8,8,0,0,1,8-8Z" transform="translate(-8.5 37.49) rotate(-45)"/><path class="cls-4" d="M20,24h0a8,8,0,0,1,8,8v0a2,2,0,0,1-2,2h0a8,8,0,0,1-8-8v0A2,2,0,0,1,20,24Z" transform="translate(18.75 65.77) rotate(-135)"/><path class="cls-4" d="M31.45,44.92l-5.81-1.66a2,2,0,0,0-1.18,0l-2.93,1A2,2,0,0,1,19,43h0a2,2,0,0,1,1.26-2.53l4.11-1.37a2,2,0,0,1,1.18,0l5.9,1.68a1.87,1.87,0,0,0,1.1,0l5.9-1.68a2,2,0,0,1,1.18,0l4.11,1.37A2,2,0,0,1,45,43h0a2,2,0,0,1-2.53,1.26l-2.93-1a2,2,0,0,0-1.18,0l-5.81,1.66A1.87,1.87,0,0,1,31.45,44.92Z"/><circle class="cls-4" cx="49" cy="19" r="1"/><circle class="cls-4" cx="50" cy="23" r="1"/><circle class="cls-4" cx="46" cy="22" r="1"/><circle class="cls-4" cx="15" cy="19" r="1"/><circle class="cls-4" cx="14" cy="23" r="1"/><circle class="cls-4" cx="18" cy="22" r="1"/></g></svg>
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

  