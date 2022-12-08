
  <template>
		<svg :class="className" :height="size" :width="size" id="software-update-available" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><path class="cls-1" d="M48,44v4c0,1.1-.9,2-2,2H6c-1.1,0-2-.9-2-2v-4H48Z"/><path class="cls-2" d="M48,44v4c0,1.1-.9,2-2,2H6c-1.1,0-2-.9-2-2v-4H48Z"/><path class="cls-3" d="M39,60h0c0,1.1-.9,2-2,2H15c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path class="cls-2" d="M39,60h0c0,1.1-.9,2-2,2H15c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path class="cls-3" d="M48,38v6H4V22c0-1.1,.9-2,2-2h14.75l5.25,7,5.25-7h6.97l-1,1.73,2.63,2.17c-.15,.67-.24,1.38-.24,2.1s.09,1.43,.24,2.1l-2.63,2.17,2,3.46,3.21-1.2c1.01,.97,2.25,1.69,3.62,2.1l.56,3.37h1.39Z"/><path class="cls-2" d="M48,38v6H4V22c0-1.1,.9-2,2-2h14.75l5.25,7,5.25-7h6.97l-1,1.73,2.63,2.17c-.15,.67-.24,1.38-.24,2.1s.09,1.43,.24,2.1l-2.63,2.17,2,3.46,3.21-1.2c1.01,.97,2.25,1.69,3.62,2.1l.56,3.37h1.39Z"/><polygon class="cls-2" points="35 15 26 27 17 15 22 15 22 2 30 2 30 15 35 15"/><polygon class="cls-1" points="21 17 24 17 24 4 28 4 28 17 31 17 26 23.67 21 17"/><path class="cls-1" d="M57.37,28.1l2.63,2.17-2,3.46-3.21-1.2c-1.01,.97-2.25,1.69-3.62,2.1l-.56,3.37h-4l-.56-3.37c-1.37-.41-2.61-1.13-3.62-2.1l-3.21,1.2-2-3.46,2.63-2.17c-.15-.67-.24-1.38-.24-2.1s.09-1.43,.24-2.1l-2.63-2.17,1-1.73,1-1.73,3.21,1.2c1.01-.97,2.25-1.69,3.62-2.1l.56-3.37h4l.56,3.37c1.37,.41,2.61,1.13,3.62,2.1l3.21-1.2,2,3.46-2.63,2.17c.15,.67,.24,1.38,.24,2.1s-.09,1.43-.24,2.1Z"/><circle class="cls-3" cx="48.61" cy="26" r="5"/><path class="cls-2" d="M57.37,28.1l2.63,2.17-2,3.46-3.21-1.2c-1.01,.97-2.25,1.69-3.62,2.1l-.56,3.37h-4l-.56-3.37c-1.37-.41-2.61-1.13-3.62-2.1l-3.21,1.2-2-3.46,2.63-2.17c-.15-.67-.24-1.38-.24-2.1s.09-1.43,.24-2.1l-2.63-2.17,1-1.73,1-1.73,3.21,1.2c1.01-.97,2.25-1.69,3.62-2.1l.56-3.37h4l.56,3.37c1.37,.41,2.61,1.13,3.62,2.1l3.21-1.2,2,3.46-2.63,2.17c.15,.67,.24,1.38,.24,2.1s-.09,1.43-.24,2.1Z"/><circle class="cls-2" cx="48.61" cy="26" r="5"/></svg>
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

  