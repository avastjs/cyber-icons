
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="format-text-direction-rtl"><polygon class="cls-1" points="52 12 52 62 12 62 2 52 2 2 42 2 52 12"/><polygon class="cls-2" points="12.83 60 4 51.17 4 4 41.17 4 50 12.83 50 60 12.83 60"/><line class="cls-1" x1="16" y1="22" x2="6" y2="22"/><line class="cls-1" x1="26" y1="27" x2="6" y2="27"/><line class="cls-1" x1="26" y1="32" x2="6" y2="32"/><line class="cls-1" x1="26" y1="37" x2="6" y2="37"/><line class="cls-1" x1="26" y1="42" x2="6" y2="42"/><polygon class="cls-1" points="34 32 47 23 47 41 34 32"/><polygon class="cls-3" points="45 37.18 37.51 32 45 26.82 45 37.18"/><polyline class="cls-1" points="47 32 56 32 62 26"/><line class="cls-1" x1="30" y1="12" x2="30" y2="52"/></g></svg>
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

  