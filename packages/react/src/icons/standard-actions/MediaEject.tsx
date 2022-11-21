
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="media-eject"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 12 62 62 12 62 2 52 2 2 52 2 62 12"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="12.83 60 4 51.17 4 4 51.17 4 60 12.83 60 60 12.83 60"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 40 12 40 32 14 52 40"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="16.06 38 32 17.28 47.94 38 16.06 38"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="12" y="44" width="40" height="6"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="31" y="29" width="2" height="36" transform="translate(79 15) rotate(90)"/></g></svg>
	);
  