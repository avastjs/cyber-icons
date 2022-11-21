
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="process-stop"><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M53,12V44a9,9,0,0,0-9,9H12L2,43V2H43Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M12.83,51,4,42.17V4H42.17L51,12.83V42.18A11,11,0,0,0,42.18,51Z"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="53" cy="53" r="9"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="53" cy="53" r="7"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="56 53 53 53 53 48"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="11" y="11" width="33" height="33"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="13" y="13" width="29" height="29" transform="translate(55) rotate(90)"/></g></svg>
	);
  