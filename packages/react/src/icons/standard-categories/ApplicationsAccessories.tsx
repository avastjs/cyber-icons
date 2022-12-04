
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="applications-accessories"><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="42 32 42 54 17 54 16 56 6 56 6 54 2 54 2 32 26 32 28 28 38 28 38 32 42 32"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="6" y="36" width="8" height="14"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="18" y="36" width="8" height="14"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="30" y="36" width="8" height="14"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="42" y="38" width="4" height="10"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="18" y="10" width="6" height="6"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="6" y="36" width="8" height="14"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="10" y1="36" x2="10" y2="50"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="18" y="36" width="8" height="14"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="36" x2="22" y2="50"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="30" y="36" width="8" height="14"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="34" y1="36" x2="34" y2="50"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="42" y="38" width="4" height="10"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="24" y="8" width="8" height="10"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="24" y="8" width="8" height="10"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="18" y="10" width="6" height="6"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="42 32 42 54 17 54 16 56 6 56 6 54 2 54 2 32 26 32 28 28 38 28 38 32 42 32"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="32 13 62 13 62 37 56 43 46 43"/></g></svg>
	);
  