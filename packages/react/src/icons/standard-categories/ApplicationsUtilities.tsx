
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="applications-utilities"><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="9" y="9" width="46" height="46"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="11" y="11" width="42" height="42"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M49.17,49.17A2.85,2.85,0,0,1,45,49.06l-7.18-8a4,4,0,0,0-3.63-1.27,6.82,6.82,0,0,1-2.7,0,7,7,0,0,1-5.18-9.31l4,4,1.29-.16L34,34l.46-3.64-.06-.06-3.91-3.91a7,7,0,0,1,9,4h0a6.54,6.54,0,0,1,.45,1.83,6.78,6.78,0,0,1-.08,2.06,3.9,3.9,0,0,0,.89,3.23,3.59,3.59,0,0,0,.38.4l8,7.18A2.85,2.85,0,0,1,49.17,49.17Z"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="62 16 58 18 58 6 46 6 48 2 60 2 62 2 62 4 62 16"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="62 44 58 46 58 58 44 58 46 62 60 62 62 62 62 60 62 44"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="2 16 6 18 6 6 18 6 16 2 4 2 2 2 2 4 2 16"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 16 58 18 58 6 46 6 48 2 60 2 62 2 62 4 62 16"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 44 58 46 58 58 44 58 46 62 60 62 62 62 62 60 62 44"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="20" x2="58" y2="22"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="24" x2="58" y2="26"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="28" x2="58" y2="30"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="32" x2="58" y2="34"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="36" x2="58" y2="38"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="40" x2="58" y2="42"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 16 6 18 6 6 18 6 16 2 4 2 2 2 2 4 2 16"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="20 2 22 6 42 6 44 2"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="41.53 62 10 62 4 56 4 21.47"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M42.48,34.34l-1.81,3.12a3.9,3.9,0,0,1-.89-3.23,6.78,6.78,0,0,0,.08-2.06Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M39.19,26.37a12.61,12.61,0,0,1,.3,2.63,11.73,11.73,0,0,1-.08,1.33,7,7,0,0,0-9-4l3.91,3.91.06.06L34,34l-2.35.3-1.29.16-4-4a7,7,0,0,0,5.18,9.31l-.09,0L30.74,44h-5L25,39.79a11.22,11.22,0,0,1-4.53-2.63l-4,1.5L14,34.34l3.29-2.72A11.82,11.82,0,0,1,17,29a12,12,0,0,1,.3-2.63l-1-.81L14,23.66l2.5-4.32,4,1.5A11.11,11.11,0,0,1,25,18.21l.12-.77L25.74,14h5l.7,4.21A11,11,0,0,1,36,20.84l4-1.5,2.5,4.32Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M42.48,34.34l-1.81,3.12a3.9,3.9,0,0,1-.89-3.23,6.78,6.78,0,0,0,.08-2.06Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M39.19,26.37a12.61,12.61,0,0,1,.3,2.63,11.73,11.73,0,0,1-.08,1.33,7,7,0,0,0-9-4l3.91,3.91.06.06L34,34l-2.35.3-1.29.16-4-4a7,7,0,0,0,5.18,9.31l-.09,0L30.74,44h-5L25,39.79a11.22,11.22,0,0,1-4.53-2.63l-4,1.5L14,34.34l3.29-2.72A11.82,11.82,0,0,1,17,29a12,12,0,0,1,.3-2.63l-1-.81L14,23.66l2.5-4.32,4,1.5A11.11,11.11,0,0,1,25,18.21l.12-.77L25.74,14h5l.7,4.21A11,11,0,0,1,36,20.84l4-1.5,2.5,4.32Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M34.42,30.32,34,34l-2.35.3-1.29.16-4-4a7,7,0,0,0-.15,4.45A6.25,6.25,0,1,1,33.7,26a6.94,6.94,0,0,0-3.25.39l3.91,3.91Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M34.42,30.32,34,34l-2.35.3-1.29.16-4-4a7,7,0,0,0-.15,4.45A6.25,6.25,0,1,1,33.7,26a6.94,6.94,0,0,0-3.25.39l3.91,3.91Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M49.17,49.17A2.85,2.85,0,0,1,45,49.06l-7.18-8a4,4,0,0,0-3.63-1.27,6.82,6.82,0,0,1-2.7,0,7,7,0,0,1-5.18-9.31l4,4,1.29-.16L34,34l.46-3.64-.06-.06-3.91-3.91a7,7,0,0,1,9,4h0a6.54,6.54,0,0,1,.45,1.83,6.78,6.78,0,0,1-.08,2.06,3.9,3.9,0,0,0,.89,3.23,3.59,3.59,0,0,0,.38.4l8,7.18A2.85,2.85,0,0,1,49.17,49.17Z"/></g></svg>
	);
  