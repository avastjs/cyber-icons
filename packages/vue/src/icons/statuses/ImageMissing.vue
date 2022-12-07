
  <template>
		<svg :class="className" :height="size" :width="size" id="image-missing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><polygon class="cls-1" points="52 32 52 52 2 52 2 32 10.93 22.07 20 32 36 16 52 32"/><polygon class="cls-3" points="52 2 52 32 36 16 20 32 10.93 22.07 2 32 2 2 52 2"/><circle class="cls-1" cx="20" cy="15" r="3"/><polygon class="cls-2" points="52 32 52 52 2 52 2 32 10.93 22.07 20 32 36 16 52 32"/><polygon class="cls-2" points="52 2 52 32 36 16 20 32 10.93 22.07 2 32 2 2 52 2"/><circle class="cls-2" cx="20" cy="15" r="3"/><polygon class="cls-3" points="62 30 58 30 57 32 46 32 45 30 30 30 30 62 34 62 35 60 46 60 47 62 62 62 62 30"/><circle class="cls-1" cx="46" cy="46" r="10"/><polygon class="cls-2" points="62 30 58 30 57 32 46 32 45 30 30 30 30 62 34 62 35 60 46 60 47 62 62 62 62 30"/><circle class="cls-2" cx="46" cy="46" r="10"/><line class="cls-2" x1="53.07" y1="38.93" x2="38.93" y2="53.07"/></svg>
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

  