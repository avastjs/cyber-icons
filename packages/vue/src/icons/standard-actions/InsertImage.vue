
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="insert-image"><path class="cls-1" d="M53,12V44a9,9,0,0,0-9,9H12L2,43V2H43Z"/><path class="cls-2" d="M12.83,51,4,42.17V4H42.17L51,12.83V42.18A11,11,0,0,0,42.18,51Z"/><circle class="cls-1" cx="53" cy="53" r="9"/><circle class="cls-3" cx="53" cy="53" r="7"/><line class="cls-1" x1="53" y1="48" x2="53" y2="58"/><line class="cls-1" x1="58" y1="53" x2="48" y2="53"/><polygon class="cls-1" points="46 36 33 20 24 32 19 24 9 36 46 36"/><path class="cls-3" d="M25,34l8.06-10.75L41.8,34ZM13.27,34l5.5-6.6L22.89,34Z"/><circle class="cls-1" cx="24" cy="16" r="4"/><circle class="cls-3" cx="24" cy="16" r="2"/></g></svg>
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

  