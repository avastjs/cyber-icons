
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="mail-forward"><polygon class="cls-1" points="62 10 62 45 57 45 44 36 44 45 2 45 2 10 32 31 62 10"/><polygon class="cls-2" points="4 43 4 13.84 32 33.44 60 13.84 60 43 4 43"/><polygon class="cls-1" points="62 10 32 31 2 10 62 10"/><polygon class="cls-3" points="8.35 12 55.66 12 32 28.56 8.35 12"/><polygon class="cls-1" points="57 45 44 54 44 36 57 45"/><polygon class="cls-3" points="46 50.18 53.49 45 46 39.82 46 50.18"/></g></svg>
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

  