import styled from 'styled-components';
import { space, SpaceProps, width, WidthProps } from 'styled-system';

import { getPixelBorder } from 'utils/style';

interface ButtonProps {
  variant?: string;
}

const variant = ({ variant }: any) => {
  switch (variant) {
    case 'icon':
      return `
        svg {
          fill: black;
        }

        &:hover{         
          svg {
            fill: #e91e63;
          }
        }
      `;
    case 'secondary':
      return `
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        ${getPixelBorder('white')}

        &:hover {
          color: white;
          background-color: #e91e63;
          ${getPixelBorder('%23ec427c')}
        }
      `;
    default:
      return `
        color: white;
        background-color: #e91e63;
        ${getPixelBorder('%23ec427c')}

        &:hover {
          color: white;
          background-color: #ba124b;
          ${getPixelBorder('%23a81044')}
        }
      `;
  }
};

export default styled.button<ButtonProps & SpaceProps & WidthProps>`
  padding: 0;
  border: none;
  outline: none;
  background: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color;
  transition-duration: 50ms;
  position: relative;

  ${variant}
  ${space}
  ${width}
`;
