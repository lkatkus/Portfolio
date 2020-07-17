import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import font from './../assets/fonts/prstart.ttf';

export default createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Press Start';
    src: url(${font}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  h1, h2, h3, p, span {
    margin: 0;
    padding: 0;
  }
`;
