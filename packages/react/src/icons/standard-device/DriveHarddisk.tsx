
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="drive-harddisk"><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="62 38 62 53 42 53 41 51 23 51 22 53 2 53 2 38 62 38"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 38 62 53 42 53 41 51 23 51 22 53 2 53 2 38 62 38"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 38 2 38 9.5 11 21 11 23 15 41 15 43 11 54.5 11 62 38"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="4.63 36 11.02 13 19.76 13 21.76 17 42.24 17 44.24 13 52.98 13 59.37 36 4.63 36"/><circle style={{fill:`${border ? border : colors[theme].border}`}} cx="8" cy="45.5" r="1.5"/><circle style={{fill:`${border ? border : colors[theme].border}`}} cx="14" cy="45.5" r="1.5"/></g></svg>
	);
  