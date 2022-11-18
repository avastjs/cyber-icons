
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="go-jump"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 12 62 62 12 62 2 52 2 2 52 2 62 12"/><polygon style={{fill:`${primary}`}} points="12.83 60 4 51.17 4 4 51.17 4 60 12.83 60 60 12.83 60"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="47 38 38 25 56 25 47 38"/><polygon style={{fill:`${secondary}`}} points="52.18 27 47 34.49 41.82 27 52.18 27"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="24 18 30 12 41 12 47 18 47 25"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="42" y="42" width="10" height="10"/><rect style={{fill:`${secondary}`}} x="44" y="44" width="6" height="6" transform="translate(94) rotate(90)"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="12" y="42" width="10" height="10" transform="translate(34 94) rotate(-180)"/><rect style={{fill:`${secondary}`}} x="14" y="44" width="6" height="6" transform="translate(64 30) rotate(90)"/></g></svg>
	);
  