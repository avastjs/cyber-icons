
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="contact-new"><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M15.83,60,9,53.17V13H37.18A11,11,0,0,0,46,21.82V60Z"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="18.5 48.5 18.5 44.5 22.5 40.5 32.5 40.5 36.5 44.5 36.5 48.5"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="21.5" y="24.5" width="12" height="12" rx="4"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="23.5" y="26.5" width="8" height="8" rx="2" transform="translate(58 3) rotate(90)"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M48,20V62H15L7,54V11H39A9,9,0,0,0,48,20Z"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="48" cy="11" r="9"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="48" cy="11" r="7"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="48" y1="16" x2="48" y2="6"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="43" y1="11" x2="53" y2="11"/></g></svg>
	);
  