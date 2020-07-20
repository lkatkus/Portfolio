import TextBase from './TextBase';

export const Text = {
  Body: TextBase('p', {
    textAlign: 'justify',
  }),
  SubBody: TextBase('p', {
    textAlign: 'justify',
    fontSize: 14,
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
    lineHeight: 36,
    uppercase: true,
  }),
};
