
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="system-log-out"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="46 43 46 36 24 36 20 28 46 28 46 21 62 32 46 43"/><polygon style={{fill:`${secondary}`}} points="48 34 25.24 34 23.24 30 48 30 48 24.8 58.47 32 48 39.2 48 34"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="2 52.66 2 11.34 10.34 3 33.66 3 42 11.34 42 24 34 24 34 14.66 30.34 11 13.66 11 10 14.66 10 49.34 13.66 53 30.34 53 34 49.34 34 40 42 40 42 52.66 33.66 61 10.34 61 2 52.66"/><polygon style={{fill:`${primary}`}} points="11.17 59 4 51.83 4 12.17 11.17 5 32.83 5 40 12.17 40 22 36 22 36 13.83 31.17 9 12.83 9 8 13.83 8 50.17 12.83 55 31.17 55 36 50.17 36 42 40 42 40 51.83 32.83 59 11.17 59"/></g></svg>
	);
  