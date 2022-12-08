
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
		<svg onClick={onClick} className={className} height={size} width={size} id="security-medium" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="56 7 56 15 2 15 2 7 31.5 7 33.5 4 50.5 4 52.5 7 56 7"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="4 13 4 9 32.57 9 34.57 6 49.43 6 51.43 9 54 9 54 13 4 13"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="56 15 56 49 36.5 49 34.5 52 10.5 52 7.5 49 2 49 2 15 56 15"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="11.33 50 8.33 47 4 47 4 17 54 17 54 47 35.43 47 33.43 50 11.33 50"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="5" y1="11" x2="7" y2="11"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="9" y1="11" x2="11" y2="11"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="13" y1="11" x2="15" y2="11"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M62,50c0,5.52-4.48,10-10,10s-10-4.48-10-10,4.48-10,10-10c3.01,0,5.72,1.34,7.55,3.45,1.53,1.75,2.45,4.04,2.45,6.55Z"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="52" cy="47" r="3"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,50c0,2.23-.73,4.29-1.97,5.95-1.82,2.46-4.74,4.05-8.03,4.05s-6.21-1.59-8.03-4.05c-1.24-1.66-1.97-3.72-1.97-5.95,0-5.52,4.48-10,10-10,3.01,0,5.72,1.34,7.55,3.45,1.53,1.75,2.45,4.04,2.45,6.55Z"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="33.5 36.1 33.5 30.9 29 28.3 24.5 30.9 24.5 36.1 29 38.7 33.5 36.1"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="29" cy="22.5" r="2"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="19.47" cy="28" r="2"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="19.47" cy="39" r="2"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="29" cy="44.5" r="2"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="38.53" cy="39" r="2"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="38.53" cy="28" r="2"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="33.5 36.1 33.5 30.9 29 28.3 24.5 30.9 24.5 36.1 29 38.7 33.5 36.1"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="29" y1="28.3" x2="29" y2="24.5"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="29" cy="22.5" r="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="24.5" y1="30.9" x2="21.21" y2="29"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="19.47" cy="28" r="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="24.5" y1="36.1" x2="21.21" y2="38"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="19.47" cy="39" r="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="29" y1="38.7" x2="29" y2="42.5"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="29" cy="44.5" r="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="33.5" y1="36.1" x2="36.79" y2="38"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="38.53" cy="39" r="2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="33.5" y1="30.9" x2="36.79" y2="29"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="38.53" cy="28" r="2"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="52" cy="47" r="3"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M60.03,55.95c-1.82,2.46-4.74,4.05-8.03,4.05s-6.21-1.59-8.03-4.05c1.04-3.44,4.25-5.95,8.03-5.95s6.99,2.51,8.03,5.95Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M60.03,55.95c-1.82,2.46-4.74,4.05-8.03,4.05s-6.21-1.59-8.03-4.05c1.04-3.44,4.25-5.95,8.03-5.95s6.99,2.51,8.03,5.95Z"/></svg>
	);
  