
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1,.cls-4{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-1{stroke-dasharray:4 4;}.cls-2{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><g id="applications-engineering"><line class="cls-1" x1="32" y1="58" x2="32" y2="44"/><path class="cls-2" d="M40.76,34.1l2.63,2.17-2,3.46-3.21-1.2a8.9,8.9,0,0,1-3.62,2.1L34,44H30l-.56-3.37a8.9,8.9,0,0,1-3.62-2.1l-3.21,1.2-2-3.46,2.63-2.17a9.31,9.31,0,0,1,0-4.2l-2.63-2.17,2-3.46,3.21,1.2a8.9,8.9,0,0,1,3.62-2.1L30,20h4l.56,3.37a8.9,8.9,0,0,1,3.62,2.1l3.21-1.2,2,3.46L40.76,29.9a9.31,9.31,0,0,1,0,4.2Z"/><circle class="cls-3" cx="32" cy="32" r="5"/><path class="cls-4" d="M40.76,34.1l2.63,2.17-2,3.46-3.21-1.2a8.9,8.9,0,0,1-3.62,2.1L34,44H30l-.56-3.37a8.9,8.9,0,0,1-3.62-2.1l-3.21,1.2-2-3.46,2.63-2.17a9.31,9.31,0,0,1,0-4.2l-2.63-2.17,2-3.46,3.21,1.2a8.9,8.9,0,0,1,3.62-2.1L30,20h4l.56,3.37a8.9,8.9,0,0,1,3.62,2.1l3.21-1.2,2,3.46L40.76,29.9a9.31,9.31,0,0,1,0,4.2Z"/><circle class="cls-4" cx="32" cy="32" r="5"/><circle class="cls-3" cx="32" cy="4" r="2"/><circle class="cls-3" cx="7" cy="32" r="2"/><circle class="cls-3" cx="57" cy="32" r="2"/><circle class="cls-3" cx="16.41" cy="23" r="2"/><circle class="cls-3" cx="16.41" cy="41" r="2"/><circle class="cls-3" cx="47.59" cy="41" r="2"/><circle class="cls-3" cx="47.59" cy="23" r="2"/><circle class="cls-3" cx="32" cy="60" r="2"/><circle class="cls-4" cx="32" cy="4" r="2"/><circle class="cls-2" cx="20" cy="8" r="2"/><circle class="cls-2" cx="58" cy="5" r="3"/><circle class="cls-2" cx="58" cy="59" r="3"/><circle class="cls-2" cx="6" cy="5" r="3"/><circle class="cls-2" cx="6" cy="59" r="3"/><circle class="cls-2" cx="44" cy="8" r="2"/><circle class="cls-2" cx="20" cy="56" r="2"/><circle class="cls-2" cx="44" cy="56" r="2"/><circle class="cls-4" cx="20" cy="8" r="2"/><line class="cls-1" x1="32" y1="6" x2="32" y2="20"/><circle class="cls-4" cx="7" cy="32" r="2"/><line class="cls-1" x1="9" y1="32" x2="23" y2="32"/><circle class="cls-4" cx="57" cy="32" r="2"/><line class="cls-1" x1="55" y1="32" x2="41" y2="32"/><circle class="cls-4" cx="16.41" cy="23" r="2"/><line class="cls-4" x1="18.14" y1="24" x2="21.61" y2="26"/><circle class="cls-4" cx="16.41" cy="41" r="2"/><line class="cls-4" x1="18.14" y1="40" x2="21.61" y2="38"/><circle class="cls-4" cx="47.59" cy="41" r="2"/><line class="cls-4" x1="45.86" y1="40" x2="42.39" y2="38"/><circle class="cls-4" cx="47.59" cy="23" r="2"/><line class="cls-4" x1="45.86" y1="24" x2="42.39" y2="26"/><polyline class="cls-1" points="49.32 22 57.98 17 57.98 8"/><circle class="cls-4" cx="58" cy="5" r="3"/><polyline class="cls-1" points="49.32 42 57.98 47 57.98 56"/><circle class="cls-4" cx="58" cy="59" r="3"/><polyline class="cls-1" points="14.68 22 6.02 17 6.02 8"/><circle class="cls-4" cx="6" cy="5" r="3"/><polyline class="cls-1" points="14.68 42 6.02 47 6.02 56"/><circle class="cls-4" cx="6" cy="59" r="3"/><polyline class="cls-4" points="27.52 24.2 20 14 20 10"/><circle class="cls-4" cx="44" cy="8" r="2"/><polyline class="cls-4" points="36.48 24.2 44 14 44 10"/><circle class="cls-4" cx="32" cy="60" r="2"/><circle class="cls-4" cx="20" cy="56" r="2"/><polyline class="cls-4" points="27.52 39.8 20 50 20 54"/><circle class="cls-4" cx="44" cy="56" r="2"/><polyline class="cls-4" points="36.48 39.8 44 50 44 54"/></g></svg>
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

  