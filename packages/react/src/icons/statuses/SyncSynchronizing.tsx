
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
		<svg onClick={onClick} className={className} height={size} width={size} id="sync-synchronizing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M57,3V19h-16l5.84-5.84c-2.17-1.73-4.66-3.08-7.35-3.96-2.36-.78-4.87-1.2-7.49-1.2-4.05,0-7.87,1.01-11.21,2.79l-2.21-2.21c-4.16,2.38-7.62,5.84-10,10l2.21,2.21c-1.78,3.34-2.79,7.16-2.79,11.21,0,1.72,.18,3.39,.53,5H2.43c-.29-1.63-.43-3.3-.43-5,0-5.72,1.6-11.06,4.39-15.61,2.48-4.08,5.92-7.52,10-10,4.55-2.79,9.89-4.39,15.61-4.39,4.31,0,8.41,.91,12.12,2.57,2.54,1.1,4.89,2.57,7,4.31l5.88-5.88Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M62,32c0,5.72-1.6,11.06-4.39,15.61-2.48,4.08-5.92,7.52-10,10-4.55,2.79-9.89,4.39-15.61,4.39-4.31,0-8.41-.91-12.12-2.57-2.54-1.1-4.89-2.57-7-4.31l-5.88,5.88v-16H23l-5.84,5.84c2.17,1.73,4.66,3.08,7.35,3.96,2.36,.78,4.87,1.2,7.49,1.2,4.05,0,7.87-1.01,11.21-2.79l2.21,2.21c4.16-2.38,7.62-5.84,10-10l-2.21-2.21c1.78-3.34,2.79-7.16,2.79-11.21,0-1.72-.18-3.39-.53-5h6.1c.29,1.63,.43,3.3,.43,5Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M57,3V19h-16l5.84-5.84c-2.17-1.73-4.66-3.08-7.35-3.96-2.36-.78-4.87-1.2-7.49-1.2-4.05,0-7.87,1.01-11.21,2.79l-2.21-2.21c-4.16,2.38-7.62,5.84-10,10l2.21,2.21c-1.78,3.34-2.79,7.16-2.79,11.21,0,1.72,.18,3.39,.53,5H2.43c-.29-1.63-.43-3.3-.43-5,0-5.72,1.6-11.06,4.39-15.61,2.48-4.08,5.92-7.52,10-10,4.55-2.79,9.89-4.39,15.61-4.39,4.31,0,8.41,.91,12.12,2.57,2.54,1.1,4.89,2.57,7,4.31l5.88-5.88Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,32c0,5.72-1.6,11.06-4.39,15.61-2.48,4.08-5.92,7.52-10,10-4.55,2.79-9.89,4.39-15.61,4.39-4.31,0-8.41-.91-12.12-2.57-2.54-1.1-4.89-2.57-7-4.31l-5.88,5.88v-16H23l-5.84,5.84c2.17,1.73,4.66,3.08,7.35,3.96,2.36,.78,4.87,1.2,7.49,1.2,4.05,0,7.87-1.01,11.21-2.79l2.21,2.21c4.16-2.38,7.62-5.84,10-10l-2.21-2.21c1.78-3.34,2.79-7.16,2.79-11.21,0-1.72-.18-3.39-.53-5h6.1c.29,1.63,.43,3.3,.43,5Z"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="32" cy="32" r="13"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="32" r="13"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="24 31 28 37 40 27"/></svg>
	);
  