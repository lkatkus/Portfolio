import React from 'react';
import styled from 'styled-components';

const SVGContainer = styled('svg')`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  svg:hover path {
    transition: 0.2s;
    d: path('M8,2 L2,8');
  }
`;


const Curtain = React.forwardRef<any>((_, ref): any => (
  <SVGContainer viewBox='0 0 100 100' preserveAspectRatio='none'>
    <defs>
      <linearGradient id='Gradient2' x1='0' x2='0' y1='0' y2='1'>
        <stop offset='0%' stopColor='rgba(255, 255, 255, 1)' />
        <stop offset='100%' stopColor='rgba(135, 206, 250, 1)' />
      </linearGradient>
    </defs>

    <polyline
      id='curtain'
      fill='url(#Gradient2)'
      points='0,0 0,100 100,100 100,0'
    />
    <animate
      ref={ref}
      xlinkHref='#curtain'
      begin='indefinite'
      attributeName='points'
      values={`
        0,0 0,100 100,100 100,0;
        0,0 0,100 80,100 50,0;
        0,0 0,100 0,100 0,0;
      `}
      keyTimes='0; 0.5; 1'
      dur='1s'
      fill='freeze'
      repeatCount='1'
    />
  </SVGContainer>
));

Curtain.displayName = 'Curtain';

export default Curtain;
