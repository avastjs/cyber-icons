
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="help-contents"><polygon class="cls-1" points="62 12 62 62 12 62 2 52 2 2 52 2 62 12"/><polygon class="cls-2" points="12.83 60 4 51.17 4 4 51.17 4 60 12.83 60 60 12.83 60"/><rect class="cls-1" x="8" y="8" width="22" height="22"/><rect class="cls-3" x="10" y="10" width="18" height="18" transform="translate(38) rotate(90)"/><line class="cls-1" x1="34" y1="22" x2="41" y2="22"/><line class="cls-1" x1="34" y1="26" x2="56" y2="26"/><line class="cls-1" x1="34" y1="30" x2="56" y2="30"/><line class="cls-1" x1="7" y1="35" x2="57" y2="35"/><line class="cls-1" x1="7" y1="39" x2="57" y2="39"/><line class="cls-1" x1="7" y1="43" x2="57" y2="43"/></g></svg>
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

  