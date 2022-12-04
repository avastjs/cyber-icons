
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="video-display"><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="47.24 48 46.24 46 17.76 46 16.76 48 10 48 10 46 4 46 4 8 10 8 10 6 16.76 6 17.76 8 46.24 8 47.24 6 54 6 54 8 60 8 60 46 54 46 54 48 47.24 48"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="44.75 27 25.25 15.74 25.25 38.26 44.75 27"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="17" cy="57" r="3"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="44.75 27 25.25 15.74 25.25 38.26 44.75 27"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="62" y1="57" x2="20" y2="57"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="14" y1="57" x2="2" y2="57"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="17" cy="57" r="3"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,8V46a2,2,0,0,1-2,2H56v2H46l-1-2H19l-1,2H8V48H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H8V4H18l1,2H45l1-2H56V6h4A2,2,0,0,1,62,8Z"/></g></svg>
	);
  