
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}</svg:style> </defs><g id="application-x-executable"><polygon class="cls-1" points="42.24 60 41.24 58 22.76 58 21.76 60 9 60 9 4 46.17 4 55 12.83 55 60 42.24 60"/><rect class="cls-2" x="12" y="22" width="40" height="20"/><polyline class="cls-3" points="23 38 15 38 17 32 15 26 23 26"/><line class="cls-3" x1="17" y1="32" x2="21" y2="32"/><polyline class="cls-3" points="49 38 41 38 43 32 41 26 49 26"/><line class="cls-3" x1="43" y1="32" x2="47" y2="32"/><polyline class="cls-3" points="28 38 25 38 28 38 36 26 39 26"/><polyline class="cls-3" points="36 38 39 38 36 38 28 26 25 26"/><polygon class="cls-3" points="57 12 57 62 41 62 40 60 24 60 23 62 7 62 7 2 47 2 57 12"/><polygon class="cls-2" points="57 12 47 12 47 2 57 12"/><polygon class="cls-3" points="57 12 47 12 47 2 57 12"/><rect class="cls-3" x="12" y="22" width="40" height="20"/></g></svg>
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

  