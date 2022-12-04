
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="preferences-desktop-locale"><polygon class="cls-1" points="62 8 62 56 56 62 47 62 41 56 23 56 17 62 8 62 2 56 2 8 8 2 14 2 20 8 44 8 50 2 56 2 62 8"/><polygon class="cls-2" points="47.83 60 41.83 54 22.17 54 16.17 60 8.83 60 4 55.17 4 8.83 8.83 4 13.17 4 19.17 10 44.83 10 50.83 4 55.17 4 60 8.83 60 55.17 55.17 60 47.83 60"/><line class="cls-1" x1="41" y1="56" x2="23" y2="56"/><line class="cls-1" x1="21" y1="62" x2="43" y2="62"/><line class="cls-1" x1="25" y1="59" x2="39" y2="59"/><polygon class="cls-3" points="44 2 41 5 23 5 20 2 44 2"/><polygon class="cls-1" points="44 2 41 5 23 5 20 2 44 2"/><line class="cls-1" x1="20" y1="2" x2="14" y2="2"/><line class="cls-1" x1="44" y1="2" x2="50" y2="2"/><path class="cls-1" d="M43,23c0,12-11,23-11,23S21,35,21,23a11,11,0,0,1,22,0Z"/><path class="cls-3" d="M32,43c-2.85-3.33-9-11.52-9-20a9,9,0,0,1,18,0C41,31.5,34.85,39.69,32,43Z"/><circle class="cls-2" cx="32" cy="23" r="7"/><circle class="cls-1" cx="32" cy="23" r="7"/><path class="cls-1" d="M40.47,41.75C42.65,42.84,44,44.34,44,46c0,3.31-5.37,6-12,6s-12-2.69-12-6c0-1.66,1.35-3.16,3.53-4.25"/></g></svg>
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

  