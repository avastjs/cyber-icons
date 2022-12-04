
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="audio-card"><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="18 8 18 62 12 62 12 8 2 8 2 2 12 2 18 8"/><rect style={{fill:`${primary ? primary : colors[theme].primary}`}} x="22" y="46" width="6" height="4"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth: `${stroke}`}} x1="42" y1="34" x2="52" y2="34"/></g></svg>
	);
  