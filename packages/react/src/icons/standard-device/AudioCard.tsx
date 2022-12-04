
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="audio-card"><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="18 8 18 62 12 62 12 8 2 8 2 2 12 2 18 8"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="22" y="46" width="6" height="4"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} points="18 8 18 62 12 62 12 8 2 8 2 2 12 2 18 8"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="6" y="18" width="6" height="4"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="6" y="26" width="6" height="4"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="6" y="34" width="6" height="4"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="6" y="42" width="6" height="4"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} x="6" y="18" width="6" height="4"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="62 24 62 46 52 46 52 50 46 52 46 46 42 46 42 52 32 54 32 46 18 46 18 18 56 18 62 24"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} points="62 24 62 46 52 46 52 50 46 52 46 46 42 46 42 52 32 54 32 46 18 46 18 18 56 18 62 24"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} x="6" y="26" width="6" height="4"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} x="6" y="34" width="6" height="4"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} x="6" y="42" width="6" height="4"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} x="22" y="46" width="6" height="4"/><rect style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} x="22" y="22" width="16" height="16"/><rect style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} x="22" y="22" width="16" height="16"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} x1="42" y1="26" x2="52" y2="26"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} x1="42" y1="30" x2="52" y2="30"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} x1="42" y1="34" x2="52" y2="34"/></g></svg>
	);
  