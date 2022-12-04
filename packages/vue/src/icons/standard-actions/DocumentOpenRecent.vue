
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="document-open-recent"><circle class="cls-1" cx="48" cy="53" r="9"/><circle class="cls-2" cx="48" cy="53" r="7"/><polyline class="cls-1" points="51 53 48 53 48 48"/><path class="cls-1" d="M39,53a9,9,0,0,0,9,9H15L7,54V2H34L48,16V44A9,9,0,0,0,39,53Z"/><path class="cls-3" d="M15.83,60,9,53.17V4H33.17L46,16.83V42.18A11,11,0,0,0,39.52,60Z"/><polygon class="cls-1" points="48 16 34 16 34 2 48 16"/><polygon class="cls-2" points="36 14 36 6.83 43.17 14 36 14"/><line class="cls-1" x1="12" y1="26" x2="36" y2="26"/><line class="cls-1" x1="12" y1="32" x2="36" y2="32"/><line class="cls-1" x1="12" y1="38" x2="36" y2="38"/></g></svg>
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

  