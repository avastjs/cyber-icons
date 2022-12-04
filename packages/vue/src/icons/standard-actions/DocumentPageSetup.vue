
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}</svg:style> </defs><g id="document-page-setup"><polygon class="cls-1" points="19.83 60 13 53.17 13 4 38.17 4 51 16.83 51 60 19.83 60"/><path class="cls-2" d="M31.7,42l-.49-2.93L30,38.71a6.84,6.84,0,0,1-2.8-1.62l-.91-.87-2.8,1-.31-.53,2.27-1.87-.27-1.2a7.35,7.35,0,0,1,0-3.32l.27-1.2-2.27-1.87.31-.53,2.8,1,.91-.87A6.84,6.84,0,0,1,30,25.29l1.2-.36L31.7,22h.6l.49,2.93,1.2.36a6.84,6.84,0,0,1,2.8,1.62l.91.87,2.8-1,.31.53-2.27,1.87.27,1.2a7.35,7.35,0,0,1,0,3.32l-.27,1.2,2.27,1.87-.31.53-2.8-1-.91.87A6.84,6.84,0,0,1,34,38.71l-1.2.36L32.3,42Z"/><circle class="cls-1" cx="32" cy="32" r="3"/><polygon class="cls-3" points="53 62 19 62 11 54 11 2 39 2 53 16 53 62"/><polygon class="cls-3" points="53 16 39 16 39 2 53 16"/><polygon class="cls-2" points="41 14 41 6.83 48.17 14 41 14"/><path class="cls-3" d="M40.76,34.1l2.63,2.17-2,3.46-3.21-1.2a8.9,8.9,0,0,1-3.62,2.1L34,44H30l-.56-3.37a8.9,8.9,0,0,1-3.62-2.1l-3.21,1.2-2-3.46,2.63-2.17a9.31,9.31,0,0,1,0-4.2l-2.63-2.17,2-3.46,3.21,1.2a8.9,8.9,0,0,1,3.62-2.1L30,20h4l.56,3.37a8.9,8.9,0,0,1,3.62,2.1l3.21-1.2,2,3.46L40.76,29.9a9.31,9.31,0,0,1,0,4.2Z"/><circle class="cls-3" cx="32" cy="32" r="5"/></g></svg>
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

  