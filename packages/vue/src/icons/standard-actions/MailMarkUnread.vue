
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="mail-mark-unread"><polygon class="cls-1" points="62 49 62 15 32 36 2 15 2 49 62 49"/><polygon class="cls-2" points="4 47 4 18.84 32 38.44 60 18.84 60 47 4 47"/><polygon class="cls-1" points="62 15 32 36 2 15 62 15"/><polygon class="cls-3" points="8.35 17 55.66 17 32 33.56 8.35 17"/></g></svg>
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

  