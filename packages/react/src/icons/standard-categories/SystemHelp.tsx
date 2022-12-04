
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="system-help"><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="32" r="30"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="32" cy="32" r="28"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,strokeDasharray:`4 4`}} cx="32" cy="32" r="26"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M35,41H29V30.5l3-3A4.5,4.5,0,1,0,27.5,23h-6A10.5,10.5,0,1,1,35,33.06Z"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="29" y="45.5" width="6" height="6"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M35,41H29V30.5l3-3A4.5,4.5,0,1,0,27.5,23h-6A10.5,10.5,0,1,1,35,33.06Z"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="29" y="45.5" width="6" height="6"/></g></svg>
	);
  