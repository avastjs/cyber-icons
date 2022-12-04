
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="utilities-terminal"><polygon class="cls-1" points="62 8 62 56 56 62 47 62 41 56 23 56 17 62 8 62 2 56 2 8 8 2 14 2 20 8 44 8 50 2 56 2 62 8"/><polygon class="cls-2" points="47.83 60 41.83 54 22.17 54 16.17 60 8.83 60 4 55.17 4 8.83 8.83 4 13.17 4 19.17 10 44.83 10 50.83 4 55.17 4 60 8.83 60 55.17 55.17 60 47.83 60"/><line class="cls-1" x1="41" y1="56" x2="23" y2="56"/><line class="cls-1" x1="21" y1="62" x2="43" y2="62"/><line class="cls-1" x1="25" y1="59" x2="39" y2="59"/><polygon class="cls-3" points="44 2 41 5 23 5 20 2 44 2"/><polygon class="cls-1" points="44 2 41 5 23 5 20 2 44 2"/><line class="cls-1" x1="20" y1="2" x2="14" y2="2"/><line class="cls-1" x1="44" y1="2" x2="50" y2="2"/><path class="cls-3" d="M52,20v4H12V20a4,4,0,0,1,4-4H48A4,4,0,0,1,52,20Z"/><path class="cls-1" d="M52,20v4H12V20a4,4,0,0,1,4-4H48A4,4,0,0,1,52,20Z"/><path class="cls-1" d="M52,24V44a4,4,0,0,1-4,4H16a4,4,0,0,1-4-4V24Z"/><polyline class="cls-1" points="16 29 22 35 16 41"/><line class="cls-1" x1="24" y1="40" x2="36" y2="40"/><line class="cls-1" x1="16" y1="19" x2="16" y2="21"/><line class="cls-1" x1="20" y1="19" x2="20" y2="21"/><line class="cls-1" x1="24" y1="19" x2="24" y2="21"/></g></svg>
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

  