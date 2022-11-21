
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="go-down"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="53 32 44 19 62 19 53 32"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="58.18 21 53 28.49 47.82 21 58.18 21"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="41 12 41 62 12 62 2 52 2 2 31 2 41 12"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="12.83 60 4 51.17 4 4 30.17 4 39 12.83 39 60 12.83 60"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="53" y1="19" x2="53" y2="12"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="8" width="10" height="10"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="10" y="10" width="6" height="6" transform="translate(26) rotate(90)"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="18" x2="36" y2="18"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="24" width="10" height="10"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="10" y="26" width="6" height="6" transform="translate(42 16) rotate(90)"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="34" x2="36" y2="34"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="40" width="10" height="10"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="10" y="42" width="6" height="6" transform="translate(58 32) rotate(90)"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="50" x2="36" y2="50"/></g></svg>
	);
  