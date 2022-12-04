
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1,.cls-4{fill:none;stroke:{{border ? border : colors[theme].border}};}.cls-1{stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-4{stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</svg:style> </defs><g id="media-tape"><path class="cls-1" d="M62,15V49a2,2,0,0,1-2,2H39l-1-2H26l-1,2H4a2,2,0,0,1-2-2V15a2,2,0,0,1,2-2H60A2,2,0,0,1,62,15Z"/><polygon class="cls-2" points="40.24 49 39.24 47 24.76 47 23.76 49 4 49 4 15 60 15 60 49 40.24 49"/><polygon class="cls-3" points="44 19 20 19 17 13 47 13 44 19"/><circle class="cls-3" cx="44" cy="35.5" r="10.5"/><circle class="cls-3" cx="17" cy="35.5" r="7.5"/><polygon class="cls-1" points="44 19 20 19 17 13 47 13 44 19"/><circle class="cls-1" cx="44" cy="35.5" r="10.5"/><path class="cls-1" d="M44,31a4.51,4.51,0,0,1,4.5,4.5"/><circle class="cls-1" cx="17" cy="35.5" r="7.5"/><path class="cls-1" d="M17,37a1.5,1.5,0,0,1-1.5-1.5"/><line class="cls-4" x1="56" y1="19" x2="56" y2="19"/><line class="cls-4" x1="8" y1="19" x2="8" y2="19"/><line class="cls-4" x1="56" y1="46" x2="56" y2="46"/><line class="cls-4" x1="8" y1="46" x2="8" y2="46"/></g></svg>
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

  