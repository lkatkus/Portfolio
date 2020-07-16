import React from 'react';

import { ContentBox } from './ContentBox';

interface ContentProps {
  config: any[];
  activeTab: string;
  closeTab: () => void;
}

const Content: React.FC<ContentProps> = ({ config, activeTab, closeTab }) => {
  const TabContent = activeTab
    ? config.find(({ key }) => key === activeTab).content
    : null;

  return TabContent ? (
    <ContentBox closeTab={closeTab}>
      <TabContent />
    </ContentBox>
  ) : null;
};

export default Content;
