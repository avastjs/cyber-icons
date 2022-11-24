
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="applications-office"><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="9" y="9" width="46" height="46"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="11" y="11" width="42" height="42" transform="translate(64) rotate(90)"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="62 16 58 18 58 6 46 6 48 2 60 2 62 2 62 4 62 16"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="62 44 58 46 58 58 44 58 46 62 60 62 62 62 62 60 62 44"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="2 16 6 18 6 6 18 6 16 2 4 2 2 2 2 4 2 16"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 16 58 18 58 6 46 6 48 2 60 2 62 2 62 4 62 16"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 44 58 46 58 58 44 58 46 62 60 62 62 62 62 60 62 44"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="20" x2="58" y2="22"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="24" x2="58" y2="26"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="28" x2="58" y2="30"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="32" x2="58" y2="34"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="36" x2="58" y2="38"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="40" x2="58" y2="42"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 16 6 18 6 6 18 6 16 2 4 2 2 2 2 4 2 16"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="20 2 22 6 42 6 44 2"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="41.53 62 10 62 4 56 4 21.47"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="51 17 51 47 43 51 13 47 43 47 43 18 19 21 19 43 13 47 13 17 43 13 51 17"/></g></svg>
	);
  