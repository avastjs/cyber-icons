
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="input-mouse"><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M43,48c0,2.5-1.47,4.76-3.85,6.39A16.33,16.33,0,0,1,30,57a16.3,16.3,0,0,1-9.14-2.61C18.48,52.77,17,50.5,17,48a6.93,6.93,0,0,1,1.59-4.31,5.78,5.78,0,0,0,1.09-4.54L18,29a7,7,0,0,1,4.85-7.84L28,19.62v7.26A2.08,2.08,0,0,0,29.66,29,2,2,0,0,0,32,27V19.62l5.15,1.58A7,7,0,0,1,42,29L40.32,39.15a5.78,5.78,0,0,0,1.09,4.54A6.93,6.93,0,0,1,43,48Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M43,48c0,2.5-1.47,4.76-3.85,6.39A16.33,16.33,0,0,1,30,57a16.3,16.3,0,0,1-9.14-2.61C18.48,52.77,17,50.5,17,48a6.93,6.93,0,0,1,1.59-4.31,5.78,5.78,0,0,0,1.09-4.54L18,29a7,7,0,0,1,4.85-7.84L28,19.62v7.26A2.08,2.08,0,0,0,29.66,29,2,2,0,0,0,32,27V19.62l5.15,1.58A7,7,0,0,1,42,29L40.32,39.15a5.78,5.78,0,0,0,1.09,4.54A6.93,6.93,0,0,1,43,48Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M36.89,51.09A12.49,12.49,0,0,1,30,53"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M32,19v8a2,2,0,0,1-4,0V19a2,2,0,0,1,2-2,2,2,0,0,1,2,2Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M32,19v8a2,2,0,0,1-4,0V19a2,2,0,0,1,2-2,2,2,0,0,1,2,2Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="30" y1="29" x2="30" y2="38"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 16 2 2 16 2"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 16 62 2 48 2"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 48 2 62 16 62"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 48 62 62 48 62"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="30 17 30 12 47 12 47 7 23 7"/></g></svg>
	);
  