
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="insert-object"><path class="cls-1" d="M53,12V44a9,9,0,0,0-9,9H12L2,43V2H43Z"/><path class="cls-2" d="M12.83,51,4,42.17V4H42.17L51,12.83V42.18A11,11,0,0,0,42.18,51Z"/><circle class="cls-1" cx="53" cy="53" r="9"/><circle class="cls-3" cx="53" cy="53" r="7"/><line class="cls-1" x1="53" y1="48" x2="53" y2="58"/><line class="cls-1" x1="58" y1="53" x2="48" y2="53"/><path class="cls-1" d="M26,8v9a9,9,0,0,0-9,9H8V8Z"/><path class="cls-3" d="M10,24V10H24v5.18A11,11,0,0,0,15.18,24Z"/><path class="cls-1" d="M35,26a9.36,9.36,0,0,1-.22,2H28v6.78A9.36,9.36,0,0,1,26,35a9,9,0,1,1,9-9Z"/><path class="cls-3" d="M26,33a7,7,0,1,1,7-7H26Z"/><polygon class="cls-1" points="46 28 28 46 28 28 46 28"/><polygon class="cls-3" points="30 30 41.17 30 30 41.17 30 30"/></g></svg>
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

  