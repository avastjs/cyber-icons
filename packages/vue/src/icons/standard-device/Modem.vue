
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-4{fill:{{border ? border : colors[theme].border}};}</svg:style> </defs><g id="modem"><path class="cls-1" d="M48,60H40.53l-1-2H24.47l-1,2H16"/><path class="cls-1" d="M48,25H40.53l-1,2H24.47l-1-2H16"/><path class="cls-1" d="M62,33V52a4,4,0,0,1-4,4H43l-1-2H22l-1,2H6a4,4,0,0,1-4-4V33a4,4,0,0,1,4-4H21l1,2H42l1-2H58A4,4,0,0,1,62,33Z"/><path class="cls-2" d="M44.24,54l-1-2H20.76l-1,2H6a2,2,0,0,1-2-2V33a2,2,0,0,1,2-2H19.76l1,2H43.24l1-2H58a2,2,0,0,1,2,2V52a2,2,0,0,1-2,2Z"/><path class="cls-1" d="M13.85,11a26.92,26.92,0,0,1,36.3,0"/><path class="cls-1" d="M17.89,15.46a21,21,0,0,1,28.23,0"/><path class="cls-1" d="M21.92,19.9a15,15,0,0,1,20.16,0"/><circle class="cls-3" cx="32" cy="42.5" r="7.5"/><circle class="cls-1" cx="32" cy="42.5" r="7.5"/><circle class="cls-4" cx="48.5" cy="42.5" r="1.5"/><circle class="cls-4" cx="15.5" cy="42.5" r="1.5"/><rect class="cls-3" x="58" y="37.5" width="4" height="10"/><rect class="cls-3" x="2" y="37.5" width="4" height="10" transform="translate(8 85) rotate(-180)"/><rect class="cls-1" x="58" y="37.5" width="4" height="10"/><rect class="cls-1" x="2" y="37.5" width="4" height="10" transform="translate(8 85) rotate(-180)"/></g></svg>
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

  