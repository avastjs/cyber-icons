
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="folder-new"><polygon class="cls-1" points="62 25 62 57 10 57 2 49 2 17 54 17 62 25"/><polygon class="cls-2" points="10.83 55 4 48.17 4 19 53.17 19 60 25.83 60 55 10.83 55"/><polygon class="cls-1" points="26 17 2 17 2 7 19 7 26 17"/><polygon class="cls-2" points="4 15 4 9 17.96 9 22.16 15 4 15"/><circle class="cls-1" cx="32" cy="37" r="9"/><circle class="cls-3" cx="32" cy="37" r="7"/><line class="cls-1" x1="32" y1="42" x2="32" y2="32"/><line class="cls-1" x1="27" y1="37" x2="37" y2="37"/></g></svg>
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

  