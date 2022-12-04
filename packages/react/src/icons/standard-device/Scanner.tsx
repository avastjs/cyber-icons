
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="scanner"><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="57 40.75 57 48.25 46.16 48.25 44.5 53.25 19.5 53.25 17.84 48.25 7 48.25 7 40.75 57 40.75"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 40.75 57 48.25 46.16 48.25 44.5 53.25 19.5 53.25 17.84 48.25 7 48.25 7 40.75 57 40.75"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="57 40.75 7 40.75 10.29 29.5 53.73 29.5 57 40.75"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 40.75 7 40.75 10.29 29.5 53.73 29.5 57 40.75"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="50.34 35.75 13.66 35.75 15.49 29.5 48.51 29.5 50.34 35.75"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="50.34 35.75 13.66 35.75 15.49 29.5 48.51 29.5 50.34 35.75"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="28.25" y1="48.25" x2="35.75" y2="48.25"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="38.25" y1="48.25" x2="42" y2="48.25"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="48.25" x2="25.75" y2="48.25"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 29.5 2 29.5 15.75 10.75 24.88 10.75 26 13 38 13 39.13 10.75 48.25 10.75 62 29.5"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="5.95 27.5 16.76 12.75 23.64 12.75 24.76 15 39.23 15 40.36 12.75 47.24 12.75 58.05 27.5 5.95 27.5"/></g></svg>
	);
  