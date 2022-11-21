
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="format-text-italic"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 12 57 62 17 62 7 52 7 2 47 2 57 12"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="17.83 60 9 51.17 9 4 46.17 4 55 12.83 55 60 17.83 60"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="45 18 22 18 23 12 46 12 45 18"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="24.36 16 24.69 14 43.64 14 43.31 16 24.36 16"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="41 52 18 52 19 46 42 46 41 52"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="20.36 50 20.69 48 39.64 48 39.31 50 20.36 50"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="26 46 32 18 38 18 32 46 26 46"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="28.47 44 33.62 20 35.53 20 30.38 44 28.47 44"/></g></svg>
	);
  