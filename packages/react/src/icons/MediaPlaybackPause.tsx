
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="media-playback-pause"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 12 62 62 12 62 2 52 2 2 52 2 62 12"/><polygon style={{fill:`${primary}`}} points="12.83 60 4 51.17 4 4 51.17 4 60 12.83 60 60 12.83 60"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="3" y="27" width="40" height="10" transform="translate(-9 55) rotate(-90)"/><rect style={{fill:`${secondary}`}} x="5" y="29" width="36" height="6" transform="translate(55 9) rotate(90)"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="21" y="27" width="40" height="10" transform="translate(9 73) rotate(-90)"/><rect style={{fill:`${secondary}`}} x="23" y="29" width="36" height="6" transform="translate(73 -9) rotate(90)"/></g></svg>
	);
  