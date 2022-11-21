
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="edit-copy"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="48 25 48 63 14 63 6 55 6 11 34 11 48 25"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="14.83 61 8 54.17 8 13 33.17 13 46 25.83 46 61 14.83 61"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="58 15 58 53 48 53 48 25 34 11 16 11 16 1 44 1 58 15"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="50 51 50 24.17 34.83 9 18 9 18 3 43.17 3 56 15.83 56 51 50 51"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="48 25 34 25 34 11 48 25"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="36 23 36 15.83 43.17 23 36 23"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="58 15 44 15 44 1 58 15"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="46 13 46 5.83 53.17 13 46 13"/></g></svg>
	);
  