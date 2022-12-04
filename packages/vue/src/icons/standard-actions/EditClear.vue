
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="edit-clear"><polygon class="cls-1" points="54 38 10 38 18 30 46 30 54 38"/><polygon class="cls-2" points="14.83 36 18.83 32 45.17 32 49.17 36 14.83 36"/><rect class="cls-1" x="12" y="38" width="40" height="24"/><rect class="cls-3" x="22" y="32" width="20" height="36" transform="translate(82 18) rotate(90)"/><path class="cls-1" d="M36,30H28V6a4,4,0,0,1,4-4h0a4,4,0,0,1,4,4Z"/><path class="cls-2" d="M30,28V6a2,2,0,0,1,4,0V28Z"/><line class="cls-1" x1="32" y1="46" x2="32" y2="62"/><line class="cls-1" x1="42" y1="46" x2="42" y2="62"/><line class="cls-1" x1="37" y1="50" x2="37" y2="62"/><line class="cls-1" x1="47" y1="50" x2="47" y2="62"/><line class="cls-1" x1="22" y1="46" x2="22" y2="62"/><line class="cls-1" x1="27" y1="50" x2="27" y2="62"/><line class="cls-1" x1="17" y1="50" x2="17" y2="62"/></g></svg>
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

  