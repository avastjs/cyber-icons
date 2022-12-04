
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="preferences-desktop-font"><rect class="cls-1" x="9" y="9" width="46" height="46"/><rect class="cls-2" x="11" y="11" width="42" height="42" transform="translate(64) rotate(90)"/><polygon class="cls-2" points="62 16 58 18 58 6 46 6 48 2 60 2 62 2 62 4 62 16"/><polygon class="cls-2" points="62 44 58 46 58 58 44 58 46 62 60 62 62 62 62 60 62 44"/><polygon class="cls-2" points="2 16 6 18 6 6 18 6 16 2 4 2 2 2 2 4 2 16"/><polygon class="cls-1" points="62 16 58 18 58 6 46 6 48 2 60 2 62 2 62 4 62 16"/><polygon class="cls-1" points="62 44 58 46 58 58 44 58 46 62 60 62 62 62 62 60 62 44"/><line class="cls-1" x1="62" y1="20" x2="58" y2="22"/><line class="cls-1" x1="62" y1="24" x2="58" y2="26"/><line class="cls-1" x1="62" y1="28" x2="58" y2="30"/><line class="cls-1" x1="62" y1="32" x2="58" y2="34"/><line class="cls-1" x1="62" y1="36" x2="58" y2="38"/><line class="cls-1" x1="62" y1="40" x2="58" y2="42"/><polygon class="cls-1" points="2 16 6 18 6 6 18 6 16 2 4 2 2 2 2 4 2 16"/><polyline class="cls-1" points="20 2 22 6 42 6 44 2"/><polyline class="cls-1" points="41.53 62 10 62 4 56 4 21.47"/><polygon class="cls-3" points="49.58 47.42 46 51 43 51 30.5 19.67 28 13 36 13 49.42 47 49.58 47.42"/><polygon class="cls-3" points="32 47 32 51 17 51 14.13 48.13 14.58 47 28 13 30.5 19.67 19.5 47 32 47"/><polygon class="cls-1" points="49.58 47.42 46 51 43 51 30.5 19.67 28 13 36 13 49.42 47 49.58 47.42"/><polygon class="cls-1" points="32 47 32 51 17 51 14.13 48.13 14.58 47 28 13 30.5 19.67 19.5 47 32 47"/></g></svg>
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

  