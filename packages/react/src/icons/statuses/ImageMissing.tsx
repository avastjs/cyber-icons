
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
		<svg onClick={onClick} className={className} height={size} width={size} id="image-missing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="52 32 52 52 2 52 2 32 10.93 22.07 20 32 36 16 52 32"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="52 2 52 32 36 16 20 32 10.93 22.07 2 32 2 2 52 2"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="20" cy="15" r="3"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 32 52 52 2 52 2 32 10.93 22.07 20 32 36 16 52 32"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 2 52 32 36 16 20 32 10.93 22.07 2 32 2 2 52 2"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="20" cy="15" r="3"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="62 30 58 30 57 32 46 32 45 30 30 30 30 62 34 62 35 60 46 60 47 62 62 62 62 30"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="46" cy="46" r="10"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 30 58 30 57 32 46 32 45 30 30 30 30 62 34 62 35 60 46 60 47 62 62 62 62 30"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="46" cy="46" r="10"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="53.07" y1="38.93" x2="38.93" y2="53.07"/></svg>
	);
  