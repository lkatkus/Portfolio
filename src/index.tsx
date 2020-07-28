import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { GlobalStyle } from './theme';
import App from './App';

const app = (
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
);

ReactDOM.render(app, document.getElementById('root'));
