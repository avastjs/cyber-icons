
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}</svg:style> </defs><g id="applications-office"><polygon class="cls-1" points="47.07 60 43.07 54 20.93 54 16.93 60 4 60 4 42.07 10 38.07 10 25.93 4 21.93 4 4 26.93 4 30.93 10 53.07 10 57.07 4 60 4 60 21.93 54 25.93 54 38.07 60 42.07 60 60 47.07 60"/><polygon class="cls-2" points="49 18.58 49 45.42 41.84 49 15 45.42 41.84 45.42 41.84 19.47 20.37 22.16 20.37 41.84 15 45.42 15 18.58 41.84 15 49 18.58"/><polygon class="cls-3" points="56 27 56 37 62 41 62 62 46 62 42 56 22 56 18 62 2 62 2 41 8 37 8 27 2 23 2 2 28 2 32 8 52 8 56 2 62 2 62 23 56 27"/></g></svg>
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

  