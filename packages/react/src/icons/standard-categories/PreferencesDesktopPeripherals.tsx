
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="preferences-desktop-peripherals"><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="4 60 4 52.72 9 46.72 9 17.28 4 11.28 4 4 60 4 60 11.28 55 17.28 55 46.72 60 52.72 60 60 4 60"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M49.65,24.65A17.64,17.64,0,0,1,38,41.25c-.37.13-.73.25-1.1.35a17.53,17.53,0,0,1-9.74,0c-.36-.1-.73-.22-1.1-.35a17.65,17.65,0,1,1,23.62-16.6Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M32,14.35a10.3,10.3,0,0,1,10.29,10.3"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="32" cy="24.65" r="5.88"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="32" cy="24.65" r="5.88"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M51.12,57H12.88a6.93,6.93,0,0,1-.35-2.13,6.71,6.71,0,0,1,6.71-6.69h3a2.93,2.93,0,0,0,2.88-2.37L26,41.25c.37.13.74.25,1.1.35a17.53,17.53,0,0,0,9.74,0c.37-.1.73-.22,1.1-.35l.91,4.56a3,3,0,0,0,2.89,2.37h3A6.7,6.7,0,0,1,51.12,57Z"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="24.65" r="5.88"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M51.12,57H12.88a6.93,6.93,0,0,1-.35-2.13,6.71,6.71,0,0,1,6.71-6.69h3a2.93,2.93,0,0,0,2.88-2.37L26,41.25c.37.13.74.25,1.1.35a17.53,17.53,0,0,0,9.74,0c.37-.1.73-.22,1.1-.35l.91,4.56a3,3,0,0,0,2.89,2.37h3A6.7,6.7,0,0,1,51.12,57Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="7" x2="32" y2="9.94"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="39.35" x2="32" y2="42.29"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 62 62 52 57 46 57 32 57 18 62 12 62 2 2 2 2 12 7 18 7 32 7 46 2 52 2 62 62 62"/></g></svg>
	);
  