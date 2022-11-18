
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="format-justify-left"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 12 57 62 17 62 7 52 7 2 47 2 57 12"/><polygon style={{fill:`${primary}`}} points="17.83 60 9 51.17 9 4 46.17 4 55 12.83 55 60 17.83 60"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="17" y1="32" x2="47" y2="32"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="17" y1="37" x2="39" y2="37"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="17" y1="42" x2="47" y2="42"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="17" y1="47" x2="39" y2="47"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="17" y1="52" x2="47" y2="52"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="41 10 44 16 35 16 35 28 29 26 29 16 22 16 19 10 41 10"/><polygon style={{fill:`${secondary}`}} points="31 24.56 31 14 23.24 14 22.24 12 39.76 12 40.76 14 33 14 33 25.23 31 24.56"/></g></svg>
	);
  