
  import React from 'react';

  import { IconProps } from '../util';

  export default ({
		size = '24px',
    primary = "#036982",
    secondary = "#f32b6a",
    border = "#04e6e4",
    stroke = "1px",
    className = "",
	}: IconProps) => (
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="format-indent-less"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 12 62 62 22 62 12 52 12 38.92 15 41 15 23 12 25.08 12 2 52 2 62 12"/><polygon style={{fill:`${primary}`}} points="22.83 60 14 51.17 14 42.74 17 44.82 17 19.18 14 21.26 14 4 51.17 4 60 12.83 60 60 22.83 60"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="22" x2="52" y2="22"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="27" x2="52" y2="27"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="32" x2="52" y2="32"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="37" x2="52" y2="37"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="42" x2="52" y2="42"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="15 23 15 41 12 38.92 2 32 12 25.08 15 23"/><polygon style={{fill:`${secondary}`}} points="13 26.82 5.51 32 13 37.18 13 26.82"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="28 38 22 32 15 32"/></g></svg>
	);
  