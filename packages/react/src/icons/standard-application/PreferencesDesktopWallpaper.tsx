
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="preferences-desktop-wallpaper"><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="49 48 47 51 17 51 15 48 17 45 47 45 49 48"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="18.07 49 17.4 48 18.07 47 45.93 47 46.6 48 45.93 49 18.07 49"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="44 10 42 14 22 14 20 10 44 10"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="44 10 42 14 22 14 20 10 44 10"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 12 62 41.66 55.66 48 49 48 47 45 17 45 15 48 8.34 48 2 41.66 2 12 21 12 22 14 42 14 43 12 62 12"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="50.07 46 48.07 43 15.93 43 13.93 46 9.17 46 4 40.83 4 14 19.76 14 20.76 16 43.24 16 44.24 14 60 14 60 40.83 54.83 46 50.07 46"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 45.66 8.34 52 13 52 15 55 49 55 51 52 55.66 52 62 45.66"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="3" y1="9" x2="18" y2="9"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="61" y1="9" x2="46" y2="9"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 20 52 40 37 25 25.88 36.12 20.88 31.12 12 40 12 20 52 20"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="52 40 12 40 20.88 31.12 25.88 36.12 37 25 52 40"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="26" cy="28" r="2"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 40 12 40 20.88 31.12 25.88 36.12 37 25 52 40"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="26" cy="28" r="2"/></g></svg>
	);
  