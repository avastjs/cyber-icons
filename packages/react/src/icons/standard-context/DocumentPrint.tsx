
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="document-print"><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="13 26 13 4 38.17 4 51 16.83 51 26 13 26"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="55 56 55 45 9 45 9 56 4 56 4 36.83 10.83 30 53.17 30 60 36.83 60 56 55 56"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="26.5" y="35.5" width="11" height="38" transform="translate(86.5 22.5) rotate(90)"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="22" y="38" width="4" height="4"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="30" y="38" width="4" height="4"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="38" y="38" width="4" height="4"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="53 16 53 28 11 28 11 2 39 2 53 16"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="53 16 39 16 39 2 53 16"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="41 14 41 6.83 48.17 14 41 14"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 36 62 58 53 58 53 47 11 47 11 58 2 58 2 36 10 28 54 28 62 36"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="21" y1="57" x2="43" y2="57"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="21" y1="52" x2="43" y2="52"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="11" y="47" width="42" height="15"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="22" y="38" width="4" height="4"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="30" y="38" width="4" height="4"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="38" y="38" width="4" height="4"/></g></svg>
	);
  