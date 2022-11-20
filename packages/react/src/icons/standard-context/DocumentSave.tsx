
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="document-save"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 44 62 52 54 60 10 60 2 52 2 44 62 44"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="10.83 58 4 51.17 4 46 60 46 60 51.17 53.17 58 10.83 58"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 44 2 44 12 18 28 18 28 26 24 26 32 34 40 26 36 26 36 18 52 18 62 44"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="4.91 42 13.37 20 26 20 26 24 19.17 24 32 36.83 44.83 24 38 24 38 20 50.63 20 59.09 42 4.91 42"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="49" cy="52" r="3"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="49" cy="52" r="1"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="39" y1="52" x2="12" y2="52"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="40 26 32 34 24 26 28 26 28 12 36 4 36 26 40 26"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="28.83 28 30 28 30 12.83 34 8.83 34 28 35.17 28 32 31.17 28.83 28"/></g></svg>
	);
  