
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
		<svg onClick={onClick} className={className} height={size} width={size} id="network-receive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M46,44v4c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2v-4H46Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M46,44v4c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2v-4H46Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M37,60h0c0,1.1-.9,2-2,2H13c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M37,60h0c0,1.1-.9,2-2,2H13c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path style={{fill:`#13ce2d`}} d="M20,32h17.33l-.77,4.66c-.32,1.93-1.99,3.34-3.95,3.34h-3.61c-.55,0-1.05,.22-1.41,.59-.37,.36-.59,.86-.59,1.41,0,1.1,.9,2,2,2H2V22c0-1.1,.9-2,2-2h14v10c0,1.1,.9,2,2,2Z"/><path style={{fill:`#13ce2d`}} d="M46,32v7.75c-1.32-.48-2.32-1.64-2.56-3.09l-.77-4.66h3.33Z"/><path d="M62,4V26H18V4c0-1.1,.9-2,2-2H60c1.1,0,2,.9,2,2Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M20,32h17.33l-.77,4.66c-.32,1.93-1.99,3.34-3.95,3.34h-3.61c-.55,0-1.05,.22-1.41,.59-.37,.36-.59,.86-.59,1.41,0,1.1,.9,2,2,2H2V22c0-1.1,.9-2,2-2h14v10c0,1.1,.9,2,2,2Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M46,32v7.75c-1.32-.48-2.32-1.64-2.56-3.09l-.77-4.66h3.33Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M62,26v4c0,1.1-.9,2-2,2H20c-1.1,0-2-.9-2-2v-4H62Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M53,42c0,1.1-.9,2-2,2H29c-1.1,0-2-.9-2-2,0-.55,.22-1.05,.59-1.41,.36-.37,.86-.59,1.41-.59h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.24,1.45,1.24,2.61,2.56,3.09,.43,.16,.9,.25,1.39,.25h3.61c1.1,0,2,.9,2,2Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,26v4c0,1.1-.9,2-2,2H20c-1.1,0-2-.9-2-2v-4H62Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M53,42c0,1.1-.9,2-2,2H29c-1.1,0-2-.9-2-2,0-.55,.22-1.05,.59-1.41,.36-.37,.86-.59,1.41-.59h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.24,1.45,1.24,2.61,2.56,3.09,.43,.16,.9,.25,1.39,.25h3.61c1.1,0,2,.9,2,2Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,4V26H18V4c0-1.1,.9-2,2-2H60c1.1,0,2,.9,2,2Z"/></svg>
	);
  