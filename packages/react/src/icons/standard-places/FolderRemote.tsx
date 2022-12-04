
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="folder-remote"><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="26" y1="13" x2="12" y2="13"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M58,19H20V49a6,6,0,0,1-6,6,6,6,0,0,1-6-6V36L2,33V27l4-2V13L8,9H24l2,4H52Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M14,53a4,4,0,0,1-4-4V34.76l-6-3V28.24l4-2V13.47L9.24,11H22.76l2,4H51.17l2,2H18V49a4,4,0,0,1-4,4Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,19V49a6,6,0,0,1-6,6H14a6,6,0,0,0,6-6V19Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M20.93,53A7.91,7.91,0,0,0,22,49V21H60V49a4,4,0,0,1-4,4Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M33.26,31.07a14,14,0,0,1,17.48,0"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M35.75,34.19a10,10,0,0,1,12.5,0"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M38.25,37.32a6,6,0,0,1,7.5,0"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="42" cy="42" r="2"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="42" cy="42" r="2"/></g></svg>
	);
  