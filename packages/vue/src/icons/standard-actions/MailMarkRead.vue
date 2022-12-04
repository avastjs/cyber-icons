
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="mail-mark-read"><polygon class="cls-1" points="62 57 62 28 32 49 2 28 2 57 62 57"/><polygon class="cls-2" points="4 55 4 31.84 32 51.44 60 31.84 60 55 4 55"/><polygon class="cls-1" points="62 28 32 49 2 28 62 28"/><polygon class="cls-3" points="8.35 30 55.66 30 32 46.56 8.35 30"/><polygon class="cls-1" points="2 28 32 7 62 28 2 28"/><polygon class="cls-3" points="8.35 26 32 9.44 55.66 26 8.35 26"/></g></svg>
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

  