
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="camera-video"><polygon class="cls-1" points="62 53 48 45 48 29 62 21 62 53"/><polygon class="cls-2" points="50 43.84 50 30.16 60 24.45 60 49.55 50 43.84"/><polygon class="cls-1" points="48 24 48 50 26 50 24 54 16 54 16 50 12 50 12 24 32 24 34 20 42 20 42 24 48 24"/><polygon class="cls-3" points="18 52 18 48 14 48 14 26 33.24 26 35.24 22 40 22 40 26 46 26 46 48 24.76 48 22.76 52 18 52"/><polygon class="cls-2" points="25.9 24 21.9 24 19.2 14 2 14 4 10 22 10 23.2 14 25.9 24"/><polygon class="cls-1" points="25.9 24 21.9 24 19.2 14 2 14 4 10 22 10 23.2 14 25.9 24"/><rect class="cls-2" x="16" y="28" width="6" height="6"/><rect class="cls-2" x="26" y="28" width="6" height="6"/><rect class="cls-2" x="16" y="38" width="24" height="4"/><rect class="cls-1" x="16" y="28" width="6" height="6"/><rect class="cls-1" x="26" y="28" width="6" height="6"/><rect class="cls-1" x="16" y="38" width="24" height="4"/><line class="cls-1" x1="16" y1="46" x2="26" y2="46"/></g></svg>
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

  