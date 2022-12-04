
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="printer"><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="47 9 41 9 41 3 47 9"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="60 46 60 56 62 57 62 61 51.5 61 51.5 58 12.5 58 12.5 61 2 61 2 57 4 56 4 46 2 45 2 39 8 33 56 33 62 39 62 45 60 46"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="53.5 59 53.5 56 10.5 56 10.5 59 4 59 4 58.24 6 57.24 6 44.76 4 43.76 4 39.83 8.83 35 55.17 35 60 39.83 60 43.76 58 44.76 58 57.24 60 58.24 60 59 53.5 59"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="9.5" y="13.5" width="7.5" height="19.5"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="47" y="13.5" width="7.5" height="19.5"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="9.5" y="13.5" width="7.5" height="19.5"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="47" y="13.5" width="7.5" height="19.5"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="9.5" y="13.5" width="7.5" height="19.5"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="47" y="13.5" width="7.5" height="19.5"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="9.5" y="13.5" width="7.5" height="19.5"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="47" y="13.5" width="7.5" height="19.5"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="47 9 47 33 17 33 17 3 41 3 47 9"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="47 9 41 9 41 3 47 9"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="51.5" y1="39" x2="54.5" y2="39"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="45.5" y1="39" x2="48.5" y2="39"/></g></svg>
	);
  