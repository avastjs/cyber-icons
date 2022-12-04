
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="edit-find-replace"><circle class="cls-1" cx="24" cy="22" r="20"/><circle class="cls-2" cx="24" cy="22" r="18"/><path class="cls-1" d="M24,6A16,16,0,0,1,40,22"/><polygon class="cls-1" points="60 53.93 58.59 62 41.2 43.62 42.62 36.54 60 53.93"/><polygon class="cls-3" points="43.37 42.99 43.84 40.6 57.85 54.61 57.3 57.73 43.37 42.99"/><line class="cls-1" x1="41.94" y1="39.94" x2="38.14" y2="36.14"/><polyline class="cls-1" points="16 48 24 53 16 58"/><polyline class="cls-1" points="4 40 4 47 10 53 24 53"/></g></svg>
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

  