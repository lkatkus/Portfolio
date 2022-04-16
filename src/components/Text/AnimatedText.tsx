import * as React from 'react';
import styled, { keyframes } from 'styled-components';

function getAnimations() {
  let css = '';

  for (let i = 0; i < 5; i++) {
    css += `
      &:nth-last-child(${i + 1}n) {
        animation-delay: ${(-1 * i) / 3 / 2}s;
      }
    `;
  }

  return css;
}

const animation = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
    text-shadow: 0em 0em 0 #e91e63;
    color: black;
  }

  30% {
    transform: translate3d(0, 0, 0);
    text-shadow: 0em 0em 0 #e91e63;
    color: black;
  }

  70% {
    transform: translate3d(0.08em, -0.08em, 0);
    text-shadow: -0.08em 0.08em #e91e63;
    color: black;
  }
  
  100% {
    transform: translate3d(0.08em, -0.08em, 0);
    text-shadow: -0.08em 0.08em #e91e63;
    color: black;
  }
`;

const AnimatedTitle = styled('span')`
  display: inline-flex;
  flex-wrap: no-wrap;

  span {
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    animation: ${animation} 1s infinite alternate;

    ${getAnimations()}
  }
`;

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const mappedText = text
    .split('')
    .map((char, i) => <span key={i}>{char}</span>);

  return <AnimatedTitle>{mappedText}</AnimatedTitle>;
};

export default AnimatedText;
