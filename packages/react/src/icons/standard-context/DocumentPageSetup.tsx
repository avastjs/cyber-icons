
  import React from 'react';

  import { colors, IconProps } from '../../util';

  export default ({
    theme = 'default',
		size = '24px',
    primary,
    secondary,
    border,
    stroke = "1px",
    className = "",
    onClick,
	}: IconProps) => (
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="document-page-setup"><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="19.83 60 13 53.17 13 4 38.17 4 51 16.83 51 60 19.83 60"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M31.7,42l-.49-2.93L30,38.71a6.84,6.84,0,0,1-2.8-1.62l-.91-.87-2.8,1-.31-.53,2.27-1.87-.27-1.2a7.35,7.35,0,0,1,0-3.32l.27-1.2-2.27-1.87.31-.53,2.8,1,.91-.87A6.84,6.84,0,0,1,30,25.29l1.2-.36L31.7,22h.6l.49,2.93,1.2.36a6.84,6.84,0,0,1,2.8,1.62l.91.87,2.8-1,.31.53-2.27,1.87.27,1.2a7.35,7.35,0,0,1,0,3.32l-.27,1.2,2.27,1.87-.31.53-2.8-1-.91.87A6.84,6.84,0,0,1,34,38.71l-1.2.36L32.3,42Z"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="32" cy="32" r="3"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="53 62 19 62 11 54 11 2 39 2 53 16 53 62"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="53 16 39 16 39 2 53 16"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="41 14 41 6.83 48.17 14 41 14"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M40.76,34.1l2.63,2.17-2,3.46-3.21-1.2a8.9,8.9,0,0,1-3.62,2.1L34,44H30l-.56-3.37a8.9,8.9,0,0,1-3.62-2.1l-3.21,1.2-2-3.46,2.63-2.17a9.31,9.31,0,0,1,0-4.2l-2.63-2.17,2-3.46,3.21,1.2a8.9,8.9,0,0,1,3.62-2.1L30,20h4l.56,3.37a8.9,8.9,0,0,1,3.62,2.1l3.21-1.2,2,3.46L40.76,29.9a9.31,9.31,0,0,1,0,4.2Z"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="32" cy="32" r="5"/></g></svg>
	);
  