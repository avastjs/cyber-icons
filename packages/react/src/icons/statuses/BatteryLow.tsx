
  import React from 'react';

  import { colors, IconProps } from '../../util';

  export default ({
    theme = 'default',
		size = '24px',
    primary,
    secondary,
    border,
    stroke = "1px",
    className = "",
    onClick,
	}: IconProps) => (
		<svg onClick={onClick} className={className} height={size} width={size} id="battery-low" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="24" y="44" width="32" height="16"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M58,46h2c1.1,0,2,.9,2,2v8c0,1.1-.9,2-2,2h-2v-12h0Z"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="26" y="46" width="4" height="12"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M58,46h2c1.1,0,2,.9,2,2v8c0,1.1-.9,2-2,2h-2v-12h0Z"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="26" y="46" width="4" height="12"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="22" y="42" width="36" height="20" rx="2" ry="2"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M58,12V44c0-1.1-.9-2-2-2H24c-1.1,0-2,.9-2,2v14H14l-6-6v-13l-6-3V20l4-2V6l2-4H24l2,4h26l6,6Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M14.83,56l-4.83-4.83v-13.41l-6-3v-13.53l4-2V6.47l1.24-2.47h13.53l2,4h26.41l4.83,4.83v27.17H24c-2.21,0-4,1.79-4,4v12h-5.17Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="18" x2="6" y2="34"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="26" y1="6" x2="12" y2="6"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M30.34,14.46l-13.78,20.42c-.9,1.33,.06,3.12,1.66,3.12h27.57c1.6,0,2.55-1.79,1.66-3.12l-13.78-20.42c-.79-1.17-2.52-1.17-3.32,0Z"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="18.22 36 32 15.58 45.78 36 18.22 36"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="29" x2="32" y2="20"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="34" x2="32" y2="32"/></svg>
	);
  