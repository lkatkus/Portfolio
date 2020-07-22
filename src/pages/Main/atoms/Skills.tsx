import React from 'react';

import { Button, Grid, Icons, Text, SkillzBox } from 'components';

const SKILLZ_LIST = [
  'HTML',
  'JavaScript',
  'Skiing',
  'NodeJS',
  'GraphQL',
  'ReactJS',
];

const Skills: React.FC = () => (
  <Grid.Container flexWrap='wrap'>
    <Grid.Box width={1} mb='20px'>
      <Text.Heading2 mb='5px'>Experience</Text.Heading2>
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
      <Text.Body mb='20px'>
        If you want to know more about my experience, check out my Github or
        Dev.to profiles, or just message me on LinkedIn.
      </Text.Body>

      <Grid.Container>
        <Button
          mr='20px'
          variant='icon'
          onClick={() => {
            window.open('https://github.com/lkatkus', '_blank');
          }}
        >
          <Icons.Github size={40} />
        </Button>
        <Button
          mr='20px'
          variant='icon'
          onClick={() => {
            window.open('https://dev.to/lkatkus', '_blank');
          }}
        >
          <Icons.DevTo size={40} />
        </Button>
        <Button
          mr='20px'
          variant='icon'
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/laimonas-katkus-ba334071/',
              '_blank'
            );
          }}
        >
          <Icons.LinkedIn size={40} />
        </Button>
      </Grid.Container>
    </Grid.Box>

    <Grid.Box width={1} mb='20px'>
      <Text.Heading2 mb='5px'>Skills</Text.Heading2>
      {SKILLZ_LIST.map((skill) => (
        <SkillzBox
          mb='5px'
          key={skill}
          label={skill}
          labelComponent={Text.Body}
        />
      ))}

      <Text.SubBody mt='10px'>
        * People seem to like skill bars. So this is just a list with randomly
        generated values. Seriously, let&apos;s get some coffee and talk.
        I&apos;ll bring donuts.
      </Text.SubBody>
    </Grid.Box>
  </Grid.Container>
);

export default Skills;
