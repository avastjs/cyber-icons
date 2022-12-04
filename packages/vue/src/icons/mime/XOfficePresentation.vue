
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="x-office-presentation"><polygon class="cls-1" points="57 12 57 62 41 62 40 60 24 60 23 62 7 62 7 2 47 2 57 12"/><polygon class="cls-2" points="42.24 60 41.24 58 22.76 58 21.76 60 9 60 9 4 46.17 4 55 12.83 55 60 42.24 60"/><polygon class="cls-3" points="57 12 47 12 47 2 57 12"/><polygon class="cls-1" points="57 12 47 12 47 2 57 12"/><line class="cls-1" x1="43" y1="12" x2="35" y2="12"/><rect class="cls-1" x="13" y="12" width="8" height="6"/><polyline class="cls-1" points="13 18 13 24 11 24"/><rect class="cls-1" x="25" y="12" width="8" height="6"/><polyline class="cls-1" points="25 18 25 24 23 24"/><polyline class="cls-1" points="39 12 39 24 37 24"/><rect class="cls-3" x="12" y="32" width="18" height="10"/><rect class="cls-3" x="34" y="46" width="18" height="10"/><rect class="cls-1" x="12" y="32" width="18" height="10"/><rect class="cls-1" x="34" y="46" width="18" height="10"/><rect class="cls-1" x="34" y="32" width="18" height="10"/><rect class="cls-1" x="12" y="46" width="18" height="10"/></g></svg>
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

  