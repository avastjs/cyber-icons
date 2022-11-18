
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="system-search"><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="2" y="8" width="60" height="36"/><rect style={{fill:`${primary}`}} x="16" y="-2" width="32" height="56" transform="translate(58 -6) rotate(90)"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="50 50 52 56 12 56 14 50 24.6 50 27 44 37 44 39.4 50 50 50"/><polygon style={{fill:`${secondary}`}} points="14.78 54 15.44 52 25.95 52 28.35 46 35.65 46 38.05 52 48.56 52 49.23 54 14.78 54"/><circle style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="29.64" cy="23.64" r="8"/><path style={{fill:`${secondary}`}} d="M29.64,29.64a6,6,0,1,1,4.24-1.76A6,6,0,0,1,29.64,29.64Z"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="35.29" y1="29.29" x2="42.36" y2="36.36"/></g></svg>
	);
  