
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="insert-link"><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M53,12V44a9,9,0,0,0-9,9H12L2,43V2H43Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M12.83,51,4,42.17V4H42.17L51,12.83V42.18A11,11,0,0,0,42.18,51Z"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="53" cy="53" r="9"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="53" cy="53" r="7"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="53" y1="48" x2="53" y2="58"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="58" y1="53" x2="48" y2="53"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M41.64,21.84,30.33,33.16a6,6,0,0,1-8.49,0L37.4,17.6l-2.83-2.83L29.24,20.1a6,6,0,0,0-4.57,1.74l-6.82,6.83A6,6,0,0,1,19,21.84L30.33,10.53a6,6,0,0,1,8.48,0l2.83,2.83A6,6,0,0,1,41.64,21.84Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M40.23,17.6l-5.66-5.66-6.16,6.17a7.9,7.9,0,0,0-5.15,2.32l8.48-8.49a4,4,0,0,1,5.66,0l2.83,2.83a4,4,0,0,1,0,5.66L28.91,31.74a3.91,3.91,0,0,1-3,1.16,3.69,3.69,0,0,1-.82-.13Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M36,33.16,24.67,44.47a6,6,0,0,1-8.48,0l-2.83-2.83a6,6,0,0,1,0-8.48L24.67,21.84a6,6,0,0,1,8.49,0L17.6,37.4l2.83,2.83,5.33-5.33a6,6,0,0,0,4.57-1.74l6.82-6.83A6,6,0,0,1,36,33.16Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M14.77,40.23a4,4,0,0,1,0-5.66L26.09,23.26a3.91,3.91,0,0,1,3-1.16,3.69,3.69,0,0,1,.82.13L14.77,37.4l5.66,5.66,6.16-6.17a7.9,7.9,0,0,0,5.15-2.32l2.83-2.83L23.26,43.06a4,4,0,0,1-5.66,0Z"/></g></svg>
	);
  