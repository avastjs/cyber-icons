
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="input-tablet"><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="2" y="18" width="13.5" height="36"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="2" y="18" width="13.5" height="36"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="27.04" x2="6.5" y2="27.04"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="33.04" x2="6.5" y2="33.04"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="39.04" x2="6.5" y2="39.04"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="45.04" x2="6.5" y2="45.04"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M59,9a3,3,0,0,1-.88,2.12L51.23,18,34.79,34.46l-6.36,2.11,2.12-6.36L42.77,18,53.89,6.89a3,3,0,0,1,4.23,0A3,3,0,0,1,59,9Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M59,9a3,3,0,0,1-.88,2.12L51.23,18,34.79,34.46l-6.36,2.11,2.12-6.36L42.77,18,53.89,6.89a3,3,0,0,1,4.23,0A3,3,0,0,1,59,9Z"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 18 62 54 58 54 58 58 48 58 46 54 15.5 54 15.5 18 20 18 20 14 30 14 32 18 42.77 18 30.55 30.21 28.43 36.57 34.79 34.46 51.23 18 62 18"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="49.24 56 47.24 52 17.5 52 17.5 20 22 20 22 16 28.76 16 30.76 20 37.94 20 28.8 29.13 25.27 39.73 35.87 36.21 52.06 20 60 20 60 52 56 52 56 56 49.24 56"/></g></svg>
	);
  