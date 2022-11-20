
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="edit-cut"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="53 62 19 62 11 54 11 2 39 2 53 16 53 62"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="19.83 60 13 53.17 13 4 38.17 4 51 16.83 51 60 19.83 60"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="53 16 39 16 39 2 53 16"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="41 14 41 6.83 48.17 14 41 14"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="38.56" cy="38.66" r="4"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M38.56,40.66a2,2,0,0,1-.71-3.87,1.94,1.94,0,0,1,.71-.13,2,2,0,0,1,.7,3.87A1.89,1.89,0,0,1,38.56,40.66Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="34.81" y1="40.06" x2="27.78" y2="21.34"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="25.44" cy="38.66" r="4"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M25.44,40.66a1.89,1.89,0,0,1-.7-.13,2,2,0,0,1,.7-3.87,1.94,1.94,0,0,1,.71.13,2,2,0,0,1-.71,3.87Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="29.19" y1="40.06" x2="36.22" y2="21.34"/></g></svg>
	);
  