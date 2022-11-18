
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="edit-delete"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52 62 12 62 8 14 56 14 52 62"/><polygon style={{fill:`${primary}`}} points="13.84 60 10.17 16 53.83 16 50.16 60 13.84 60"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="2" y="8" width="60" height="6"/><rect style={{fill:`${secondary}`}} x="31" y="-17" width="2" height="56" transform="translate(43 -21) rotate(90)"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="22" y="2" width="20" height="6"/><rect style={{fill:`${primary}`}} x="31" y="-3" width="2" height="16" transform="translate(37 -27) rotate(90)"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="29.17" y1="38.83" x2="22.1" y2="45.9"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="41.9" y1="26.1" x2="34.83" y2="33.17"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="41.9" y1="45.9" x2="22.1" y2="26.1"/></g></svg>
	);
  