
  <template>
		<svg :class="className" :height="size" :width="size" id="task-past-due" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><polygon class="cls-3" points="49 20 49 35 51 37 51 56 2 56 2 2 12 2 14 4 30 4 32 2 41 2 51 12 51 18 49 20"/><polygon class="cls-2" points="49 20 49 35 51 37 51 56 2 56 2 2 12 2 14 4 30 4 32 2 41 2 51 12 51 18 49 20"/><rect class="cls-2" x="8" y="9" width="10" height="10"/><rect class="cls-1" x="10" y="11" width="6" height="6" transform="translate(27 1) rotate(90)"/><line class="cls-2" x1="22" y1="18" x2="30" y2="10"/><line class="cls-2" x1="30" y1="18" x2="22" y2="10"/><line class="cls-2" x1="22" y1="34" x2="30" y2="26"/><line class="cls-2" x1="30" y1="34" x2="22" y2="26"/><line class="cls-2" x1="22" y1="50" x2="30" y2="42"/><line class="cls-2" x1="30" y1="50" x2="22" y2="42"/><rect class="cls-2" x="8" y="25" width="10" height="10"/><rect class="cls-1" x="10" y="27" width="6" height="6" transform="translate(43 17) rotate(90)"/><rect class="cls-2" x="8" y="41" width="10" height="10"/><rect class="cls-1" x="10" y="43" width="6" height="6" transform="translate(59 33) rotate(90)"/><circle class="cls-1" cx="51" cy="51" r="11"/><circle class="cls-2" cx="51" cy="51" r="11"/><polyline class="cls-2" points="51 43 51 51 57 51"/></svg>
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

  