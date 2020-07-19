import React from 'react';
import { Flex, Box } from '@rebass/grid';

import { Button, Icons, Text, SkillzBox } from 'components';

const SKILLZ_LIST = [
  'HTML',
  'JavaScript',
  'Skiing',
  'NodeJS',
  'GraphQL',
  'ReactJS',
];

const Skills: React.FC = () => (
  <Flex flexWrap='wrap'>
    <Box width={1} mb='20px'>
      <Text.Heading2>Experience</Text.Heading2>
      <Text.Body mb='10px'>
        Up to this point I have worked on multiple large scale projects, mainly
        on the front-end side. Stack consited of React, Redux, React +
        TypeScript, GraphQl and other fancy words.
      </Text.Body>
      <Text.Body mb='10px'>
        In general, I am interested in all thing JavaScript: VanillaJS,
        TypeScript, React, React Native, Node. Right now I am focused on
        developing web apps with React, but also trying out mobile development
        with React Native on my free time.
      </Text.Body>
      <Text.Body mb='10px'>
        If you want to know more about my experience, check out my Github or
        Dev.to profiles, or just message me on LinkedIn.
      </Text.Body>

      <Flex>
        <Button
          mr='20px'
          onClick={() => {
            window.open('https://github.com/lkatkus', '_blank');
          }}
        >
          <Icons.Github size={40} />
        </Button>
        <Button
          mr='20px'
          onClick={() => {
            window.open('https://dev.to/lkatkus', '_blank');
          }}
        >
          <Icons.DevTo size={40} />
        </Button>
        <Button
          mr='20px'
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/laimonas-katkus-ba334071/',
              '_blank'
            );
          }}
        >
          <Icons.LinkedIn size={40} />
        </Button>
      </Flex>
    </Box>

    <Box width={1} mb='20px'>
      <Text.Heading2>Skills</Text.Heading2>
      {SKILLZ_LIST.map((skill) => (
        <SkillzBox
          mb='5px'
          key={skill}
          label={skill}
          labelComponent={Text.Body}
        />
      ))}

      <Text.Body mt='10px'>
        * People seem to like charts. So this is just a list with randomly
        generated values. Seriously, let&apos;s get some coffee and talk.
        I&apos;ll bring donuts.
      </Text.Body>
    </Box>
  </Flex>
);

export default Skills;
