
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="go-home"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 12 62 62 12 62 2 52 2 2 52 2 62 12"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="12.83 60 4 51.17 4 4 51.17 4 60 12.83 60 60 12.83 60"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 52 12 52 12 28 32 12 52 28 52 52"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="14 50 14 28.96 32 14.56 50 28.96 50 50 14 50"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="26" y="38" width="12" height="14"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="27" y="41" width="10" height="8" transform="translate(77 13) rotate(90)"/></g></svg>
	);
  