
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="network-wireless"><path class="cls-1" d="M30,20V36a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V20a2,2,0,0,1,2-2h9.18a3,3,0,0,0,5.64,0H28A2,2,0,0,1,30,20Z"/><path class="cls-2" d="M4,36V20h8a5,5,0,0,0,8,0h8V36Z"/><rect class="cls-3" x="12" y="38" width="8" height="4"/><path class="cls-3" d="M19,17a2.77,2.77,0,0,1-.18,1,3,3,0,0,1-5.64,0A2.77,2.77,0,0,1,13,17a3,3,0,0,1,6,0Z"/><rect class="cls-1" x="12" y="38" width="8" height="4"/><line class="cls-1" x1="8" y1="42" x2="24" y2="42"/><path class="cls-1" d="M6.86,5.12a14.95,14.95,0,0,1,18.28,0"/><path class="cls-1" d="M9.29,8.28a11,11,0,0,1,13.42,0"/><path class="cls-1" d="M11.74,11.46a6.94,6.94,0,0,1,8.52,0"/><path class="cls-1" d="M19,17a2.77,2.77,0,0,1-.18,1,3,3,0,0,1-5.64,0A2.77,2.77,0,0,1,13,17a3,3,0,0,1,6,0Z"/><path class="cls-1" d="M62,40V56a2,2,0,0,1-2,2H36a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h9.18a3,3,0,0,0,5.64,0H60A2,2,0,0,1,62,40Z"/><path class="cls-2" d="M36,56V40h8a5,5,0,0,0,8,0h8V56Z"/><rect class="cls-3" x="44" y="58" width="8" height="4"/><path class="cls-3" d="M51,37a2.77,2.77,0,0,1-.18,1,3,3,0,0,1-5.64,0A2.77,2.77,0,0,1,45,37a3,3,0,0,1,6,0Z"/><rect class="cls-1" x="44" y="58" width="8" height="4"/><line class="cls-1" x1="40" y1="62" x2="56" y2="62"/><path class="cls-1" d="M38.86,25.12a14.95,14.95,0,0,1,18.28,0"/><path class="cls-1" d="M41.29,28.28a11,11,0,0,1,13.42,0"/><path class="cls-1" d="M43.74,31.46a6.94,6.94,0,0,1,8.52,0"/><path class="cls-1" d="M51,37a2.77,2.77,0,0,1-.18,1,3,3,0,0,1-5.64,0A2.77,2.77,0,0,1,45,37a3,3,0,0,1,6,0Z"/><polyline class="cls-1" points="32 7 48 7 48 19"/><polyline class="cls-1" points="30 57 16 57 16 45"/></g></svg>
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

  