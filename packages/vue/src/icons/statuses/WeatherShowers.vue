
  <template>
		<svg :class="className" :height="size" :width="size" id="weather-showers" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><path class="cls-1" d="M62,30c0,3.87-3.13,7-7,7H23c-3.87,0-7-3.13-7-7s3.13-7,7-7h.09c.47-2.84,2.94-5,5.91-5,.71,0,1.38,.12,2.01,.35,2.15-3.23,5.82-5.35,9.99-5.35,3.1,0,5.92,1.17,8.05,3.11,2.03,1.84,3.44,4.37,3.83,7.22,.66-.22,1.38-.33,2.12-.33,.59,0,1.17,.07,1.72,.22,1.52,.38,2.83,1.25,3.77,2.43,.95,1.2,1.51,2.71,1.51,4.35Z"/><path class="cls-2" d="M62,30c0,3.87-3.13,7-7,7H23c-3.87,0-7-3.13-7-7s3.13-7,7-7h.09c.47-2.84,2.94-5,5.91-5,.71,0,1.38,.12,2.01,.35,2.15-3.23,5.82-5.35,9.99-5.35,3.1,0,5.92,1.17,8.05,3.11,2.03,1.84,3.44,4.37,3.83,7.22,.66-.22,1.38-.33,2.12-.33,.59,0,1.17,.07,1.72,.22,1.52,.38,2.83,1.25,3.77,2.43,.95,1.2,1.51,2.71,1.51,4.35Z"/><path class="cls-3" d="M48,44c0,3.87-3.13,7-7,7H9c-3.87,0-7-3.13-7-7s3.13-7,7-7h.09c.47-2.84,2.94-5,5.91-5,.71,0,1.38,.12,2.01,.35,2.15-3.23,5.82-5.35,9.99-5.35,3.1,0,5.92,1.17,8.05,3.11,2.03,1.84,3.44,4.37,3.83,7.22,.66-.22,1.38-.33,2.12-.33,.59,0,1.17,.07,1.72,.22,1.52,.38,2.83,1.25,3.77,2.43,.95,1.2,1.51,2.71,1.51,4.35Z"/><path class="cls-2" d="M9,47c-1.65,0-3-1.35-3-3"/><path class="cls-2" d="M48,44c0,3.87-3.13,7-7,7H9c-3.87,0-7-3.13-7-7s3.13-7,7-7h.09c.47-2.84,2.94-5,5.91-5,.71,0,1.38,.12,2.01,.35,2.15-3.23,5.82-5.35,9.99-5.35,3.1,0,5.92,1.17,8.05,3.11,2.03,1.84,3.44,4.37,3.83,7.22,.66-.22,1.38-.33,2.12-.33,.59,0,1.17,.07,1.72,.22,1.52,.38,2.83,1.25,3.77,2.43,.95,1.2,1.51,2.71,1.51,4.35Z"/><line class="cls-2" x1="56" y1="50" x2="56" y2="40"/><line class="cls-2" x1="52" y1="44" x2="52" y2="40"/><line class="cls-2" x1="56" y1="56" x2="56" y2="52"/><line class="cls-2" x1="52" y1="56" x2="52" y2="46"/><line class="cls-2" x1="27" y1="62" x2="27" y2="54"/><line class="cls-2" x1="39" y1="62" x2="39" y2="54"/><line class="cls-2" x1="35" y1="60" x2="35" y2="54"/><line class="cls-2" x1="19" y1="60" x2="19" y2="54"/><line class="cls-2" x1="23" y1="58" x2="23" y2="54"/><line class="cls-2" x1="23" y1="62" x2="23" y2="60"/><line class="cls-2" x1="31" y1="58" x2="31" y2="54"/><line class="cls-2" x1="31" y1="62" x2="31" y2="60"/><line class="cls-2" x1="43" y1="56" x2="43" y2="54"/><line class="cls-2" x1="43" y1="62" x2="43" y2="58"/><line class="cls-2" x1="15" y1="62" x2="15" y2="54"/><line class="cls-2" x1="11" y1="56" x2="11" y2="54"/><line class="cls-2" x1="11" y1="62" x2="11" y2="58"/></svg>
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

  