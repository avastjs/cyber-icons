
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="appointment-new"><polygon class="cls-1" points="62 12 62 25 2 25 2 12 9 12 9 19 15 19 15 12 49 12 49 19 55 19 55 12 62 12"/><polygon class="cls-2" points="4 23 4 14 7 14 7 21 17 21 17 14 47 14 47 21 57 21 57 14 60 14 60 23 4 23"/><rect class="cls-1" x="2" y="25" width="60" height="34"/><rect class="cls-3" x="17" y="14" width="30" height="56" transform="translate(74 10) rotate(90)"/><rect class="cls-1" x="9" y="5" width="6" height="14"/><rect class="cls-3" x="11" y="7" width="2" height="10"/><rect class="cls-1" x="49" y="5" width="6" height="14"/><rect class="cls-3" x="51" y="7" width="2" height="10"/><circle class="cls-1" cx="32" cy="42" r="9"/><circle class="cls-2" cx="32" cy="42" r="7"/><line class="cls-1" x1="32" y1="37" x2="32" y2="47"/><line class="cls-1" x1="37" y1="42" x2="27" y2="42"/></g></svg>
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

  