
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="document-open-recent"><circle style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="48" cy="53" r="9"/><circle style={{fill:`${secondary}`}} cx="48" cy="53" r="7"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="51 53 48 53 48 48"/><path style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M39,53a9,9,0,0,0,9,9H15L7,54V2H34L48,16V44A9,9,0,0,0,39,53Z"/><path style={{fill:`${primary}`}} d="M15.83,60,9,53.17V4H33.17L46,16.83V42.18A11,11,0,0,0,39.52,60Z"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="48 16 34 16 34 2 48 16"/><polygon style={{fill:`${secondary}`}} points="36 14 36 6.83 43.17 14 36 14"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12" y1="26" x2="36" y2="26"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12" y1="32" x2="36" y2="32"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12" y1="38" x2="36" y2="38"/></g></svg>
	);
  