
  <template>
		<svg :class="className" :height="size" :width="size" id="folder-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><polygon class="cls-3" points="28 60 28 24 55.17 24 60 28.83 60 60 28 60"/><path class="cls-3" d="M56,22H20v20c0,1.66-.67,3.16-1.76,4.24-1.08,1.09-2.58,1.76-4.24,1.76-3.31,0-6-2.69-6-6v-5l-6-3V14l4-2V6l2-4H24l2,4h24l6,6v10Z"/><line class="cls-2" x1="26" y1="6" x2="12" y2="6"/><path class="cls-2" d="M56,22H20v20c0,1.66-.67,3.16-1.76,4.24-1.08,1.09-2.58,1.76-4.24,1.76-3.31,0-6-2.69-6-6v-5l-6-3V14l4-2V6l2-4H24l2,4h24l6,6v10Z"/><path class="cls-1" d="M26,22v26H14c1.66,0,3.16-.67,4.24-1.76,1.09-1.08,1.76-2.58,1.76-4.24V22h6Z"/><path class="cls-2" d="M26,22v26H14c1.66,0,3.16-.67,4.24-1.76,1.09-1.08,1.76-2.58,1.76-4.24V22h6Z"/><line class="cls-2" x1="41" y1="30" x2="31" y2="30"/><line class="cls-2" x1="51" y1="34" x2="31" y2="34"/><line class="cls-2" x1="51" y1="38" x2="31" y2="38"/><line class="cls-2" x1="51" y1="42" x2="31" y2="42"/><polygon class="cls-2" points="62 28 62 62 26 62 26 22 56 22 62 28"/><polygon class="cls-1" points="62 28 56 28 56 22 62 28"/><polygon class="cls-2" points="62 28 56 28 56 22 62 28"/></svg>
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

  