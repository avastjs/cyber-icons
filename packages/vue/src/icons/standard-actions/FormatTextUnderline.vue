
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="format-text-underline"><polygon class="cls-1" points="57 12 57 62 17 62 7 52 7 2 47 2 57 12"/><polygon class="cls-2" points="17.83 60 9 51.17 9 4 46.17 4 55 12.83 55 60 17.83 60"/><polygon class="cls-1" points="45 12 45 38 41 42 23 42 19 38 19 12 25 12 25 36 39 36 39 12 45 12"/><polygon class="cls-3" points="23.83 40 21 37.17 21 14 23 14 23 38 41 38 41 14 43 14 43 37.17 40.17 40 23.83 40"/><rect class="cls-1" x="17" y="46" width="30" height="6"/><rect class="cls-3" x="31" y="36" width="2" height="26" transform="translate(81 17) rotate(90)"/></g></svg>
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

  