
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}.cls-4{fill:{{border ? border : colors[theme].border}};}</svg:style> </defs><g id="drive-harddisk"><polygon class="cls-1" points="62 38 62 53 42 53 41 51 23 51 22 53 2 53 2 38 62 38"/><polygon class="cls-2" points="62 38 62 53 42 53 41 51 23 51 22 53 2 53 2 38 62 38"/><polygon class="cls-2" points="62 38 2 38 9.5 11 21 11 23 15 41 15 43 11 54.5 11 62 38"/><polygon class="cls-3" points="4.63 36 11.02 13 19.76 13 21.76 17 42.24 17 44.24 13 52.98 13 59.37 36 4.63 36"/><circle class="cls-4" cx="8" cy="45.5" r="1.5"/><circle class="cls-4" cx="14" cy="45.5" r="1.5"/></g></svg>
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

  