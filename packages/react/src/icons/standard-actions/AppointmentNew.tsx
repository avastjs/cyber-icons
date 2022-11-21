
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="appointment-new"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 12 62 25 2 25 2 12 9 12 9 19 15 19 15 12 49 12 49 19 55 19 55 12 62 12"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="4 23 4 14 7 14 7 21 17 21 17 14 47 14 47 21 57 21 57 14 60 14 60 23 4 23"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="2" y="25" width="60" height="34"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="17" y="14" width="30" height="56" transform="translate(74 10) rotate(90)"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="9" y="5" width="6" height="14"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="11" y="7" width="2" height="10"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="49" y="5" width="6" height="14"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="51" y="7" width="2" height="10"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="42" r="9"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="32" cy="42" r="7"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="37" x2="32" y2="47"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="37" y1="42" x2="27" y2="42"/></g></svg>
	);
  