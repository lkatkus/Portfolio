import React from 'react';
import { Flex, Box } from '@rebass/grid';

import { Button, Text, Icons, SkillzBox } from 'components';
import Player from 'assets/images/animation-player.gif';

const skills = [
  'HTML',
  'JavaScript',
  'TypeScript',
  'Node',
  'React',
  'GraphQL',
  'Jest',
];

const About: React.FC = () => (
  <Flex flexWrap='wrap'>
    <Box width={1 / 3}>
      <img src={Player} />

      <Flex justifyContent='center'>
        <Button
          mx='10px'
          onClick={() => {
            window.open('https://github.com/lkatkus', '_blank');
          }}
        >
          <Icons.Github size={40} />
        </Button>
        <Button
          mx='10px'
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/laimonas-katkus-ba334071/',
              '_blank'
            );
          }}
        >
          <Icons.LinkedIn size={40} />
        </Button>
        <Button
          mx='10px'
          onClick={() => {
            window.open('https://dev.to/lkatkus', '_blank');
          }}
        >
          <Icons.DevTo size={40} />
        </Button>
      </Flex>
    </Box>

    <Box width={2 / 3}>
      <Flex flexWrap='wrap'>
        <Box width={1} mb='15px'>
          <Text.Heading1>Laimonas Katkus</Text.Heading1>
          <Text.Body>Class - Software developer</Text.Body>
          <Text.Body>Race - Human</Text.Body>
          <Text.Body>Location - Lithuania, Vilnius</Text.Body>
          <Text.Body>Superpower - Brazilian Jiu-Jitsu blue belt</Text.Body>
        </Box>

        <Box width={1} mb='15px'>
          <Text.Heading2>Stats</Text.Heading2>
          <Flex flexWrap='wrap' mb='10px'>
            <Box width={1 / 10}>
              <Text.Body>HP</Text.Body>
            </Box>
            <Box width={9 / 10}>
              <SkillzBox color='crimson' />
            </Box>
          </Flex>

          <Flex flexWrap='wrap' mb='10px'>
            <Box width={1 / 10}>
              <Text.Body>MP</Text.Body>
            </Box>
            <Box width={9 / 10}>
              <SkillzBox color='navy' />
            </Box>
          </Flex>

          <Flex flexWrap='wrap' mb='10px'>
            <Box width={1 / 10}>
              <Text.Body>EXP</Text.Body>
            </Box>
            <Box width={9 / 10}>
              <SkillzBox color='gold' />
            </Box>
          </Flex>
        </Box>

        <Box width={1} mb='15px'>
          <Text.Heading2>Origins</Text.Heading2>
          <Text.Body mb='10px'>
            Architect and project manager by education. I have worked on
            multiple real estate projects of many different scales in many
            different roles - from architect to project manager on both
            contractors and clients side.
          </Text.Body>
          <Text.Body mb='10px'>
            Recently I have finished 3W Academy Lithuania web developer course,
            during which I have tried several front and back-end (PHP, Laravel)
            technologies and I have found that JavaScript suits me quite well.
            Because of this I studied it on my own and made (still making more)
            several smaller projects. You can see them on my GitHub profile.
            Additionally I have touched NodeJS and MongoDB to see JavaScript
            possibilities on the server side.
          </Text.Body>
          <Text.Body mb='10px'>
            Who knows. Get in touch with me, if You think, that we might be
            going in the same direction.
          </Text.Body>
        </Box>

        <Box width={1} mb='15px'>
          <Text.Heading2>Skills</Text.Heading2>

          {skills.map((skill) => (
            <SkillzBox
              mb='10px'
              key={skill}
              label={skill}
              labelComponent={Text.Body}
            />
          ))}

          <Text.Body mt='10px'>
            * People seem to like charts. So this is just a list with randomly
            generated values. If you want to know more about my experience,
            let&apos;s get some coffee. I&apos;ll bring donuts.
          </Text.Body>
        </Box>

        <Box width={1} mb='15px'>
          <Text.Heading2>Quests</Text.Heading2>
          <Text.Body>Portfolio - This actual website.</Text.Body>
          <Text.Body>
            LaikaJS - 2d game engine with JavaScript and canvas.
          </Text.Body>
        </Box>
      </Flex>
    </Box>
  </Flex>
);

export default About;
