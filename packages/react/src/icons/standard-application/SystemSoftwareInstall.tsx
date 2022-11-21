
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="system-software-install"><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="51.17 8 24.76 8 22.76 4 9.24 4 8 6.47 8 19.24 4 21.24 4 34.76 10 37.76 10 51.17 14.83 56 21.17 56 27.17 50 33.17 50 56 50 56 30 56 12.83 51.17 8"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="18" x2="6" y2="34"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="46" x2="2" y2="44"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="42" x2="2" y2="40"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="50" x2="2" y2="48"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="26" y1="6" x2="12" y2="6"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="28" y1="4" x2="27" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="31" y1="4" x2="30" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="34" y1="4" x2="33" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="37" y1="4" x2="36" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="40" y1="4" x2="39" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="43" y1="4" x2="42" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="46" y1="4" x2="45" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="49" y1="4" x2="48" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="52" y1="4" x2="51" y2="2"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="58 12 58 46 56 48 54 48 54 32 42 32 42 48 34 48 38 52 28 52 22 58 14 58 8 52 8 39 2 36 2 20 6 18 6 6 8 2 24 2 26 6 52 6 58 12"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 48 48 62 34 48 42 48 42 32 54 32 54 48 62 48"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="38.83 50 44 50 44 34 52 34 52 50 57.17 50 48 59.17 38.83 50"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="52 27 52 32 42 32 42 39 12 39 12 27 52 27"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="18" cy="33" r="2"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 27 52 32 42 32 42 39 12 39 12 27 52 27"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 27 12 27 18 12 46 12 52 27"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="18" cy="33" r="2"/></g></svg>
	);
  