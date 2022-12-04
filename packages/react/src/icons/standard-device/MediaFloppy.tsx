
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="media-floppy"><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="62 12 62 62 2 62 2 2 52 2 62 12"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="13.67" y="55.33" width="36.67" height="6.67"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M13.67,2H50.33a0,0,0,0,1,0,0V13.33a2,2,0,0,1-2,2H15.67a2,2,0,0,1-2-2V2a0,0,0,0,1,0,0Z"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="32" cy="32" r="10"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 12 62 62 2 62 2 2 52 2 62 12"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="13.67" y="55.33" width="36.67" height="6.67"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M13.67,2H50.33a0,0,0,0,1,0,0V13.33a2,2,0,0,1-2,2H15.67a2,2,0,0,1-2-2V2a0,0,0,0,1,0,0Z"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="32" r="10"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M32,28.67A3.33,3.33,0,0,1,35.33,32"/></g></svg>
	);
  