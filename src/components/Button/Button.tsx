import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

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
    default:
      return `
        background: rgba(255, 255, 255, 0.6);
  
        &:hover {
          background-color: rgba(240, 245, 245, 1);
        }
      `;
  }

  return '';
};

export default styled.button<ButtonProps & SpaceProps>`
  padding: 0;
  border: none;
  outline: none;
  background: none;
  display: inline-flex;
  cursor: pointer;
  transition: all;
  transition-duration: 200ms;

  ${variant}
  ${space}
`;
