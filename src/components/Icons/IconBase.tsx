import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
}

interface BaseProps {
  viewBox?: string;
}

const defaultProps = {
  size: 20,
};

export default (Icon: React.FC, baseProps?: BaseProps): React.FC<IconProps> => {
  const WithBase = ({ size, color }) => (
    <svg
      viewBox={baseProps?.viewBox || '0 0 40 40'}
      width={size}
      height={size}
      fill={color}
    >
      <Icon />
    </svg>
  );

  WithBase.defaultProps = defaultProps;

  return WithBase;
};
