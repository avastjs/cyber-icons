
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="video-x-generic"><polygon class="cls-1" points="57 12 57 62 41 62 40 60 24 60 23 62 7 62 7 2 47 2 57 12"/><polygon class="cls-2" points="42.24 60 41.24 58 22.76 58 21.76 60 9 60 9 4 46.17 4 55 12.83 55 60 42.24 60"/><polygon class="cls-3" points="57 12 47 12 47 2 57 12"/><polygon class="cls-1" points="57 12 47 12 47 2 57 12"/><polyline class="cls-1" points="49 50 42 50 49 44 49 56 47 56"/><polyline class="cls-1" points="25 56 27 56 27 44 21 50 15 44 15 56 17 56"/><rect class="cls-1" x="31" y="44" width="8" height="6"/><polyline class="cls-1" points="31 50 31 56 29 56"/><rect class="cls-1" x="16" y="17" width="20" height="18"/><rect class="cls-3" x="19" y="18" width="14" height="16" transform="translate(52) rotate(90)"/><polygon class="cls-1" points="48 36 36 28 36 24 48 16 48 36"/><polygon class="cls-3" points="38 26.93 38 25.07 46 19.74 46 32.26 38 26.93"/></g></svg>
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

  