
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="zoom-original"><polyline class="cls-1" points="12 2 12 12 2 12"/><line class="cls-1" x1="12" y1="12" x2="2" y2="2"/><polyline class="cls-1" points="52 2 52 12 62 12"/><line class="cls-1" x1="52" y1="12" x2="62" y2="2"/><polyline class="cls-1" points="12 62 12 52 2 52"/><line class="cls-1" x1="12" y1="52" x2="2" y2="62"/><polyline class="cls-1" points="52 62 52 52 62 52"/><line class="cls-1" x1="52" y1="52" x2="62" y2="62"/><polygon class="cls-1" points="52 20 52 44 44 52 20 52 12 44 12 20 20 12 44 12 52 20"/><polygon class="cls-2" points="20.83 50 14 43.17 14 20.83 20.83 14 43.17 14 50 20.83 50 43.17 43.17 50 20.83 50"/><path class="cls-1" d="M29,40V27H25V24c3.31,0,4-2.69,4-6h6V40h3l1,6H25l1-6Z"/><path class="cls-3" d="M27.36,44l.33-2H31V25H28.48c1.32-1,2.13-2.64,2.41-5H33V42h3.31l.33,2Z"/></g></svg>
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

  