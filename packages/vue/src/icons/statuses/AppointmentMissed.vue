
  <template>
		<svg :class="className" :height="size" :width="size" id="appointment-missed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><path class="cls-2" d="M54,6v6H2V6c0-1.1,.9-2,2-2h4V2h10l1,2h18l1-2h10v2h4c1.1,0,2,.9,2,2Z"/><polygon class="cls-3" points="4 10 4 6 10 6 10 4 16.76 4 17.76 6 38.24 6 39.24 4 46 4 46 6 52 6 52 10 4 10"/><path class="cls-2" d="M54,12V48c0,1.1-.9,2-2,2h-4v2h-10l-1-2H19l-1,2H8v-2H4c-1.1,0-2-.9-2-2V12H54Z"/><polygon class="cls-3" points="39.24 50 38.24 48 17.76 48 16.76 50 10 50 10 48 4 48 4 14 52 14 52 48 46 48 46 50 39.24 50"/><rect class="cls-1" x="19" y="17" width="6" height="6"/><rect class="cls-1" x="31" y="17" width="6" height="6"/><rect class="cls-1" x="43" y="17" width="6" height="6"/><rect class="cls-1" x="7" y="28" width="6" height="6"/><rect class="cls-1" x="19" y="28" width="6" height="6"/><rect class="cls-1" x="31" y="28" width="6" height="6"/><rect class="cls-1" x="43" y="28" width="6" height="6"/><rect class="cls-1" x="7" y="39" width="6" height="6"/><rect class="cls-1" x="19" y="39" width="6" height="6"/><rect class="cls-2" x="19" y="17" width="6" height="6"/><rect class="cls-2" x="31" y="17" width="6" height="6"/><rect class="cls-2" x="43" y="17" width="6" height="6"/><rect class="cls-2" x="7" y="28" width="6" height="6"/><rect class="cls-2" x="19" y="28" width="6" height="6"/><rect class="cls-2" x="31" y="28" width="6" height="6"/><rect class="cls-2" x="43" y="28" width="6" height="6"/><rect class="cls-2" x="7" y="39" width="6" height="6"/><rect class="cls-2" x="19" y="39" width="6" height="6"/><circle class="cls-1" cx="50" cy="50" r="12"/><circle class="cls-2" cx="50" cy="50" r="12"/><line class="cls-2" x1="55.66" y1="44.34" x2="44.34" y2="55.66"/><line class="cls-2" x1="55.66" y1="55.66" x2="44.34" y2="44.34"/></svg>
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

  