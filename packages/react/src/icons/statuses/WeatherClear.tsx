
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
		<svg onClick={onClick} className={className} height={size} width={size} id="weather-clear" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M48,44c0,3.87-3.13,7-7,7H9c-3.87,0-7-3.13-7-7s3.13-7,7-7h.09c.47-2.84,2.94-5,5.91-5,.71,0,1.38,.12,2.01,.35,2.15-3.23,5.82-5.35,9.99-5.35,3.1,0,5.92,1.17,8.05,3.11,2.03,1.84,3.44,4.37,3.83,7.22,.66-.22,1.38-.33,2.12-.33,.59,0,1.17,.07,1.72,.22,1.52,.38,2.83,1.25,3.77,2.43,.95,1.2,1.51,2.71,1.51,4.35Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M9,47c-1.65,0-3-1.35-3-3"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M53,31c0,4.11-2.75,7.57-6.51,8.65-.94-1.18-2.25-2.05-3.77-2.43-.55-.15-1.13-.22-1.72-.22-.74,0-1.46,.11-2.12,.33-.39-2.85-1.8-5.38-3.83-7.22,.44-4.55,4.28-8.11,8.95-8.11,4.97,0,9,4.03,9,9Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M48,44c0,3.87-3.13,7-7,7H9c-3.87,0-7-3.13-7-7s3.13-7,7-7h.09c.47-2.84,2.94-5,5.91-5,.71,0,1.38,.12,2.01,.35,2.15-3.23,5.82-5.35,9.99-5.35,3.1,0,5.92,1.17,8.05,3.11,2.03,1.84,3.44,4.37,3.83,7.22,.66-.22,1.38-.33,2.12-.33,.59,0,1.17,.07,1.72,.22,1.52,.38,2.83,1.25,3.77,2.43,.95,1.2,1.51,2.71,1.51,4.35Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M53,31c0,4.11-2.75,7.57-6.51,8.65-.94-1.18-2.25-2.05-3.77-2.43-.55-.15-1.13-.22-1.72-.22-.74,0-1.46,.11-2.12,.33-.39-2.85-1.8-5.38-3.83-7.22,.44-4.55,4.28-8.11,8.95-8.11,4.97,0,9,4.03,9,9Z"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="44" y1="19" x2="44" y2="13"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="36.01" y1="22.72" x2="31.77" y2="18.48"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="52.99" y1="38.28" x2="57.23" y2="42.52"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="56" y1="30" x2="62" y2="30"/><line style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} x1="52.28" y1="22.01" x2="56.52" y2="17.77"/></svg>
	);
  