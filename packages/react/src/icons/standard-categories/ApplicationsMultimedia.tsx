
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="applications-multimedia"><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="44.39 32 23.61 20 23.61 44 44.39 32"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="44.39 32 23.61 20 23.61 44 44.39 32"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M8,32a23.9,23.9,0,0,0,5.68,15.49L9.43,51.74a29.94,29.94,0,0,1,0-39.48l4.25,4.25A23.9,23.9,0,0,0,8,32Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M51.74,54.57a29.94,29.94,0,0,1-39.48,0l4.25-4.25a24,24,0,0,0,31,0Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M51.74,9.43l-4.25,4.25a24,24,0,0,0-31,0L12.26,9.43a29.94,29.94,0,0,1,39.48,0Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M62,32a29.81,29.81,0,0,1-7.43,19.74l-4.25-4.25a24,24,0,0,0,0-31l4.25-4.25A29.81,29.81,0,0,1,62,32Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M8,32a23.9,23.9,0,0,0,5.68,15.49L9.43,51.74a29.94,29.94,0,0,1,0-39.48l4.25,4.25A23.9,23.9,0,0,0,8,32Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M51.74,54.57a29.94,29.94,0,0,1-39.48,0l4.25-4.25a24,24,0,0,0,31,0Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M51.74,9.43l-4.25,4.25a24,24,0,0,0-31,0L12.26,9.43a29.94,29.94,0,0,1,39.48,0Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,32a29.81,29.81,0,0,1-7.43,19.74l-4.25-4.25a24,24,0,0,0,0-31l4.25-4.25A29.81,29.81,0,0,1,62,32Z"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 2 62 2 62 12"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="12 2 2 2 2 12"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 62 62 62 62 52"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="12 62 2 62 2 52"/></g></svg>
	);
  