
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="preferences-system-network"><circle class="cls-1" cx="49" cy="15" r="3"/><circle class="cls-1" cx="18" cy="21" r="3"/><path class="cls-1" d="M37,32a5,5,0,0,1-5,5,5,5,0,0,1-5-5,5,5,0,0,1,5-5,5,5,0,0,1,5,5Z"/><circle class="cls-1" cx="46" cy="43" r="3"/><circle class="cls-1" cx="15" cy="49" r="3"/><circle class="cls-2" cx="49" cy="15" r="3"/><circle class="cls-2" cx="18" cy="21" r="3"/><path class="cls-2" d="M37,32a5,5,0,0,1-5,5,5,5,0,0,1-5-5,5,5,0,0,1,5-5,5,5,0,0,1,5,5Z"/><line class="cls-2" x1="46.88" y1="17.12" x2="35.54" y2="28.46"/><line class="cls-2" x1="28.07" y1="28.91" x2="20.36" y2="22.85"/><circle class="cls-2" cx="46" cy="43" r="3"/><line class="cls-2" x1="28.46" y1="35.54" x2="17.12" y2="46.88"/><line class="cls-2" x1="43.64" y1="41.15" x2="35.93" y2="35.09"/><circle class="cls-2" cx="15" cy="49" r="3"/><line class="cls-2" x1="28.46" y1="35.54" x2="17.12" y2="46.88"/><line class="cls-2" x1="43.64" y1="41.15" x2="35.93" y2="35.09"/><circle class="cls-3" cx="46" cy="32" r="2"/><circle class="cls-3" cx="18" cy="32" r="2"/><circle class="cls-3" cx="32" cy="18" r="2"/><circle class="cls-3" cx="32" cy="46" r="2"/><circle class="cls-2" cx="46" cy="32" r="2"/><line class="cls-2" x1="44" y1="32" x2="37" y2="32"/><circle class="cls-2" cx="18" cy="32" r="2"/><line class="cls-2" x1="20" y1="32" x2="27" y2="32"/><circle class="cls-2" cx="32" cy="18" r="2"/><line class="cls-2" x1="32" y1="20" x2="32" y2="27"/><circle class="cls-2" cx="32" cy="46" r="2"/><line class="cls-2" x1="32" y1="44" x2="32" y2="37"/><path class="cls-2" d="M4.85,44.75a30,30,0,0,1,39.9-39.9"/><path class="cls-2" d="M59.15,19.25a30,30,0,0,1-39.9,39.9"/></g></svg>
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

  