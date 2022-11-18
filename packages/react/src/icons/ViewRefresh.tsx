
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="view-refresh"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="47.66 61 10.34 61 2 52.66 2 11.34 10.34 3 47.66 3 56 11.34 56 18 62 18 52 32 42 18 48 18 48 14.66 44.34 11 13.66 11 10 14.66 10 49.34 13.66 53 44.34 53 48 49.34 48 40 56 40 56 52.66 47.66 61"/><polygon style={{fill:`${secondary}`}} points="11.17 59 4 51.83 4 12.17 11.17 5 46.83 5 54 12.17 54 20 58.11 20 52 28.56 45.89 20 50 20 50 13.83 45.17 9 12.83 9 8 13.83 8 50.17 12.83 55 45.17 55 50 50.17 50 42 54 42 54 51.83 46.83 59 11.17 59"/></g></svg>
	);
  