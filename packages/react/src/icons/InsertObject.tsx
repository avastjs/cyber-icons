
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="insert-object"><path style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M53,12V44a9,9,0,0,0-9,9H12L2,43V2H43Z"/><path style={{fill:`${primary}`}} d="M12.83,51,4,42.17V4H42.17L51,12.83V42.18A11,11,0,0,0,42.18,51Z"/><circle style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="53" cy="53" r="9"/><circle style={{fill:`${secondary}`}} cx="53" cy="53" r="7"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="53" y1="48" x2="53" y2="58"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="58" y1="53" x2="48" y2="53"/><path style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M26,8v9a9,9,0,0,0-9,9H8V8Z"/><path style={{fill:`${secondary}`}} d="M10,24V10H24v5.18A11,11,0,0,0,15.18,24Z"/><path style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M35,26a9.36,9.36,0,0,1-.22,2H28v6.78A9.36,9.36,0,0,1,26,35a9,9,0,1,1,9-9Z"/><path style={{fill:`${secondary}`}} d="M26,33a7,7,0,1,1,7-7H26Z"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="46 28 28 46 28 28 46 28"/><polygon style={{fill:`${secondary}`}} points="30 30 41.17 30 30 41.17 30 30"/></g></svg>
	);
  