
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="go-bottom"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="53 59 44 46 62 46 53 59"/><polygon style={{fill:`${secondary}`}} points="58.18 48 53 55.49 47.82 48 58.18 48"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="41 12 41 62 12 62 2 52 2 2 31 2 41 12"/><polygon style={{fill:`${primary}`}} points="12.83 60 4 51.17 4 4 30.17 4 39 12.83 39 60 12.83 60"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="53 46 53 39 47 33"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="8" width="10" height="10"/><rect style={{fill:`${secondary}`}} x="10" y="10" width="6" height="6" transform="translate(26) rotate(90)"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="18" x2="36" y2="18"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="24" width="10" height="10"/><rect style={{fill:`${secondary}`}} x="10" y="26" width="6" height="6" transform="translate(42 16) rotate(90)"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="34" x2="36" y2="34"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="8" y="40" width="10" height="10"/><rect style={{fill:`${secondary}`}} x="10" y="42" width="6" height="6" transform="translate(58 32) rotate(90)"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="50" x2="36" y2="50"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="45" y1="62" x2="61" y2="62"/></g></svg>
	);
  