
  <template>
		<svg :class="className" :height="size" :width="size" id="mail-attachment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><polygon class="cls-2" points="62 22 62 52 47.67 52 45 50 29 50 26.33 52 12 52 12 22 37 40 62 22"/><polygon class="cls-3" points="48.34 50 45.67 48 28.33 48 25.66 50 14 50 14 25.9 37 42.46 60 25.9 60 50 48.34 50"/><polygon class="cls-2" points="62 22 37 40 12 22 62 22"/><polygon class="cls-2" points="62 22 37 40 12 22 62 22"/><polygon class="cls-3" points="18.2 24 55.8 24 37 37.54 18.2 24"/><rect class="cls-1" x="2" y="12" width="20" height="20"/><rect class="cls-2" x="2" y="12" width="20" height="20"/><path class="cls-2" d="M15,24h-4c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.5c1.93,0,3.5,1.57,3.5,3.5h0c0,1.93-1.57,3.5-3.5,3.5h-3.5c-2.76,0-5-2.24-5-5h0c0-2.76,2.24-5,5-5h2"/></svg>
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

  