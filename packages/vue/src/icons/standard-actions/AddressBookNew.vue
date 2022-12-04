
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="address-book-new"><polygon class="cls-1" points="59 10 59 54 51 62 10 62 10 52 15 52 15 46 10 46 10 35 15 35 15 29 10 29 10 18 15 18 15 12 10 12 10 2 51 2 59 10"/><polygon class="cls-2" points="12 60 12 54 17 54 17 44 12 44 12 37 17 37 17 27 12 27 12 20 17 20 17 10 12 10 12 4 50.17 4 57 10.83 57 53.17 50.17 60 12 60"/><rect class="cls-1" x="5" y="12" width="10" height="6"/><rect class="cls-3" x="7" y="14" width="6" height="2"/><rect class="cls-1" x="5" y="46" width="10" height="6"/><rect class="cls-3" x="7" y="48" width="6" height="2"/><rect class="cls-1" x="5" y="29" width="10" height="6"/><rect class="cls-3" x="7" y="31" width="6" height="2"/><circle class="cls-1" cx="37" cy="32" r="9"/><circle class="cls-3" cx="37" cy="32" r="7"/><line class="cls-1" x1="37" y1="27" x2="37" y2="37"/><line class="cls-1" x1="42" y1="32" x2="32" y2="32"/></g></svg>
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

  