
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="go-first"><polygon class="cls-1" points="51 24.23 51 62 12 62 2 52 2 2 41 2 50.86 11.86 42 18 51 24.23"/><polygon class="cls-2" points="12.83 60 4 51.17 4 4 40.17 4 49 12.83 49 60 12.83 60"/><rect class="cls-1" x="8" y="8" width="10" height="10"/><rect class="cls-3" x="10" y="10" width="6" height="6" transform="translate(26) rotate(90)"/><line class="cls-1" x1="22" y1="18" x2="36" y2="18"/><rect class="cls-1" x="8" y="24" width="10" height="10"/><rect class="cls-3" x="10" y="26" width="6" height="6" transform="translate(42 16) rotate(90)"/><line class="cls-1" x1="22" y1="34" x2="36" y2="34"/><rect class="cls-1" x="8" y="40" width="10" height="10"/><rect class="cls-3" x="10" y="42" width="6" height="6" transform="translate(58 32) rotate(90)"/><line class="cls-1" x1="22" y1="50" x2="36" y2="50"/><polygon class="cls-1" points="55 9 55 27 51 24.23 42 18 50.86 11.86 55 9"/><polygon class="cls-3" points="53 23.18 45.51 18 53 12.82 53 23.18"/><line class="cls-1" x1="55" y1="18" x2="62" y2="18"/></g></svg>
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

  