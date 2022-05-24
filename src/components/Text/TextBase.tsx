import React from 'react';
import styled from 'styled-components';
import {
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
} from 'styled-system';

interface TextProps extends FontSizeProps, LineHeightProps {
  fontFamily?: string;
  fontWeight?: number;
  color?: string;
  hoverColor?: string;
  uppercase?: boolean;
  textAlign?: string;
}

const TextBase = styled.div<TextProps>`
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : undefined)};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : undefined)};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : undefined)};

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
  }

  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${space}
`;

const TextBaseBuilder =
  <T,>(
    element: string,
    baseProps: TextProps
  ): React.FC<SpaceProps & FontWeightProps & TextProps & T> =>
  ({ children, ...props }) =>
    (
      <TextBase as={element as any} {...baseProps} {...props}>
        {children}
      </TextBase>
    );

export default TextBaseBuilder;
