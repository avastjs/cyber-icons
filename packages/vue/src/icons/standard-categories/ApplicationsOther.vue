
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}</svg:style> </defs><g id="applications-other"><path class="cls-1" d="M26,28H10L8,26V10l2-2H26l2,2V26Z"/><path class="cls-2" d="M38,28H54l2-2V10L54,8H38l-2,2V26Z"/><path class="cls-2" d="M26,36H10L8,38V54l2,2H26l2-2V38Z"/><path class="cls-1" d="M38,36H54l2,2V54l-2,2H38l-2-2V38Z"/><path class="cls-3" d="M26,28H10L8,26V10l2-2H26l2,2V26Z"/><path class="cls-3" d="M38,28H54l2-2V10L54,8H38l-2,2V26Z"/><polyline class="cls-3" points="28.48 62 7.51 62 2 56.48 2 35.52"/><polyline class="cls-3" points="35.52 2 56.48 2 62 7.51 62 28.48"/><path class="cls-3" d="M26,36H10L8,38V54l2,2H26l2-2V38Z"/><path class="cls-3" d="M38,36H54l2,2V54l-2,2H38l-2-2V38Z"/></g></svg>
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

  