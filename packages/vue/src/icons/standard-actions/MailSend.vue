
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="mail-send"><polygon class="cls-1" points="62 7 62 42 53.33 42 49 39 49 42 2 42 2 7 32 28 62 7"/><polygon class="cls-2" points="4 40 4 10.84 32 30.44 60 10.84 60 40 4 40"/><polygon class="cls-1" points="62 7 32 28 2 7 62 7"/><polygon class="cls-3" points="8.35 9 55.66 9 32 25.56 8.35 9"/><polygon class="cls-1" points="62 48 49 57 49 39 53.33 42 62 48"/><polygon class="cls-3" points="51 53.18 58.49 48 51 42.82 51 53.18"/><polyline class="cls-1" points="49 48 42 48 36 42 36 31"/></g></svg>
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

  