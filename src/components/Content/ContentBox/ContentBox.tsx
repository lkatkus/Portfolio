import React from 'react';
import styled from 'styled-components';

const StyledContentBox = styled('div')`
  flex: 1;
  z-index: 10;
  background-color: green;
`;

interface ContentBoxProps {
  children: any;
  closeTab: () => void;
}

const ContentBox: React.FC<ContentBoxProps> = ({ children, closeTab }) => (
  <StyledContentBox>
    <div onClick={closeTab}>Close</div>
    {children}
  </StyledContentBox>
);

export default ContentBox;
