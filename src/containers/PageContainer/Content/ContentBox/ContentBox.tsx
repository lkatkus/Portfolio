import React from 'react';
import styled from 'styled-components';

import { Button, Icons } from 'components';

const StyledContentBox = styled('div')`
  flex: 1;
  z-index: 10;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 245, 245);
`;

interface ContentBoxProps {
  children: any;
  closeTab: () => void;
}

const ContentBox: React.FC<ContentBoxProps> = ({ children, closeTab }) => (
  <StyledContentBox>
    <Button onClick={closeTab}>
      <Icons.ArrowRight />
    </Button>
    {children}
  </StyledContentBox>
);

export default ContentBox;
