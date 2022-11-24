
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="system-lock-screen"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 8 62 56 56 62 47 62 41 56 23 56 17 62 8 62 2 56 2 8 8 2 14 2 20 8 44 8 50 2 56 2 62 8"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="47.83 60 41.83 54 22.17 54 16.17 60 8.83 60 4 55.17 4 8.83 8.83 4 13.17 4 19.17 10 44.83 10 50.83 4 55.17 4 60 8.83 60 55.17 55.17 60 47.83 60"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="41" y1="56" x2="23" y2="56"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="21" y1="62" x2="43" y2="62"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="25" y1="59" x2="39" y2="59"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="44 2 41 5 23 5 20 2 44 2"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="44 2 41 5 23 5 20 2 44 2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="20" y1="2" x2="14" y2="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="44" y1="2" x2="50" y2="2"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="12" y="12" width="18" height="18" rx="2"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="34" y="12" width="18" height="18" rx="2" transform="translate(86 42) rotate(-180)"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="12" y="34" width="18" height="18" rx="2"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="34" y="34" width="18" height="18" rx="2" transform="translate(86 86) rotate(180)"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="12" y="12" width="18" height="18" rx="2"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="34" y="12" width="18" height="18" rx="2" transform="translate(86 42) rotate(-180)"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="12" y="34" width="18" height="18" rx="2"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="34" y="34" width="18" height="18" rx="2" transform="translate(86 86) rotate(180)"/></g></svg>
	);
  