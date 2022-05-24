import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import PressStart2P from 'assets/fonts/PressStart2P-Regular.ttf';
import RobotoRegular from 'assets/fonts/Roboto-Regular.ttf';

export default createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: 'Press Start';
    src: url(${PressStart2P}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    overscroll-behavior: contain;
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
