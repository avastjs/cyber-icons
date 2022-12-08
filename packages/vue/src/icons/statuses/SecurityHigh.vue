
  <template>
		<svg :class="className" :height="size" :width="size" id="security-high" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><polygon class="cls-2" points="56 7 56 15 2 15 2 7 31.5 7 33.5 4 50.5 4 52.5 7 56 7"/><polygon class="cls-1" points="4 13 4 9 32.57 9 34.57 6 49.43 6 51.43 9 54 9 54 13 4 13"/><polygon class="cls-2" points="56 15 56 49 36.5 49 34.5 52 10.5 52 7.5 49 2 49 2 15 56 15"/><polygon class="cls-3" points="11.33 50 8.33 47 4 47 4 17 54 17 54 47 35.43 47 33.43 50 11.33 50"/><line class="cls-2" x1="5" y1="11" x2="7" y2="11"/><line class="cls-2" x1="9" y1="11" x2="11" y2="11"/><line class="cls-2" x1="13" y1="11" x2="15" y2="11"/><path class="cls-1" d="M62,50c0,5.52-4.48,10-10,10s-10-4.48-10-10,4.48-10,10-10c3.01,0,5.72,1.34,7.55,3.45,1.53,1.75,2.45,4.04,2.45,6.55Z"/><path class="cls-3" d="M52,55l-1.6-1.2c-1.51-1.13-2.4-2.91-2.4-4.8v-1.98h0c1.28-.02,2.51-.53,3.41-1.44l.59-.59,.59,.59c.91,.91,2.13,1.42,3.41,1.44h0v1.98c0,1.89-.89,3.67-2.4,4.8,0,0-1.6,1.2-1.6,1.2Z"/><path class="cls-2" d="M62,50c0,5.52-4.48,10-10,10s-10-4.48-10-10,4.48-10,10-10c3.01,0,5.72,1.34,7.55,3.45,1.53,1.75,2.45,4.04,2.45,6.55Z"/><path class="cls-2" d="M52,55l-1.6-1.2c-1.51-1.13-2.4-2.91-2.4-4.8v-1.98h0c1.28-.02,2.51-.53,3.41-1.44l.59-.59,.59,.59c.91,.91,2.13,1.42,3.41,1.44h0v1.98c0,1.89-.89,3.67-2.4,4.8,0,0-1.6,1.2-1.6,1.2Z"/><polygon class="cls-1" points="33.5 36.1 33.5 30.9 29 28.3 24.5 30.9 24.5 36.1 29 38.7 33.5 36.1"/><circle class="cls-1" cx="29" cy="22.5" r="2"/><circle class="cls-1" cx="19.47" cy="28" r="2"/><circle class="cls-1" cx="19.47" cy="39" r="2"/><circle class="cls-1" cx="29" cy="44.5" r="2"/><circle class="cls-1" cx="38.53" cy="39" r="2"/><circle class="cls-1" cx="38.53" cy="28" r="2"/><polygon class="cls-2" points="33.5 36.1 33.5 30.9 29 28.3 24.5 30.9 24.5 36.1 29 38.7 33.5 36.1"/><line class="cls-2" x1="29" y1="28.3" x2="29" y2="24.5"/><circle class="cls-2" cx="29" cy="22.5" r="2"/><line class="cls-2" x1="24.5" y1="30.9" x2="21.21" y2="29"/><circle class="cls-2" cx="19.47" cy="28" r="2"/><line class="cls-2" x1="24.5" y1="36.1" x2="21.21" y2="38"/><circle class="cls-2" cx="19.47" cy="39" r="2"/><line class="cls-2" x1="29" y1="38.7" x2="29" y2="42.5"/><circle class="cls-2" cx="29" cy="44.5" r="2"/><line class="cls-2" x1="33.5" y1="36.1" x2="36.79" y2="38"/><circle class="cls-2" cx="38.53" cy="39" r="2"/><line class="cls-2" x1="33.5" y1="30.9" x2="36.79" y2="29"/><circle class="cls-2" cx="38.53" cy="28" r="2"/></svg>
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

  