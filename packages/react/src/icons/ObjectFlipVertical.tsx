
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="object-flip-vertical"><line className="cls-1" x1="62" y1="32" x2="60" y2="32"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="56.27" y1="32" x2="5.87" y2="32"/><line className="cls-1" x1="4" y1="32" x2="2" y2="32"/><polygon className="cls-1" points="46 28 12 28 12 8 18 2 52 22 46 28"/><polygon style={{fill:`${primary}`}} points="14 8.83 18.32 4.51 48.76 22.41 45.17 26 14 26 14 8.83"/><polygon className="cls-1" points="46 36 12 36 12 56 18 62 52 42 46 36"/><polygon style={{fill:`${secondary}`}} points="14 38 45.17 38 48.76 41.59 18.32 59.49 14 55.17 14 38"/></g></svg>
	);
  