import React from 'react';

import { Grid, Text, SkillzBox } from 'components';

const SKILLZ_COUNT = 6;
const SKILLZ_LIST = [
  'ReactJS',
  'JS',
  'Googling',
  'HTML',
  'WebGL',
  'Skiing',
  'NodeJS',
  'Agile',
  'GraphQL',
  'AI',
  'VR',
  'Big data',
  'Small data',
  'Avarage sized data',
  'Scrum',
  'Cooking',
  'Arts',
  'Googling memes',
  'Cycling',
  'Walking',
];

const getRandomFromList = (count: number, list: string[]) => {
  const values: string[] = [];

  while (values.length < count) {
    const newIndex = Math.floor(Math.random() * list.length);
    const newValue = list[newIndex];

    if (!values.includes(newValue)) {
      values.push(newValue);
    }
  }

  return values;
};

const Skills: React.FC = () => {
  const skillsToRender = getRandomFromList(SKILLZ_COUNT, SKILLZ_LIST);

  return (
    <Grid.Container flexWrap='wrap'>
      <Grid.Box width={1} mb='20px'>
        <Text.Heading2 mb='10px'>Experience</Text.Heading2>
        <Text.Body mb='10px'>
          Up to this point I have worked on multiple large scale projects,
          mainly on the front-end side. Stack consited of React, Redux, React +
          TypeScript, GraphQl and other fancy words.
        </Text.Body>
        <Text.Body mb='10px'>
          In general, I am interested in all thing JavaScript: VanillaJS,
          TypeScript, React, React Native, Node. Right now I am focused on
          developing web apps with React, but also trying out mobile development
          with React Native on my free time.
        </Text.Body>
      </Grid.Box>

      <Grid.Box width={1} mb='20px'>
        <Text.Heading2 mb='10px'>Skills</Text.Heading2>
        {skillsToRender.map((skill) => (
          <SkillzBox
            mb='5px'
            key={skill}
            label={skill}
            labelComponent={Text.Body}
          />
        ))}

        <Text.SubBody mt='10px'>
          * People seem to like skill bars. So this is just a list with randomly
          generated values.
        </Text.SubBody>
      </Grid.Box>
    </Grid.Container>
  );
};

export default Skills;
