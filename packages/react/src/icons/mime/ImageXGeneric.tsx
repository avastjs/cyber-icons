
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="image-x-generic"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 12 57 62 41 62 40 60 24 60 23 62 7 62 7 2 47 2 57 12"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="42.24 60 41.24 58 22.76 58 21.76 60 9 60 9 4 46.17 4 55 12.83 55 60 42.24 60"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="57 12 47 12 47 2 57 12"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 12 47 12 47 2 57 12"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="50 42 50 52 14 52 14 42 21.93 32.07 30 42 41 28 50 42"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="50 42 50 52 14 52 14 42 21.93 32.07 30 42 41 28 50 42"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="50 16 50 42 41 28 30 42 21.93 32.07 14 42 14 16 50 16"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="30" cy="27" r="3"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="30" cy="27" r="3"/></g></svg>
	);
  