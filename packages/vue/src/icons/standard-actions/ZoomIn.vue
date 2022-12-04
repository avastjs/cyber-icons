
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="zoom-in"><circle class="cls-1" cx="24" cy="22" r="20"/><circle class="cls-2" cx="24" cy="22" r="18"/><polygon class="cls-1" points="60 53.93 58.59 62 41.2 43.62 42.62 36.54 60 53.93"/><polygon class="cls-3" points="43.37 42.99 43.84 40.6 57.85 54.61 57.3 57.73 43.37 42.99"/><line class="cls-1" x1="41.94" y1="39.94" x2="38.14" y2="36.14"/><polygon class="cls-1" points="36 19 36 25 27 25 27 34 21 34 21 25 12 25 12 19 21 19 21 10 27 10 27 19 36 19"/><polygon class="cls-3" points="23 32 23 23 14 23 14 21 23 21 23 12 25 12 25 21 34 21 34 23 25 23 25 32 23 32"/></g></svg>
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

  