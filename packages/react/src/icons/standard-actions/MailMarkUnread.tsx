
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="mail-mark-unread"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 49 62 15 32 36 2 15 2 49 62 49"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="4 47 4 18.84 32 38.44 60 18.84 60 47 4 47"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 15 32 36 2 15 62 15"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="8.35 17 55.66 17 32 33.56 8.35 17"/></g></svg>
	);
  