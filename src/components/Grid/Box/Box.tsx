import { Box, BoxProps } from '@rebass/grid';
import styled from 'styled-components';
import { border, BorderProps } from 'styled-system';

const getHiddenQuery = (hide) => {
  let result = ``;

  if (hide[0]) {
    result =
      result +
      `
        @media screen and (max-width: 52em) {
          display: none;
        }
        `;
  }
  if (hide[1]) {
    result =
      result +
      `
        @media screen and (min-width: 40em) and (max-width: 52em) {
          display: none;
        }
        `;
  }
  if (hide[2]) {
    result =
      result +
      `
        @media screen and (min-width: 52em) and (max-width: 64em) {
          display: none;
        }
        `;
  }
  if (hide[3]) {
    result =
      result +
      `
        @media screen and (min-width: 64em) {
          display: none;
        }
        `;
  }

  return result;
};

interface Props {
  hide?: boolean[];
}

export default styled<React.FC<Props & BoxProps & BorderProps>>(Box)`
  ${({ hide }) => (hide ? getHiddenQuery(hide) : undefined)}
  ${border}
`;
