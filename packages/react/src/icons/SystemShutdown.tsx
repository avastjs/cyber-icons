
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="system-shutdown"><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="28" y="2" width="8" height="33"/><rect style={{fill:`${secondary}`}} x="17.5" y="16.5" width="29" height="4" transform="translate(50.5 -13.5) rotate(90)"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52.66 62 11.34 62 3 53.66 3 16.34 11.34 8 24 8 24 16 14.66 16 11 19.66 11 50.34 14.66 54 49.34 54 53 50.34 53 19.66 49.34 16 40 16 40 8 52.66 8 61 16.34 61 53.66 52.66 62"/><polygon style={{fill:`${primary}`}} points="12.17 60 5 52.83 5 17.17 12.17 10 22 10 22 14 13.83 14 9 18.83 9 51.17 13.83 56 50.17 56 55 51.17 55 18.83 50.17 14 42 14 42 10 51.83 10 59 17.17 59 52.83 51.83 60 12.17 60"/></g></svg>
	);
  