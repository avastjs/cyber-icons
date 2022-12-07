
  <template>
		<svg :class="className" :height="size" :width="size" id="dialog-password" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><path class="cls-2" d="M62,12v24l-2.45,2.45c-1.83-2.11-4.54-3.45-7.55-3.45-5.52,0-10,4.48-10,10h-5.5l-2-3H10.5l-3,3H2V12h3.5l2-3h29l2,3h23.5Z"/><path class="cls-3" d="M37.57,43l-2-3H9.67l-3,3h-2.67V14h2.57l2-3h26.86l2,3h22.57v21.17l-.48,.48c-2.12-1.7-4.76-2.65-7.52-2.65-5.94,0-10.88,4.33-11.83,10h-2.6Z"/><path class="cls-1" d="M62,45c0,5.52-4.48,10-10,10s-10-4.48-10-10,4.48-10,10-10c3.01,0,5.72,1.34,7.55,3.45,1.53,1.75,2.45,4.04,2.45,6.55Z"/><path class="cls-2" d="M62,45c0,5.52-4.48,10-10,10s-10-4.48-10-10,4.48-10,10-10c3.01,0,5.72,1.34,7.55,3.45,1.53,1.75,2.45,4.04,2.45,6.55Z"/><rect class="cls-3" x="48" y="45" width="8" height="6"/><rect class="cls-2" x="48" y="45" width="8" height="6"/><path class="cls-2" d="M52,39h0c1.1,0,2,.9,2,2v4h-4v-4c0-1.1,.9-2,2-2Z"/><rect class="cls-1" x="6" y="18" width="44" height="12"/><rect class="cls-2" x="6" y="18" width="44" height="12"/><line class="cls-2" x1="12" y1="21" x2="12" y2="27"/><line class="cls-2" x1="14.12" y1="21.88" x2="9.88" y2="26.12"/><line class="cls-2" x1="9.88" y1="21.88" x2="14.12" y2="26.12"/><line class="cls-2" x1="15" y1="24" x2="9" y2="24"/><line class="cls-2" x1="20" y1="21" x2="20" y2="27"/><line class="cls-2" x1="22.12" y1="21.88" x2="17.88" y2="26.12"/><line class="cls-2" x1="17.88" y1="21.88" x2="22.12" y2="26.12"/><line class="cls-2" x1="23" y1="24" x2="17" y2="24"/><line class="cls-2" x1="28" y1="21" x2="28" y2="27"/><line class="cls-2" x1="30.12" y1="21.88" x2="25.88" y2="26.12"/><line class="cls-2" x1="25.88" y1="21.88" x2="30.12" y2="26.12"/><line class="cls-2" x1="31" y1="24" x2="25" y2="24"/><line class="cls-2" x1="36" y1="21" x2="36" y2="27"/><line class="cls-2" x1="38.12" y1="21.88" x2="33.88" y2="26.12"/><line class="cls-2" x1="33.88" y1="21.88" x2="38.12" y2="26.12"/><line class="cls-2" x1="39" y1="24" x2="33" y2="24"/><line class="cls-2" x1="44" y1="21" x2="44" y2="27"/><line class="cls-2" x1="46.12" y1="21.88" x2="41.88" y2="26.12"/><line class="cls-2" x1="41.88" y1="21.88" x2="46.12" y2="26.12"/><line class="cls-2" x1="47" y1="24" x2="41" y2="24"/></svg>
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

  