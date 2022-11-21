
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="zoom-original"><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="12 2 12 12 2 12"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12" y1="12" x2="2" y2="2"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 2 52 12 62 12"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="52" y1="12" x2="62" y2="2"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="12 62 12 52 2 52"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12" y1="52" x2="2" y2="62"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 62 52 52 62 52"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="52" y1="52" x2="62" y2="62"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 20 52 44 44 52 20 52 12 44 12 20 20 12 44 12 52 20"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="20.83 50 14 43.17 14 20.83 20.83 14 43.17 14 50 20.83 50 43.17 43.17 50 20.83 50"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M29,40V27H25V24c3.31,0,4-2.69,4-6h6V40h3l1,6H25l1-6Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M27.36,44l.33-2H31V25H28.48c1.32-1,2.13-2.64,2.41-5H33V42h3.31l.33,2Z"/></g></svg>
	);
  