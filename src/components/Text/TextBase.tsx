import React from 'react';
import styled from 'styled-components';

const TextBase = styled<any>('div')`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : undefined)};
  line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : undefined)};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : undefined)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : undefined)};
`;

interface TextProps {
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  uppercase?: boolean;
}

export default (element: string, props: TextProps): React.FC<any> => ({
  children,
}) => (
  <TextBase as={element as any} {...props}>
    {children}
  </TextBase>
);
