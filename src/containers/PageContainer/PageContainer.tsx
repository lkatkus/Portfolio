import React from 'react';
import styled from 'styled-components';

import { Sidebar, Content } from 'components';

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
  config: any[];
}

const PageContainer: React.FC<PageWrapperProps> = ({ children, config }) => {
  const [activeTab, setActiveTab] = React.useState<any>(null);

  return (
    <StyledPageContainer>
      <ContentContainer>
        <Sidebar
          activeTab={activeTab}
          config={config}
          openTab={setActiveTab}
          closeTab={() => {
            setActiveTab(null);
          }}
        />
        <Content
          config={config}
          activeTab={activeTab}
          closeTab={() => setActiveTab(null)}
        />
      </ContentContainer>

      <ChildrenContainer>
        {children({ openTab: setActiveTab })}
      </ChildrenContainer>
    </StyledPageContainer>
  );
};

export default PageContainer;
