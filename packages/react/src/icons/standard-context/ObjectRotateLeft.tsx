
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="object-rotate-left"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 12 18 22 18 2 2 12"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="5.77 12 16 5.61 16 18.39 5.77 12"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="18 12 56 12 62 18 62 56 56 62 18 62 12 56"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="50 30 50 50 30 50 24 44 24 24 44 24 50 30"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="30.83 48 26 43.17 26 26 43.17 26 48 30.83 48 48 30.83 48"/></g></svg>
	);
  