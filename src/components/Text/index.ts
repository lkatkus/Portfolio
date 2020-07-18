import TextBase from './TextBase';

export const Text = {
  Body: TextBase('p', {
    textAlign: 'justify',
  }),
  Heading1: TextBase('h1', {
    fontFamily: 'Press Start',
    fontSize: 24,
    lineHeight: 56,
    uppercase: true,
  }),
  Heading2: TextBase('h2', {
    fontFamily: 'Press Start',
    fontSize: 16,
    lineHeight: 32,
    uppercase: true,
  }),
};
