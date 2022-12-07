
  <template>
		<svg :class="className" :height="size" :width="size" id="folder-drag-accept" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><path class="cls-3" d="M58,32v4H20v20c0,1.66-.67,3.16-1.76,4.24-1.08,1.09-2.58,1.76-4.24,1.76-3.31,0-6-2.69-6-6v-5l-6-3V28l4-2v-6l2-4H24l2,4h10v12h22Z"/><line class="cls-2" x1="26" y1="20" x2="12" y2="20"/><path class="cls-2" d="M58,32v4H20v20c0,1.66-.67,3.16-1.76,4.24-1.08,1.09-2.58,1.76-4.24,1.76-3.31,0-6-2.69-6-6v-5l-6-3V28l4-2v-6l2-4H24l2,4h10v12h22Z"/><path class="cls-2" d="M62,36v20c0,3.31-2.69,6-6,6H14c1.66,0,3.16-.67,4.24-1.76,1.09-1.08,1.76-2.58,1.76-4.24v-20H62Z"/><path class="cls-1" d="M20.94,60c.69-1.2,1.06-2.57,1.06-4v-18H60v18c0,2.21-1.79,4-4,4H20.94Z"/><line class="cls-2" x1="52" y1="46" x2="42" y2="46"/><line class="cls-2" x1="52" y1="50" x2="32" y2="50"/><line class="cls-2" x1="52" y1="54" x2="32" y2="54"/><polygon class="cls-2" points="62 8 62 32 36 32 36 2 56 2 62 8"/><polygon class="cls-1" points="38 30 38 4 55.17 4 60 8.83 60 30 38 30"/><polygon class="cls-3" points="62 8 56 8 56 2 62 8"/><polygon class="cls-2" points="62 8 56 8 56 2 62 8"/></svg>
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

  