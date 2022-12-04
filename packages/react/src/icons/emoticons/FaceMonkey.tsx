
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="face-monkey"><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="60 26.36 60 37.64 58.12 38.58 58.12 50.93 42 59.08 42 56.3 32 62 22 56.3 22 59.08 5.88 50.93 5.88 38.58 4 37.64 4 26.36 5.88 25.42 5.88 13.07 22 4.92 22 7.7 32 2 42 7.7 42 4.92 58.12 13.07 58.12 25.42 60 26.36"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="18 49.42 18 52.58 9.88 48.47 9.88 36.11 8 35.17 8 28.83 9.88 27.89 9.88 15.53 18 11.42 18 14.58 32 6.6 46 14.58 46 11.42 54.12 15.53 54.12 27.89 56 28.83 56 35.17 54.12 36.11 54.12 48.47 46 52.58 46 49.42 32 57.4 18 49.42"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="60 26.36 60 37.64 58.12 38.58 58.12 50.93 42 59.08 42 56.3 32 62 22 56.3 22 59.08 5.88 50.93 5.88 38.58 4 37.64 4 26.36 5.88 25.42 5.88 13.07 22 4.92 22 7.7 32 2 42 7.7 42 4.92 58.12 13.07 58.12 25.42 60 26.36"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="18 49.42 18 52.58 9.88 48.47 9.88 36.11 8 35.17 8 28.83 9.88 27.89 9.88 15.53 18 11.42 18 14.58 32 6.6 46 14.58 46 11.42 54.12 15.53 54.12 27.89 56 28.83 56 35.17 54.12 36.11 54.12 48.47 46 52.58 46 49.42 32 57.4 18 49.42"/><path style={{fill:`${border ? border : colors[theme].border}`}} d="M41.64,36.23l1.18,4.12A6,6,0,0,1,37.05,48H27a6,6,0,0,1-5.77-7.65l1.18-4.12A9,9,0,1,1,32,21.3a9,9,0,1,1,9.64,14.93Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M26,31a3,3,0,1,1,3-3A3,3,0,0,1,26,31Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M38,31a3,3,0,1,0-3-3A3,3,0,0,0,38,31Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M32,38h0a6,6,0,0,1,6,6v0a0,0,0,0,1,0,0H26a0,0,0,0,1,0,0v0A6,6,0,0,1,32,38Z" transform="translate(64 82) rotate(180)"/></g></svg>
	);
  