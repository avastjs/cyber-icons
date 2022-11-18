
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="mail-reply-all"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 10 62 45 57 45 44 36 44 45 31 36 31 45 2 45 2 10 32 31 62 10"/><polygon style={{fill:`${primary}`}} points="4 43 4 13.84 32 33.44 60 13.84 60 43 4 43"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 10 32 31 2 10 62 10"/><polygon style={{fill:`${secondary}`}} points="8.35 12 55.66 12 32 28.56 8.35 12"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="57 45 44 54 44 36 57 45"/><polygon style={{fill:`${secondary}`}} points="46 50.18 53.49 45 46 39.82 46 50.18"/><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="44 45 31 54 31 36 44 45"/><polygon style={{fill:`${secondary}`}} points="33 50.18 40.49 45 33 39.82 33 50.18"/></g></svg>
	);
  