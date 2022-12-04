
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="x-office-document"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 12 57 62 41 62 40 60 24 60 23 62 7 62 7 2 47 2 57 12"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="42.24 60 41.24 58 22.76 58 21.76 60 9 60 9 4 46.17 4 55 12.83 55 60 42.24 60"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="57 12 47 12 47 2 57 12"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 12 47 12 47 2 57 12"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="23" y="12" width="8" height="12" rx="2"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M17,24H11V12h6a2,2,0,0,1,2,2v8A2,2,0,0,1,17,24Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M43,22a2,2,0,0,1-2,2H37a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2h4a2,2,0,0,1,2,2"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="32" x2="31" y2="32"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="36" x2="53" y2="36"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="40" x2="53" y2="40"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="44" x2="53" y2="44"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="11" y1="48" x2="53" y2="48"/></g></svg>
	);
  