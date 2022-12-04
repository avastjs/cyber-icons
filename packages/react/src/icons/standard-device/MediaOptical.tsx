
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="media-optical"><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M17.48,49.5h0"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M62,31.5v18H46.53c3.09-2.39,5-5.55,5-9h-15c0,1.72-2,3.12-4.5,3.12s-4.5-1.4-4.5-3.12h-15c0,3.45,1.88,6.61,5,9H2v-18Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,31.5v18H46.53c3.09-2.39,5-5.55,5-9h-15c0,1.72-2,3.12-4.5,3.12s-4.5-1.4-4.5-3.12h-15c0,3.45,1.88,6.61,5,9H2v-18Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M46.53,49.5h0"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M51.5,40.5C51.5,48,42.77,54,32,54S12.5,48,12.5,40.5Z"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 31.5 2 31.5 11 10 24 10 25 12 39 12 40 10 53 10 62 31.5"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="5 29.5 12.33 12 22.76 12 23.76 14 40.24 14 41.24 12 51.67 12 58.99 29.5 5 29.5"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="57.5" y1="40.5" x2="51.5" y2="40.5"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12.5" y1="40.5" x2="6.5" y2="40.5"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="6.5" y1="36" x2="9.5" y2="36"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12.5" y1="36" x2="15.5" y2="36"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M51.5,40.5c0,3.45-1.88,6.61-5,9h0A23.89,23.89,0,0,1,32,54a23.89,23.89,0,0,1-14.52-4.5h0c-3.09-2.39-5-5.55-5-9h15c0,1.72,2,3.12,4.5,3.12s4.5-1.4,4.5-3.12Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M36.5,40.5c0,1.72-2,3.12-4.5,3.12s-4.5-1.4-4.5-3.12Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M36.5,40.5c0,1.72-2,3.12-4.5,3.12s-4.5-1.4-4.5-3.12Z"/></g></svg>
	);
  