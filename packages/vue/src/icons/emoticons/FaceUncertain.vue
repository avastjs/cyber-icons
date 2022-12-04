
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-4{fill:{{border ? border : colors[theme].border}};}</svg:style> </defs><g id="face-uncertain"><polygon class="cls-1" points="60 26.36 60 37.64 58.12 38.58 58.12 50.93 42 59.08 42 56.3 32 62 22 56.3 22 59.08 5.88 50.93 5.88 38.58 4 37.64 4 26.36 5.88 25.42 5.88 13.07 22 4.92 22 7.7 32 2 42 7.7 42 4.92 58.12 13.07 58.12 25.42 60 26.36"/><polygon class="cls-2" points="18 49.42 18 52.58 9.88 48.47 9.88 36.11 8 35.17 8 28.83 9.88 27.89 9.88 15.53 18 11.42 18 14.58 32 6.6 46 14.58 46 11.42 54.12 15.53 54.12 27.89 56 28.83 56 35.17 54.12 36.11 54.12 48.47 46 52.58 46 49.42 32 57.4 18 49.42"/><polygon class="cls-3" points="60 26.36 60 37.64 58.12 38.58 58.12 50.93 42 59.08 42 56.3 32 62 22 56.3 22 59.08 5.88 50.93 5.88 38.58 4 37.64 4 26.36 5.88 25.42 5.88 13.07 22 4.92 22 7.7 32 2 42 7.7 42 4.92 58.12 13.07 58.12 25.42 60 26.36"/><polygon class="cls-3" points="18 49.42 18 52.58 9.88 48.47 9.88 36.11 8 35.17 8 28.83 9.88 27.89 9.88 15.53 18 11.42 18 14.58 32 6.6 46 14.58 46 11.42 54.12 15.53 54.12 27.89 56 28.83 56 35.17 54.12 36.11 54.12 48.47 46 52.58 46 49.42 32 57.4 18 49.42"/><path class="cls-4" d="M42,21h4a0,0,0,0,1,0,0v4a6,6,0,0,1-6,6H36a0,0,0,0,1,0,0V27A6,6,0,0,1,42,21Z" transform="translate(30.39 -21.38) rotate(45)"/><path class="cls-4" d="M18,20h4a6,6,0,0,1,6,6v4a0,0,0,0,1,0,0H24a6,6,0,0,1-6-6V20A0,0,0,0,1,18,20Z" transform="translate(46 50) rotate(-180)"/><path class="cls-4" d="M37,46.74,25.37,40.09a2,2,0,0,0-2.24.17l-1.32,1.05A2,2,0,0,1,19,41h0a2,2,0,0,1,.31-2.81l3.44-2.75A2,2,0,0,1,25,35.26L36.77,42a2,2,0,0,0,2.15-.11l3.29-2.35A2,2,0,0,1,45,40h0a2,2,0,0,1-.46,2.79l-5.38,3.84A2,2,0,0,1,37,46.74Z"/></g></svg>
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

  