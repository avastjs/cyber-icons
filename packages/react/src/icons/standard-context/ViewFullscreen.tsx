
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="view-fullscreen"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 2 17.56 4.83 4.83 17.56 2 2"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="6.11 13.44 4.49 4.49 13.44 6.11 6.11 13.44"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="11.19 11.19 16.14 16.14 24.63 16.14"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 2 46.44 4.83 59.17 17.56 62 2"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="57.89 13.44 59.52 4.49 50.56 6.11 57.89 13.44"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52.81 11.19 47.86 16.14 39.37 16.14"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 62 17.56 59.17 4.83 46.44 2 62"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="6.11 50.56 4.49 59.52 13.44 57.89 6.11 50.56"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="11.19 52.81 16.14 47.86 24.63 47.86"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 62 46.44 59.17 59.17 46.44 62 62"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="57.89 50.56 59.52 59.52 50.56 57.89 57.89 50.56"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52.81 52.81 47.86 47.86 39.37 47.86"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="20" y="20" width="24" height="24"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="22" y="22" width="20" height="20" transform="translate(64) rotate(90)"/></g></svg>
	);
  