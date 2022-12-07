
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
		<svg onClick={onClick} className={className} height={size} width={size} id="image-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="52 32 52 52 2 52 2 32 10.93 22.07 20 32 36 16 52 32"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="52 2 52 32 36 16 20 32 10.93 22.07 2 32 2 2 52 2"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="20" cy="15" r="3"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 32 52 52 2 52 2 32 10.93 22.07 20 32 36 16 52 32"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 2 52 32 36 16 20 32 10.93 22.07 2 32 2 2 52 2"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="20" cy="15" r="3"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="62 30 58 30 57 32 46 32 45 30 30 30 30 62 34 62 35 60 46 60 47 62 62 62 62 30"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 30 58 30 57 32 46 32 45 30 30 30 30 62 34 62 35 60 46 60 47 62 62 62 62 30"/><g><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M38,52h.01c1.02,1.37,2.4,2.47,3.99,3.16,1.22,.54,2.58,.84,4,.84,5.52,0,10-4.48,10-10s-4.48-10-10-10-10,4.48-10,10c0,.69,.07,1.36,.2,2"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="38 56 38 52 42 52"/></g></svg>
	);
  