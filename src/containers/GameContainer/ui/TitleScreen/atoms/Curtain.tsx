import React from 'react';
import styled from 'styled-components';

const SVGContainer = styled('svg')`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Curtain = React.forwardRef<any, { curtainId: string }>(
  ({ curtainId }, ref): any => (
    <SVGContainer preserveAspectRatio='none'>
      <defs>
        <clipPath id={curtainId} clipPathUnits='objectBoundingBox'>
          <polyline points='0,0 0,1 1,1 1,0'>
            <animate
              ref={ref}
              begin='indefinite'
              attributeName='points'
              values={`
            0,0 0,1 1,1 1,0;
            0,0 0,1 0.8,1 0.5,0;
            0,0 0,1 0,1 0,0;
          `}
              keyTimes='0; 0.5; 1'
              dur='1s'
              fill='freeze'
              repeatCount='1'
            />
          </polyline>
        </clipPath>
      </defs>
    </SVGContainer>
  )
);

Curtain.displayName = 'Curtain';

export default Curtain;
