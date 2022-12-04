
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="camera-web"><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M58,12V40H44a4,4,0,0,0-4,4v8H28l-6,6H14L8,52V39L2,36V20l4-2V6L8,2H24l2,4H52Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M14.83,56,10,51.17V37.76l-6-3V21.24l4-2V6.47L9.24,4H22.76l2,4H51.17L56,12.83V38H44a6,6,0,0,0-6,6v6H27.17l-6,6Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="18" x2="6" y2="34"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="46" x2="2" y2="44"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="42" x2="2" y2="40"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="50" x2="2" y2="48"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="26" y1="6" x2="12" y2="6"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="28" y1="4" x2="27" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="31" y1="4" x2="30" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="34" y1="4" x2="33" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="37" y1="4" x2="36" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="40" y1="4" x2="39" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="43" y1="4" x2="42" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="46" y1="4" x2="45" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="49" y1="4" x2="48" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="52" y1="4" x2="51" y2="2"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="40" y="40" width="22" height="22" rx="4"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="51" cy="51" r="8"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="40" y="40" width="22" height="22" rx="4"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M40,25A14,14,0,1,1,26,11,14,14,0,0,1,40,25Z"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="26" cy="25" r="6"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M34,45c0,2.21-3.58,4-8,4s-8-1.79-8-4c0-1.65,2-3.06,4.82-3.67l.57-2.57a14.31,14.31,0,0,0,5.22,0l.57,2.57C32,41.94,34,43.35,34,45Z"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="26" cy="25" r="6"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M26,23a2,2,0,0,1,2,2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="30" y1="45" x2="29.18" y2="41.33"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M34,45c0,2.21-3.58,4-8,4s-8-1.79-8-4c0-1.65,2-3.06,4.82-3.67l.57-2.57a14.31,14.31,0,0,0,5.22,0l.57,2.57C32,41.94,34,43.35,34,45Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22.82" y1="41.33" x2="22" y2="45"/><circle style={{fill:`${border ? border : colors[theme].border}`}} cx="26" cy="15" r="1"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="40" y1="25" x2="37" y2="25"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12" y1="25" x2="15" y2="25"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="51" cy="51" r="8"/><ellipse style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="51" cy="51" rx="4" ry="8"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="43" y1="51" x2="59" y2="51"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="51" y1="43" x2="51" y2="59"/></g></svg>
	);
  