import styled, { keyframes } from 'styled-components';

import { Grid } from 'components';

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export default styled(Grid.Container)`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100%;
  justify-content: center;
  animation: ${appear} 100ms normal forwards;
`;
