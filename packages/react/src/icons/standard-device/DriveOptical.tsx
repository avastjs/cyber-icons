
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="drive-optical"><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="32" r="30"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="32" cy="32" r="28"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="32" cy="32" r="6"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M44,32A12,12,0,0,0,32,20V8A24,24,0,0,1,56,32Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M20,32A12,12,0,0,0,32,44V56A24,24,0,0,1,8,32Z"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="32" r="6"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M44,32A12,12,0,0,0,32,20V8A24,24,0,0,1,56,32Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M20,32A12,12,0,0,0,32,44V56A24,24,0,0,1,8,32Z"/></g></svg>
	);
  