import React from 'react';

interface ContentContainerProps {
  config: { key: string; label: string; content: React.FC; props?: any }[];
  activeTab: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  config,
  activeTab,
}) => {
  const contentConfig = activeTab
    ? config.find(({ key }) => key === activeTab)
    : null;

  if (contentConfig === null) {
    return null;
  }

  const ContentComponent = contentConfig.content;

  return <ContentComponent {...contentConfig.props} />;
};

export default ContentContainer;
