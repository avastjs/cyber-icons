
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="media-flash"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="54.5 27.5 54.5 36.5 57.5 36.5 57.5 62 36.5 62 36.5 59 27.5 59 27.5 62 6.5 62 6.5 36.5 9.5 36.5 9.5 27.5 6.5 27.5 6.5 2 48.5 2 57.5 11 57.5 27.5 54.5 27.5"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="38.5 60 38.5 57 25.5 57 25.5 60 8.5 60 8.5 38.5 11.5 38.5 11.5 25.5 8.5 25.5 8.5 4 47.67 4 55.5 11.83 55.5 25.5 52.5 25.5 52.5 38.5 55.5 38.5 55.5 60 38.5 60"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="14" y="14" width="36" height="36" rx="2"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="16" y="16" width="32" height="32" transform="translate(64) rotate(90)"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="18.5" y1="20" x2="30.5" y2="20"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="18.5" y1="26" x2="39.5" y2="26"/></g></svg>
	);
  