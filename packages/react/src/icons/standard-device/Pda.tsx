
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="pda"><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M55,54v6a2,2,0,0,1-2,2H11a2,2,0,0,1-2-2V54H29a3,3,0,0,0,6,0Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M55,54v6a2,2,0,0,1-2,2H11a2,2,0,0,1-2-2V54H29a3,3,0,0,0,6,0Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M57,12V26l-2,1V54H35a3,3,0,0,0-6,0H9V48H7V34l2-1V4a2,2,0,0,1,2-2H53a2,2,0,0,1,2,2v8Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M57,12V26l-2,1V54H35a3,3,0,0,0-6,0H9V48H7V34l2-1V4a2,2,0,0,1,2-2H53a2,2,0,0,1,2,2v8Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M37.74,50a7,7,0,0,0-11.48,0H13V6H51V50Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M38.7,48a9,9,0,0,0-13.4,0H15V8H49V48Z"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="54" r="3"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="32" cy="54" r="3"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="54" r="3"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="52" y1="58" x2="49" y2="58"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="47" y1="58" x2="44" y2="58"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="42" y1="58" x2="39" y2="58"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="12" y1="58" x2="15" y2="58"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="17" y1="58" x2="20" y2="58"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="58" x2="25" y2="58"/></g></svg>
	);
  