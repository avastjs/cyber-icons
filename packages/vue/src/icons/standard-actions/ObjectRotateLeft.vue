
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="object-rotate-left"><polygon class="cls-1" points="2 12 18 22 18 2 2 12"/><polygon class="cls-2" points="5.77 12 16 5.61 16 18.39 5.77 12"/><polyline class="cls-1" points="18 12 56 12 62 18 62 56 56 62 18 62 12 56"/><polygon class="cls-1" points="50 30 50 50 30 50 24 44 24 24 44 24 50 30"/><polygon class="cls-3" points="30.83 48 26 43.17 26 26 43.17 26 48 30.83 48 48 30.83 48"/></g></svg>
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

  