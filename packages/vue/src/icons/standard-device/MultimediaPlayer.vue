
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}</svg:style> </defs><g id="multimedia-player"><polygon class="cls-1" points="13.6 9 28.55 9 28.55 15.9 15.9 15.9 15.9 28.55 9 28.55 9 13.6 13.6 9"/><polygon class="cls-2" points="13.6 55 28.55 55 28.55 48.1 15.9 48.1 15.9 35.45 9 35.45 9 50.4 13.6 55"/><polygon class="cls-2" points="50.4 9 35.45 9 35.45 15.9 48.1 15.9 48.1 28.55 55 28.55 55 13.6 50.4 9"/><polygon class="cls-1" points="50.4 55 35.45 55 35.45 48.1 48.1 48.1 48.1 35.45 55 35.45 55 50.4 50.4 55"/><polygon class="cls-2" points="41.2 32 25.1 22.7 25.1 41.3 41.2 32"/><polygon class="cls-3" points="13.6 9 28.55 9 28.55 15.9 15.9 15.9 15.9 28.55 9 28.55 9 13.6 13.6 9"/><polygon class="cls-3" points="13.6 55 28.55 55 28.55 48.1 15.9 48.1 15.9 35.45 9 35.45 9 50.4 13.6 55"/><polygon class="cls-3" points="50.4 9 35.45 9 35.45 15.9 48.1 15.9 48.1 28.55 55 28.55 55 13.6 50.4 9"/><polygon class="cls-3" points="50.4 55 35.45 55 35.45 48.1 48.1 48.1 48.1 35.45 55 35.45 55 50.4 50.4 55"/><polygon class="cls-3" points="41.2 32 25.1 22.7 25.1 41.3 41.2 32"/><polyline class="cls-3" points="2 12 2 2 12 2"/><polyline class="cls-3" points="62 12 62 2 52 2"/><polyline class="cls-3" points="2 52 2 62 12 62"/><polyline class="cls-3" points="62 52 62 62 52 62"/></g></svg>
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

  