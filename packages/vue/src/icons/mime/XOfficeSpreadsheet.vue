
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="x-office-spreadsheet"><polygon class="cls-1" points="57 12 57 62 41 62 40 60 24 60 23 62 7 62 7 2 47 2 57 12"/><polygon class="cls-2" points="42.24 60 41.24 58 22.76 58 21.76 60 9 60 9 4 46.17 4 55 12.83 55 60 42.24 60"/><polygon class="cls-3" points="57 12 47 12 47 2 57 12"/><polygon class="cls-1" points="57 12 47 12 47 2 57 12"/><rect class="cls-3" x="12" y="32" width="10" height="4"/><rect class="cls-3" x="42" y="32" width="10" height="4"/><rect class="cls-3" x="27" y="32" width="10" height="4"/><rect class="cls-3" x="12" y="41" width="10" height="4"/><rect class="cls-3" x="12" y="50" width="10" height="4"/><rect class="cls-1" x="12" y="32" width="10" height="4"/><rect class="cls-1" x="42" y="32" width="10" height="4"/><rect class="cls-1" x="27" y="32" width="10" height="4"/><rect class="cls-1" x="12" y="41" width="10" height="4"/><rect class="cls-1" x="42" y="41" width="10" height="4"/><rect class="cls-1" x="27" y="41" width="10" height="4"/><rect class="cls-1" x="12" y="50" width="10" height="4"/><rect class="cls-1" x="42" y="50" width="10" height="4"/><rect class="cls-1" x="27" y="50" width="10" height="4"/><polyline class="cls-1" points="13 24 10 24 13 24 21 12 24 12"/><polyline class="cls-1" points="21 24 24 24 21 24 13 12 10 12"/><polyline class="cls-1" points="33 24 27 24 27 12 25 12"/><polyline class="cls-1" points="43 18 35 18 35 12 43 12 43 15"/><polyline class="cls-1" points="39 18 43 18 43 24 35 24 35 21"/></g></svg>
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

  