
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="edit-select-all"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="30 2 30 22 22 30 2 30 2 10 10 2 30 2"/><polygon style={{fill:`${primary}`}} points="4 28 4 10.83 10.83 4 28 4 28 21.17 21.17 28 4 28"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="34 2 34 22 42 30 62 30 62 10 54 2 34 2"/><polygon style={{fill:`${primary}`}} points="42.83 28 36 21.17 36 4 53.17 4 60 10.83 60 28 42.83 28"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="30 62 30 42 22 34 2 34 2 54 10 62 30 62"/><polygon style={{fill:`${primary}`}} points="10.83 60 4 53.17 4 36 21.17 36 28 42.83 28 60 10.83 60"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 57.76 57.76 62 45.76 50 37.88 57.88 33.88 33.88 57.88 37.88 50 45.76 62 57.76"/><polygon style={{fill:`${secondary}`}} points="45.76 47.17 39.21 53.72 36.31 36.31 53.72 39.21 47.17 45.76 59.17 57.76 57.76 59.17 45.76 47.17"/></g></svg>
	);
  