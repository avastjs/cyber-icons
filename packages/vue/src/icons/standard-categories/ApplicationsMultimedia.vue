
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="applications-multimedia"><polygon class="cls-1" points="44.39 32 23.61 20 23.61 44 44.39 32"/><polygon class="cls-2" points="44.39 32 23.61 20 23.61 44 44.39 32"/><path class="cls-3" d="M8,32a23.9,23.9,0,0,0,5.68,15.49L9.43,51.74a29.94,29.94,0,0,1,0-39.48l4.25,4.25A23.9,23.9,0,0,0,8,32Z"/><path class="cls-3" d="M51.74,54.57a29.94,29.94,0,0,1-39.48,0l4.25-4.25a24,24,0,0,0,31,0Z"/><path class="cls-3" d="M51.74,9.43l-4.25,4.25a24,24,0,0,0-31,0L12.26,9.43a29.94,29.94,0,0,1,39.48,0Z"/><path class="cls-3" d="M62,32a29.81,29.81,0,0,1-7.43,19.74l-4.25-4.25a24,24,0,0,0,0-31l4.25-4.25A29.81,29.81,0,0,1,62,32Z"/><path class="cls-2" d="M8,32a23.9,23.9,0,0,0,5.68,15.49L9.43,51.74a29.94,29.94,0,0,1,0-39.48l4.25,4.25A23.9,23.9,0,0,0,8,32Z"/><path class="cls-2" d="M51.74,54.57a29.94,29.94,0,0,1-39.48,0l4.25-4.25a24,24,0,0,0,31,0Z"/><path class="cls-2" d="M51.74,9.43l-4.25,4.25a24,24,0,0,0-31,0L12.26,9.43a29.94,29.94,0,0,1,39.48,0Z"/><path class="cls-2" d="M62,32a29.81,29.81,0,0,1-7.43,19.74l-4.25-4.25a24,24,0,0,0,0-31l4.25-4.25A29.81,29.81,0,0,1,62,32Z"/><polyline class="cls-2" points="52 2 62 2 62 12"/><polyline class="cls-2" points="12 2 2 2 2 12"/><polyline class="cls-2" points="52 62 62 62 62 52"/><polyline class="cls-2" points="12 62 2 62 2 52"/></g></svg>
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

  