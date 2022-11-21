
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="mail-mark-junk"><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,10V45H57a9,9,0,0,0-18,0H2V10L32,31Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M58.82,43a11,11,0,0,0-21.64,0H4V13.84l28,19.6,28-19.6V43Z"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 10 32 31 2 10 62 10"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="8.35 12 55.66 12 32 28.56 8.35 12"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="48" cy="45" r="9"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="48" cy="45" r="7"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="54.36" y1="38.64" x2="41.64" y2="51.36"/></g></svg>
	);
  