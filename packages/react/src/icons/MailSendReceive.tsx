
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="mail-send-receive"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 9 62 45 50.92 45 53 42 35 42 37.08 45 2 45 2 9 32 30 62 9"/><polygon style={{fill:`${primary}`}} points="4 43 4 12.84 32 32.44 60 12.84 60 43 4 43"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 9 32 30 2 9 62 9"/><polygon style={{fill:`${secondary}`}} points="8.35 11 55.66 11 32 27.56 8.35 11"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="53 42 50.92 45 50 46.33 44 55 37.08 45 35 42 53 42"/><polygon style={{fill:`${secondary}`}} points="38.82 44 44 51.49 49.18 44 38.82 44"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="44 42 44 35 50 29"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="20 29 29 42 11 42 14 37.67 20 29"/><polygon style={{fill:`${secondary}`}} points="25.18 40 20 32.51 14.82 40 25.18 40"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="20 42 20 49 14 55"/></g></svg>
	);
  