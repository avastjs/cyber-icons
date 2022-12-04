
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="system-software-update"><polygon class="cls-1" points="51.17 8 24.76 8 22.76 4 9.24 4 8 6.47 8 19.24 4 21.24 4 34.76 10 37.76 10 51.17 14.83 56 21.17 56 27.17 50 33.17 50 56 50 56 30 56 12.83 51.17 8"/><line class="cls-2" x1="6" y1="18" x2="6" y2="34"/><line class="cls-2" x1="6" y1="46" x2="2" y2="44"/><line class="cls-2" x1="6" y1="42" x2="2" y2="40"/><line class="cls-2" x1="6" y1="50" x2="2" y2="48"/><line class="cls-2" x1="26" y1="6" x2="12" y2="6"/><line class="cls-2" x1="28" y1="4" x2="27" y2="2"/><line class="cls-2" x1="31" y1="4" x2="30" y2="2"/><line class="cls-2" x1="34" y1="4" x2="33" y2="2"/><line class="cls-2" x1="37" y1="4" x2="36" y2="2"/><line class="cls-2" x1="40" y1="4" x2="39" y2="2"/><line class="cls-2" x1="43" y1="4" x2="42" y2="2"/><line class="cls-2" x1="46" y1="4" x2="45" y2="2"/><line class="cls-2" x1="49" y1="4" x2="48" y2="2"/><line class="cls-2" x1="52" y1="4" x2="51" y2="2"/><path class="cls-2" d="M58,36.82V12L52,6H26L24,2H8L6,6V18L2,20V36l6,3V52l6,6h8l6-6h4.86a15,15,0,0,1,1.46-13"/><path class="cls-3" d="M52,27v5.86A15,15,0,0,0,34.32,39H12V27Z"/><circle class="cls-1" cx="18" cy="33" r="2"/><path class="cls-2" d="M52,27v5.86A15,15,0,0,0,34.32,39H12V27Z"/><polygon class="cls-2" points="52 27 12 27 18 12 46 12 52 27"/><circle class="cls-2" cx="18" cy="33" r="2"/><path class="cls-2" d="M62,47A15,15,0,1,1,47,32a14.84,14.84,0,0,1,5,.86A15,15,0,0,1,62,47Z"/><path class="cls-3" d="M47,60A13,13,0,0,1,34,47,13,13,0,0,1,51.33,34.74,13,13,0,0,1,47,60Z"/><path class="cls-2" d="M38,47a9,9,0,0,1,9-9,8.91,8.91,0,0,1,4.11,1A9,9,0,0,1,55,42.92"/><path class="cls-2" d="M56,47a9,9,0,0,1-9,9,8.88,8.88,0,0,1-4.11-1A9,9,0,0,1,39,51.08"/><polyline class="cls-2" points="56 39 55 43 51 43"/><polyline class="cls-2" points="38 55 39 51 43 51"/></g></svg>
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

  