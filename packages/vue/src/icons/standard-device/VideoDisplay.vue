
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}</svg:style> </defs><g id="video-display"><polygon class="cls-1" points="47.24 48 46.24 46 17.76 46 16.76 48 10 48 10 46 4 46 4 8 10 8 10 6 16.76 6 17.76 8 46.24 8 47.24 6 54 6 54 8 60 8 60 46 54 46 54 48 47.24 48"/><polygon class="cls-2" points="44.75 27 25.25 15.74 25.25 38.26 44.75 27"/><circle class="cls-2" cx="17" cy="57" r="3"/><polygon class="cls-3" points="44.75 27 25.25 15.74 25.25 38.26 44.75 27"/><line class="cls-3" x1="62" y1="57" x2="20" y2="57"/><line class="cls-3" x1="14" y1="57" x2="2" y2="57"/><circle class="cls-3" cx="17" cy="57" r="3"/><path class="cls-3" d="M62,8V46a2,2,0,0,1-2,2H56v2H46l-1-2H19l-1,2H8V48H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H8V4H18l1,2H45l1-2H56V6h4A2,2,0,0,1,62,8Z"/></g></svg>
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

  