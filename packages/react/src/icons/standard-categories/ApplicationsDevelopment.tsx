
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="applications-development"><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="62 44 62 62 44 62 40 58 40 40 58 40 62 44"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="55 47 59 51 55 55"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="47 47 43 51 47 55"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="53" y1="45" x2="49" y2="57"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M28.87,20.8l3.5,2.89-2.66,4.62-4.28-1.6a12,12,0,0,1-4.83,2.8L19.85,34H14.52l-.75-4.49A11.92,11.92,0,0,1,9,26.71l-4.28,1.6L2,23.69,5.51,20.8a12.41,12.41,0,0,1,0-5.6L2,12.31,4.67,7.69,9,9.29a11.92,11.92,0,0,1,4.82-2.8L14.52,2h5.33l.75,4.49a12,12,0,0,1,4.83,2.8l4.28-1.6,2.66,4.62-3.5,2.89a12.41,12.41,0,0,1,0,5.6Z"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="17.19" cy="18" r="6.67"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 44 62 62 44 62 40 58 40 40 58 40 62 44"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M28.87,20.8l3.5,2.89-2.66,4.62-4.28-1.6a12,12,0,0,1-4.83,2.8L19.85,34H14.52l-.75-4.49A11.92,11.92,0,0,1,9,26.71l-4.28,1.6L2,23.69,5.51,20.8a12.41,12.41,0,0,1,0-5.6L2,12.31,4.67,7.69,9,9.29a11.92,11.92,0,0,1,4.82-2.8L14.52,2h5.33l.75,4.49a12,12,0,0,1,4.83,2.8l4.28-1.6,2.66,4.62-3.5,2.89a12.41,12.41,0,0,1,0,5.6Z"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="17.19" cy="18" r="6.67"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,strokeDasharray:`4 4`}} x1="36" y1="52" x2="16" y2="52"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="14 52 12 52 12 50"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,strokeDasharray:`4 4`}} x1="12" y1="46" x2="12" y2="34.81"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,strokeDasharray:`4 4`}} x1="48" y1="12" x2="32.19" y2="12"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="50 12 52 12 52 14"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,strokeDasharray:`4 4`}} x1="52" y1="36" x2="52" y2="18"/></g></svg>
	);
  