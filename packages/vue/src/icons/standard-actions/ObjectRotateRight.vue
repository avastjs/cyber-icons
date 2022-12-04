
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="object-rotate-right"><polygon class="cls-1" points="62 12 46 22 46 2 62 12"/><polygon class="cls-2" points="58.23 12 48 5.61 48 18.39 58.23 12"/><polyline class="cls-1" points="46 12 8 12 2 18 2 56 8 62 46 62 52 56"/><polygon class="cls-1" points="40 30 40 50 20 50 14 44 14 24 34 24 40 30"/><polygon class="cls-3" points="20.83 48 16 43.17 16 26 33.17 26 38 30.83 38 48 20.83 48"/></g></svg>
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

  