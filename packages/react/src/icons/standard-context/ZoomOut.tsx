
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="zoom-out"><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="24" cy="22" r="20"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="24" cy="22" r="18"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="60 53.93 58.59 62 41.2 43.62 42.62 36.54 60 53.93"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="43.37 42.99 43.84 40.6 57.85 54.61 57.3 57.73 43.37 42.99"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="41.94" y1="39.94" x2="38.14" y2="36.14"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="21" y="10" width="6" height="24" transform="translate(46 -2) rotate(90)"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="23" y="12" width="2" height="20" transform="translate(46 -2) rotate(90)"/></g></svg>
	);
  