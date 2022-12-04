
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="face-kiss"><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="60 26.36 60 37.64 58.12 38.58 58.12 50.93 42 59.08 42 56.3 32 62 22 56.3 22 59.08 5.88 50.93 5.88 38.58 4 37.64 4 26.36 5.88 25.42 5.88 13.07 22 4.92 22 7.7 32 2 42 7.7 42 4.92 58.12 13.07 58.12 25.42 60 26.36"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="18 49.42 18 52.58 9.88 48.47 9.88 36.11 8 35.17 8 28.83 9.88 27.89 9.88 15.53 18 11.42 18 14.58 32 6.6 46 14.58 46 11.42 54.12 15.53 54.12 27.89 56 28.83 56 35.17 54.12 36.11 54.12 48.47 46 52.58 46 49.42 32 57.4 18 49.42"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="60 26.36 60 37.64 58.12 38.58 58.12 50.93 42 59.08 42 56.3 32 62 22 56.3 22 59.08 5.88 50.93 5.88 38.58 4 37.64 4 26.36 5.88 25.42 5.88 13.07 22 4.92 22 7.7 32 2 42 7.7 42 4.92 58.12 13.07 58.12 25.42 60 26.36"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="18 49.42 18 52.58 9.88 48.47 9.88 36.11 8 35.17 8 28.83 9.88 27.89 9.88 15.53 18 11.42 18 14.58 32 6.6 46 14.58 46 11.42 54.12 15.53 54.12 27.89 56 28.83 56 35.17 54.12 36.11 54.12 48.47 46 52.58 46 49.42 32 57.4 18 49.42"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M36,30h0A10,10,0,0,1,46,20h0"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M28,30h0A10,10,0,0,0,18,20h0"/><path style={{fill:`${border ? border : colors[theme].border}`}} d="M40.85,41c-3.85,3-5,6-8.85,6s-5-3-8.85-6h4.61A9.47,9.47,0,0,1,32,42a9.47,9.47,0,0,1,4.24-1Z"/><path style={{fill:`${border ? border : colors[theme].border}`}} d="M41,39.75H35.82a8.58,8.58,0,0,1-3.82-.9,8.58,8.58,0,0,1-3.82.9H23a13.11,13.11,0,0,1,4.64-4.32c.77-.37,3.48,1.62,4.36,1.62s3.59-2,4.36-1.62A13.11,13.11,0,0,1,41,39.75Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M44.63,34.63l2.25,2.25a1.58,1.58,0,0,1,0,2.24l-5.62,5.62-5.62-5.62a1.58,1.58,0,0,1,0-2.24l2.25-2.25a1.58,1.58,0,0,1,2.24,0l1.13,1.12,1.12-1.12A1.59,1.59,0,0,1,44.63,34.63Z"/></g></svg>
	);
  