
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="media-playback-start"><polygon class="cls-1" points="62 12 62 62 12 62 2 52 2 2 52 2 62 12"/><polygon class="cls-2" points="12.83 60 4 51.17 4 4 51.17 4 60 12.83 60 60 12.83 60"/><polygon class="cls-1" points="19 52 19 12 50 32 19 52"/><polygon class="cls-3" points="21 15.67 46.31 32 21 48.33 21 15.67"/></g></svg>
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

  