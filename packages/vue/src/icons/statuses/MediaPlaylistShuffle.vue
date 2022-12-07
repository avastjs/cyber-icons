
  <template>
		<svg :class="className" :height="size" :width="size" id="media-playlist-shuffle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><path class="cls-2" d="M62,25v14l-4.23,1.06c-2.64,8.42-9.29,15.07-17.71,17.71l-1.06,4.23h-14l-1.06-4.23c-8.42-2.64-15.07-9.29-17.71-17.71l-4.23-1.06v-14l4.23-1.06C8.87,15.52,15.52,8.87,23.94,6.23l1.06-4.23h14l1.06,4.23c8.42,2.64,15.07,9.29,17.71,17.71l4.23,1.06Z"/><path class="cls-3" d="M26.56,60l-.95-3.8-1.07-.33c-7.82-2.45-13.95-8.58-16.4-16.4l-.33-1.07-3.8-.95v-10.88l3.8-.95,.33-1.07c2.45-7.82,8.58-13.95,16.4-16.4l1.07-.33,.95-3.8h10.88l.95,3.8,1.07,.33c7.82,2.45,13.95,8.58,16.4,16.4l.33,1.07,3.8,.95v10.88l-3.8,.95-.33,1.07c-2.45,7.82-8.58,13.95-16.4,16.4l-1.07,.33-.95,3.8h-10.88Z"/><polygon class="cls-1" points="44 29 44 25 36.31 25 27 43 12 43 12 39 23.69 39 33 21 44 21 44 17 52 23 44 29"/><polygon class="cls-1" points="27 21 27.75 22.45 25.06 27.65 23.69 25 12 25 12 21 27 21"/><polygon class="cls-1" points="44 47 44 43 33 43 32.25 41.55 34.94 36.35 36.31 39 44 39 44 35 52 41 44 47"/><polygon class="cls-2" points="44 29 44 25 36.31 25 27 43 12 43 12 39 23.69 39 33 21 44 21 44 17 52 23 44 29"/><polygon class="cls-2" points="27 21 27.75 22.45 25.06 27.65 23.69 25 12 25 12 21 27 21"/><polygon class="cls-2" points="44 47 44 43 33 43 32.25 41.55 34.94 36.35 36.31 39 44 39 44 35 52 41 44 47"/></svg>
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

  