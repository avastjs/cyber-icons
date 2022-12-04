
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="printer"><polygon class="cls-1" points="47 9 41 9 41 3 47 9"/><polygon class="cls-2" points="60 46 60 56 62 57 62 61 51.5 61 51.5 58 12.5 58 12.5 61 2 61 2 57 4 56 4 46 2 45 2 39 8 33 56 33 62 39 62 45 60 46"/><polygon class="cls-3" points="53.5 59 53.5 56 10.5 56 10.5 59 4 59 4 58.24 6 57.24 6 44.76 4 43.76 4 39.83 8.83 35 55.17 35 60 39.83 60 43.76 58 44.76 58 57.24 60 58.24 60 59 53.5 59"/><rect class="cls-1" x="9.5" y="13.5" width="7.5" height="19.5"/><rect class="cls-1" x="47" y="13.5" width="7.5" height="19.5"/><rect class="cls-1" x="9.5" y="13.5" width="7.5" height="19.5"/><rect class="cls-1" x="47" y="13.5" width="7.5" height="19.5"/><rect class="cls-2" x="9.5" y="13.5" width="7.5" height="19.5"/><rect class="cls-2" x="47" y="13.5" width="7.5" height="19.5"/><rect class="cls-2" x="9.5" y="13.5" width="7.5" height="19.5"/><rect class="cls-2" x="47" y="13.5" width="7.5" height="19.5"/><polygon class="cls-2" points="47 9 47 33 17 33 17 3 41 3 47 9"/><polygon class="cls-2" points="47 9 41 9 41 3 47 9"/><line class="cls-2" x1="51.5" y1="39" x2="54.5" y2="39"/><line class="cls-2" x1="45.5" y1="39" x2="48.5" y2="39"/></g></svg>
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

  