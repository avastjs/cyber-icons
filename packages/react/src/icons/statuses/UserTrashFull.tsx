
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
		<svg onClick={onClick} className={className} height={size} width={size} id="user-trash-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="56 20 50 62 41 62 39 59 25 59 23 62 14 62 8 20 56 20"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="42.07 60 40.07 57 23.93 57 21.93 60 15.73 60 10.31 22 53.69 22 48.27 60 42.07 60"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 14 62 20 36.48 20 36.27 19.86 35.87 20 2 20 2 14 62 14"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="36.48 20 35.87 20 36.27 19.86 36.48 20"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="31" y="-11" width="2" height="56" transform="translate(49 -15) rotate(90)"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="30" y="27" width="4" height="26"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="40" y="27" width="4" height="26"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="20" y="27" width="4" height="26" transform="translate(44 80) rotate(-180)"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="30" y="27" width="4" height="26"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="40" y="27" width="4" height="26"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x="20" y="27" width="4" height="26" transform="translate(44 80) rotate(-180)"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="52.06 10.95 50.03 14 30.62 14 35.66 6.43 38.61 2 52.06 10.95"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="22.57 14 13.31 14 13.92 8.96 21.09 9.83 22.57 14"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M35.66,6.43l-5.04,7.57h-8.05l-1.48-4.17-.55-1.54,2.97-1.06,2.49,3.77,2.17-5.42,.51-.18c2.44-.87,5.03-.4,6.98,1.03Z"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="52.06 10.95 50.03 14 30.62 14 35.66 6.43 38.61 2 52.06 10.95"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="22.57 14 13.31 14 13.92 8.96 21.09 9.83 22.57 14"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M35.66,6.43l-5.04,7.57h-8.05l-1.48-4.17-.55-1.54,2.97-1.06,2.49,3.77,2.17-5.42,.51-.18c2.44-.87,5.03-.4,6.98,1.03Z"/></svg>
	);
  