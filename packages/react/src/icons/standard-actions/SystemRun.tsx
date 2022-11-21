
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="system-run"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="12.25 62 12.25 2 58.75 32 12.25 62"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="15.25 7.51 53.22 32 15.25 56.49 15.25 7.51"/></g></svg>
	);
  