
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="format-text-direction-rtl"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 12 52 62 12 62 2 52 2 2 42 2 52 12"/><polygon style={{fill:`${primary}`}} points="12.83 60 4 51.17 4 4 41.17 4 50 12.83 50 60 12.83 60"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="16" y1="22" x2="6" y2="22"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="26" y1="27" x2="6" y2="27"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="26" y1="32" x2="6" y2="32"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="26" y1="37" x2="6" y2="37"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="26" y1="42" x2="6" y2="42"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="34 32 47 23 47 41 34 32"/><polygon style={{fill:`${secondary}`}} points="45 37.18 37.51 32 45 26.82 45 37.18"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="47 32 56 32 62 26"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="30" y1="12" x2="30" y2="52"/></g></svg>
	);
  