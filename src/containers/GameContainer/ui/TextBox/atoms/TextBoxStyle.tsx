import styled from 'styled-components';

import { Grid } from 'components';
import { getPixelBorder } from 'utils/style';

export default styled(Grid.Container)`
  color: white;
  background-color: rgba(0, 0, 0, 0.5);

  ${getPixelBorder('white')}
`;
