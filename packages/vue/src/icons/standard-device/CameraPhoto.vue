
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="camera-photo"><path class="cls-1" d="M62,21.25v29A3.76,3.76,0,0,1,58.25,54H41l-1-2H24l-1,2H5.75A3.76,3.76,0,0,1,2,50.25v-29A3.76,3.76,0,0,1,5.75,17.5H18.88L22.62,10H41.38l3.74,7.5H58.25A3.76,3.76,0,0,1,62,21.25Z"/><path class="cls-2" d="M42.24,52l-1-2H22.76l-1,2h-16A1.77,1.77,0,0,1,4,50.25v-29A1.77,1.77,0,0,1,5.75,19.5H20.12L23.86,12H40.14l3.74,7.5H58.25A1.77,1.77,0,0,1,60,21.25v29A1.77,1.77,0,0,1,58.25,52Z"/><polygon class="cls-2" points="56.38 17.5 48.75 17.5 50.75 11.88 56.38 11.88 56.38 17.5"/><polygon class="cls-2" points="7.63 17.5 15.25 17.5 13.25 11.88 7.63 11.88 7.63 17.5"/><polygon class="cls-1" points="56.38 17.5 48.75 17.5 50.75 11.88 56.38 11.88 56.38 17.5"/><polygon class="cls-1" points="7.63 17.5 15.25 17.5 13.25 11.88 7.63 11.88 7.63 17.5"/><circle class="cls-3" cx="32" cy="33" r="15"/><circle class="cls-2" cx="32" cy="33" r="5"/><rect class="cls-3" x="54" y="25.75" width="8" height="20"/><rect class="cls-3" x="2" y="25.75" width="8" height="20" transform="translate(12 71.5) rotate(-180)"/><circle class="cls-1" cx="32" cy="33" r="15"/><path class="cls-1" d="M32,22A11,11,0,0,1,43,33"/><circle class="cls-1" cx="32" cy="33" r="5"/><rect class="cls-1" x="54" y="25.75" width="8" height="20"/><rect class="cls-1" x="2" y="25.75" width="8" height="20" transform="translate(12 71.5) rotate(-180)"/></g></svg>
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

  