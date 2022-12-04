
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="x-office-address-book"><polygon class="cls-1" points="55 12 55 62 39 62 38 60 22 60 21 62 5 62 5 2 45 2 55 12"/><polygon class="cls-2" points="40.24 60 39.24 58 20.76 58 19.76 60 7 60 7 4 44.17 4 53 12.83 53 60 40.24 60"/><polygon class="cls-3" points="55 12 45 12 45 2 55 12"/><polygon class="cls-1" points="55 12 45 12 45 2 55 12"/><rect class="cls-3" x="10" y="36" width="49" height="20"/><polyline class="cls-1" points="18 52 16 52 20 40 24 40 24 52 22 52"/><path class="cls-1" d="M34,52H28V40h6a2,2,0,0,1,2,2v8A2,2,0,0,1,34,52Z"/><path class="cls-1" d="M46,52H40V40h6a2,2,0,0,1,2,2v8A2,2,0,0,1,46,52Z"/><line class="cls-1" x1="24" y1="47" x2="21" y2="47"/><rect class="cls-1" x="10" y="36" width="49" height="20"/><polygon class="cls-1" points="43 16 43 28 39 32 24 32 24 12 39 12 43 16"/><polygon class="cls-3" points="26 30 26 14 38.17 14 41 16.83 41 27.17 38.17 30 26 30"/><line class="cls-1" x1="21" y1="16" x2="27" y2="16"/><line class="cls-1" x1="21" y1="20" x2="27" y2="20"/><line class="cls-1" x1="21" y1="24" x2="27" y2="24"/><line class="cls-1" x1="21" y1="28" x2="27" y2="28"/></g></svg>
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

  