
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="multimedia-volume-control"><path class="cls-1" d="M26.56,60l-.95-3.8-1.07-.34a25,25,0,0,1-16.4-16.4L7.8,38.39l-3.8-1V26.56l3.8-.95.34-1.07a25,25,0,0,1,16.4-16.4l1.07-.34L26.56,4H37.44l1,3.8,1.07.34a25,25,0,0,1,16.4,16.4l.34,1.07,3.8.95V37.44l-3.8,1-.34,1.07a25,25,0,0,1-16.4,16.4l-1.07.34-1,3.8Z"/><circle class="cls-2" cx="32" cy="32" r="20"/><circle class="cls-3" cx="32" cy="32" r="18"/><rect class="cls-1" x="21" y="29" width="4" height="6"/><polygon class="cls-1" points="35 24 35 40 25 35 25 29 35 24"/><path class="cls-1" d="M38,32a3,3,0,0,1-3,3V29A3,3,0,0,1,38,32Z"/><rect class="cls-2" x="21" y="29" width="4" height="6"/><polygon class="cls-2" points="35 24 35 40 25 35 25 29 35 24"/><path class="cls-2" d="M40.37,27.52a7,7,0,0,1,0,9"/><path class="cls-2" d="M38,32a3,3,0,0,1-3,3V29A3,3,0,0,1,38,32Z"/><path class="cls-2" d="M62,25V39l-4.23,1.06A27.11,27.11,0,0,1,40.06,57.77L39,62H25l-1.06-4.23A27.11,27.11,0,0,1,6.23,40.06L2,39V25l4.23-1.06A27.11,27.11,0,0,1,23.94,6.23L25,2H39l1.06,4.23A27.11,27.11,0,0,1,57.77,23.94Z"/><line class="cls-2" x1="32" y1="12" x2="32" y2="15"/><line class="cls-2" x1="28.87" y1="12.25" x2="29.34" y2="15.21"/><line class="cls-2" x1="25.82" y1="12.98" x2="26.75" y2="15.83"/><line class="cls-2" x1="22.92" y1="14.18" x2="24.28" y2="16.85"/><line class="cls-2" x1="20.24" y1="15.82" x2="22.01" y2="18.25"/><line class="cls-2" x1="17.86" y1="17.86" x2="19.98" y2="19.98"/><line class="cls-2" x1="15.82" y1="20.24" x2="18.25" y2="22.01"/><line class="cls-2" x1="14.18" y1="22.92" x2="16.85" y2="24.28"/><line class="cls-2" x1="12.98" y1="25.82" x2="15.83" y2="26.75"/><line class="cls-2" x1="12.25" y1="28.87" x2="15.21" y2="29.34"/><line class="cls-2" x1="35.13" y1="12.25" x2="34.66" y2="15.21"/><line class="cls-2" x1="38.18" y1="12.98" x2="37.25" y2="15.83"/><line class="cls-2" x1="41.08" y1="14.18" x2="39.72" y2="16.85"/><line class="cls-2" x1="43.76" y1="15.82" x2="41.99" y2="18.25"/><line class="cls-2" x1="46.14" y1="17.86" x2="44.02" y2="19.98"/><line class="cls-2" x1="48.18" y1="20.24" x2="45.75" y2="22.01"/><line class="cls-2" x1="49.82" y1="22.92" x2="47.15" y2="24.28"/><line class="cls-2" x1="51.02" y1="25.82" x2="48.17" y2="26.75"/><line class="cls-2" x1="51.75" y1="28.87" x2="48.79" y2="29.34"/><line class="cls-2" x1="12" y1="32" x2="15" y2="32"/><line class="cls-2" x1="12.25" y1="35.13" x2="15.21" y2="34.66"/><line class="cls-2" x1="12.98" y1="38.18" x2="15.83" y2="37.25"/><line class="cls-2" x1="14.18" y1="41.08" x2="16.85" y2="39.72"/><line class="cls-2" x1="15.82" y1="43.76" x2="18.25" y2="41.99"/><line class="cls-2" x1="17.86" y1="46.14" x2="19.98" y2="44.02"/><line class="cls-2" x1="20.24" y1="48.18" x2="22.01" y2="45.75"/><line class="cls-2" x1="22.92" y1="49.82" x2="24.28" y2="47.15"/><line class="cls-2" x1="25.82" y1="51.02" x2="26.75" y2="48.17"/><line class="cls-2" x1="28.87" y1="51.75" x2="29.34" y2="48.79"/><line class="cls-2" x1="32" y1="52" x2="32" y2="49"/></g></svg>
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

  