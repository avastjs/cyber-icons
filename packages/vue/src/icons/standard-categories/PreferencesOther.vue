
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="preferences-other"><path class="cls-1" d="M54,20H10L8,18V12l2-2H54l2,2v6Z"/><polygon class="cls-2" points="10.83 18 10 17.17 10 12.83 10.83 12 53.17 12 54 12.83 54 17.17 53.17 18 10.83 18"/><path class="cls-1" d="M54,44H10L8,46v6l2,2H54l2-2V46Z"/><polygon class="cls-2" points="10.83 52 10 51.17 10 46.83 10.83 46 53.17 46 54 46.83 54 51.17 53.17 52 10.83 52"/><path class="cls-1" d="M54,37H10L8,35V29l2-2H54l2,2v6Z"/><polygon class="cls-3" points="10.83 35 10 34.17 10 29.83 10.83 29 53.17 29 54 29.83 54 34.17 53.17 35 10.83 35"/><polyline class="cls-1" points="28.48 62 7.51 62 2 56.48 2 35.52"/><polyline class="cls-1" points="35.52 2 56.48 2 62 7.51 62 28.48"/></g></svg>
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

  