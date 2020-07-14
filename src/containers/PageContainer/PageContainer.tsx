import React from 'react';
import styled from 'styled-components';

import { Sidebar } from 'components';

const StyledPageContainer = styled('div')`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled('div')`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
`;

const ChildrenContainer = styled('div')`
  width: 100%;
  height: 100%;
`;

interface PageWrapperProps {
  children: any;
  sidebarConfig: any[];
  contentConfig: any[];
}

const PageContainer: React.FC<PageWrapperProps> = ({
  children,
  sidebarConfig,
}) => {
  const [activeTab, setActiveTab] = React.useState<string>(null);

  return (
    <StyledPageContainer>
      <ContentContainer>
        <Sidebar config={sidebarConfig} openTab={setActiveTab} />
        <div>{activeTab}</div>
      </ContentContainer>

      <ChildrenContainer>
        {children({ openTab: setActiveTab })}
      </ChildrenContainer>
    </StyledPageContainer>
  );
};

export default PageContainer;
