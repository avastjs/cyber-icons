
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="mail-mark-read"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 57 62 28 32 49 2 28 2 57 62 57"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="4 55 4 31.84 32 51.44 60 31.84 60 55 4 55"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 28 32 49 2 28 62 28"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="8.35 30 55.66 30 32 46.56 8.35 30"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 28 32 7 62 28 2 28"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="8.35 26 32 9.44 55.66 26 8.35 26"/></g></svg>
	);
  