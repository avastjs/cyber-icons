
  <template>
		<svg :class="className" :height="size" :width="size" id="network-transmit-receive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{secondary ? secondary : colors[theme].secondary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:#13ce2d;}.cls-4{fill:{{primary ? primary : colors[theme].primary}};}</svg:style> </defs><path class="cls-1" d="M46,44v4c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2v-4H46Z"/><path class="cls-2" d="M46,44v4c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2v-4H46Z"/><path class="cls-4" d="M37,60h0c0,1.1-.9,2-2,2H13c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path class="cls-2" d="M37,60h0c0,1.1-.9,2-2,2H13c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path class="cls-3" d="M20,32h17.33l-.77,4.66c-.32,1.93-1.99,3.34-3.95,3.34h-3.61c-.55,0-1.05,.22-1.41,.59-.37,.36-.59,.86-.59,1.41,0,1.1,.9,2,2,2H2V22c0-1.1,.9-2,2-2h14v10c0,1.1,.9,2,2,2Z"/><path class="cls-3" d="M46,32v7.75c-1.32-.48-2.32-1.64-2.56-3.09l-.77-4.66h3.33Z"/><path class="cls-3" d="M62,4V26H18V4c0-1.1,.9-2,2-2H60c1.1,0,2,.9,2,2Z"/><path class="cls-2" d="M20,32h17.33l-.77,4.66c-.32,1.93-1.99,3.34-3.95,3.34h-3.61c-.55,0-1.05,.22-1.41,.59-.37,.36-.59,.86-.59,1.41,0,1.1,.9,2,2,2H2V22c0-1.1,.9-2,2-2h14v10c0,1.1,.9,2,2,2Z"/><path class="cls-2" d="M46,32v7.75c-1.32-.48-2.32-1.64-2.56-3.09l-.77-4.66h3.33Z"/><path class="cls-1" d="M62,26v4c0,1.1-.9,2-2,2H20c-1.1,0-2-.9-2-2v-4H62Z"/><path class="cls-4" d="M53,42c0,1.1-.9,2-2,2H29c-1.1,0-2-.9-2-2,0-.55,.22-1.05,.59-1.41,.36-.37,.86-.59,1.41-.59h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.24,1.45,1.24,2.61,2.56,3.09,.43,.16,.9,.25,1.39,.25h3.61c1.1,0,2,.9,2,2Z"/><path class="cls-2" d="M62,26v4c0,1.1-.9,2-2,2H20c-1.1,0-2-.9-2-2v-4H62Z"/><path class="cls-2" d="M53,42c0,1.1-.9,2-2,2H29c-1.1,0-2-.9-2-2,0-.55,.22-1.05,.59-1.41,.36-.37,.86-.59,1.41-.59h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.24,1.45,1.24,2.61,2.56,3.09,.43,.16,.9,.25,1.39,.25h3.61c1.1,0,2,.9,2,2Z"/><path class="cls-2" d="M62,4V26H18V4c0-1.1,.9-2,2-2H60c1.1,0,2,.9,2,2Z"/></svg>
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

  