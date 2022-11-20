
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="mail-forward"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 10 62 45 57 45 44 36 44 45 2 45 2 10 32 31 62 10"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="4 43 4 13.84 32 33.44 60 13.84 60 43 4 43"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 10 32 31 2 10 62 10"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="8.35 12 55.66 12 32 28.56 8.35 12"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 45 44 54 44 36 57 45"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="46 50.18 53.49 45 46 39.82 46 50.18"/></g></svg>
	);
  