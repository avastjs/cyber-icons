
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
		<svg onClick={onClick} className={className} height={size} width={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><g id="face-raspberry"><polygon style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} points="60 26.36 60 37.64 58.12 38.58 58.12 50.93 42 59.08 42 56.3 32 62 22 56.3 22 59.08 5.88 50.93 5.88 38.58 4 37.64 4 26.36 5.88 25.42 5.88 13.07 22 4.92 22 7.7 32 2 42 7.7 42 4.92 58.12 13.07 58.12 25.42 60 26.36"/><polygon style={{fill:`${primary ? primary : colors[theme].primary}`}} points="18 49.42 18 52.58 9.88 48.47 9.88 36.11 8 35.17 8 28.83 9.88 27.89 9.88 15.53 18 11.42 18 14.58 32 6.6 46 14.58 46 11.42 54.12 15.53 54.12 27.89 56 28.83 56 35.17 54.12 36.11 54.12 48.47 46 52.58 46 49.42 32 57.4 18 49.42"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="60 26.36 60 37.64 58.12 38.58 58.12 50.93 42 59.08 42 56.3 32 62 22 56.3 22 59.08 5.88 50.93 5.88 38.58 4 37.64 4 26.36 5.88 25.42 5.88 13.07 22 4.92 22 7.7 32 2 42 7.7 42 4.92 58.12 13.07 58.12 25.42 60 26.36"/><polygon style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="18 49.42 18 52.58 9.88 48.47 9.88 36.11 8 35.17 8 28.83 9.88 27.89 9.88 15.53 18 11.42 18 14.58 32 6.6 46 14.58 46 11.42 54.12 15.53 54.12 27.89 56 28.83 56 35.17 54.12 36.11 54.12 48.47 46 52.58 46 49.42 32 57.4 18 49.42"/><path style={{fill:`${border ? border : colors[theme].border}`}} d="M42,20h4a0,0,0,0,1,0,0v4a6,6,0,0,1-6,6H36a0,0,0,0,1,0,0V26A6,6,0,0,1,42,20Z"/><path style={{fill:`${border ? border : colors[theme].border}`}} d="M18,20h4a6,6,0,0,1,6,6v4a0,0,0,0,1,0,0H24a6,6,0,0,1-6-6V20A0,0,0,0,1,18,20Z" transform="translate(46 50) rotate(-180)"/><path style={{fill:`${border ? border : colors[theme].border}`}} d="M19,32a12,12,0,0,0,8,11.3V35.82A21.18,21.18,0,0,1,19,32Z"/><path style={{fill:`${border ? border : colors[theme].border}`}} d="M45,32a21.18,21.18,0,0,1-8,3.82V43.3A12,12,0,0,0,45,32Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M31,44a11.8,11.8,0,0,1-4-.7V46a5,5,0,0,0,10,0V43.3a11.8,11.8,0,0,1-4,.7Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M27,35.82V43.3a11.8,11.8,0,0,0,4,.7h2a11.8,11.8,0,0,0,4-.7V35.82A21.39,21.39,0,0,1,27,35.82Z"/></g></svg>
	);
  