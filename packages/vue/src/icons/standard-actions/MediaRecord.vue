
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="media-record"><polygon class="cls-1" points="62 12 62 62 12 62 2 52 2 2 52 2 62 12"/><polygon class="cls-2" points="12.83 60 4 51.17 4 4 51.17 4 60 12.83 60 60 12.83 60"/><rect class="cls-1" x="12" y="12" width="40" height="40" rx="20" transform="translate(0 64) rotate(-90)"/><circle class="cls-3" cx="32" cy="32" r="18"/></g></svg>
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

  