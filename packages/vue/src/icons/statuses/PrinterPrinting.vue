
  <template>
		<svg :class="className" :height="size" :width="size" id="printer-printing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><path class="cls-3" d="M19,28v-.92c5.37-2.04,9-7.22,9-13.08,0-1.36-.2-2.71-.58-4h12.75l4.83,4.83v13.17H19Z"/><polygon class="cls-1" points="47 14 41 14 41 8 47 14"/><polygon class="cls-2" points="60 43 60 53 62 54 62 58 51.5 58 51.5 55 12.5 55 12.5 58 2 58 2 54 4 53 4 43 2 42 2 36 8 30 56 30 62 36 62 42 60 43"/><polygon class="cls-1" points="53.5 56 53.5 53 10.5 53 10.5 56 4 56 4 55.23 6 54.23 6 41.76 4 40.76 4 36.83 8.83 32 55.17 32 60 36.83 60 40.76 58 41.76 58 54.23 60 55.23 60 56 53.5 56"/><path class="cls-2" d="M47,14V30H17v-4.38c5.18-1.33,9-6.03,9-11.62,0-2.19-.58-4.24-1.6-6h16.6l6,6Z"/><polygon class="cls-2" points="47 14 41 14 41 8 47 14"/><line class="cls-2" x1="51.5" y1="36" x2="54.5" y2="36"/><line class="cls-2" x1="45.5" y1="36" x2="48.5" y2="36"/><path class="cls-1" d="M26,14c0,5.59-3.82,10.29-9,11.62-.96,.25-1.96,.38-3,.38-6.63,0-12-5.37-12-12S7.37,2,14,2c4.45,0,8.33,2.42,10.4,6,1.02,1.76,1.6,3.81,1.6,6Z"/><path class="cls-2" d="M26,14c0,5.59-3.82,10.29-9,11.62-.96,.25-1.96,.38-3,.38-6.63,0-12-5.37-12-12S7.37,2,14,2c4.45,0,8.33,2.42,10.4,6,1.02,1.76,1.6,3.81,1.6,6Z"/><polygon class="cls-2" points="50 62 14 62 17 55 47 55 50 62"/><polygon class="cls-3" points="17.03 60 18.32 57 45.68 57 46.97 60 17.03 60"/><polyline class="cls-2" points="7 13 10 19 21 9"/></svg>
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

  