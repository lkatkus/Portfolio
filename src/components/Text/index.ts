import TextBase from './TextBase';

export const Text = {
  Body: TextBase('p', {}),
  Heading: TextBase('h2', {
    fontFamily: 'Press Start',
    fontSize: 16,
    lineHeight: 32,
    uppercase: true,
  }),
};
