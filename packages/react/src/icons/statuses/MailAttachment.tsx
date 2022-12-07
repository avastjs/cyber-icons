
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
		<svg onClick={onClick} className={className} height={size} width={size} id="mail-attachment" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 22 62 52 47.67 52 45 50 29 50 26.33 52 12 52 12 22 37 40 62 22"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="48.34 50 45.67 48 28.33 48 25.66 50 14 50 14 25.9 37 42.46 60 25.9 60 50 48.34 50"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 22 37 40 12 22 62 22"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 22 37 40 12 22 62 22"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="18.2 24 55.8 24 37 37.54 18.2 24"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="2" y="12" width="20" height="20"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="2" y="12" width="20" height="20"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M15,24h-4c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.5c1.93,0,3.5,1.57,3.5,3.5h0c0,1.93-1.57,3.5-3.5,3.5h-3.5c-2.76,0-5-2.24-5-5h0c0-2.76,2.24-5,5-5h2"/></svg>
	);
  