
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="multimedia-player"><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="13.6 9 28.55 9 28.55 15.9 15.9 15.9 15.9 28.55 9 28.55 9 13.6 13.6 9"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="13.6 55 28.55 55 28.55 48.1 15.9 48.1 15.9 35.45 9 35.45 9 50.4 13.6 55"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="50.4 9 35.45 9 35.45 15.9 48.1 15.9 48.1 28.55 55 28.55 55 13.6 50.4 9"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="50.4 55 35.45 55 35.45 48.1 48.1 48.1 48.1 35.45 55 35.45 55 50.4 50.4 55"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="41.2 32 25.1 22.7 25.1 41.3 41.2 32"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="13.6 9 28.55 9 28.55 15.9 15.9 15.9 15.9 28.55 9 28.55 9 13.6 13.6 9"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="13.6 55 28.55 55 28.55 48.1 15.9 48.1 15.9 35.45 9 35.45 9 50.4 13.6 55"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="50.4 9 35.45 9 35.45 15.9 48.1 15.9 48.1 28.55 55 28.55 55 13.6 50.4 9"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="50.4 55 35.45 55 35.45 48.1 48.1 48.1 48.1 35.45 55 35.45 55 50.4 50.4 55"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="41.2 32 25.1 22.7 25.1 41.3 41.2 32"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 12 2 2 12 2"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 12 62 2 52 2"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 52 2 62 12 62"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 52 62 62 52 62"/></g></svg>
	);
  