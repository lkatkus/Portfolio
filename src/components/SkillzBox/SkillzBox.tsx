import React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

import { Skill } from './Skill';

const SkillzBoxWrapper = styled.div`
  ${space}
`;

interface SkillzBoxProps {
  color?: string;
  label?: string;
  labelComponent?: React.FC<SpaceProps>;
}

const SkillzBox: React.FC<SkillzBoxProps & SpaceProps> = ({
  color = '#e91e63',
  label,
  labelComponent: Component,
  ...props
}) => (
  <SkillzBoxWrapper {...props}>
    {label && <Component mb='5px'>{label}</Component>}
    <Skill color={color} />
  </SkillzBoxWrapper>
);

export default SkillzBox;
