
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="applications-other"><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M26,28H10L8,26V10l2-2H26l2,2V26Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M38,28H54l2-2V10L54,8H38l-2,2V26Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M26,36H10L8,38V54l2,2H26l2-2V38Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M38,36H54l2,2V54l-2,2H38l-2-2V38Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M26,28H10L8,26V10l2-2H26l2,2V26Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M38,28H54l2-2V10L54,8H38l-2,2V26Z"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="28.48 62 7.51 62 2 56.48 2 35.52"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="35.52 2 56.48 2 62 7.51 62 28.48"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M26,36H10L8,38V54l2,2H26l2-2V38Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M38,36H54l2,2V54l-2,2H38l-2-2V38Z"/></g></svg>
	);
  