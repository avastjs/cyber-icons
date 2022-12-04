
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="camera-photo"><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,21.25v29A3.76,3.76,0,0,1,58.25,54H41l-1-2H24l-1,2H5.75A3.76,3.76,0,0,1,2,50.25v-29A3.76,3.76,0,0,1,5.75,17.5H18.88L22.62,10H41.38l3.74,7.5H58.25A3.76,3.76,0,0,1,62,21.25Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M42.24,52l-1-2H22.76l-1,2h-16A1.77,1.77,0,0,1,4,50.25v-29A1.77,1.77,0,0,1,5.75,19.5H20.12L23.86,12H40.14l3.74,7.5H58.25A1.77,1.77,0,0,1,60,21.25v29A1.77,1.77,0,0,1,58.25,52Z"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="56.38 17.5 48.75 17.5 50.75 11.88 56.38 11.88 56.38 17.5"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="7.63 17.5 15.25 17.5 13.25 11.88 7.63 11.88 7.63 17.5"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="56.38 17.5 48.75 17.5 50.75 11.88 56.38 11.88 56.38 17.5"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="7.63 17.5 15.25 17.5 13.25 11.88 7.63 11.88 7.63 17.5"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="32" cy="33" r="15"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="32" cy="33" r="5"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="54" y="25.75" width="8" height="20"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="2" y="25.75" width="8" height="20" transform="translate(12 71.5) rotate(-180)"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="33" r="15"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M32,22A11,11,0,0,1,43,33"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="33" r="5"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="54" y="25.75" width="8" height="20"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="2" y="25.75" width="8" height="20" transform="translate(12 71.5) rotate(-180)"/></g></svg>
	);
  