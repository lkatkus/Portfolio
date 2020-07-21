import styled from 'styled-components';

export default styled.img`
  width: 100%;
  display: block;
  filter: grayscale(100%) brightness(110%);

  &:hover {
    filter: grayscale(0%);
  }
`;
