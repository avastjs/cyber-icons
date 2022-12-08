
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
		<svg onClick={onClick} className={className} height={size} width={size} id="weather-severe-alert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M16,55c0,3.87,3.13,7,7,7H55c3.87,0,7-3.13,7-7s-3.13-7-7-7h-.09c-.47-2.84-2.94-5-5.91-5-.71,0-1.38,.12-2.01,.35-2.15-3.23-5.82-5.35-9.99-5.35-3.1,0-5.92,1.17-8.05,3.11-2.03,1.84-3.44,4.37-3.83,7.22-.66-.22-1.38-.33-2.12-.33-.59,0-1.17,.07-1.72,.22-1.52,.38-2.83,1.25-3.77,2.43-.95,1.2-1.51,2.71-1.51,4.35Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M59.99,37.42h-27.57c-1.6,0-2.55-1.79-1.65-3.11l13.78-20.43c.79-1.17,2.52-1.17,3.32,0l.76,1.12,13.02,19.31c.9,1.32-.06,3.11-1.66,3.11Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M59.99,37.42h-27.57c-1.6,0-2.55-1.79-1.65-3.11l13.78-20.43c.79-1.17,2.52-1.17,3.32,0l.76,1.12,13.02,19.31c.9,1.32-.06,3.11-1.66,3.11Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="46.21" y1="28.42" x2="46.21" y2="19.42"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="46.21" y1="33.42" x2="46.21" y2="31.42"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M16,55c0,3.87,3.13,7,7,7H55c3.87,0,7-3.13,7-7s-3.13-7-7-7h-.09c-.47-2.84-2.94-5-5.91-5-.71,0-1.38,.12-2.01,.35-2.15-3.23-5.82-5.35-9.99-5.35-3.1,0-5.92,1.17-8.05,3.11-2.03,1.84-3.44,4.37-3.83,7.22-.66-.22-1.38-.33-2.12-.33-.59,0-1.17,.07-1.72,.22-1.52,.38-2.83,1.25-3.77,2.43-.95,1.2-1.51,2.71-1.51,4.35Z"/><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M48,44c0,3.87-3.13,7-7,7H9c-3.87,0-7-3.13-7-7s3.13-7,7-7h.09c.47-2.84,2.94-5,5.91-5,.71,0,1.38,.12,2.01,.35,2.15-3.23,5.82-5.35,9.99-5.35,3.1,0,5.92,1.17,8.05,3.11,2.03,1.84,3.44,4.37,3.83,7.22,.66-.22,1.38-.33,2.12-.33,.59,0,1.17,.07,1.72,.22,1.52,.38,2.83,1.25,3.77,2.43,.95,1.2,1.51,2.71,1.51,4.35Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M9,47c-1.65,0-3-1.35-3-3"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M48,44c0,3.87-3.13,7-7,7H9c-3.87,0-7-3.13-7-7s3.13-7,7-7h.09c.47-2.84,2.94-5,5.91-5,.71,0,1.38,.12,2.01,.35,2.15-3.23,5.82-5.35,9.99-5.35,3.1,0,5.92,1.17,8.05,3.11,2.03,1.84,3.44,4.37,3.83,7.22,.66-.22,1.38-.33,2.12-.33,.59,0,1.17,.07,1.72,.22,1.52,.38,2.83,1.25,3.77,2.43,.95,1.2,1.51,2.71,1.51,4.35Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M55,58c1.65,0,3-1.35,3-3"/></svg>
	);
  