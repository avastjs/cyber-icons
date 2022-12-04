
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="media-eject"><polygon class="cls-1" points="62 12 62 62 12 62 2 52 2 2 52 2 62 12"/><polygon class="cls-2" points="12.83 60 4 51.17 4 4 51.17 4 60 12.83 60 60 12.83 60"/><polygon class="cls-1" points="52 40 12 40 32 14 52 40"/><polygon class="cls-3" points="16.06 38 32 17.28 47.94 38 16.06 38"/><rect class="cls-1" x="12" y="44" width="40" height="6"/><rect class="cls-3" x="31" y="29" width="2" height="36" transform="translate(79 15) rotate(90)"/></g></svg>
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

  