
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="preferences-desktop-personal"><path class="cls-1" d="M58,12V40H44a4,4,0,0,0-4,4v8H28l-6,6H14L8,52V39L2,36V20l4-2V6L8,2H24l2,4H52Z"/><path class="cls-2" d="M14.83,56,10,51.17V37.76l-6-3V21.24l4-2V6.47L9.24,4H22.76l2,4H51.17L56,12.83V38H44a6,6,0,0,0-6,6v6H27.17l-6,6Z"/><line class="cls-1" x1="6" y1="18" x2="6" y2="34"/><line class="cls-1" x1="6" y1="46" x2="2" y2="44"/><line class="cls-1" x1="6" y1="42" x2="2" y2="40"/><line class="cls-1" x1="6" y1="50" x2="2" y2="48"/><line class="cls-1" x1="26" y1="6" x2="12" y2="6"/><line class="cls-1" x1="28" y1="4" x2="27" y2="2"/><line class="cls-1" x1="31" y1="4" x2="30" y2="2"/><line class="cls-1" x1="34" y1="4" x2="33" y2="2"/><line class="cls-1" x1="37" y1="4" x2="36" y2="2"/><line class="cls-1" x1="40" y1="4" x2="39" y2="2"/><line class="cls-1" x1="43" y1="4" x2="42" y2="2"/><line class="cls-1" x1="46" y1="4" x2="45" y2="2"/><line class="cls-1" x1="49" y1="4" x2="48" y2="2"/><line class="cls-1" x1="52" y1="4" x2="51" y2="2"/><path class="cls-3" d="M62,44V58a4,4,0,0,1-4,4h-.08A5.47,5.47,0,0,0,58,61a7,7,0,0,0-14,0,5.47,5.47,0,0,0,.08,1H44a4,4,0,0,1-4-4V44a4,4,0,0,1,4-4H58A4,4,0,0,1,62,44Z"/><path class="cls-1" d="M62,44V58a4,4,0,0,1-4,4h-.08A5.47,5.47,0,0,0,58,61a7,7,0,0,0-14,0,5.47,5.47,0,0,0,.08,1H44a4,4,0,0,1-4-4V44a4,4,0,0,1,4-4H58A4,4,0,0,1,62,44Z"/><rect class="cls-1" x="15" y="12" width="34" height="24" rx="2"/><rect class="cls-3" x="22" y="9" width="20" height="30" transform="translate(56 -8) rotate(90)"/><line class="cls-1" x1="39" y1="40" x2="25" y2="40"/><circle class="cls-2" cx="51" cy="49" r="5"/><path class="cls-2" d="M58,61a5.47,5.47,0,0,1-.08,1H44.08A5.47,5.47,0,0,1,44,61a7,7,0,0,1,14,0Z"/><circle class="cls-1" cx="51" cy="49" r="5"/><path class="cls-1" d="M58,61a5.47,5.47,0,0,1-.08,1H44.08A5.47,5.47,0,0,1,44,61a7,7,0,0,1,14,0Z"/></g></svg>
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

  