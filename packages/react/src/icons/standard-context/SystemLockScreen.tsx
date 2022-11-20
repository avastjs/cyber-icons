
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="system-lock-screen"><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="2" y="8" width="60" height="36"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="16" y="-2" width="32" height="56" transform="translate(58 -6) rotate(90)"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="50 50 52 56 12 56 14 50 24.6 50 27 44 37 44 39.4 50 50 50"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="14.78 54 15.44 52 25.95 52 28.35 46 35.65 46 38.05 52 48.56 52 49.23 54 14.78 54"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="39 25 39 31 35 35 25 35 25 25 39 25"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="27 33 27 27 37 27 37 30.17 34.17 33 27 33"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M32,17h0a5,5,0,0,1,5,5v3a0,0,0,0,1,0,0H27a0,0,0,0,1,0,0V22A5,5,0,0,1,32,17Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="28" x2="32" y2="32"/></g></svg>
	);
  