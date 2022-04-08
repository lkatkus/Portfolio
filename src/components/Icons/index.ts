import IconBase from './IconBase';
import Burger from './Burger';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import Github from './Github';
import LinkedIn from './LinkedIn';
import DevTo from './DevTo';
import Close from './Close';
import GooglePlay from './GooglePlay';

export default {
  ArrowLeft: IconBase(ArrowLeft),
  ArrowRight: IconBase(ArrowRight),
  Burger: IconBase(Burger),
  Github: IconBase(Github, { viewBox: '0 0 24 24' }),
  LinkedIn: IconBase(LinkedIn, { viewBox: '0 0 24 24' }),
  DevTo: IconBase(DevTo, { viewBox: '0 0 132 65' }),
  Close: IconBase(Close, { viewBox: '0 0 24 24' }),
  GooglePlay: IconBase(GooglePlay, { viewBox: '0 0 512 512' }),
};
