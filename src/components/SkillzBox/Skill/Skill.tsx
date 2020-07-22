import React from 'react';
import styled from 'styled-components';

const SkillWrapper = styled.div`
  display: flex;
`;

const SkillIndicator = styled.div<{ color: string; width?: number }>`
  height: 18px;
  width: ${({ width }) => (width ? `${width}%` : undefined)};
  flex: ${({ width }) => (width ? undefined : 1)};
  background-color: ${({ color }) => color};
  opacity: ${({ width }) => (width ? undefined : 0.4)};

  ${({ width }) =>
    width ? 'border-radius: 5px 0 0 5px;' : 'border-radius: 0 5px 5px 0;'}
`;

const Skill: React.FC<{ color: string }> = ({ color }) => {
  const skill = Math.floor(Math.random() * 100);

  return (
    <SkillWrapper>
      <SkillIndicator color={color} width={skill > 0 ? skill : 1} />
      <SkillIndicator color={color} />
    </SkillWrapper>
  );
};

export default Skill;
