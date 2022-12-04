
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="computer"><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M46,16V38H2V16a2,2,0,0,1,2-2H44A2,2,0,0,1,46,16Z"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="4" y="16" width="40" height="20"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M46,38v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V38Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M37,54h0a2,2,0,0,1-2,2H13a2,2,0,0,1-2-2h0a2,2,0,0,1,2-2h3.61a4,4,0,0,0,3.95-3.34L21.33,44h5.34l.77,4.66A4,4,0,0,0,31.39,52H35A2,2,0,0,1,37,54Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M46,38v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V38Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M37,54h0a2,2,0,0,1-2,2H13a2,2,0,0,1-2-2h0a2,2,0,0,1,2-2h3.61a4,4,0,0,0,3.95-3.34L21.33,44h5.34l.77,4.66A4,4,0,0,0,31.39,52H35A2,2,0,0,1,37,54Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,8V56H42V44h2a2,2,0,0,0,2-2V16a2,2,0,0,0-2-2H42V8Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M44,54V46a4,4,0,0,0,4-4V16a4,4,0,0,0-4-4V10H60V54Z"/><circle style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} cx="52" cy="50" r="2"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="52" cy="50" r="2"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="62 47 58 45 58 19 62 17 62 47"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="62 47 58 45 58 19 62 17 62 47"/></g></svg>
	);
  