
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="mail-send"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 7 62 42 53.33 42 49 39 49 42 2 42 2 7 32 28 62 7"/><polygon style={{fill:`${primary}`}} points="4 40 4 10.84 32 30.44 60 10.84 60 40 4 40"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 7 32 28 2 7 62 7"/><polygon style={{fill:`${secondary}`}} points="8.35 9 55.66 9 32 25.56 8.35 9"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 48 49 57 49 39 53.33 42 62 48"/><polygon style={{fill:`${secondary}`}} points="51 53.18 58.49 48 51 42.82 51 53.18"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="49 48 42 48 36 42 36 31"/></g></svg>
	);
  