import TextBase from './TextBase';

export const Text = {
  Body: TextBase('p', {
    textAlign: 'justify',
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 20,
  }),
  SubBody: TextBase('p', {
    textAlign: 'justify',
    fontFamily: 'Roboto',
    fontSize: 14,
  }),
  Heading1: TextBase('h1', {
    fontFamily: 'Press Start',
    fontSize: 24,
    fontWeight: 400,
    lineHeight: 56,
    uppercase: true,
  }),
  Heading2: TextBase('h2', {
    fontFamily: 'Press Start',
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 24,
    uppercase: true,
  }),
};
