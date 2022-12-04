
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="network-wired"><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="19" y="2" width="26" height="16" rx="2"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="2" y="42" width="26" height="16" rx="2"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="36" y="42" width="26" height="16" rx="2"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="29" y="28" width="6" height="6"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="19" y="2" width="26" height="16" rx="2"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="28" y="18" width="8" height="4"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="24" y1="22" x2="40" y2="22"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="2" y="42" width="26" height="16" rx="2"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="11" y="58" width="8" height="4"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="7" y1="62" x2="23" y2="62"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="36" y="42" width="26" height="16" rx="2"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="45" y="58" width="8" height="4"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="41" y1="62" x2="57" y2="62"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="22" x2="32" y2="28"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="29" y="28" width="6" height="6"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="49 42 49 31 35 31"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="15 42 15 31 29 31"/></g></svg>
	);
  