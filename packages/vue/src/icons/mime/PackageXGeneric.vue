
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="package-x-generic"><polygon class="cls-1" points="57 12 57 62 41 62 40 60 24 60 23 62 7 62 7 2 47 2 57 12"/><polygon class="cls-2" points="42.24 60 41.24 58 22.76 58 21.76 60 9 60 9 4 46.17 4 55 12.83 55 60 42.24 60"/><polygon class="cls-3" points="57 12 47 12 47 2 57 12"/><polygon class="cls-1" points="57 12 47 12 47 2 57 12"/><polygon class="cls-1" points="44 26 44 38 32 44 32 32 44 26"/><polygon class="cls-3" points="34 33.24 42 29.24 42 36.76 34 40.76 34 33.24"/><polygon class="cls-1" points="44 26 32 32 20 26 32 20 44 26"/><polygon class="cls-3" points="24.47 26 32 22.24 39.53 26 32 29.76 24.47 26"/><polygon class="cls-1" points="32 32 32 44 20 38 20 26 32 32"/><polygon class="cls-3" points="22 36.76 22 29.24 30 33.24 30 40.76 22 36.76"/></g></svg>
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

  