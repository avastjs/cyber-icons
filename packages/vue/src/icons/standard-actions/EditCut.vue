
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="edit-cut"><polygon class="cls-1" points="53 62 19 62 11 54 11 2 39 2 53 16 53 62"/><polygon class="cls-2" points="19.83 60 13 53.17 13 4 38.17 4 51 16.83 51 60 19.83 60"/><polygon class="cls-1" points="53 16 39 16 39 2 53 16"/><polygon class="cls-3" points="41 14 41 6.83 48.17 14 41 14"/><circle class="cls-1" cx="38.56" cy="38.66" r="4"/><path class="cls-3" d="M38.56,40.66a2,2,0,0,1-.71-3.87,1.94,1.94,0,0,1,.71-.13,2,2,0,0,1,.7,3.87A1.89,1.89,0,0,1,38.56,40.66Z"/><line class="cls-1" x1="34.81" y1="40.06" x2="27.78" y2="21.34"/><circle class="cls-1" cx="25.44" cy="38.66" r="4"/><path class="cls-3" d="M25.44,40.66a1.89,1.89,0,0,1-.7-.13,2,2,0,0,1,.7-3.87,1.94,1.94,0,0,1,.71.13,2,2,0,0,1-.71,3.87Z"/><line class="cls-1" x1="29.19" y1="40.06" x2="36.22" y2="21.34"/></g></svg>
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

  