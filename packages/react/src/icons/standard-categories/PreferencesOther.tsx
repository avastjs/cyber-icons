
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="preferences-other"><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M54,20H10L8,18V12l2-2H54l2,2v6Z"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="10.83 18 10 17.17 10 12.83 10.83 12 53.17 12 54 12.83 54 17.17 53.17 18 10.83 18"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M54,44H10L8,46v6l2,2H54l2-2V46Z"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="10.83 52 10 51.17 10 46.83 10.83 46 53.17 46 54 46.83 54 51.17 53.17 52 10.83 52"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M54,37H10L8,35V29l2-2H54l2,2v6Z"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="10.83 35 10 34.17 10 29.83 10.83 29 53.17 29 54 29.83 54 34.17 53.17 35 10.83 35"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="28.48 62 7.51 62 2 56.48 2 35.52"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="35.52 2 56.48 2 62 7.51 62 28.48"/></g></svg>
	);
  