
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="object-rotate-right"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 12 46 22 46 2 62 12"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="58.23 12 48 5.61 48 18.39 58.23 12"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="46 12 8 12 2 18 2 56 8 62 46 62 52 56"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="40 30 40 50 20 50 14 44 14 24 34 24 40 30"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="20.83 48 16 43.17 16 26 33.17 26 38 30.83 38 48 20.83 48"/></g></svg>
	);
  