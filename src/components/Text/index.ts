import TextBase from './TextBase';

export { default as AnimatedText } from './AnimatedText';
export const Text = {
  Body: TextBase('p', {
    textAlign: 'justify',
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
  }),
  SubBody: TextBase('p', {
    textAlign: 'justify',
    fontFamily: 'Roboto',
    fontSize: 12,
    lineHeight: 20,
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
  Link: TextBase<{ href: string; target: '_blank'; rel: 'noreferrer' }>('a', {
    color: 'unset',
    hoverColor: '#e91e63',
    textAlign: 'justify',
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
  }),
};
