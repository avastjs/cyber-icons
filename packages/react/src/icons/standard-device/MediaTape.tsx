
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="media-tape"><path style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} d="M62,15V49a2,2,0,0,1-2,2H39l-1-2H26l-1,2H4a2,2,0,0,1-2-2V15a2,2,0,0,1,2-2H60A2,2,0,0,1,62,15Z"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="40.24 49 39.24 47 24.76 47 23.76 49 4 49 4 15 60 15 60 49 40.24 49"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="44 19 20 19 17 13 47 13 44 19"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="44" cy="35.5" r="10.5"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="17" cy="35.5" r="7.5"/><polygon style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} points="44 19 20 19 17 13 47 13 44 19"/><circle style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} cx="44" cy="35.5" r="10.5"/><path style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} d="M44,31a4.51,4.51,0,0,1,4.5,4.5"/><circle style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} cx="17" cy="35.5" r="7.5"/><path style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} d="M17,37a1.5,1.5,0,0,1-1.5-1.5"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth: `${stroke}`}} x1="56" y1="19" x2="56" y2="19"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth: `${stroke}`}} x1="8" y1="19" x2="8" y2="19"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth: `${stroke}`}} x1="56" y1="46" x2="56" y2="46"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth: `${stroke}`}} x1="8" y1="46" x2="8" y2="46"/></g></svg>
	);
  