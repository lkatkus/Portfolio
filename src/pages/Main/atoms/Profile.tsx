import React from 'react';

import { Grid, Text, SkillzBox } from 'components';
// import Player from 'assets/images/animation-player.gif';

const Profile: React.FC = () => (
  <Grid.Container flexWrap='wrap'>
    {/* <Grid.Box width={[1, 1, 1 / 3]} hide={[true, true]}>
      <img style={{ width: '100%' }} src={Player} />
    </Grid.Box> */}

    <Grid.Box width={1}>
      <Grid.Container flexWrap='wrap'>
        <Grid.Box width={1} mb='20px'>
          <Text.Heading2 mb='10px'>Laimonas Katkus</Text.Heading2>
          <Text.Body>Class - Software developer</Text.Body>
          <Text.Body>Race - Human</Text.Body>
          <Text.Body>Location - Lithuania, Vilnius</Text.Body>
          <Text.Body>Superpower - Brazilian Jiu-Jitsu blue belt</Text.Body>
        </Grid.Box>

        <Grid.Box width={1} mb='20px'>
          <Text.Heading2 mb='10px'>Stats</Text.Heading2>
          <Grid.Container flexWrap='wrap' mb='5px'>
            <Grid.Box width={[0.2, 0.1]}>
              <Text.Body>HP</Text.Body>
            </Grid.Box>
            <Grid.Box width={[0.8, 0.9]}>
              <SkillzBox color='crimson' />
            </Grid.Box>
          </Grid.Container>

          <Grid.Container flexWrap='wrap' mb='5px'>
            <Grid.Box width={[0.2, 0.1]}>
              <Text.Body>MP</Text.Body>
            </Grid.Box>
            <Grid.Box width={[0.8, 0.9]}>
              <SkillzBox color='navy' />
            </Grid.Box>
          </Grid.Container>

          <Grid.Container flexWrap='wrap' mb='5px'>
            <Grid.Box width={[0.2, 0.1]}>
              <Text.Body>EXP</Text.Body>
            </Grid.Box>
            <Grid.Box width={[0.8, 0.9]}>
              <SkillzBox color='gold' />
            </Grid.Box>
          </Grid.Container>
        </Grid.Box>

        <Grid.Box width={1} mb='20px'>
          <Text.Heading2 mb='10px'>Origins</Text.Heading2>
          <Text.Body mb='10px'>
            Architect (building kind) and project manager by education. I have
            worked on multiple real estate projects of many different scales in
            many different roles - from architect to project manager on both
            contractors and clients side.
          </Text.Body>
          <Text.Body mb='10px'>
            Even though, IT and tech stuff in general was in my life from early
            age, the decision to move to IT, was not an easy one. Right now I am
            glad, that I have followed my gut.
          </Text.Body>
          <Text.Body>To be continued...</Text.Body>
        </Grid.Box>
      </Grid.Container>
    </Grid.Box>
  </Grid.Container>
);

export default Profile;
