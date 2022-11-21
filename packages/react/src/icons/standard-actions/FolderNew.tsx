
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="folder-new"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 25 62 57 10 57 2 49 2 17 54 17 62 25"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="10.83 55 4 48.17 4 19 53.17 19 60 25.83 60 55 10.83 55"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="26 17 2 17 2 7 19 7 26 17"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="4 15 4 9 17.96 9 22.16 15 4 15"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="37" r="9"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="32" cy="37" r="7"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="42" x2="32" y2="32"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="27" y1="37" x2="37" y2="37"/></g></svg>
	);
  