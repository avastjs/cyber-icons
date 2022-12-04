
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="format-justify-right"><polygon class="cls-1" points="57 12 57 62 17 62 7 52 7 2 47 2 57 12"/><polygon class="cls-2" points="17.83 60 9 51.17 9 4 46.17 4 55 12.83 55 60 17.83 60"/><line class="cls-1" x1="17" y1="32" x2="47" y2="32"/><line class="cls-1" x1="25" y1="37" x2="47" y2="37"/><line class="cls-1" x1="17" y1="42" x2="47" y2="42"/><line class="cls-1" x1="25" y1="47" x2="47" y2="47"/><line class="cls-1" x1="17" y1="52" x2="47" y2="52"/><polygon class="cls-1" points="41 10 44 16 35 16 35 28 29 26 29 16 22 16 19 10 41 10"/><polygon class="cls-3" points="31 24.56 31 14 23.24 14 22.24 12 39.76 12 40.76 14 33 14 33 25.23 31 24.56"/></g></svg>
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

  