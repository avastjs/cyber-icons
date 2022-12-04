
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="format-text-direction-ltr"><polygon class="cls-1" points="62 12 62 62 22 62 12 52 12 2 52 2 62 12"/><polygon class="cls-2" points="22.83 60 14 51.17 14 4 51.17 4 60 12.83 60 60 22.83 60"/><line class="cls-1" x1="38" y1="22" x2="48" y2="22"/><line class="cls-1" x1="38" y1="27" x2="58" y2="27"/><line class="cls-1" x1="38" y1="32" x2="58" y2="32"/><line class="cls-1" x1="38" y1="37" x2="58" y2="37"/><line class="cls-1" x1="38" y1="42" x2="58" y2="42"/><polygon class="cls-1" points="30 32 17 23 17 41 30 32"/><polygon class="cls-3" points="19 37.18 26.49 32 19 26.82 19 37.18"/><polyline class="cls-1" points="2 26 8 32 17 32"/><line class="cls-1" x1="34" y1="12" x2="34" y2="52"/></g></svg>
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

  