
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-4{fill:{{border ? border : colors[theme].border}};}</svg:style> </defs><g id="phone"><path class="cls-1" d="M48,30V46l2,2V58H48v2a2,2,0,0,1-2,2H18a2,2,0,0,1-2-2V58H14V48l2-2V30l-2-2V18h2V4a2,2,0,0,1,2-2H46a2,2,0,0,1,2,2V18h2V28Z"/><polygon class="cls-2" points="18 60 18 56 16 56 16 48.83 18 46.83 18 29.17 16 27.17 16 20 18 20 18 4 46 4 46 20 48 20 48 27.17 46 29.17 46 46.83 48 48.83 48 56 46 56 46 60 18 60"/><rect class="cls-1" x="48" y="9" width="1" height="5"/><rect class="cls-3" x="20" y="6" width="24" height="52"/><circle class="cls-4" cx="32" cy="10" r="1"/><rect class="cls-1" x="20" y="6" width="24" height="52"/></g></svg>
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

  