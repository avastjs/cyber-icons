
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-4{fill:{{border ? border : colors[theme].border}};}</svg:style> </defs><g id="applications-games"><polygon class="cls-1" points="9 55 9 15.83 15.83 9 55 9 55 48.17 48.17 55 9 55"/><path class="cls-2" d="M44.78,45A6.13,6.13,0,0,1,41,43.7a6,6,0,0,1-2.17-3.33l-.11-.46A3,3,0,1,0,35,37H29a3,3,0,1,0-3.73,2.91l-.11.46a6.12,6.12,0,0,1-12-1.47,5.84,5.84,0,0,1,.08-1l2-11.87a6,6,0,0,1,5.92-5H25l1,2H38l1-2h3.92a6,6,0,0,1,5.92,5l2,11.87A6.12,6.12,0,0,1,44.78,45Z"/><polygon class="cls-3" points="40 19 38 23 26 23 24 19 40 19"/><path class="cls-3" d="M41,37a3,3,0,0,1-2.27,2.91A2.92,2.92,0,0,1,38,40a3,3,0,1,1,3-3Z"/><path class="cls-3" d="M29,37a3,3,0,0,1-3,3,2.92,2.92,0,0,1-.73-.09A3,3,0,1,1,29,37Z"/><polygon class="cls-2" points="40 19 38 23 26 23 24 19 40 19"/><line class="cls-2" x1="22" y1="27" x2="22" y2="25"/><line class="cls-2" x1="22" y1="31" x2="22" y2="29"/><line class="cls-2" x1="23" y1="28" x2="25" y2="28"/><line class="cls-2" x1="19" y1="28" x2="21" y2="28"/><circle class="cls-4" cx="42" cy="26" r="1"/><circle class="cls-4" cx="42" cy="30" r="1"/><circle class="cls-4" cx="44.5" cy="28" r="1"/><circle class="cls-4" cx="39.5" cy="28" r="1"/><path class="cls-2" d="M41,37a3,3,0,0,1-2.27,2.91A2.92,2.92,0,0,1,38,40a3,3,0,1,1,3-3Z"/><path class="cls-2" d="M29,37a3,3,0,0,1-3,3,2.92,2.92,0,0,1-.73-.09A3,3,0,1,1,29,37Z"/><polygon class="cls-2" points="57 7 57 49 49 57 7 57 7 15 15 7 57 7"/><polyline class="cls-2" points="52 2 62 2 62 12"/><polyline class="cls-2" points="12 62 2 62 2 52"/></g></svg>
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

  