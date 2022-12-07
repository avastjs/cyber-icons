
  <template>
		<svg :class="className" :height="size" :width="size" id="folder-visiting" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><path class="cls-3" d="M50,28v10H20v12c0,1.66-.67,3.16-1.76,4.24-1.08,1.09-2.58,1.76-4.24,1.76-3.31,0-6-2.69-6-6v-5l-6-3v-12l4-2v-6l2-4H24l2,4h18l6,6Z"/><polygon class="cls-3" points="58 18 58 28 50 28 44 22 26 22 24 18 14 18 14 12 16 8 32 8 34 12 52 12 58 18"/><path class="cls-1" d="M20.93,54c.69-1.2,1.07-2.57,1.07-4v-10h30v10c0,2.21-1.79,4-4,4H20.93Z"/><line class="cls-2" x1="26" y1="22" x2="12" y2="22"/><path class="cls-2" d="M50,28v10H20v12c0,1.66-.67,3.16-1.76,4.24-1.08,1.09-2.58,1.76-4.24,1.76-3.31,0-6-2.69-6-6v-5l-6-3v-12l4-2v-6l2-4H24l2,4h18l6,6Z"/><line class="cls-2" x1="46" y1="42" x2="36" y2="42"/><line class="cls-2" x1="46" y1="46" x2="26" y2="46"/><line class="cls-2" x1="46" y1="50" x2="26" y2="50"/><line class="cls-2" x1="34" y1="12" x2="20" y2="12"/><path class="cls-2" d="M54,38v12c0,3.31-2.69,6-6,6H14c1.66,0,3.16-.67,4.24-1.76,1.09-1.08,1.76-2.58,1.76-4.24v-12H54Z"/><polygon class="cls-2" points="58 18 58 28 50 28 44 22 26 22 24 18 14 18 14 12 16 8 32 8 34 12 52 12 58 18"/><path class="cls-2" d="M62,28v12c0,3.31-2.69,6-6,6h-2v-8h-4v-10h12Z"/><path class="cls-1" d="M56,36h-4v-6h8v10c0,2.21-1.79,4-4,4v-8Z"/></svg>
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

  