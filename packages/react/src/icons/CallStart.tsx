
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="call-start"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 19.57 10.48 11.09 20.56 21.16 14.73 30.89 33.11 49.27 42.84 43.44 52.91 53.52 44.43 62 33.11 62 2 30.89 2 19.57"/><polygon style={{fill:`${primary}`}} points="33.94 60 4 30.06 4 20.4 10.48 13.92 18.04 21.48 12.21 31.2 32.8 51.79 42.52 45.96 50.08 53.52 43.6 60 33.94 60"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="35 34 35 2 62 18 35 34"/><polygon style={{fill:`${secondary}`}} points="37 5.46 58 18 37 30.54 37 5.46"/></g></svg>
	);
  