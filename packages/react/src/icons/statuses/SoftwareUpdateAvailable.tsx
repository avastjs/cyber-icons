
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
		<svg onClick={onClick} className={className} height={size} width={size} id="software-update-available" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M48,44v4c0,1.1-.9,2-2,2H6c-1.1,0-2-.9-2-2v-4H48Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M48,44v4c0,1.1-.9,2-2,2H6c-1.1,0-2-.9-2-2v-4H48Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M39,60h0c0,1.1-.9,2-2,2H15c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M39,60h0c0,1.1-.9,2-2,2H15c-1.1,0-2-.9-2-2h0c0-1.1,.9-2,2-2h3.61c1.96,0,3.63-1.41,3.95-3.34l.77-4.66h5.34l.77,4.66c.32,1.93,1.99,3.34,3.95,3.34h3.61c1.1,0,2,.9,2,2Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M48,38v6H4V22c0-1.1,.9-2,2-2h14.75l5.25,7,5.25-7h6.97l-1,1.73,2.63,2.17c-.15,.67-.24,1.38-.24,2.1s.09,1.43,.24,2.1l-2.63,2.17,2,3.46,3.21-1.2c1.01,.97,2.25,1.69,3.62,2.1l.56,3.37h1.39Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M48,38v6H4V22c0-1.1,.9-2,2-2h14.75l5.25,7,5.25-7h6.97l-1,1.73,2.63,2.17c-.15,.67-.24,1.38-.24,2.1s.09,1.43,.24,2.1l-2.63,2.17,2,3.46,3.21-1.2c1.01,.97,2.25,1.69,3.62,2.1l.56,3.37h1.39Z"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="35 15 26 27 17 15 22 15 22 2 30 2 30 15 35 15"/><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="21 17 24 17 24 4 28 4 28 17 31 17 26 23.67 21 17"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M57.37,28.1l2.63,2.17-2,3.46-3.21-1.2c-1.01,.97-2.25,1.69-3.62,2.1l-.56,3.37h-4l-.56-3.37c-1.37-.41-2.61-1.13-3.62-2.1l-3.21,1.2-2-3.46,2.63-2.17c-.15-.67-.24-1.38-.24-2.1s.09-1.43,.24-2.1l-2.63-2.17,1-1.73,1-1.73,3.21,1.2c1.01-.97,2.25-1.69,3.62-2.1l.56-3.37h4l.56,3.37c1.37,.41,2.61,1.13,3.62,2.1l3.21-1.2,2,3.46-2.63,2.17c.15,.67,.24,1.38,.24,2.1s-.09,1.43-.24,2.1Z"/><circle style={{fill:`${primary ? primary : colors[theme].primary}`}} cx="48.61" cy="26" r="5"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M57.37,28.1l2.63,2.17-2,3.46-3.21-1.2c-1.01,.97-2.25,1.69-3.62,2.1l-.56,3.37h-4l-.56-3.37c-1.37-.41-2.61-1.13-3.62-2.1l-3.21,1.2-2-3.46,2.63-2.17c-.15-.67-.24-1.38-.24-2.1s.09-1.43,.24-2.1l-2.63-2.17,1-1.73,1-1.73,3.21,1.2c1.01-.97,2.25-1.69,3.62-2.1l.56-3.37h4l.56,3.37c1.37,.41,2.61,1.13,3.62,2.1l3.21-1.2,2,3.46-2.63,2.17c.15,.67,.24,1.38,.24,2.1s-.09,1.43-.24,2.1Z"/><circle style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} cx="48.61" cy="26" r="5"/></svg>
	);
  