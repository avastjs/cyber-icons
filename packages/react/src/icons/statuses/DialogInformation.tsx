
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
		<svg onClick={onClick} className={className} height={size} width={size} id="dialog-information" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,12v24l-2.45,2.45c-1.83-2.11-4.54-3.45-7.55-3.45-5.52,0-10,4.48-10,10h-5.5l-2-3H10.5l-3,3H2V12h3.5l2-3h29l2,3h23.5Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M37.57,43l-2-3H9.67l-3,3h-2.67V14h2.57l2-3h26.86l2,3h22.57v21.17l-.48,.48c-2.12-1.7-4.76-2.65-7.52-2.65-5.94,0-10.88,4.33-11.83,10h-2.6Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12" y1="19" x2="32" y2="19"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12" y1="23" x2="42" y2="23"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12" y1="27" x2="42" y2="27"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12" y1="31" x2="42" y2="31"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M62,45c0,5.52-4.48,10-10,10s-10-4.48-10-10,4.48-10,10-10c3.01,0,5.72,1.34,7.55,3.45,1.53,1.75,2.45,4.04,2.45,6.55Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,45c0,5.52-4.48,10-10,10s-10-4.48-10-10,4.48-10,10-10c3.01,0,5.72,1.34,7.55,3.45,1.53,1.75,2.45,4.04,2.45,6.55Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="52" y1="43" x2="52" y2="51"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="52" y1="39" x2="52" y2="41"/></svg>
	);
  