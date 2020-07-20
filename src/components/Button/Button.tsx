import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

interface ButtonProps {
  active?: boolean;
}

export default styled.button<ButtonProps & SpaceProps>`
  padding: 0;
  border: none;
  outline: none;
  background: ${({ active }) =>
    active ? 'rgba(240, 245, 245, 1)' : 'rgba(255, 255, 255, 0.3)'};
  display: inline-flex;
  cursor: pointer;
  transition: all;
  transition-duration: 200ms;

  &:hover {
    background-color: rgba(240, 245, 245, 1);
  }

  &:active {
    background-color: rgba(224, 235, 235, 1);
  }

  ${space}
`;
