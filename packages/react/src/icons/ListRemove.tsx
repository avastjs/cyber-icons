
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="list-remove"><path style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M38,53a9,9,0,0,0,9,9H18L8,52V2H37L47,12V44A9,9,0,0,0,38,53Z"/><path style={{fill:`${primary}`}} d="M18.83,60,10,51.17V4H36.17L45,12.83V42.18A11,11,0,0,0,38.52,60Z"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="14" y="8" width="10" height="10"/><rect style={{fill:`${secondary}`}} x="16" y="10" width="6" height="6" transform="translate(32 -6) rotate(90)"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="28" y1="18" x2="42" y2="18"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="14" y="24" width="10" height="10"/><rect style={{fill:`${secondary}`}} x="16" y="26" width="6" height="6" transform="translate(48 10) rotate(90)"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="28" y1="34" x2="42" y2="34"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="14" y="40" width="10" height="10"/><rect style={{fill:`${secondary}`}} x="16" y="42" width="6" height="6" transform="translate(64 26) rotate(90)"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="34.35" y1="50" x2="28" y2="50"/><circle style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="47" cy="53" r="9"/><circle style={{fill:`${secondary}`}} cx="47" cy="53" r="7"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="50.54" y1="49.46" x2="43.46" y2="56.54"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="50.54" y1="56.54" x2="43.46" y2="49.46"/></g></svg>
	);
  