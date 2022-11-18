
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="address-book-new"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="59 10 59 54 51 62 10 62 10 52 15 52 15 46 10 46 10 35 15 35 15 29 10 29 10 18 15 18 15 12 10 12 10 2 51 2 59 10"/><polygon style={{fill:`${primary}`}} points="12 60 12 54 17 54 17 44 12 44 12 37 17 37 17 27 12 27 12 20 17 20 17 10 12 10 12 4 50.17 4 57 10.83 57 53.17 50.17 60 12 60"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="5" y="12" width="10" height="6"/><rect style={{fill:`${secondary}`}} x="7" y="14" width="6" height="2"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="5" y="46" width="10" height="6"/><rect style={{fill:`${secondary}`}} x="7" y="48" width="6" height="2"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="5" y="29" width="10" height="6"/><rect style={{fill:`${secondary}`}} x="7" y="31" width="6" height="2"/><circle style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="37" cy="32" r="9"/><circle style={{fill:`${secondary}`}} cx="37" cy="32" r="7"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="37" y1="27" x2="37" y2="37"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="42" y1="32" x2="32" y2="32"/></g></svg>
	);
  