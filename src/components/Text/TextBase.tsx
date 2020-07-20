import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

interface TextProps {
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  uppercase?: boolean;
  textAlign?: string;
}

const TextBase = styled.div<TextProps>`
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : undefined)};
  line-height: ${({ lineHeight }) =>
    lineHeight ? `${lineHeight}px` : undefined};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : undefined)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : undefined)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : undefined)};

  ${space}
`;

export default (
  element: string,
  baseProps: TextProps
): React.FC<SpaceProps & TextProps> => ({ children, ...props }) => (
  <TextBase as={element as any} {...baseProps} {...props}>
    {children}
  </TextBase>
);
