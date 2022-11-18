
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="format-text-underline"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 12 57 62 17 62 7 52 7 2 47 2 57 12"/><polygon style={{fill:`${primary}`}} points="17.83 60 9 51.17 9 4 46.17 4 55 12.83 55 60 17.83 60"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="45 12 45 38 41 42 23 42 19 38 19 12 25 12 25 36 39 36 39 12 45 12"/><polygon style={{fill:`${secondary}`}} points="23.83 40 21 37.17 21 14 23 14 23 38 41 38 41 14 43 14 43 37.17 40.17 40 23.83 40"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="17" y="46" width="30" height="6"/><rect style={{fill:`${secondary}`}} x="31" y="36" width="2" height="26" transform="translate(81 17) rotate(90)"/></g></svg>
	);
  