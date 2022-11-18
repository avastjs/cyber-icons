
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
		<svg className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="edit-clear"><polygon style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="54 38 10 38 18 30 46 30 54 38"/><polygon style={{fill:`${primary}`}} points="14.83 36 18.83 32 45.17 32 49.17 36 14.83 36"/><rect style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="12" y="38" width="40" height="24"/><rect style={{fill:`${secondary}`}} x="22" y="32" width="20" height="36" transform="translate(82 18) rotate(90)"/><path style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M36,30H28V6a4,4,0,0,1,4-4h0a4,4,0,0,1,4,4Z"/><path style={{fill:`${primary}`}} d="M30,28V6a2,2,0,0,1,4,0V28Z"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="32" y1="46" x2="32" y2="62"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="42" y1="46" x2="42" y2="62"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="37" y1="50" x2="37" y2="62"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="47" y1="50" x2="47" y2="62"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="22" y1="46" x2="22" y2="62"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="27" y1="50" x2="27" y2="62"/><line style={{fill:`none`,stroke:`${border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="17" y1="50" x2="17" y2="62"/></g></svg>
	);
  