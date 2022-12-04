
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="folder"><line class="cls-1" x1="26" y1="13" x2="12" y2="13"/><path class="cls-1" d="M58,19H20V49a6,6,0,0,1-6,6,6,6,0,0,1-6-6V36L2,33V27l4-2V13L8,9H24l2,4H52Z"/><path class="cls-2" d="M14,53a4,4,0,0,1-4-4V34.76l-6-3V28.24l4-2V13.47L9.24,11H22.76l2,4H51.17l2,2H18V49a4,4,0,0,1-4,4Z"/><path class="cls-1" d="M62,19V49a6,6,0,0,1-6,6H14a6,6,0,0,0,6-6V19Z"/><path class="cls-3" d="M20.93,53A7.91,7.91,0,0,0,22,49V21H60V49a4,4,0,0,1-4,4Z"/><line class="cls-1" x1="52" y1="39" x2="42" y2="39"/><line class="cls-1" x1="52" y1="43" x2="32" y2="43"/><line class="cls-1" x1="52" y1="47" x2="32" y2="47"/></g></svg>
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

  