
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}</svg:style> </defs><g id="font-x-generic"><polygon class="cls-1" points="42.24 60 41.24 58 22.76 58 21.76 60 9 60 9 4 46.17 4 55 12.83 55 60 42.24 60"/><polygon class="cls-2" points="46 19 46 25 42 25 42 23 34 23 34 41 40 41 40 45 24 45 24 41 30 41 30 23 22 23 22 25 18 25 18 19 46 19"/><polygon class="cls-3" points="46 19 46 25 42 25 42 23 34 23 34 41 40 41 40 45 24 45 24 41 30 41 30 23 22 23 22 25 18 25 18 19 46 19"/><polygon class="cls-3" points="57 12 57 62 41 62 40 60 24 60 23 62 7 62 7 2 47 2 57 12"/><polygon class="cls-2" points="57 12 47 12 47 2 57 12"/><polygon class="cls-3" points="57 12 47 12 47 2 57 12"/></g></svg>
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

  