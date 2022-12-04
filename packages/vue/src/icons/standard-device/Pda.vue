
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:{{primary ? primary : colors[theme].primary}};}.cls-2{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="pda"><path class="cls-1" d="M55,54v6a2,2,0,0,1-2,2H11a2,2,0,0,1-2-2V54H29a3,3,0,0,0,6,0Z"/><path class="cls-2" d="M55,54v6a2,2,0,0,1-2,2H11a2,2,0,0,1-2-2V54H29a3,3,0,0,0,6,0Z"/><path class="cls-1" d="M57,12V26l-2,1V54H35a3,3,0,0,0-6,0H9V48H7V34l2-1V4a2,2,0,0,1,2-2H53a2,2,0,0,1,2,2v8Z"/><path class="cls-2" d="M57,12V26l-2,1V54H35a3,3,0,0,0-6,0H9V48H7V34l2-1V4a2,2,0,0,1,2-2H53a2,2,0,0,1,2,2v8Z"/><path class="cls-2" d="M37.74,50a7,7,0,0,0-11.48,0H13V6H51V50Z"/><path class="cls-3" d="M38.7,48a9,9,0,0,0-13.4,0H15V8H49V48Z"/><circle class="cls-2" cx="32" cy="54" r="3"/><circle class="cls-3" cx="32" cy="54" r="3"/><circle class="cls-2" cx="32" cy="54" r="3"/><line class="cls-2" x1="52" y1="58" x2="49" y2="58"/><line class="cls-2" x1="47" y1="58" x2="44" y2="58"/><line class="cls-2" x1="42" y1="58" x2="39" y2="58"/><line class="cls-2" x1="12" y1="58" x2="15" y2="58"/><line class="cls-2" x1="17" y1="58" x2="20" y2="58"/><line class="cls-2" x1="22" y1="58" x2="25" y2="58"/></g></svg>
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

  