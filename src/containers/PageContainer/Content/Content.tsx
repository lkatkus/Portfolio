import React from 'react';

interface ContentContainerProps {
  config: any[];
  activeTab: string;
  closeTab: () => void;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  config,
  activeTab,
}) => {
  const Content = activeTab
    ? config.find(({ key }) => key === activeTab).content
    : null;

  return Content ? <Content /> : null;
};

export default ContentContainer;
