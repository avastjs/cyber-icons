
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
		<svg onClick={onClick} className={className} height={size} width={size} id="printer-error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M19,32v-3.58h12.57c1.49,0,2.84-.82,3.54-2.13,.69-1.31,.6-2.88-.23-4.1L23.97,6h16.2l4.83,4.83V32H19Z"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="47 10 41 10 41 4 47 10"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="60 47 60 57 62 58 62 62 51.5 62 51.5 59 12.5 59 12.5 62 2 62 2 58 4 57 4 47 2 46 2 40 8 34 56 34 62 40 62 46 60 47"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="53.5 60 53.5 57 10.5 57 10.5 60 4 60 4 59.23 6 58.23 6 45.76 4 44.76 4 40.83 8.83 36 55.17 36 60 40.83 60 44.76 58 45.76 58 58.23 60 59.23 60 60 53.5 60"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M47,10v24H17v-7.58h14.57c1.6,0,2.56-1.79,1.66-3.11L20.21,4h20.79l6,6Z"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="47 10 41 10 41 4 47 10"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="51.5" y1="40" x2="54.5" y2="40"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="45.5" y1="40" x2="48.5" y2="40"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M31.57,26.42H4c-1.6,0-2.55-1.79-1.65-3.11L16.13,2.88c.79-1.17,2.52-1.17,3.32,0l.76,1.12,13.02,19.31c.9,1.32-.06,3.11-1.66,3.11Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M31.57,26.42H4c-1.6,0-2.55-1.79-1.65-3.11L16.13,2.88c.79-1.17,2.52-1.17,3.32,0l.76,1.12,13.02,19.31c.9,1.32-.06,3.11-1.66,3.11Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="17.79" y1="17.42" x2="17.79" y2="8.42"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="17.79" y1="22.42" x2="17.79" y2="20.42"/></svg>
	);
  