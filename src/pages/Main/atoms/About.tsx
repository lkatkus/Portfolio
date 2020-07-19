import React from 'react';
import { Flex, Box } from '@rebass/grid';

import { Text, SkillzBox } from 'components';
import Player from 'assets/images/animation-player.gif';

const About: React.FC = () => (
  <Flex flexWrap='wrap'>
    <Box width={[1, 1, 1 / 3]}>
      <img style={{ width: '100%' }} src={Player} />
    </Box>

    <Box width={[1, 1, 2 / 3]}>
      <Flex flexWrap='wrap'>
        <Box width={1} mb='20px'>
          <Text.Heading1>Laimonas Katkus</Text.Heading1>
          <Text.Body>Class - Software developer</Text.Body>
          <Text.Body>Race - Human</Text.Body>
          <Text.Body>Location - Lithuania, Vilnius</Text.Body>
          <Text.Body>Superpower - Brazilian Jiu-Jitsu blue belt</Text.Body>
        </Box>

        <Box width={1} mb='20px'>
          <Text.Heading2>Stats</Text.Heading2>
          <Flex flexWrap='wrap' mb='5px'>
            <Box width={[0.2, 0.1]}>
              <Text.Body>HP</Text.Body>
            </Box>
            <Box width={[0.8, 0.9]}>
              <SkillzBox color='crimson' />
            </Box>
          </Flex>

          <Flex flexWrap='wrap' mb='5px'>
            <Box width={[0.2, 0.1]}>
              <Text.Body>MP</Text.Body>
            </Box>
            <Box width={[0.8, 0.9]}>
              <SkillzBox color='navy' />
            </Box>
          </Flex>

          <Flex flexWrap='wrap' mb='5px'>
            <Box width={[0.2, 0.1]}>
              <Text.Body>EXP</Text.Body>
            </Box>
            <Box width={[0.8, 0.9]}>
              <SkillzBox color='gold' />
            </Box>
          </Flex>
        </Box>

        <Box width={1} mb='20px'>
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
      </Flex>
    </Box>
  </Flex>
);

export default About;
