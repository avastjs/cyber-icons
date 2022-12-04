
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}</svg:style> </defs><g id="network-wired"><rect class="cls-1" x="19" y="2" width="26" height="16" rx="2"/><rect class="cls-1" x="2" y="42" width="26" height="16" rx="2"/><rect class="cls-1" x="36" y="42" width="26" height="16" rx="2"/><rect class="cls-2" x="29" y="28" width="6" height="6"/><rect class="cls-3" x="19" y="2" width="26" height="16" rx="2"/><rect class="cls-3" x="28" y="18" width="8" height="4"/><line class="cls-3" x1="24" y1="22" x2="40" y2="22"/><rect class="cls-3" x="2" y="42" width="26" height="16" rx="2"/><rect class="cls-3" x="11" y="58" width="8" height="4"/><line class="cls-3" x1="7" y1="62" x2="23" y2="62"/><rect class="cls-3" x="36" y="42" width="26" height="16" rx="2"/><rect class="cls-3" x="45" y="58" width="8" height="4"/><line class="cls-3" x1="41" y1="62" x2="57" y2="62"/><line class="cls-3" x1="32" y1="22" x2="32" y2="28"/><rect class="cls-3" x="29" y="28" width="6" height="6"/><polyline class="cls-3" points="49 42 49 31 35 31"/><polyline class="cls-3" points="15 42 15 31 29 31"/></g></svg>
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

  