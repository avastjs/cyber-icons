
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="edit-delete"><polygon class="cls-1" points="52 62 12 62 8 14 56 14 52 62"/><polygon class="cls-2" points="13.84 60 10.17 16 53.83 16 50.16 60 13.84 60"/><rect class="cls-1" x="2" y="8" width="60" height="6"/><rect class="cls-3" x="31" y="-17" width="2" height="56" transform="translate(43 -21) rotate(90)"/><rect class="cls-1" x="22" y="2" width="20" height="6"/><rect class="cls-2" x="31" y="-3" width="2" height="16" transform="translate(37 -27) rotate(90)"/><line class="cls-1" x1="29.17" y1="38.83" x2="22.1" y2="45.9"/><line class="cls-1" x1="41.9" y1="26.1" x2="34.83" y2="33.17"/><line class="cls-1" x1="41.9" y1="45.9" x2="22.1" y2="26.1"/></g></svg>
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

  