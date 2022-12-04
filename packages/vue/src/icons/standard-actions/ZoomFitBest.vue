
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="zoom-fit-best"><circle class="cls-1" cx="32" cy="32" r="20"/><circle class="cls-2" cx="32" cy="32" r="18"/><polygon class="cls-1" points="44 29 44 35 35 35 35 44 29 44 29 35 20 35 20 29 29 29 29 20 35 20 35 29 44 29"/><polygon class="cls-3" points="31 42 31 33 22 33 22 31 31 31 31 22 33 22 33 31 42 31 42 33 33 33 33 42 31 42"/><polyline class="cls-1" points="2 12 2 2 12 2"/><line class="cls-1" x1="2" y1="2" x2="12" y2="12"/><polyline class="cls-1" points="62 12 62 2 52 2"/><line class="cls-1" x1="62" y1="2" x2="52" y2="12"/><polyline class="cls-1" points="2 52 2 62 12 62"/><line class="cls-1" x1="2" y1="62" x2="12" y2="52"/><polyline class="cls-1" points="62 52 62 62 52 62"/><line class="cls-1" x1="62" y1="62" x2="52" y2="52"/></g></svg>
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

  