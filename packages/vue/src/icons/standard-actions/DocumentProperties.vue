
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="document-properties"><polygon class="cls-1" points="53 62 19 62 11 54 11 2 39 2 53 16 53 62"/><polygon class="cls-2" points="19.83 60 13 53.17 13 4 38.17 4 51 16.83 51 60 19.83 60"/><polygon class="cls-1" points="53 16 39 16 39 2 53 16"/><polygon class="cls-3" points="41 14 41 6.83 48.17 14 41 14"/><line class="cls-1" x1="41" y1="24" x2="26" y2="24"/><line class="cls-1" x1="20" y1="24" x2="16" y2="24"/><line class="cls-1" x1="41" y1="32" x2="37" y2="32"/><line class="cls-1" x1="31" y1="32" x2="16" y2="32"/><line class="cls-1" x1="41" y1="40" x2="26" y2="40"/><line class="cls-1" x1="20" y1="40" x2="16" y2="40"/><circle class="cls-1" cx="23" cy="24" r="3"/><circle class="cls-1" cx="34" cy="32" r="3"/><circle class="cls-1" cx="23" cy="40" r="3"/></g></svg>
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

  