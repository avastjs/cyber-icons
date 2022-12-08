
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
		<svg onClick={onClick} className={className} height={size} width={size} id="task-due" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="49 20 49 35 51 37 51 56 2 56 2 2 12 2 14 4 30 4 32 2 41 2 51 12 51 18 49 20"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="49 20 49 35 51 37 51 56 2 56 2 2 12 2 14 4 30 4 32 2 41 2 51 12 51 18 49 20"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="9" width="10" height="10"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="10" y="11" width="6" height="6" transform="translate(27 1) rotate(90)"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="19" x2="36" y2="19"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="25" width="10" height="10"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="10" y="27" width="6" height="6" transform="translate(43 17) rotate(90)"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="35" x2="36" y2="35"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="41" width="10" height="10"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="10" y="43" width="6" height="6" transform="translate(59 33) rotate(90)"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="51" x2="36" y2="51"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="51" cy="51" r="11"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="51" cy="51" r="11"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="51 43 51 51 57 51"/></svg>
	);
  