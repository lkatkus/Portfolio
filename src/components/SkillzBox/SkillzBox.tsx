import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const ActualSkillWrapper = styled.div`
  display: flex;
`;

const SkillIndicator = styled.div<{ color: string; width?: number }>`
  height: 15px;
  width: ${({ width }) => (width ? `${width}%` : undefined)};
  flex: ${({ width }) => (width ? undefined : 1)};
  background-color: ${({ color }) => color};
  opacity: ${({ width }) => (width ? undefined : 0.4)};

  ${({ width }) =>
    width
      ? 'border-radius: 5px 0 0 5px;'
      : 'border-radius: 0 5px 5px 0;'}
`;

const ActualSkill: React.FC<{ color: string }> = ({ color }) => (
  <ActualSkillWrapper>
    <SkillIndicator color={color} width={Math.floor(Math.random() * 100)} />
    <SkillIndicator color={color} />
  </ActualSkillWrapper>
);

const SkillzBoxWrapper = styled.div`
  ${space}
`;

interface SkillzBoxProps {
  color?: string;
  label?: string;
  labelComponent?: React.FC<SpaceProps>;
}

const SkillzBox: React.FC<SkillzBoxProps & SpaceProps> = ({
  color = 'purple',
  label,
  labelComponent: Component,
  ...props
}) => (
  <SkillzBoxWrapper {...props}>
    {label && <Component mb='5px'>{label}</Component>}
    <ActualSkill color={color} />
  </SkillzBoxWrapper>
);

export default SkillzBox;
