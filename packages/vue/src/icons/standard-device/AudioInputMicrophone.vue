
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1,.cls-4{fill:none;stroke:{{border ? border : colors[theme].border}};}.cls-1{stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}.cls-4{stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</svg:style> </defs><g id="audio-input-microphone"><path class="cls-1" d="M46,31v5A10,10,0,0,1,36,46H28A10,10,0,0,1,18,36V31"/><path class="cls-1" d="M42,8v8H22V8a6,6,0,0,1,6-6h8A6,6,0,0,1,42,8Z"/><path class="cls-2" d="M24,14V8a4,4,0,0,1,4-4h8a4,4,0,0,1,4,4v6Z"/><path class="cls-1" d="M42,16V36a6,6,0,0,1-6,6H28a6,6,0,0,1-6-6V16Z"/><path class="cls-2" d="M28,40a4,4,0,0,1-4-4V18H40V36a4,4,0,0,1-4,4Z"/><polygon class="cls-3" points="48 31 42 31 42 25 46 25 48 31"/><polygon class="cls-3" points="16 31 22 31 22 25 18 25 16 31"/><path class="cls-3" d="M46.5,62h-29a4,4,0,0,1,4-4H26a4,4,0,0,0,4-4V46h4v8a4,4,0,0,0,4,4h4.5A4,4,0,0,1,46.5,62Z"/><polygon class="cls-1" points="48 31 42 31 42 25 46 25 48 31"/><polygon class="cls-1" points="16 31 22 31 22 25 18 25 16 31"/><circle class="cls-3" cx="32" cy="28" r="3"/><circle class="cls-1" cx="32" cy="28" r="3"/><line class="cls-4" x1="32" y1="21" x2="32" y2="21"/><line class="cls-4" x1="32" y1="35" x2="32" y2="35"/><line class="cls-1" x1="32" y1="2" x2="32" y2="9"/><line class="cls-1" x1="36" y1="2" x2="36" y2="7"/><line class="cls-1" x1="28" y1="2" x2="28" y2="7"/><path class="cls-1" d="M46.5,62h-29a4,4,0,0,1,4-4H26a4,4,0,0,0,4-4V46h4v8a4,4,0,0,0,4,4h4.5A4,4,0,0,1,46.5,62Z"/></g></svg>
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

  