import React from 'react';

import { Text } from 'components';

const About: React.FC = () => (
  <div>
    <Text.Heading>About</Text.Heading>

    <Text.Heading>Past</Text.Heading>
    <Text.Body>
      Architect and project manager by education. I have worked on multiple real
      estate projects of many different scales in many different roles - from
      architect to project manager on both contractors and clients side.
    </Text.Body>

    <Text.Heading>Present</Text.Heading>
    <Text.Body>
      Recently I have finished 3W Academy Lithuania web developer course, during
      which I have tried several front and back-end (PHP, Laravel) technologies
      and I have found that JavaScript `&quot;`suits`&quot;` me quite well.
      Because of this I studied it on my own and made (still making more)
      several smaller projects. You can see them on my{' '}
      <a href='https://github.com/lkatkus' target='_blank' rel='noreferrer'>
        GitHub
      </a>{' '}
      profile. Additionally I have touched NodeJS and MongoDB to see JavaScript
      possibilities on the server side.
    </Text.Body>

    <Text.Heading>Future</Text.Heading>
    <Text.Body>
      Who knows. Get in touch with me, if You think, that we might be going in
      the same direction.
    </Text.Body>
  </div>
);

export default About;
