
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="list-add"><path class="cls-1" d="M38,53a9,9,0,0,0,9,9H18L8,52V2H37L47,12V44A9,9,0,0,0,38,53Z"/><path class="cls-2" d="M18.83,60,10,51.17V4H36.17L45,12.83V42.18A11,11,0,0,0,38.52,60Z"/><rect class="cls-1" x="14" y="8" width="10" height="10"/><rect class="cls-3" x="16" y="10" width="6" height="6" transform="translate(32 -6) rotate(90)"/><line class="cls-1" x1="28" y1="18" x2="42" y2="18"/><rect class="cls-1" x="14" y="24" width="10" height="10"/><rect class="cls-3" x="16" y="26" width="6" height="6" transform="translate(48 10) rotate(90)"/><line class="cls-1" x1="28" y1="34" x2="42" y2="34"/><rect class="cls-1" x="14" y="40" width="10" height="10"/><rect class="cls-3" x="16" y="42" width="6" height="6" transform="translate(64 26) rotate(90)"/><line class="cls-1" x1="34.35" y1="50" x2="28" y2="50"/><circle class="cls-1" cx="47" cy="53" r="9"/><circle class="cls-3" cx="47" cy="53" r="7"/><line class="cls-1" x1="47" y1="48" x2="47" y2="58"/><line class="cls-1" x1="52" y1="53" x2="42" y2="53"/></g></svg>
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

  