
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="input-keyboard"><polyline class="cls-1" points="62 44 62 47.66 55.66 54 49 54"/><polyline class="cls-1" points="2 44 2 47.66 8.34 54 15 54"/><polygon class="cls-2" points="58 30 58 34 44.53 34 43.53 36 20.47 36 19.47 34 6 34 6 30 21 30 22 32 42 32 43 30 58 30"/><polygon class="cls-1" points="58 30 58 34 44.53 34 43.53 36 20.47 36 19.47 34 6 34 6 30 21 30 22 32 42 32 43 30 58 30"/><polygon class="cls-1" points="58 34 58 46 54 50 10 50 6 46 6 34 19.47 34 20.47 36 43.53 36 44.53 34 58 34"/><polygon class="cls-2" points="10.83 48 8 45.17 8 36 18.23 36 19.23 38 44.77 38 45.77 36 56 36 56 45.17 53.17 48 10.83 48"/><polygon class="cls-3" points="44 28 42 32 22 32 20 28 44 28"/><polygon class="cls-1" points="44 28 42 32 22 32 20 28 44 28"/><polyline class="cls-1" points="54 26 62 26 62 34"/><polyline class="cls-1" points="10 26 2 26 2 34"/><line class="cls-1" x1="24" y1="45" x2="40" y2="45"/><line class="cls-1" x1="9" y1="39" x2="11" y2="39"/><line class="cls-1" x1="13" y1="39" x2="15" y2="39"/><line class="cls-1" x1="17" y1="39" x2="19" y2="39"/><line class="cls-1" x1="21" y1="39" x2="23" y2="39"/><line class="cls-1" x1="25" y1="39" x2="27" y2="39"/><line class="cls-1" x1="29" y1="39" x2="31" y2="39"/><line class="cls-1" x1="33" y1="39" x2="35" y2="39"/><line class="cls-1" x1="37" y1="39" x2="39" y2="39"/><line class="cls-1" x1="41" y1="39" x2="43" y2="39"/><line class="cls-1" x1="45" y1="39" x2="47" y2="39"/><line class="cls-1" x1="16" y1="45" x2="18" y2="45"/><line class="cls-1" x1="20" y1="45" x2="22" y2="45"/><line class="cls-1" x1="42" y1="45" x2="44" y2="45"/><line class="cls-1" x1="46" y1="45" x2="48" y2="45"/><line class="cls-1" x1="15" y1="42" x2="17" y2="42"/><line class="cls-1" x1="19" y1="42" x2="21" y2="42"/><line class="cls-1" x1="23" y1="42" x2="25" y2="42"/><line class="cls-1" x1="27" y1="42" x2="29" y2="42"/><line class="cls-1" x1="31" y1="42" x2="33" y2="42"/><line class="cls-1" x1="35" y1="42" x2="37" y2="42"/><line class="cls-1" x1="39" y1="42" x2="41" y2="42"/><line class="cls-1" x1="43" y1="42" x2="45" y2="42"/><line class="cls-1" x1="47" y1="42" x2="49" y2="42"/><line class="cls-1" x1="49" y1="39" x2="55" y2="39"/><line class="cls-1" x1="51" y1="42" x2="55" y2="42"/><line class="cls-1" x1="9" y1="42" x2="13" y2="42"/><line class="cls-1" x1="9" y1="45" x2="14" y2="45"/><line class="cls-1" x1="50" y1="45" x2="55" y2="45"/><polyline class="cls-1" points="32 28 32 20 52 20 52 10 12 10"/></g></svg>
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

  