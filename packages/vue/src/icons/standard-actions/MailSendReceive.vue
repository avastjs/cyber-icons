
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="mail-send-receive"><polygon class="cls-1" points="62 9 62 45 50.92 45 53 42 35 42 37.08 45 2 45 2 9 32 30 62 9"/><polygon class="cls-2" points="4 43 4 12.84 32 32.44 60 12.84 60 43 4 43"/><polygon class="cls-1" points="62 9 32 30 2 9 62 9"/><polygon class="cls-3" points="8.35 11 55.66 11 32 27.56 8.35 11"/><polygon class="cls-1" points="53 42 50.92 45 50 46.33 44 55 37.08 45 35 42 53 42"/><polygon class="cls-3" points="38.82 44 44 51.49 49.18 44 38.82 44"/><polyline class="cls-1" points="44 42 44 35 50 29"/><polygon class="cls-1" points="20 29 29 42 11 42 14 37.67 20 29"/><polygon class="cls-3" points="25.18 40 20 32.51 14.82 40 25.18 40"/><polyline class="cls-1" points="20 42 20 49 14 55"/></g></svg>
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

  