
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
		<svg onClick={onClick} className={className} height={size} width={size} id="network-offline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M46,44v4c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2v-4H46Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M46,44v4c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2v-4H46Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M37,60h0c0,1.1-.9,2-2,2H13c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M37,60h0c0,1.1-.9,2-2,2H13c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path d="M46,32v12H2V22c0-1.1,.9-2,2-2H12v10c0,1.1,.9,2,2,2H46Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M46,32v12H2V22c0-1.1,.9-2,2-2H12v10c0,1.1,.9,2,2,2H46Z"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="12" y="2" width="50" height="30" rx="2" ry="2"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="14" y="4" width="46" height="26"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="37" cy="17" r="8"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="37" cy="17" r="8"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="40.54" y1="13.46" x2="33.46" y2="20.54"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="40.54" y1="20.54" x2="33.46" y2="13.46"/></svg>
	);
  