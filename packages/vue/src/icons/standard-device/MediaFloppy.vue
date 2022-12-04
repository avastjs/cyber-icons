
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}</svg:style> </defs><g id="media-floppy"><polygon class="cls-1" points="62 12 62 62 2 62 2 2 52 2 62 12"/><rect class="cls-2" x="13.67" y="55.33" width="36.67" height="6.67"/><path class="cls-2" d="M13.67,2H50.33a0,0,0,0,1,0,0V13.33a2,2,0,0,1-2,2H15.67a2,2,0,0,1-2-2V2a0,0,0,0,1,0,0Z"/><circle class="cls-2" cx="32" cy="32" r="10"/><polygon class="cls-3" points="62 12 62 62 2 62 2 2 52 2 62 12"/><rect class="cls-3" x="13.67" y="55.33" width="36.67" height="6.67"/><path class="cls-3" d="M13.67,2H50.33a0,0,0,0,1,0,0V13.33a2,2,0,0,1-2,2H15.67a2,2,0,0,1-2-2V2a0,0,0,0,1,0,0Z"/><circle class="cls-3" cx="32" cy="32" r="10"/><path class="cls-3" d="M32,28.67A3.33,3.33,0,0,1,35.33,32"/></g></svg>
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

  