
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="view-restore"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="39.37 17.56 54.93 14.73 42.2 2 39.37 17.56"/><polygon style={{fill:`${secondary}`}} points="43.49 6.11 41.86 15.07 50.82 13.44 43.49 6.11"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="48.56 8.36 53.52 3.41 62 3.41"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="24.63 17.56 9.07 14.73 21.8 2 24.63 17.56"/><polygon style={{fill:`${secondary}`}} points="20.51 6.11 22.14 15.07 13.18 13.44 20.51 6.11"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="15.44 8.36 10.48 3.41 2 3.41"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="39.37 46.44 54.93 49.27 42.2 62 39.37 46.44"/><polygon style={{fill:`${secondary}`}} points="43.49 57.89 41.86 48.93 50.82 50.56 43.49 57.89"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="48.56 55.64 53.52 60.59 62 60.59"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="24.63 46.44 9.07 49.27 21.8 62 24.63 46.44"/><polygon style={{fill:`${secondary}`}} points="20.51 57.89 22.14 48.93 13.18 50.56 20.51 57.89"/><polyline style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="15.44 55.64 10.48 60.59 2 60.59"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="20" y="20" width="24" height="24"/><rect style={{fill:`${primary}`}} x="22" y="22" width="20" height="20" transform="translate(64 0) rotate(90)"/></g></svg>
	);
  