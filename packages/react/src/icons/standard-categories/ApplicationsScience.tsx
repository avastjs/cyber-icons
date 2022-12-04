
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="applications-science"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="49 38 49 52 39 52 31 62 9 62 3 56 3 25.47 31.13 25.47 25 32 25 38 49 38"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="9.83 60 5 55.17 5 27.47 26.51 27.47 23 31.21 23 40 47 40 47 50 38.04 50 30.04 60 9.83 60"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="37" y="2" width="12" height="4" rx="2"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="37" y="2" width="12" height="4" rx="2"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="61 32 61 38 25 38 25 32 31.13 25.47 34.38 22 51.63 22 61 32"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="61 32 61 38 25 38 25 32 31.13 25.47 34.38 22 51.63 22 61 32"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="51.63 22 34.38 22 40 16 40 6 46 6 46 16 51.63 22"/><circle style={{fill:`${border ? border : colors[theme].border}`}} cx="36" cy="29" r="1"/><circle style={{fill:`${border ? border : colors[theme].border}`}} cx="39" cy="32" r="1"/><circle style={{fill:`${border ? border : colors[theme].border}`}} cx="40" cy="28" r="1"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="38" x2="14" y2="38"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="41" x2="14" y2="41"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6" y1="44" x2="14" y2="44"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="14" y1="49" x2="32" y2="49"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="14" y1="52" x2="32" y2="52"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="14" y1="55" x2="32" y2="55"/></g></svg>
	);
  