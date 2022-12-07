
  <template>
		<svg :class="className" :height="size" :width="size" id="network-offline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><path class="cls-1" d="M46,44v4c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2v-4H46Z"/><path class="cls-2" d="M46,44v4c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2v-4H46Z"/><path class="cls-3" d="M37,60h0c0,1.1-.9,2-2,2H13c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path class="cls-2" d="M37,60h0c0,1.1-.9,2-2,2H13c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path d="M46,32v12H2V22c0-1.1,.9-2,2-2H12v10c0,1.1,.9,2,2,2H46Z"/><path class="cls-2" d="M46,32v12H2V22c0-1.1,.9-2,2-2H12v10c0,1.1,.9,2,2,2H46Z"/><rect class="cls-2" x="12" y="2" width="50" height="30" rx="2" ry="2"/><rect class="cls-3" x="14" y="4" width="46" height="26"/><circle class="cls-1" cx="37" cy="17" r="8"/><circle class="cls-2" cx="37" cy="17" r="8"/><line class="cls-2" x1="40.54" y1="13.46" x2="33.46" y2="20.54"/><line class="cls-2" x1="40.54" y1="20.54" x2="33.46" y2="13.46"/></svg>
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

  