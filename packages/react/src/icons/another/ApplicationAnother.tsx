
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="application-exit"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="44 28 32 28 40 36 44 36 44 52 28 52 28 12 2 2 44 2 44 28"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M30,50V28.83L39.17,38H42V50Zm0-24V10.63L12.77,4H42V26Z"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="28 12 28 62 2 52 2 2 28 12"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="4 50.63 4 4.91 26 13.37 26 59.09 4 50.63"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="54 40 54 36 40 36 32 28 54 28 54 24 62 32 54 40"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="56 34 40.83 34 36.83 30 56 30 56 28.83 59.17 32 56 35.17 56 34"/></g></svg>
	);
  