
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="system-search"><rect class="cls-1" x="2" y="8" width="60" height="36"/><rect class="cls-2" x="16" y="-2" width="32" height="56" transform="translate(58 -6) rotate(90)"/><polygon class="cls-1" points="50 50 52 56 12 56 14 50 24.6 50 27 44 37 44 39.4 50 50 50"/><polygon class="cls-3" points="14.78 54 15.44 52 25.95 52 28.35 46 35.65 46 38.05 52 48.56 52 49.23 54 14.78 54"/><circle class="cls-1" cx="29.64" cy="23.64" r="8"/><path class="cls-3" d="M29.64,29.64a6,6,0,1,1,4.24-1.76A6,6,0,0,1,29.64,29.64Z"/><line class="cls-1" x1="35.29" y1="29.29" x2="42.36" y2="36.36"/></g></svg>
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

  