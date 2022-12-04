
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1,.cls-4{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-4{stroke-dasharray:4.18 2.09;}</svg:style> </defs><g id="drive-removable-media"><rect class="cls-1" x="42" y="24" width="20" height="38" rx="2" transform="translate(104 86) rotate(-180)"/><rect class="cls-2" x="35" y="35" width="34" height="16" transform="translate(95 -9) rotate(90)"/><polyline class="cls-1" points="58 46 58 58 46 58"/><rect class="cls-1" x="44" y="12" width="16" height="12" transform="translate(104 36) rotate(-180)"/><rect class="cls-3" x="48" y="12" width="8" height="12" transform="translate(70 -34) rotate(90)"/><line class="cls-1" x1="48" y1="12" x2="48" y2="16"/><line class="cls-1" x1="56" y1="12" x2="56" y2="16"/><line class="cls-4" x1="38" y1="52" x2="5.05" y2="52"/><polyline class="cls-1" points="4 52 2 52 2 50"/><line class="cls-4" x1="2" y1="47.91" x2="2" y2="5.05"/><polyline class="cls-1" points="2 4 2 2 4 2"/><line class="cls-4" x1="6.09" y1="2" x2="48.95" y2="2"/><polyline class="cls-1" points="50 2 52 2 52 4"/><line class="cls-4" x1="52" y1="8" x2="52" y2="6.09"/><path class="cls-2" d="M31,41.13a4,4,0,1,1-1.17-2.83A4,4,0,0,1,31,41.13Z"/><polygon class="cls-3" points="27 8.87 23 15.79 31 15.79 27 8.87"/><rect class="cls-3" x="17" y="23.13" width="6" height="6"/><rect class="cls-3" x="31" y="19.13" width="6" height="6" rx="3" transform="translate(68 44.27) rotate(-180)"/><path class="cls-1" d="M31,41.13a4,4,0,1,1-1.17-2.83A4,4,0,0,1,31,41.13Z"/><line class="cls-1" x1="27" y1="37.13" x2="27" y2="15.13"/><polygon class="cls-1" points="27 8.87 23 15.79 31 15.79 27 8.87"/><polyline class="cls-1" points="20 29.13 20 34.13 24.17 38.3"/><rect class="cls-1" x="17" y="23.13" width="6" height="6"/><polyline class="cls-1" points="34 25.13 34 34.13 29.83 38.3"/><rect class="cls-1" x="31" y="19.13" width="6" height="6" rx="3" transform="translate(68 44.27) rotate(-180)"/></g></svg>
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

  