
  <template>
		<svg :class="className" :height="size" :width="size" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><svg:style type="text/css">.cls-1{fill:none;stroke:{{border ? border : colors[theme].border}};stroke-linejoin:bevel;stroke-width:{{stroke}};}.cls-2{fill:{{primary ? primary : colors[theme].primary}};}.cls-3{fill:{{secondary ? secondary : colors[theme].secondary}};}</svg:style> </defs><g id="computer"><path class="cls-1" d="M46,16V38H2V16a2,2,0,0,1,2-2H44A2,2,0,0,1,46,16Z"/><rect class="cls-2" x="4" y="16" width="40" height="20"/><path class="cls-3" d="M46,38v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V38Z"/><path class="cls-2" d="M37,54h0a2,2,0,0,1-2,2H13a2,2,0,0,1-2-2h0a2,2,0,0,1,2-2h3.61a4,4,0,0,0,3.95-3.34L21.33,44h5.34l.77,4.66A4,4,0,0,0,31.39,52H35A2,2,0,0,1,37,54Z"/><path class="cls-1" d="M46,38v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V38Z"/><path class="cls-1" d="M37,54h0a2,2,0,0,1-2,2H13a2,2,0,0,1-2-2h0a2,2,0,0,1,2-2h3.61a4,4,0,0,0,3.95-3.34L21.33,44h5.34l.77,4.66A4,4,0,0,0,31.39,52H35A2,2,0,0,1,37,54Z"/><path class="cls-1" d="M62,8V56H42V44h2a2,2,0,0,0,2-2V16a2,2,0,0,0-2-2H42V8Z"/><path class="cls-2" d="M44,54V46a4,4,0,0,0,4-4V16a4,4,0,0,0-4-4V10H60V54Z"/><circle class="cls-3" cx="52" cy="50" r="2"/><circle class="cls-1" cx="52" cy="50" r="2"/><polygon class="cls-3" points="62 47 58 45 58 19 62 17 62 47"/><polygon class="cls-1" points="62 47 58 45 58 19 62 17 62 47"/></g></svg>
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

  