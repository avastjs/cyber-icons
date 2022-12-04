
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}</svg:style> </defs><g id="document-print"><polygon class="cls-1" points="13 26 13 4 38.17 4 51 16.83 51 26 13 26"/><polygon class="cls-2" points="55 56 55 45 9 45 9 56 4 56 4 36.83 10.83 30 53.17 30 60 36.83 60 56 55 56"/><rect class="cls-1" x="26.5" y="35.5" width="11" height="38" transform="translate(86.5 22.5) rotate(90)"/><rect class="cls-1" x="22" y="38" width="4" height="4"/><rect class="cls-1" x="30" y="38" width="4" height="4"/><rect class="cls-1" x="38" y="38" width="4" height="4"/><polygon class="cls-3" points="53 16 53 28 11 28 11 2 39 2 53 16"/><polygon class="cls-3" points="53 16 39 16 39 2 53 16"/><polygon class="cls-2" points="41 14 41 6.83 48.17 14 41 14"/><polygon class="cls-3" points="62 36 62 58 53 58 53 47 11 47 11 58 2 58 2 36 10 28 54 28 62 36"/><line class="cls-3" x1="21" y1="57" x2="43" y2="57"/><line class="cls-3" x1="21" y1="52" x2="43" y2="52"/><rect class="cls-3" x="11" y="47" width="42" height="15"/><rect class="cls-3" x="22" y="38" width="4" height="4"/><rect class="cls-3" x="30" y="38" width="4" height="4"/><rect class="cls-3" x="38" y="38" width="4" height="4"/></g></svg>
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

  