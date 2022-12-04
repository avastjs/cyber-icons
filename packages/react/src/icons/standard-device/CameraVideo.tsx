
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="camera-video"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 53 48 45 48 29 62 21 62 53"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="50 43.84 50 30.16 60 24.45 60 49.55 50 43.84"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="48 24 48 50 26 50 24 54 16 54 16 50 12 50 12 24 32 24 34 20 42 20 42 24 48 24"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="18 52 18 48 14 48 14 26 33.24 26 35.24 22 40 22 40 26 46 26 46 48 24.76 48 22.76 52 18 52"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="25.9 24 21.9 24 19.2 14 2 14 4 10 22 10 23.2 14 25.9 24"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="25.9 24 21.9 24 19.2 14 2 14 4 10 22 10 23.2 14 25.9 24"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="16" y="28" width="6" height="6"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="26" y="28" width="6" height="6"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="16" y="38" width="24" height="4"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="16" y="28" width="6" height="6"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="26" y="28" width="6" height="6"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="16" y="38" width="24" height="4"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="16" y1="46" x2="26" y2="46"/></g></svg>
	);
  