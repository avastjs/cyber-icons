
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="media-flash"><polygon class="cls-1" points="54.5 27.5 54.5 36.5 57.5 36.5 57.5 62 36.5 62 36.5 59 27.5 59 27.5 62 6.5 62 6.5 36.5 9.5 36.5 9.5 27.5 6.5 27.5 6.5 2 48.5 2 57.5 11 57.5 27.5 54.5 27.5"/><polygon class="cls-2" points="38.5 60 38.5 57 25.5 57 25.5 60 8.5 60 8.5 38.5 11.5 38.5 11.5 25.5 8.5 25.5 8.5 4 47.67 4 55.5 11.83 55.5 25.5 52.5 25.5 52.5 38.5 55.5 38.5 55.5 60 38.5 60"/><rect class="cls-1" x="14" y="14" width="36" height="36" rx="2"/><rect class="cls-3" x="16" y="16" width="32" height="32" transform="translate(64) rotate(90)"/><line class="cls-1" x1="18.5" y1="20" x2="30.5" y2="20"/><line class="cls-1" x1="18.5" y1="26" x2="39.5" y2="26"/></g></svg>
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

  