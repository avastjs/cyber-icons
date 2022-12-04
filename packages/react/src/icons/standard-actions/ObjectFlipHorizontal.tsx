
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="object-flip-horizontal"><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="2" x2="32" y2="4"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,strokeDasharray:`3.73 3.73`}} x1="32" y1="7.73" x2="32" y2="58.13"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="60" x2="32" y2="62"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="28 18 28 52 8 52 2 46 22 12 28 18"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="8.83 50 4.51 45.68 22.41 15.24 26 18.83 26 50 8.83 50"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="36 18 36 52 56 52 62 46 42 12 36 18"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="38 50 38 18.83 41.59 15.24 59.49 45.68 55.17 50 38 50"/></g></svg>
	);
  