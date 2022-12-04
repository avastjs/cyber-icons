
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="drive-optical"><circle class="cls-1" cx="32" cy="32" r="30"/><circle class="cls-2" cx="32" cy="32" r="28"/><circle class="cls-3" cx="32" cy="32" r="6"/><path class="cls-3" d="M44,32A12,12,0,0,0,32,20V8A24,24,0,0,1,56,32Z"/><path class="cls-3" d="M20,32A12,12,0,0,0,32,44V56A24,24,0,0,1,8,32Z"/><circle class="cls-1" cx="32" cy="32" r="6"/><path class="cls-1" d="M44,32A12,12,0,0,0,32,20V8A24,24,0,0,1,56,32Z"/><path class="cls-1" d="M20,32A12,12,0,0,0,32,44V56A24,24,0,0,1,8,32Z"/></g></svg>
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

  