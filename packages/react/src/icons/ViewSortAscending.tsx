
  import React from 'react';

  import { IconProps } from '../util';

  export default ({
		size = '24px',
    primary = "#036982",
    secondary = "#f32b6a",
    border = "#04e6e4",
    stroke = "1px",
    className = "",
	}: IconProps) => (
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="view-sort-ascending"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="27 18 20 18 20 62 12 56 12 18 5 18 16 2 27 18"/><polygon style={{fill:`${secondary}`}} points="14 55 14 16 8.8 16 16 5.53 23.2 16 18 16 18 58 14 55"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="37 34 27 34 27 24 37 34"/><polygon style={{fill:`${primary}`}} points="29 32 29 28.83 32.17 32 29 32"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="48 48 27 48 27 38 38 38 48 48"/><polygon style={{fill:`${primary}`}} points="29 46 29 40 37.17 40 43.17 46 29 46"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="59 62 27 62 27 52 49 52 59 62"/><polygon style={{fill:`${primary}`}} points="29 60 29 54 48.17 54 54.17 60 29 60"/></g></svg>
	);
  