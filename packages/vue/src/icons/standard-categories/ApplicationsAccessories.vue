
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}</svg:style> </defs><g id="applications-accessories"><polygon class="cls-1" points="42 32 42 54 17 54 16 56 6 56 6 54 2 54 2 32 26 32 28 28 38 28 38 32 42 32"/><rect class="cls-2" x="6" y="36" width="8" height="14"/><rect class="cls-2" x="18" y="36" width="8" height="14"/><rect class="cls-2" x="30" y="36" width="8" height="14"/><rect class="cls-2" x="42" y="38" width="4" height="10"/><rect class="cls-2" x="18" y="10" width="6" height="6"/><rect class="cls-3" x="6" y="36" width="8" height="14"/><line class="cls-3" x1="10" y1="36" x2="10" y2="50"/><rect class="cls-3" x="18" y="36" width="8" height="14"/><line class="cls-3" x1="22" y1="36" x2="22" y2="50"/><rect class="cls-3" x="30" y="36" width="8" height="14"/><line class="cls-3" x1="34" y1="36" x2="34" y2="50"/><rect class="cls-3" x="42" y="38" width="4" height="10"/><rect class="cls-1" x="24" y="8" width="8" height="10"/><rect class="cls-3" x="24" y="8" width="8" height="10"/><rect class="cls-3" x="18" y="10" width="6" height="6"/><polygon class="cls-3" points="42 32 42 54 17 54 16 56 6 56 6 54 2 54 2 32 26 32 28 28 38 28 38 32 42 32"/><polyline class="cls-3" points="32 13 62 13 62 37 56 43 46 43"/></g></svg>
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

  