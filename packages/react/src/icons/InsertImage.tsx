
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="insert-image"><path style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M53,12V44a9,9,0,0,0-9,9H12L2,43V2H43Z"/><path style={{fill:`${primary}`}} d="M12.83,51,4,42.17V4H42.17L51,12.83V42.18A11,11,0,0,0,42.18,51Z"/><circle style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="53" cy="53" r="9"/><circle style={{fill:`${secondary}`}} cx="53" cy="53" r="7"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="53" y1="48" x2="53" y2="58"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="58" y1="53" x2="48" y2="53"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="46 36 33 20 24 32 19 24 9 36 46 36"/><path style={{fill:`${secondary}`}} d="M25,34l8.06-10.75L41.8,34ZM13.27,34l5.5-6.6L22.89,34Z"/><circle style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="24" cy="16" r="4"/><circle style={{fill:`${secondary}`}} cx="24" cy="16" r="2"/></g></svg>
	);
  