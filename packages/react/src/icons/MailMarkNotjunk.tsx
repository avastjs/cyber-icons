
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="mail-mark-notjunk"><path style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,10V45H57a9,9,0,0,0-18,0H2V10L32,31Z"/><path style={{fill:`${primary}`}} d="M58.82,43a11,11,0,0,0-21.64,0H4V13.84l28,19.6,28-19.6V43Z"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 10 32 31 2 10 62 10"/><polygon style={{fill:`${secondary}`}} points="8.35 12 55.66 12 32 28.56 8.35 12"/><circle style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="48" cy="45" r="9"/><circle style={{fill:`${secondary}`}} cx="48" cy="45" r="7"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="51.93 42.32 46.57 47.68 44.07 45.18"/></g></svg>
	);
  