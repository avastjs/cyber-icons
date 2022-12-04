
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="text-x-generic"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="55 25 55 39 57 40 57 62 41 62 40 60 24 60 23 62 7 62 7 40 9 39 9 25 7 24 7 2 47 2 57 12 57 24 55 25"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="42.24 60 41.24 58 22.76 58 21.76 60 9 60 9 41.24 11 40.24 11 23.76 9 22.76 9 4 46.17 4 55 12.83 55 22.76 53 23.76 53 40.24 55 41.24 55 60 42.24 60"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="57 12 47 12 47 2 57 12"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 12 47 12 47 2 57 12"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="15" y1="28" x2="23" y2="28"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="28 40 25 40 28 40 36 28 39 28"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="36 40 39 40 36 40 28 28 25 28"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="19 28 19 40 17 40"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="49" y1="28" x2="41" y2="28"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="45 28 45 40 43 40"/></g></svg>
	);
  