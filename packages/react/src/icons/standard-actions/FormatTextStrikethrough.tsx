
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="format-text-strikethrough"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 12 57 62 17 62 7 52 7 2 47 2 57 12"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="17.83 60 9 51.17 9 4 46.17 4 55 12.83 55 60 17.83 60"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="20.5 30 25 12 39 12 43.5 30 20.5 30"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="49 52 41.32 52 37.32 38 26.68 38 22.68 52 15 52 19.5 34 44.5 34 49 52"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M42.83,50l-4-14h4.11l3.5,14ZM17.56,50l3.5-14h4.11l-4,14Z"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="37.44 14 26.56 14 23.06 28 30.52 28 31.32 24 32.68 24 33.48 28 40.94 28 37.44 14"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="35.92 30 28.08 30 29.68 22 34.32 22 35.92 30"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="12" y="30" width="40" height="4"/></g></svg>
	);
  