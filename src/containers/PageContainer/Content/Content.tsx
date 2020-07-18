import React from 'react';
import styled from 'styled-components';

import { Button, Icons } from 'components';

const StyledContentContainer = styled.div`
  flex: 1;
  z-index: 10;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 245, 245);
  overflow-y: scroll;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
`;

interface ContentContainerProps {
  config: any[];
  activeTab: string;
  closeTab: () => void;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  config,
  activeTab,
  closeTab,
}) => {
  const Content = activeTab
    ? config.find(({ key }) => key === activeTab).content
    : null;

  return Content ? (
    <StyledContentContainer>
      <Button mb='10px' onClick={closeTab}>
        <Icons.ArrowRight />
      </Button>

      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </StyledContentContainer>
  ) : null;
};

export default ContentContainer;
