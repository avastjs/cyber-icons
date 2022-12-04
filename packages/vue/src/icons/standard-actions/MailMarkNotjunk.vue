
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="mail-mark-notjunk"><path class="cls-1" d="M62,10V45H57a9,9,0,0,0-18,0H2V10L32,31Z"/><path class="cls-2" d="M58.82,43a11,11,0,0,0-21.64,0H4V13.84l28,19.6,28-19.6V43Z"/><polygon class="cls-1" points="62 10 32 31 2 10 62 10"/><polygon class="cls-3" points="8.35 12 55.66 12 32 28.56 8.35 12"/><circle class="cls-1" cx="48" cy="45" r="9"/><circle class="cls-3" cx="48" cy="45" r="7"/><polyline class="cls-1" points="51.93 42.32 46.57 47.68 44.07 45.18"/></g></svg>
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

  