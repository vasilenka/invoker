import './TouchPolyfil.js';
import React from 'react';
import { hydrate, render } from 'react-dom';

import './sass/invoker-base/index.scss';
import './sass/invoker-layout/grid.module.scss';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/fonts/fonts';

const root = document.getElementById('root');
if (root.hasChildNodes()) {
  hydrate(<App />, root);
} else {
  render(<App />, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
