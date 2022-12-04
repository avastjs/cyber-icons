
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="x-office-calendar"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="55 12 55 62 39 62 38 60 22 60 21 62 5 62 5 2 45 2 55 12"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="40.24 60 39.24 58 20.76 58 19.76 60 7 60 7 4 44.17 4 53 12.83 53 60 40.24 60"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="55 12 45 12 45 2 55 12"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="55 12 45 12 45 2 55 12"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="10" y="36" width="49" height="20"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="29 52 27 52 31 40 35 40 35 52 33 52"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M24,50a2,2,0,0,1-2,2H18a2,2,0,0,1-2-2V42a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M48,50a2,2,0,0,1-2,2H40V40"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="35" y1="47" x2="32" y2="47"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="10" y="36" width="49" height="20"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M43,16v3H21V16a2,2,0,0,1,2-2H41A2,2,0,0,1,43,16Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M43,16v3H21V16a2,2,0,0,1,2-2H41A2,2,0,0,1,43,16Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M43,19V30a2,2,0,0,1-2,2H23a2,2,0,0,1-2-2V19Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="25" y1="12" x2="25" y2="16"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="39" y1="12" x2="39" y2="16"/></g></svg>
	);
  