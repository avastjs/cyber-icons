
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="edit-undo"><polygon class="cls-1" points="12.83 60 4 51.17 4 4 51.17 4 60 12.83 60 60 12.83 60"/><polygon class="cls-2" points="19 25 32 34 32 16 19 25"/><polygon class="cls-3" points="30 19.82 22.51 25 30 30.18 30 19.82"/><polygon class="cls-2" points="62 12 62 62 12 62 2 52 2 2 52 2 62 12"/><polyline class="cls-2" points="19 42 25 48 39 48 45 42 45 31 39 25 32 25"/></g></svg>
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

  