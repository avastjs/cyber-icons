
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="x-office-address-book"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="55 12 55 62 39 62 38 60 22 60 21 62 5 62 5 2 45 2 55 12"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="40.24 60 39.24 58 20.76 58 19.76 60 7 60 7 4 44.17 4 53 12.83 53 60 40.24 60"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="55 12 45 12 45 2 55 12"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="55 12 45 12 45 2 55 12"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="10" y="36" width="49" height="20"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="18 52 16 52 20 40 24 40 24 52 22 52"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M34,52H28V40h6a2,2,0,0,1,2,2v8A2,2,0,0,1,34,52Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M46,52H40V40h6a2,2,0,0,1,2,2v8A2,2,0,0,1,46,52Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="24" y1="47" x2="21" y2="47"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="10" y="36" width="49" height="20"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="43 16 43 28 39 32 24 32 24 12 39 12 43 16"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="26 30 26 14 38.17 14 41 16.83 41 27.17 38.17 30 26 30"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="21" y1="16" x2="27" y2="16"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="21" y1="20" x2="27" y2="20"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="21" y1="24" x2="27" y2="24"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="21" y1="28" x2="27" y2="28"/></g></svg>
	);
  