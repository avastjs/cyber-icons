
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="media-seek-forward"><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="12.83 60 4 51.17 4 4 51.17 4 60 12.83 60 60 12.83 60"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 12 62 62 12 62 2 52 2 2 52 2 62 12"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="26 52 26 12 52 32 26 52"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="48.72 32 28 47.94 28 16.06 48.72 32"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="-1" y="29" width="40" height="6" transform="translate(51 13) rotate(90)"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="1" y="31" width="36" height="2" transform="translate(-13 51) rotate(-90)"/></g></svg>
	);
  