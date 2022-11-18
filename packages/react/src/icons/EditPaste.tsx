
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="edit-paste"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="40 28 40 56 12 56 4 48 4 14 26 14 40 28"/><polygon style={{fill:`${primary}`}} points="12.83 54 6 47.17 6 16 25.17 16 38 28.83 38 54 12.83 54"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="40 28 26 28 26 14 40 28"/><polygon style={{fill:`${secondary}`}} points="28 26 28 18.83 35.17 26 28 26"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="60 16 60 62 14 62 14 56 40 56 40 28 26 14 14 14 14 8 29 8 29 11 45 11 45 8 52 8 60 16"/><path style={{fill:`${primary}`}} d="M16,60V58H42V27.17L27.83,13H47V10h4.17L58,16.83V60ZM26.83,12H16V10H27v2.17Z"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="45 5 45 11 29 11 29 5 33 5 34 2 40 2 41 5 45 5"/><polygon style={{fill:`${secondary}`}} points="31 9 31 7 34.44 7 35.44 4 38.56 4 39.56 7 43 7 43 9 31 9"/></g></svg>
	);
  