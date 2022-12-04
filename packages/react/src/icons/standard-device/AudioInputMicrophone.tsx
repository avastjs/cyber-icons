
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="audio-input-microphone"><path style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} d="M46,31v5A10,10,0,0,1,36,46H28A10,10,0,0,1,18,36V31"/><path style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} d="M42,8v8H22V8a6,6,0,0,1,6-6h8A6,6,0,0,1,42,8Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M24,14V8a4,4,0,0,1,4-4h8a4,4,0,0,1,4,4v6Z"/><path style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} d="M42,16V36a6,6,0,0,1-6,6H28a6,6,0,0,1-6-6V16Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M28,40a4,4,0,0,1-4-4V18H40V36a4,4,0,0,1-4,4Z"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="48 31 42 31 42 25 46 25 48 31"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="16 31 22 31 22 25 18 25 16 31"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M46.5,62h-29a4,4,0,0,1,4-4H26a4,4,0,0,0,4-4V46h4v8a4,4,0,0,0,4,4h4.5A4,4,0,0,1,46.5,62Z"/><polygon style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} points="48 31 42 31 42 25 46 25 48 31"/><polygon style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} points="16 31 22 31 22 25 18 25 16 31"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="32" cy="28" r="3"/><circle style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} cx="32" cy="28" r="3"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} x1="32" y1="21" x2="32" y2="21"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:`2px`}} x1="32" y1="35" x2="32" y2="35"/><line style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} x1="32" y1="2" x2="32" y2="9"/><line style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} x1="36" y1="2" x2="36" y2="7"/><line style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} x1="28" y1="2" x2="28" y2="7"/><path style={{strokeLinejoin:`bevel`,strokeWidth:`${stroke}`,fill:`none`,stroke:`${border ? border : colors[theme].border}`}} d="M46.5,62h-29a4,4,0,0,1,4-4H26a4,4,0,0,0,4-4V46h4v8a4,4,0,0,0,4,4h4.5A4,4,0,0,1,46.5,62Z"/></g></svg>
	);
  