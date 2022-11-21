
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="go-first"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="51 24.23 51 62 12 62 2 52 2 2 41 2 50.86 11.86 42 18 51 24.23"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="12.83 60 4 51.17 4 4 40.17 4 49 12.83 49 60 12.83 60"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="8" width="10" height="10"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="10" y="10" width="6" height="6" transform="translate(26) rotate(90)"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="18" x2="36" y2="18"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="24" width="10" height="10"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="10" y="26" width="6" height="6" transform="translate(42 16) rotate(90)"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="34" x2="36" y2="34"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="40" width="10" height="10"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="10" y="42" width="6" height="6" transform="translate(58 32) rotate(90)"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="50" x2="36" y2="50"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="55 9 55 27 51 24.23 42 18 50.86 11.86 55 9"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="53 23.18 45.51 18 53 12.82 53 23.18"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="55" y1="18" x2="62" y2="18"/></g></svg>
	);
  