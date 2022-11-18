
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="zoom-in"><circle style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="24" cy="22" r="20"/><circle style={{fill:`${primary}`}} cx="24" cy="22" r="18"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="60 53.93 58.59 62 41.2 43.62 42.62 36.54 60 53.93"/><polygon style={{fill:`${secondary}`}} points="43.37 42.99 43.84 40.6 57.85 54.61 57.3 57.73 43.37 42.99"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="41.94" y1="39.94" x2="38.14" y2="36.14"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="36 19 36 25 27 25 27 34 21 34 21 25 12 25 12 19 21 19 21 10 27 10 27 19 36 19"/><polygon style={{fill:`${secondary}`}} points="23 32 23 23 14 23 14 21 23 21 23 12 25 12 25 21 34 21 34 23 25 23 25 32 23 32"/></g></svg>
	);
  