
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
		<svg onClick={onClick} className={className} height={size} width={size} id="user-available" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs></defs><path style={{fill:`${primary ? primary : colors[theme].primary}`}} d="M60.71,23.29c-2.89-9.57-10.43-17.11-20-20-2.76-.84-5.68-1.29-8.71-1.29C15.43,2,2,15.43,2,32c0,3.03,.45,5.95,1.29,8.71,2.89,9.57,10.43,17.11,20,20,2.76,.84,5.68,1.29,8.71,1.29,4.63,0,9.02-1.05,12.93-2.93-1.42-1.42-2.42-3.26-2.77-5.33-3.09,1.45-6.53,2.26-10.16,2.26-1.26,0-2.5-.1-3.71-.29l-1.72,1.72c-9.99-2.13-17.87-10.01-20-20l1.72-1.72c-.19-1.21-.29-2.45-.29-3.71,0-13.23,10.77-24,24-24,1.26,0,2.5,.1,3.71,.29l1.72-1.72c9.99,2.13,17.87,10.01,20,20l-1.72,1.72c.19,1.21,.29,2.45,.29,3.71,0,3.63-.81,7.07-2.26,10.16,2.07,.35,3.91,1.35,5.33,2.77,1.88-3.91,2.93-8.3,2.93-12.93,0-3.03-.45-5.95-1.29-8.71Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M60.71,23.29c-2.89-9.57-10.43-17.11-20-20-2.76-.84-5.68-1.29-8.71-1.29C15.43,2,2,15.43,2,32c0,3.03,.45,5.95,1.29,8.71,2.89,9.57,10.43,17.11,20,20,2.76,.84,5.68,1.29,8.71,1.29,4.63,0,9.02-1.05,12.93-2.93-1.42-1.42-2.42-3.26-2.77-5.33-3.09,1.45-6.53,2.26-10.16,2.26-1.26,0-2.5-.1-3.71-.29l-1.72,1.72c-9.99-2.13-17.87-10.01-20-20l1.72-1.72c-.19-1.21-.29-2.45-.29-3.71,0-13.23,10.77-24,24-24,1.26,0,2.5,.1,3.71,.29l1.72-1.72c9.99,2.13,17.87,10.01,20,20l-1.72,1.72c.19,1.21,.29,2.45,.29,3.71,0,3.63-.81,7.07-2.26,10.16,2.07,.35,3.91,1.35,5.33,2.77,1.88-3.91,2.93-8.3,2.93-12.93,0-3.03-.45-5.95-1.29-8.71Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M55.71,28.29c.19,1.21,.29,2.45,.29,3.71,0,3.63-.81,7.07-2.26,10.16-.56-.11-1.15-.16-1.74-.16-5.52,0-10,4.48-10,10,0,.59,.05,1.18,.16,1.74-3.09,1.45-6.53,2.26-10.16,2.26-1.26,0-2.5-.1-3.71-.29l-1.72,1.72c-9.99-2.13-17.87-10.01-20-20l1.72-1.72c-.19-1.21-.29-2.45-.29-3.71,0-13.23,10.77-24,24-24,1.26,0,2.5,.1,3.71,.29l1.72-1.72c9.99,2.13,17.87,10.01,20,20l-1.72,1.72Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M42,52c0,.59,.05,1.18,.16,1.74-3.09,1.45-6.53,2.26-10.16,2.26-1.26,0-2.5-.1-3.71-.29l-1.72,1.72c-4.79-1.03-9.1-3.37-12.53-6.65,.52-7.76,5.95-14.16,13.21-16.14,1.38,.86,3.01,1.36,4.75,1.36s3.37-.5,4.75-1.36c4.63,1.26,8.52,4.32,10.85,8.39-3.32,1.62-5.6,5.03-5.6,8.97Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M25.95,55.23c-3.63-.95-6.99-2.75-9.82-5.24,.77-6.12,5.01-11.26,10.88-13.18,1.54,.79,3.25,1.2,4.99,1.2s3.45-.41,4.99-1.2c3.1,1.02,5.85,3,7.81,5.6-3,2.23-4.8,5.74-4.8,9.6,0,.17,0,.33,0,.49-2.55,1-5.24,1.51-8.01,1.51-1.14,0-2.28-.09-3.4-.27l-1.01-.16-1.65,1.65Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M62,52c0,5.52-4.48,10-10,10-2.76,0-5.26-1.12-7.07-2.93-1.42-1.42-2.42-3.26-2.77-5.33-.11-.56-.16-1.15-.16-1.74,0-5.52,4.48-10,10-10,.59,0,1.18,.05,1.74,.16,2.07,.35,3.91,1.35,5.33,2.77,1.81,1.81,2.93,4.31,2.93,7.07Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M62,52c0,5.52-4.48,10-10,10-2.76,0-5.26-1.12-7.07-2.93-1.42-1.42-2.42-3.26-2.77-5.33-.11-.56-.16-1.15-.16-1.74,0-5.52,4.48-10,10-10,.59,0,1.18,.05,1.74,.16,2.07,.35,3.91,1.35,5.33,2.77,1.81,1.81,2.93,4.31,2.93,7.07Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M41,27c0,3.23-1.7,6.06-4.25,7.64-1.38,.86-3.01,1.36-4.75,1.36s-3.37-.5-4.75-1.36c-2.55-1.58-4.25-4.41-4.25-7.64,0-4.97,4.03-9,9-9s9,4.03,9,9Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M32,34c-1.31,0-2.58-.37-3.69-1.06-2.07-1.28-3.31-3.5-3.31-5.94,0-3.86,3.14-7,7-7s7,3.14,7,7c0,2.44-1.23,4.66-3.3,5.94-1.11,.7-2.39,1.06-3.7,1.06Z"/><path style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} d="M42,52c0,.59,.05,1.18,.16,1.74-3.09,1.45-6.53,2.26-10.16,2.26-1.26,0-2.5-.1-3.71-.29l-1.72,1.72c-4.79-1.03-9.1-3.37-12.53-6.65,.52-7.76,5.95-14.16,13.21-16.14,1.38,.86,3.01,1.36,4.75,1.36s3.37-.5,4.75-1.36c4.63,1.26,8.52,4.32,10.85,8.39-3.32,1.62-5.6,5.03-5.6,8.97Z"/><path style={{fill:`${secondary ? secondary : colors[theme].secondary}`}} d="M25.95,55.23c-3.63-.95-6.99-2.75-9.82-5.24,.77-6.12,5.01-11.26,10.88-13.18,1.54,.79,3.25,1.2,4.99,1.2s3.45-.41,4.99-1.2c3.1,1.02,5.85,3,7.81,5.6-3,2.23-4.8,5.74-4.8,9.6,0,.17,0,.33,0,.49-2.55,1-5.24,1.51-8.01,1.51-1.14,0-2.28-.09-3.4-.27l-1.01-.16-1.65,1.65Z"/><polyline style={{fill:`none`,stroke:`${border ? border : colors[theme].border}`,strokeLinejoin:`bevel`,strokeWidth:`${stroke}`}} points="46 52 50 56 58 48"/></svg>
	);
  