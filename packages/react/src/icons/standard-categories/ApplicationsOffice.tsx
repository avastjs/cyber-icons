
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="applications-office"><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="47.07 60 43.07 54 20.93 54 16.93 60 4 60 4 42.07 10 38.07 10 25.93 4 21.93 4 4 26.93 4 30.93 10 53.07 10 57.07 4 60 4 60 21.93 54 25.93 54 38.07 60 42.07 60 60 47.07 60"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="49 18.58 49 45.42 41.84 49 15 45.42 41.84 45.42 41.84 19.47 20.37 22.16 20.37 41.84 15 45.42 15 18.58 41.84 15 49 18.58"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="56 27 56 37 62 41 62 62 46 62 42 56 22 56 18 62 2 62 2 41 8 37 8 27 2 23 2 2 28 2 32 8 52 8 56 2 62 2 62 23 56 27"/></g></svg>
	);
  