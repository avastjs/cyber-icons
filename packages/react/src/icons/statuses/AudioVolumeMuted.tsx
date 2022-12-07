
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
		<svg onClick={onClick} className={className} height={size} width={size} id="audio-volume-muted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="12 62 2 62 2 52"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 52 62 62 52 62"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 2 62 2 62 12"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 12 2 2 12 2"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M12,26h4v12h-4c-1.1,0-2-.9-2-2v-8c0-1.1,.9-2,2-2Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M42,32c0,3.31-2.69,6-6,6v-12c3.31,0,6,2.69,6,6Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M12,26h4v12h-4c-1.1,0-2-.9-2-2v-8c0-1.1,.9-2,2-2Z"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="36 16 36 48 16 38 16 26 36 16"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="18 36.76 18 27.24 34 19.24 34 44.76 18 36.76"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M42,32c0,3.31-2.69,6-6,6v-12c3.31,0,6,2.69,6,6Z"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="56.77 25 51 32 45.23 39"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="45.23 25 51 32 56.77 39"/></svg>
	);
  