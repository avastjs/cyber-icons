
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="tools-check-spelling"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 12 57 62 17 62 7 52 7 2 47 2 57 12"/><polygon style={{fill:`${primary}`}} points="17.83 60 9 51.17 9 4 46.17 4 55 12.83 55 60 17.83 60"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="47 42 39.32 42 35.32 30 28.68 30 24.68 42 17 42 27 12 37 12 47 42"/><polygon style={{fill:`${secondary}`}} points="40.76 40 36.76 28 27.24 28 23.24 40 19.77 40 28.44 14 35.56 14 44.23 40 40.76 40"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="34.92 26 29.08 26 31.68 17 32.32 17 34.92 26"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="12 48 17 52 22 48 26.99 52 31.99 48 36.99 52 41.99 48 47 52 52 48"/></g></svg>
	);
  