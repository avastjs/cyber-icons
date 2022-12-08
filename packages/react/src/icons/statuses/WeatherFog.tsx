
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
		<svg onClick={onClick} className={className} height={size} width={size} id="weather-fog" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M48,44c0,3.87-3.13,7-7,7H9c-3.87,0-7-3.13-7-7s3.13-7,7-7h.09c.47-2.84,2.94-5,5.91-5,.71,0,1.38,.12,2.01,.35,2.15-3.23,5.82-5.35,9.99-5.35,3.1,0,5.92,1.17,8.05,3.11,2.03,1.84,3.44,4.37,3.83,7.22,.66-.22,1.38-.33,2.12-.33,.59,0,1.17,.07,1.72,.22,1.52,.38,2.83,1.25,3.77,2.43,.95,1.2,1.51,2.71,1.51,4.35Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M9,47c-1.65,0-3-1.35-3-3"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M48,44c0,3.87-3.13,7-7,7H9c-3.87,0-7-3.13-7-7s3.13-7,7-7h.09c.47-2.84,2.94-5,5.91-5,.71,0,1.38,.12,2.01,.35,2.15-3.23,5.82-5.35,9.99-5.35,3.1,0,5.92,1.17,8.05,3.11,2.03,1.84,3.44,4.37,3.83,7.22,.66-.22,1.38-.33,2.12-.33,.59,0,1.17,.07,1.72,.22,1.52,.38,2.83,1.25,3.77,2.43,.95,1.2,1.51,2.71,1.51,4.35Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,14.2c-1.87,0-1.87-1.2-3.75-1.2s-1.87,1.2-3.75,1.2-1.87-1.2-3.75-1.2-1.87,1.2-3.75,1.2-1.87-1.2-3.75-1.2-1.87,1.2-3.75,1.2-1.88-1.2-3.75-1.2-1.88,1.2-3.75,1.2"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M54,18.2c-1.87,0-1.87-1.2-3.75-1.2s-1.87,1.2-3.75,1.2-1.87-1.2-3.75-1.2-1.87,1.2-3.75,1.2-1.87-1.2-3.75-1.2-1.87,1.2-3.75,1.2-1.88-1.2-3.75-1.2-1.88,1.2-3.75,1.2"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,22.2c-1.87,0-1.87-1.2-3.75-1.2s-1.87,1.2-3.75,1.2-1.87-1.2-3.75-1.2-1.87,1.2-3.75,1.2-1.87-1.2-3.75-1.2-1.87,1.2-3.75,1.2-1.88-1.2-3.75-1.2-1.88,1.2-3.75,1.2"/><g><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M54,58c-1.87,0-1.87-1.2-3.75-1.2s-1.87,1.2-3.75,1.2-1.87-1.2-3.75-1.2-1.87,1.2-3.75,1.2-1.87-1.2-3.75-1.2-1.87,1.2-3.75,1.2-1.88-1.2-3.75-1.2-1.88,1.2-3.75,1.2"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,62c-1.87,0-1.87-1.2-3.75-1.2s-1.87,1.2-3.75,1.2-1.87-1.2-3.75-1.2-1.87,1.2-3.75,1.2-1.87-1.2-3.75-1.2-1.87,1.2-3.75,1.2-1.88-1.2-3.75-1.2-1.88,1.2-3.75,1.2"/></g></svg>
	);
  