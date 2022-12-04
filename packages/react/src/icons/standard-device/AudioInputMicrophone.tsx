
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="audio-input-microphone"><path style={{strokeLinejoin:`bevel`,strokeWidth: `${stroke}`}} x1="32" y1="35" x2="32" y2="35"/><line style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} x1="32" y1="2" x2="32" y2="9"/><line style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} x1="36" y1="2" x2="36" y2="7"/><line style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} x1="28" y1="2" x2="28" y2="7"/><path style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} d="M46.5,62h-29a4,4,0,0,1,4-4H26a4,4,0,0,0,4-4V46h4v8a4,4,0,0,0,4,4h4.5A4,4,0,0,1,46.5,62Z"/></g></svg>
	);
  