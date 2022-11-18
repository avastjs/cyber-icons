
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="document-print-preview"><path style={{fill:`${primary}`}} d="M14.83,60,8,53.17V4H33.17L46,16.83v11.7a11,11,0,1,0,0,21.24V60Z"/><path style={{fill:`${secondary}`}} d="M43.14,46.15a7,7,0,1,1,3.77-12.89,6.09,6.09,0,0,1,1.18.94,7,7,0,0,1,0,9.89A6.05,6.05,0,0,1,47,45,6.94,6.94,0,0,1,43.14,46.15Z"/><path style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M36.79,32.79A9,9,0,0,0,48,46.72V62H14L6,54V2H34L48,16V31.58A9,9,0,0,0,36.79,32.79Z"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="48 16 34 16 34 2 48 16"/><polygon style={{fill:`${secondary}`}} points="36 14 36 6.83 43.17 14 36 14"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="26" x2="36" y2="26"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="32" x2="32" y2="32"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="38" x2="28" y2="38"/><path style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M49.51,45.51A8.18,8.18,0,0,1,48,46.72a9,9,0,1,1,0-15.14,8.18,8.18,0,0,1,1.51,1.21A9,9,0,0,1,49.51,45.51Z"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="49.51" y1="45.51" x2="58" y2="54"/></g></svg>
	);
  